

document.getElementById("submit").addEventListener("click", function () {
    const nome = document.getElementById("nome").value;
    const km = document.getElementById("km").value;
    const age = document.getElementById("age").value;
    let discount = 0;
    let price = parseFloat(km * 0.21);
    
    console.log(nome);
    console.log(km);
    console.log(age);

    if (age < 18) {
        discount = parseFloat(price * 0.2);
    } else if (age >= 65) {
        discount = parseFloat(price * 0.4);
    }
    console.log(price);
    let totalPrice = parseFloat(price - discount).toFixed(2);
    console.log(totalPrice);

    document.getElementById("nTicket").innerHTML = parseInt(Math.random() * (9999 - 1000) + 1000);
    document.getElementById("sit").innerHTML = parseInt(Math.random() * (300 - 1) + 1);
    document.getElementById("price").innerHTML = totalPrice;



})

