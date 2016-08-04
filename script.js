//Random Number function
function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}
//Array that will store our Fruit objects (Made by Constructor)
var fruitArray = [];
//The Constructor mentioned above
function Fruit(name, price) {
    this.name = name,
        this.price = price;
}
//Initializes the Cash and Seconds variables
var totalCash = 100;
var totalApple = 0;
var totalOrange = 0;
var totalBanana = 0;
var totalPear = 0;

var seconds = 0;
//Constructed Objects
var apple = new Fruit("apple", "2.00");
var orange = new Fruit("orange", "2.00");
var banana = new Fruit("banana", "2.00");
var pear = new Fruit("pear", "2.00");
//Pushes Objects to Array
fruitArray.push(apple, orange, banana, pear);
$("document").ready(function() {
//Appends the original image/button/price to the DOM
$('.market').append('<div class ="fruit" ><img id = "apple" src="images/apple-red-icon.png"><span id="appleSpan">$' + fruitArray[0]["price"] + '</span><button class ="buynow">Buy Now </button></div>');
$('.market').append('<div class ="fruit" ><img id = "orange" src="images/orange-icon.png"><span id="orangeSpan">$' + fruitArray[1]["price"] + '</span><button class ="buynow">Buy Now </button></div>');
$('.market').append('<div class ="fruit" ><img id = "banana" src="images/banana-icon.png"><span id="bananaSpan">$' + fruitArray[2]["price"] + '</span><button class ="buynow">Buy Now </button></div>');
$('.market').append('<div class ="fruit" ><img id = "pear" src="images/pear-icon.png"><span id="pearSpan">$' + fruitArray[3]["price"] + '</span><button class ="buynow">Buy Now </button></div>');
//Adds all relevant data to the span class of a given fruit
updateData();
//calls updating which sets the 15 second interval and replaces the price of each fruit every iteration
updating();
//event listener for the clicking of the "Buy Now" button
$('.market').on('click', '.buynow', function() {
    var fruitCurrentPrice = $(this).siblings('span').data("fruitPrice");
    var fruitSpanName = $(this).siblings('span').data("fruitName");
		// console.log(fruitCurrentPrice);
		// console.log(fruitSpanName);
		//Checks to see which Fruit Button was added, the subtracts that Fruit's cost from the total and increases the Fruit Counter variable
		if(fruitSpanName=="apple"){
			totalCash -= fruitCurrentPrice;
      totalCash = totalCash.toFixed(2);
			totalApple++
			totalReplace();
		}else if (fruitSpanName=="orange") {
			totalCash -= fruitCurrentPrice;
      totalCash = totalCash.toFixed(2);
			totalOrange++
			totalReplace();
		}else if (fruitSpanName=="banana") {
			totalCash -= fruitCurrentPrice;
      totalCash = totalCash.toFixed(2);
			totalBanana++
			totalReplace();
		}else if (fruitSpanName=="pear") {
			totalCash -= fruitCurrentPrice;
      totalCash = totalCash.toFixed(2);
			totalPear++
			totalReplace();
		}
})
//Abbreviated way of appending the new Cash Total to the DOM
function totalReplace(){
	$("#cart").replaceWith("<p id='cart'>Cash Remaining: $" + totalCash + "</p>");
	$(".fruitTotals").replaceWith('<p class="fruitTotals">Cart: Apples-' + totalApple + " Oranges-" + totalOrange + " Bananas-" + totalBanana + " Pears-" + totalPear + "</p>");
}
// console.log($("#appleSpan").data("fruitPrice"));
// console.log($(this).siblings('span').data("fruitPrice"));
// console.log($(this).siblings('span').data("fruitName"));

});
//the Function to update Data
function updateData() {
    $("#appleSpan").data("fruitPrice", fruitArray[0].price);
    $("#appleSpan").data("fruitName", fruitArray[0].name);
    $("#orangeSpan").data("fruitPrice", fruitArray[1].price);
    $("#orangeSpan").data("fruitName", fruitArray[1].name);
    $("#bananaSpan").data("fruitPrice", fruitArray[2].price);
    $("#bananaSpan").data("fruitName", fruitArray[2].name);
    $("#pearSpan").data("fruitPrice", fruitArray[3].price);
    $("#pearSpan").data("fruitName", fruitArray[3].name);
}
//passes each index of the array fruitArray into the fruit updating function
function updating() {
    setInterval(function() {
        for (var i = 0; i < fruitArray.length; i++) {
            //sets the new price to the value of the old price
            fruitArray[i]["price"] = updateFruitPrice(fruitArray[i]["price"]);
            console.log("New " + fruitArray[i]["name"] + "-price:" + fruitArray[i]["price"]);
        }
        //Appends the corrected cost over the previous costs
        $('.market').children().replaceWith('<div class ="fruit" ><img id = "apple" src="images/apple-red-icon.png"><span id="appleSpan">$' + fruitArray[0]["price"] + '</span><button class ="buynow">Buy Now </button></div>');
        $('.market').children().next().replaceWith('<div class ="fruit" ><img id = "orange" src="images/orange-icon.png"><span id="orangeSpan">$' + fruitArray[1]["price"] + '</span><button class ="buynow">Buy Now </button></div>');
        $('.market').children().next().next().replaceWith('<div class ="fruit" ><img id = "banana" src="images/banana-icon.png"><span id="bananaSpan">$' + fruitArray[2]["price"] + '</span><button class ="buynow">Buy Now </button></div>');
        $('.market').children().next().next().next().replaceWith('<div class ="fruit" ><img id = "pear" src="images/pear-icon.png"><span id="pearSpan">$' + fruitArray[3]["price"] + '</span><button class ="buynow">Buy Now </button></div>');
        updateData();
        //Adds 15 to our seconds count
        seconds += 15;
        //runs every 15 seconds -(15)000-
    }, 15000);
}
//calculates the differences in pricing for fruit cost
function updateFruitPrice(fruitPrice) {
    // if ((fruitPrice >= .5) && (fruitPrice <= 9.99)) {
    var thePrice = fruitPrice;
    // console.log(thePrice);
    var increase = randomNumber(-50, 50);
    increase = (increase * .01);
    increase = increase.toFixed(2);
    if (parseFloat(thePrice) + parseFloat(increase) < .5) {
        thePrice = .5;
        return thePrice;
    } else if (parseFloat(thePrice) + parseFloat(increase) > 9.99) {
        thePrice = 9.99;
        return thePrice;
    } else {
        thePrice = parseFloat(thePrice) + parseFloat(increase);
        thePrice = parseFloat(thePrice).toFixed(2);
        // thePrice = parseFloat((thePrice + increase).toFixed(2));
        return thePrice;
    }
}
