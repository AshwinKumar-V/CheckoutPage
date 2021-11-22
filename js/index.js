/*--------------JavaScript file for index.html------------*/

//function to calculate total
function newTotal()
{
    var quantity_1 = Number(document.getElementById("quantity_1").innerHTML);
    var quantity_2 = Number(document.getElementById("quantity_2").innerHTML);
    var price_1 = Number(document.getElementById("price_1").innerHTML);
    var price_2 = Number(document.getElementById("price_2").innerHTML);
    var shipping = Number(document.getElementById("shipping").innerHTML);
    var total = document.getElementById("total");

    //if cart empty
    if((quantity_1 == 0) && (quantity_2 == 0))
    {
        total.innerHTML = (0).toString();
        return;
    }
    total.innerHTML = ((quantity_1 * price_1) + (quantity_2 * price_2) + shipping).toFixed(2);
}

//function to increase quantity in cart
function addItem(item_no)
{
    const quantity = document.getElementById("quantity_" + item_no.toString());
    //quantity should not exceed 10
    if(quantity.innerHTML < 10)
    {
        quantity.innerHTML = (Number(quantity.innerHTML) + 1).toString();
        newTotal();
    }
    else
    {
        console.log("Quantity cannot exceed 10");
    }
}

//function to decrease quantity in cart
function removeItem(item_no)
{
    const quantity = document.getElementById("quantity_" + item_no.toString());
    //quantity should not be less than 0
    if(quantity.innerHTML > 0)
    {
        quantity.innerHTML = (Number(quantity.innerHTML) - 1).toString();
        newTotal();
    }
    else
    {
        console.log("Quantity cannot be less than 0");
    }
}

//function for form submission
function formSubmit()
{
    alert("Order submitted successfully!");
}