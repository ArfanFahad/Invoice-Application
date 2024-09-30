



function total () {
    let item = document.querySelector("#addItem").value; 
    let qty = document.querySelector("#quantity").value; 
    let price = document.querySelector("#price").value; 


    /*  Item name crated   */
    let create_items = document.createElement("td"); 
    create_items.textContent = item; 
    let item_name = document.getElementById("items"); 
    item_name.appendChild(create_items); 


    /* quantity  */ 
    let total_quantity = document.createElement("td"); 
    total_quantity.textContent = Number(qty); 
    let totalQuantity = document.getElementById("items");
    totalQuantity.appendChild(total_quantity); 

    /* total price */
    let item_price = document.createElement("td");
    item_price.textContent = Number(price);
    let total_price = document.getElementById("items");
    total_price.appendChild(item_price); 

    /*  total calculations   */
    let sum = qty * price; 
    // console.log(sum.toFixed(2) + " Taka"); 
    let items_total_price = document.createElement("td"); 
    items_total_price.textContent = sum.toFixed(2) + " Taka"; 
    let itemsTotalPrice = document.getElementById("items"); 
    itemsTotalPrice.appendChild(items_total_price); 


    /* emptying the input box */
    document.querySelector("#addItem").value = "" ; 
    document.querySelector("#quantity").value = ""; 
    document.querySelector("#price").value = ""; 
    
}



