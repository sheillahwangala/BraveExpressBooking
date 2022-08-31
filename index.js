const apiHost = " http://localhost:3000";

const individualFare = 2000;

function printTicket(name, idNumber, seats, totalFare) {
   const totalAmount = individualFare * seats
      
    const data = {
        name: "Miss Shilah",
        idNumber: "1567392",
        seats: 1,
        totalFare: `${totalAmount}`
    };

    const ticketData = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(data),
    };

    return fetch(`${apiHost}/passenger`, ticketData)
    .then(response => response.json())
    .then(data => {
        document.body.innerHTML = object["id"];
        console.log(object);
    })
    .catch(error => {
        document.body.innerHTML = error.message
    });
}

// document.addEventListener('DOMContentLoaded', () => {
//     printTicket();
// })

