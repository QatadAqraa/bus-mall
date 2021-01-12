'use strict';

var arrayOfProducts = [];
var leftProductImg = document.getElementById('left_product_img');
var middleProductImg = document.getElementById('middle_product_img');
var rightProductImg = document.getElementById('right_product_img');
var productSection = document.getElementById('all_products');
var resultShow = document.getElementById('Results');
var clearDataBtn = document.getElementById('clearLocalStorage');
var resultPrint = document.getElementById('ResultForm');
var productCanvas = document.getElementById('productChart').getContext('2d');
var trialsleft = 25;
var shownImages = [];

console.log(localStorage);

function Product(name, image) {
    this.name = name;
    this.url = 'images/' + image;
    this.counter = 0;
    this.Show = 0;

    arrayOfProducts.push(this);
}

function clearLocalStorage(){

    localStorage.clear();

    arrayOfProducts = [];
    
    renderChart();
}

function storeData() {   

    localStorage.setItem('Result', JSON.stringify(arrayOfProducts));

}

function checkAndRestore() {
    
    if (localStorage.length > 0 ) {
        arrayOfProducts = JSON.parse(localStorage.getItem('Result'));
    }
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

function renderChart() {

    // resultShow.innerHTML = '';

    var arrayOfProductName = [];
    var arrayOfProductCount = [];
    var arrayOfProductShown = [];

    console.log("string");

    for (var index = 0; index < arrayOfProducts.length; index++) {
        arrayOfProductName.push(arrayOfProducts[index].name);
        arrayOfProductCount.push(arrayOfProducts[index].counter);
        arrayOfProductShown.push(arrayOfProducts[index].Show);

    }
    var myChart = new Chart(productCanvas, {
        type: 'bar',
        data: {
            labels: arrayOfProductName,
            datasets: [
                {
                    label: '# of Product Clicks',
                    data: arrayOfProductCount,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                },
                {
                    label: 'Time shown for the Product',
                    data: arrayOfProductShown,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

function checkAvailability(selectedProductName) {

    for (var index = 0; index < shownImages.length; index++) {
        if (shownImages[index].name === selectedProductName) {
            return true;
        }
    }
    return false;
}

function pickAProduct() {
    do {
        var leftImage = Math.round(Math.random() * (arrayOfProducts.length - 1))
        var leftProductImageName = arrayOfProducts[leftImage].name;
    } while (checkAvailability(leftProductImageName));

    do {
        var middleImage = Math.round(Math.random() * (arrayOfProducts.length - 1))
        var middleProductImageName = arrayOfProducts[middleImage].name;
        var rightImage = Math.round(Math.random() * (arrayOfProducts.length - 1))
        var rightProductImageName = arrayOfProducts[rightImage].name;
    } while (leftImage === middleImage || middleImage === rightImage || leftImage === rightImage || checkAvailability(rightProductImageName) || checkAvailability(middleProductImageName));

    arrayOfProducts[leftImage].Show++;
    arrayOfProducts[middleImage].Show++;
    arrayOfProducts[rightImage].Show++;
    // storeData()

    // console.log(shownImages);

    shownImages = [];
    

    shownImages.push(
        arrayOfProducts[leftImage],
        arrayOfProducts[middleImage],
        arrayOfProducts[rightImage]
    )

    renderProduct(leftImage, middleImage, rightImage)

}

// function printResults() {
//     // console.log("inside printResults")
//     var ul = document.createElement('ul')
//     resultPrint.append(ul);
//     for (let i = 0; i < arrayOfProducts.length; i++) {
//         var li = document.createElement('li');
//         li.textContent = arrayOfProducts[i].name + ' had ' + arrayOfProducts[i].counter + ' votes, and was seen ' + arrayOfProducts[i].Show + 'times.';
//         ul.append(li);

//     }
// }

function checkProduct(objectIndicator) {
    for (var index = 0; index < arrayOfProducts.length; index++) {
        if (arrayOfProducts[index].url === objectIndicator) {
            arrayOfProducts[index].counter++;
            trialsleft--;
            storeData();
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

    } 
    else {
        productSection.removeEventListener('click', countProducts);
        // console.log(arrayOfProducts);
        // renderChart();
        storeData();
    

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

console.log(arrayOfProducts);

checkAndRestore();

console.log(arrayOfProducts);

pickAProduct();
productSection.addEventListener('click', countProducts);
// console.log(resultShow);
resultShow.addEventListener('click', renderChart);
clearDataBtn.addEventListener('click', clearLocalStorage);

console.log(arrayOfProducts);






