
let myCard = [

{
   
    poster: "poster.png",
    type: "type.png",
    sale: "sale.png",
    title1: "Тайная жизнь",
    title2: "домашних животных 2",
    price: 42,
    sale_percent: 12,
    currency: "руб.",
    rating: 3.5, //1...5(.5)
    button: "order.png",
    promotion: true

},

{
   
    poster: "toy4.jpg",
    type: "type.png",
    sale: "sale.png",
    title1: "История игрушек 4",
    title2: "Приключения Вилкинса",
    price: 60,
    sale_percent: 10,
    currency: "руб.",
    rating: 5, //1...5(.5)
    button: "order.png",
    promotion: true

},

{
   
    poster: "ferd.jpg",
    type: "type.png",
    sale: "sale.png",
    title1: "Фердинанд",
    title2: "Побег из коровника",
    price: 40,
    sale_percent: 5,
    currency: "руб.",
    rating: 4.5, //1...5(.5)
    button: "order.png",
    promotion: false

}

]

let s = "";

for (i=0; i<myCard.length; i++) {



// Формат полной стоимости
let fullPrice = `${myCard[i].price}, 00 ${myCard[i].currency}`;
// console.log(fullPrice);

let salePrice = `${Math.round(myCard[i].price * ( 100 - myCard[i].sale_percent) / 100)}, 00 ${myCard[i].currency}`;
// console.log(salePrice);

// Расчет рейтинга

let rank = "";

switch (myCard[i].rating) {

    case 1:
        rank = "star star_border star_border star_border star_border";
        break;

        case 1.5:
        rank = "star star_half star_border star_border star_border";
        break;

        case 2:
        rank = "star star star_border star_border star_border";
        break;

        case 2.5:
        rank = "star star star_half star_border star_border";
        break;

        case 3:
        rank = "star star star star_border star_border";
        break;
 
        case 3.5:
        rank = "star star star star_half star_border";
        break;

        case 4:
        rank = "star star star star star_border";
        break;

        case 4.5:
        rank = "star star star star star_half";
        break;

        case 5:
        rank = "star star star star star ";
        break;

        default:
            rank = "star_border star_border star_border star_border star_border"
        
}

// Цена
let divPrice = "", vis = "";
if (myCard[i].promotion) { 

divPrice = `
    <div>${salePrice} </div>
    <div>${fullPrice} </div>;`

    vis = "1";
    

    

    
 } else {divPrice = `   
    <div>${fullPrice} </div>`;

    vis = "0";
}


 s += `

<div class="card"> 

<div class="poster">
   <img src="images/${myCard[i].poster}" alt="">

   <img style="opacity: ${vis}" src="images/${myCard[i].sale}" alt="">
   <img src="images/${myCard[i].type}" alt="">

</div>
<div class="title">
    <div>${myCard[i].title1}</div>
    <div>${myCard[i].title2}</div>
</div>

<div class="price">
   ${divPrice}
</div>

<div class="rating">
    <span class="material-icons">
        ${rank}
        </span>
    
</div>

<div class="order">
    <img src="images/${myCard[i].button}" alt="">
</div>

</div>

`;
}

cards.innerHTML = s;
