'use strict';

var arrayOfProducts = [];
var leftProductImg = document.getElementById('left_product_img');
var middleProductImg = document.getElementById('middle_product_img');
var rightProductImg = document.getElementById('right_product_img');
var productSection = document.getElementById('all_products');
var resultShow = document.getElementById('Result');
var resultPrint = document.getElementById('ResultForm')
var trialsleft = 25;

function Product(name, image) {
    this.name = name;
    this.url = 'images/' + image;
    this.counter = 0;
    this.Show = 0;

    arrayOfProducts.push(this);
}

function renderProduct(leftImage, middleImage, rightImage) {
    leftProductImg.setAttribute('src', arrayOfProducts[leftImage].url);
    leftProductImg.setAttribute('alt', arrayOfProducts[leftImage].name);

    middleProductImg.setAttribute('src', arrayOfProducts[middleImage].url);
    middleProductImg.setAttribute('alt', arrayOfProducts[middleImage].name);

    rightProductImg.setAttribute('src', arrayOfProducts[rightImage].url);
    rightProductImg.setAttribute('alt', arrayOfProducts[rightImage].name);
    
}

Product.prototype.isShowed = function () {
    return this.Show++;
}

function pickAProduct() {
    var leftImage = Math.round(Math.random() * (arrayOfProducts.length - 1))
    do {
        var middleImage = Math.round(Math.random() * (arrayOfProducts.length - 1))
        var rightImage = Math.round(Math.random() * (arrayOfProducts.length - 1))
    } while (leftImage === middleImage || middleImage === rightImage || leftImage === rightImage);

    arrayOfProducts[leftImage].isShowed()
    arrayOfProducts[middleImage].isShowed()
    arrayOfProducts[rightImage].isShowed()
   
    renderProduct(leftImage, middleImage, rightImage)

}

function printResults() {
    // console.log("inside printResults")
    var ul = document.createElement('ul')
    resultPrint.append(ul);
    for (let i = 0; i < arrayOfProducts.length; i++) {
        var li = document.createElement('li');
        li.textContent = arrayOfProducts[i].name + ' had ' + arrayOfProducts[i].counter + ' votes, and was seen ' + arrayOfProducts[i].Show + 'times.';
        ul.append(li);
        
    }
}

function checkProduct(objectIndicator) {
    for (var index = 0; index < arrayOfProducts.length; index++) {
        if (arrayOfProducts[index].url === objectIndicator) {
            arrayOfProducts[index].counter++;
            trialsleft--;
        }
    }
}

function countProducts(event) {

    var targetId = event.target.id;

    if (trialsleft !== 0) {
        if (targetId === 'left_product_img' || targetId === 'middle_product_img' || targetId === 'right_product_img') {
            var objectIndicator = event.target.getAttribute('src');
            checkProduct(objectIndicator);
            pickAProduct();
        }

    } else {
        productSection.removeEventListener('click', countProducts);
        console.log(arrayOfProducts);
    }
}

new Product('bag', 'bag.jpg');
new Product('banana', 'banana.jpg');
new Product('bathroom', 'bathroom.jpg');
new Product('boots', 'boots.jpg');
new Product('breakfast', 'breakfast.jpg');
new Product('bubblegum', 'bubblegum.jpg');
new Product('chair', 'chair.jpg');
new Product('cthulhu', 'cthulhu.jpg');
new Product('dog-duck', 'dog-duck.jpg');
new Product('dragon', 'dragon.jpg');
new Product('pen', 'pen.jpg');
new Product('pet-sweep', 'pet-sweep.jpg');
new Product('scissors', 'scissors.jpg');
new Product('shark', 'shark.jpg');
new Product('sweep', 'sweep.png');
new Product('tauntaun', 'tauntaun.jpg');
new Product('unicorn', 'unicorn.jpg');
new Product('usb', 'usb.gif');
new Product('water-can', 'water-can.jpg');
new Product('wine-glass', 'wine-glass.jpg');

pickAProduct();
productSection.addEventListener('click', countProducts);
// console.log(resultShow);
resultShow.addEventListener('click', printResults);

