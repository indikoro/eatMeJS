// I've wrapped an IIFE around the entire script because I heard that may keep variable names
// from conflicting with one another in other scripts/the same script.

// I sort of want to revisit this concept so that I can add date-sensitive offerings
// that change what tea is on sale!

(function () {
    // Create TeaType template for tea offerings
    var TeaType = function(name, price, openingDiscount, description) {
    this.name = name;
    this.price = price;
    this.openingDiscount = openingDiscount;
    this.discountPrice = price * (1 - openingDiscount);
    this.description = description;
};

// Create TeaType object for Kagero Green
var tea1 = new TeaType('Kagero Green', 3.50, .30);
tea1.description = `Named after our tea shop, Kagero Green is one of our traditional
                              teas in-house. It is sourced from a small farm in southern Hokkaido
                              (南の北海道), and is said to have a slight strawberry essence due to it
                              being grown alongside the farmer's favorite, small patch of strawberries
                              that he grows solely for his family and local community to enjoy.`;

// Create message communicating tea offering to place in HTML
var msgName = `<h3>Current tea type on sale: ` + tea1.name + ` Tea </h3>
              <p>` + tea1.description + `</p>`;

// Connect msgName to HTML
var elName = document.getElementById('tea');
elName.innerHTML = msgName;

// Create message for price offering
var msgPrice = `<p><strong>Regular price: $</strong>` + tea1.price.toFixed(2) +
               `</p><p><strong>New price: $</strong>` + 
               tea1.discountPrice.toFixed(2) + `</p>`;

// Connect msgPrice to HTML
var elPrice = document.getElementById('price');
elPrice.innerHTML = msgPrice;

// Create current date, sale date range, and remaining sale days.
var today = new Date();
var saleBegin = new Date('Jun 03, 2018 08:00:00');
var saleEnd = new Date('Jun 16, 2018 23:59:59');
var saleRange = saleEnd.getTime() - saleBegin.getTime();
    saleRange = Math.floor(saleRange / 86400000);
var saleRemaining = saleEnd.getTime() - today.getTime();
    saleRemaining = Math.floor(saleRemaining / 86400000);

var msgSale = `<p>Offer available for ` + saleRange + ` days; ` + saleBegin.toDateString() + ` to ` +
              saleEnd.toDateString() + `.</p><p>` + saleRemaining + ` days left!</p>`;

var elDate = document.getElementById('time-remaining');
elDate.innerHTML = msgSale;
}());