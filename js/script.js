const newPro = [
  {
    id:0,
    pic: 'images/new-1.jpeg',
    title: 'One Plus Nord CE 3',
    price: 27990,
    op: '30,990'
  },
  {
    id:1,
    pic: 'images/new-2.jpeg',
    title: 'Realme Nazro N53',
    price: 7999,
    op: '9,990'
  },
  {
    id:2,
    pic: 'images/new-3.png',
    title: 'Vivo V29',
    price: 32750,
    op: '34,990'
  },
  {
    id:3,
    pic: 'images/new-4.jpg',
    title: 'Moto Edge 40 Neo',
    price: 19000,
    op: '21,750'
  },
  {
    id:4,
    pic: 'images/new-5.jpg',
    title: 'Motorola G54',
    price: 13990,
    op: '16,990'
  },
  {
    id:5,
    pic: 'images/new-6.png',
    title: 'iPhone 15',
    price: 75990,
    op: '82,000'
  },
  {
    id:6,
    pic: 'images/new-7.jpg',
    title: 'Samsung A05s',
    price: 15000,
    op: '17,990'
  },
  {
    id:7,
    pic: 'images/new-8.jpg',
    title: 'Honor 90 5G',
    price: 31990,
    op: '34,990'
  },
  {
    id:8,
    pic: 'images/new-9.jpg',
    title: 'Oppo A18',
    price: 9000,
    op: '10,990'
  }
]

const categories = [...new Set(newPro.map((item)=>
  {return item}))]
  let i=0;
document.getElementById('newbieSec').innerHTML = categories.map((item)=>
{
  var {pic, title, price, op} = item;
  return(
    `<div class="swiper-slide box">
      <div class="icons">
        <a href="#" class="fas fa-search"></a>
        <a href="#" class="fas fa-heart"></a>
        <a href="#" class="fas fa-eye"></a>
      </div>
      <div class="image">
        <img src=${pic} alt="">
      </div>
      <div class="content">
        <h3>${title}</h3>
        <div class="price">Rs. ${price}<span>Rs. ${op}</span></div>
        <a href="#" class="selfbtn atc" onclick="addtocart(` + (i++) +`)">Add to Cart</a>
      </div>
    </div>`
  )
}).join('')




searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

let loginForm = document.querySelector(".login-form-container");

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
    loginForm.classList.remove('active');
}


window.onscroll = () =>{

    searchForm.classList.remove('active');
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

window.onload = () =>{
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

var swiper = new Swiper(".phone-slider", {
    loop:true,
    centeredSlider:true,
    autoplay:{
        delay: 9500,
        disableOnInteraction : false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".new-slider", {
    spaceBetween:10,
    loop:true,
    centeredSlider:true,
    autoplay:{
        delay: 9500,
        disableOnInteraction : false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });

  var swiper = new Swiper(".accessories-slider", {
    spaceBetween:10,
    loop:true,
    centeredSlider:true,
    autoplay:{
        delay: 9500,
        disableOnInteraction : false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".reviews-slider", {
    spaceBetween:10,
    loop:true,
    centeredSlider:true,
    grabCursor:true,
    autoplay:{
        delay: 9500,
        disableOnInteraction : false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  const atcButtons = document.querySelectorAll(".atc");

var cart=[]

function addtocart(a){
  cart.push({...categories[a]});
  displayCart();
}

function delElement(a){
  cart.splice(a,1);
  displayCart();
}

function displayCart(a){
  let j=0, total=0;
  if(cart.length==0){
    document.getElementById('total').innerHTML = "Rs. "+0+".00";
    document.getElementById('cardItem').innerHTML="Your cart is empty";
  }
  else{
    document.getElementById('cardItem').innerHTML = cart.map((items)=>
    {
      var {pic, title, price, op} = items;
      total = total+price;
      document.getElementById('total').innerHTML = "Rs. "+total+".00";
      return (
        `<div class = 'cart-item'>
          <div class= 'row-img'>
            <img class='rowimg' src=${pic}>
          </div>
          <p style='font-size:15px;'>${title}</p>
          <h2 style='font-size:15px;'>rs. ${price}</h2>`+
          "<i style='color:var(--blue);'class = 'fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
      )
    }).join('');
  }
}

atcButtons.forEach(function(atcButton) {
    atcButton.addEventListener('click', function() {
        document.querySelector(".rounded-circle").style.display = 'inline';
    });
});

const cartContainer = document.querySelector('.cart-container');
const cartIcon = document.querySelector('#cart-btn');
const cartList = document.querySelector('.cart-list');

cartIcon.onclick =() => {
  cartContainer.classList.toggle('active');
}


// $document.ready(function(){
//   const $cartContainer = $(".cart-container");
//   const $cartIcon = $(".fa-shopping-cart");
//   const $cartList = $(".cart-list");

//   $cartIcon.click(function(){
//     $cartContainer.toggleClass('active');
//   })
// })
