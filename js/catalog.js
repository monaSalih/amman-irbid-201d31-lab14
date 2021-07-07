/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
 
  for (let i in Product.allProducts) {
    let opetionEl=document.createElement('option');
    opetionEl.textContent=Product.allProducts[i].name;
    opetionEl.value = Product.allProducts[i].name;
    selectElement.appendChild(opetionEl);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // TODO: Prevent the page from reloading
  event.preventDefault();

  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}
let counter=0;
// let itemselect;
// let quant;

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {

  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
    // TODO: using those, add one item to the Cart
    
    // let selOpVal=selectItem.options[selectItem.selectedIndex].value; console.log();
 
    let selectItem=document.getElementById('items')
   let selectionVal=selectItem.value;
  console.log(selectionVal)
  let quantiItem=document.getElementById('quantity')
  let quantityVal=quantiItem.value;
  console.log(quantityVal)
  cart.addItem (selectionVal,quantityVal)
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  let countEl=document.getElementById('itemCount')
countEl.textContent=counter++;
 }


// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  let selectUpdat=document.getElementById('items')
   let quantUpdate=document.getElementById('cartContents')
  // TODO: Add a new element to the cartContents div with that information
  let newElAdd= document.createElement('ul')
  cartContents.appendChild(newElAdd)

  let liElAdd=document.createElement('li');
  newElAdd.appendChild(liElAdd)

  let selectItem2=document.getElementById('items')
   let selectionVal2=selectItem2.value;
  // console.log(selectionVal)
  let quantiItem2=document.getElementById('quantity')
  let quantityVal2=quantiItem2.value;
  // console.log(quantityVal)
 liElAdd.textContent=`You select this item ${selectionVal2}, ${quantityVal2}` 
  


}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
