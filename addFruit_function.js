function addFruit (newFruitName, imageName) {
   $('.market').append('<div class ="fruit" ><img id ="' + newFruitName + '" src="images/' + imageName + '"><span id=' + newFruitName +  '"Span"><p>' + newFruitName.price + '</p></span><button class ="buynow">Add to cart </button></div>');
 }
 
 addFruit (apple, "apple.png");
 addFruit (banana, "bananas.png");
 addFruit (orange, "orange.png");
 addFruit (pear, "pear.png");
