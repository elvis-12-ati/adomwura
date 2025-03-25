emailjs.init("v_UrZBaAHsBcxrHJH");

document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const location = document.getElementById("location").value;
    const comments = document.getElementById("comments").value;

    console.log("Form Data:", { name, address, location, comments }); // Debug info

    emailjs.send("service_coa7x4q", "template_mgasayk", {
        name: name,
        address: address,
        location: location,
        comments: comments,
        to_email: "atielvison@gmail.com"
    })
    .then(function(response) {
        alert("Order submitted successfully!");
        document.getElementById("orderForm").reset();
    }, function(error) {
        alert("Failed to submit order. Error: " + JSON.stringify(error));
        console.error("EmailJS Error:", error); // Log error to console
    });
});