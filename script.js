function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}
var fruitArray = [];
//Constructor
function Fruit(name, price) {
    this.name = name,
        this.price = price;
}
var price = 2;
var totalCash = 100;
var seconds = 0;
//Constructed Objects
var apple = new Fruit("apple", 2);
var orange = new Fruit("orange", 2);
var banana = new Fruit("banana", 2);
var pear = new Fruit("pear", 2);
//Puches Objects to Array
fruitArray.push(apple, orange, banana, pear);
console.log(fruitArray);
$("document").ready(function() {
    updating();
    $('.market').append('<div class ="fruit" ><img id = "apple" src="images/apple-red-icon.png"><span id="appleSpan">$' + fruitArray[0]["price"] + '</span><button class ="buynow">Buy Now </button></div>');
    $('.market').append('<div class ="fruit" ><img id = "orange" src="images/orange-icon.png"><span id="orangeSpan">$' + fruitArray[1]["price"] + '</span><button class ="buynow">Buy Now </button></div>');
    $('.market').append('<div class ="fruit" ><img id = "banana" src="images/banana-icon.png"><span id="bananaSpan">$' + fruitArray[2]["price"] + '</span><button class ="buynow">Buy Now </button></div>');
    $('.market').append('<div class ="fruit" ><img id = "pear" src="images/pear-icon.png"><span id="pearSpan">$' + fruitArray[3]["price"] + '</span><button class ="buynow">Buy Now </button></div>');
        $("#appleSpan").data("fruitPrice", fruitArray[0].price);
        $("#appleSpan").data("fruitName", fruitArray[0].name);
				$("#orangeSpan").data("fruitPrice", fruitArray[1].price);
				$("#orangeSpan").data("fruitName", fruitArray[1].name);
				$("#bananaSpan").data("fruitPrice", fruitArray[2].price);
				$("#bananaSpan").data("fruitName", fruitArray[2].name);
				$("#pearSpan").data("fruitPrice", fruitArray[3].price);
				$("#pearSpan").data("fruitName", fruitArray[3].name);
    // var $question = $(".market").data("span");
    // console.log($question);
    $('.market').on('click', '.buynow', function() {
        // $(this).data("fruitPrice");
        console.log($(this).siblings('span').data("fruitPrice"));
        console.log($(this).siblings('span').data("fruitName"));
    });
});

// function updatePrice() {
// }

function updator(fruitPrice) {
    if ((fruitPrice.price >= .5) && (fruitPrice.price <= 9.99)) {
        var increase = randomNumber(-50, 50);
        increase = (increase * .01);
        increase.toFixed(2);
        increase = parseFloat(increase);
        // console.log(increase);
        // console.log("What the heck is this", fruitPrice.price);
        // console.log("What the heck is this", fruitPrice.price + increase);
        if (parseFloat(fruitPrice.price + increase) < .5) {
            fruitPrice.price = .5;
        } else if (parseFloat(fruitPrice.price + increase) > 9.99) {
            fruitPrice.price = 9.99;
        } else {
            // fruitPrice.price.toFixed(2);
            // fruitPrice.price = parseFloat(fruitPrice.price.toFixed(2));
            // fruitPrice.price.toFixed(2);
            // fruitPrice.price = parseFloat(fruitPrice.price);
            fruitPrice.price += increase;
            // console.log(fruitPrice.price);
        }
    }
}
//
function updating() {
    setInterval(function() {
        for (var i = 0; i < fruitArray.length; i++) {
            // console.log(fruitArray.length);
            // console.log(fruitArray[i]);
            this.price = updator(fruitArray[i]);
            // console.log(fruitArray);
            // $("span : fruitArray[i]['span']")
            $('.market').children().replaceWith('<div class ="fruit" ><img id = "apple" src="images/apple-red-icon.png"><span>$' + fruitArray[0]["price"] + '</span><button class ="buynow">Buy Now </button></div>');
            $('.market').children().next().replaceWith('<div class ="fruit" ><img id = "orange" src="images/orange-icon.png"><span>$' + fruitArray[1]["price"] + '</span><button class ="buynow">Buy Now </button></div>');
            $('.market').children().next().next().replaceWith('<div class ="fruit" ><img id = "banana" src="images/banana-icon.png"><span>$' + fruitArray[2]["price"] + '</span><button class ="buynow">Buy Now </button></div>');
            $('.market').children().next().next().next().replaceWith('<div class ="fruit" ><img id = "pear" src="images/pear-icon.png"><span>$' + fruitArray[3]["price"] + '</span><button class ="buynow">Buy Now </button></div>');
        }
        seconds += 15;
    }, 5000);
}
// // fruitArray[i].price
// console.log("price", price);
// console.log("increase", increase)
//
// }
