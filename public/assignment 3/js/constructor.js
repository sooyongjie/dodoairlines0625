function Booking(arr) {
    this.price = [250, 200, 150]
    this.name = arr[0];
    this.id = arr[1];
    this.telNo = arr[2];
    this.email = arr[3];
    this.depature = arr[4];
    this.destination = arr[5];
    this.date = arr[6];
    this.adultTicket = arr[7];
    this.childTicket = arr[8];
    this.infantTicket = arr[9];
}

Booking.getDetails = function() {
    return name, id, telNo, email, depature, destination, date, adultTicket, childTicket, infantTicket;
}

Booking.displayDetails = function(totalPrice) {
    var el = document.createElement("h4");
    el.className = "summary-text";
    el.innerHTML = `Depature: ${depature}`;
    right.appendChild(el);
    el = document.createElement("h4");
    el.className = "summary-text";
    el.innerHTML = `Destination: ${destination}`;
    right.appendChild(el);
    el = document.createElement("h4");
    el.className = "summary-text";
    el.innerHTML = `Date: ${date}`;
    right.appendChild(el);
    let hr = document.createElement("hr");
    right.appendChild(hr);
    el = document.createElement("h3");
    el.className = "summary-text";
    el.innerHTML = `Total price: ${totalPrice}`;
    right.appendChild(el);
}

Booking.checkPrice = function() {
    if (destination == "Photopia") {
        var totalPrice = (price[0] * adultTicket) + (price[0] * 0.8 * childTicket) + (price[0] * 0.5 * infantTicket)
    } else if (destination == "Isabelle's Cottage") {
        var totalPrice = (price[1] * adultTicket) + (price[1] * 0.8 * childTicket) + (price[1] * 0.5 * infantTicket)
    } else if (destination == "Nook Family") {
        var totalPrice = (price[2] * adultTicket) + (price[2] * 0.8 * childTicket) + (price[2] * 0.5 * infantTicket)
    }
    document.querySelector(".summary").textContent = "Summary"
    Booking.displayDetails(totalPrice);
    
}

const submit = document.getElementById('submit')
const form = document.forms["flight"]; // get form element
const right = document.querySelector(".right");

function clear() {
    right.querySelectorAll("*").forEach((n) => {
        if (n.className != "summary") n.remove();
    });
};

submit.addEventListener("click", function() {
    let arr = new Array();
    clear()
    form.querySelectorAll("*").forEach(function(input) {
        if (input.nodeName == "INPUT" || input.nodeName == "SELECT") { // exclude <option> 
            arr.push(input.value) 
        }
    })
    Booking(arr)
    Booking.checkPrice()
})
