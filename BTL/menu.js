const product = [
    {
        id: 0,
        image: 'IMG/suachuachantrausaurieng.png',
        title: 'Sữa chua chân trâu sầu riêng',
        price: 35,
    },
    {
        id: 1,
        image: 'IMG/suachuatranchaukhoaideo.png',
        title: 'Sữa chua trân châu khoai dẻo',
        price: 24,
    },
    {
        id: 2,
        image: 'IMG/tauhutranchauduongden.png',
        title: 'Tàu hũ trân châu đường đen',
        price: 27,
    },
    {
        id: 3,
        image: 'IMG/tauhutrang.png',
        title: 'Tàu hũ trắng',
        price: 25,
    },
    {
        id: 4,
        image: 'IMG/tauhutrangkemtrung.png',
        title: 'Tàu hũ trắng kem trứng',
        price: 30,
    },
    {
        id: 5,
        image: 'IMG/cacaokhoaideo.png',
        title: 'Cacao khoai dẻo',
        price: 30,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2> ${price}.000 Vnd</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Thêm món</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Giỏ hàng trống";
        document.getElementById("total").innerHTML = 0+".000"+ "Vnd";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = total+".000"+"Vnd";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'> ${price}.000 Vnd</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}