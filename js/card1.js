
let myCard = {
   
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

}

// Формат полной стоимости
let fullPrice = `${myCard.price}, 00 ${myCard.currency}`;
// console.log(fullPrice);

let salePrice = `${Math.round(myCard.price * ( 100 - myCard.sale_percent) / 100)}, 00 ${myCard.currency}`;
// console.log(salePrice);

// Расчет рейтинга

let rank = "";

switch (myCard.rating) {

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
if (myCard.promotion) { 

divPrice = `
    <div>${salePrice} </div>
    <div>${fullPrice} </div>;`

    vis = "1";
    

    

    
 } else {divPrice = `   
    <div>${fullPrice} </div>`;

    vis = "0";
}


let s = `

<div class="card"> 

<div class="poster">
   <img src="images/${myCard.poster}" alt="">

   <img style="opacity: ${vis}" src="images/${myCard.sale}" alt="">
   <img src="images/${myCard.type}" alt="">

</div>
<div class="title">
    <div>${myCard.title1}</div>
    <div>${myCard.title2}</div>
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
    <img src="images/${myCard.button}" alt="">
</div>

</div>

`;
cards.innerHTML = s;
