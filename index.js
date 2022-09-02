const apiHost = " http://localhost:3000";

const tripFare = 2000;




//search ticket data
// function createTicket(ticketId) {
//     fetch(`${apiHost}/passenger/${ticketId}`)
//     .then(response => {
//         if(response.status != 200) {
//             throw new Error(response.statusText);
//         }
//         else {
//             return response.json();
//         }
//     })
//     .then(ticket => {
//         document.getElementById('departureTown').innerHTML = ticket.depTown;
//         document.getElementById('arrivalTown').innerHTML = ticket.arrivalTown;
//         document.getElementById('depDate').innerHTML = ticket.DepDate;
//         document.getElementById('depTime').innerHTML = ticket.depTime;
//         document.getElementById('newName').innerHTML = ticket.name;
//         document.getElementById('newIdNumber').innerHTML = ticket.idNumber;
//         document.getElementById('newNumOfSeats').innerHTML = ticket.numOfSeats;
//         document.getElementById('newfareAmount').innerHTML = ticket.fareAmout.map(totalFare => (newfareAmount * triFare))
//     })
//     .catch(err => {
//         console.log(err.message)
//     })
// }

//submit form event
// document.addEventListener('DOMContentLoaded', () => {
//    form = document.querySelector('form')
//    form.addEventListener('submit', evt => {
//     evt.preventDefault();
//     myTicket(evt.target.newName.value)
//    })
// })
// function myTicket (ticketInput) {
//     let li = document.createElement('li')
//     li.textContent = `${ticketInput}`
//     document.querySelector('#tripInputs').appendChild(li)
// }




//POST ticket to database

function printTicket(name, idNumber, seats, totalFare) {
   const totalAmount = individualFare * seats
      
    const data = {
        name: "Miss Shilah",
        idNumber: "1567392",
        depTown: "Nairobi",
        arrivalTown: "Eldoret",
        date: "09/01/2022",
        seats: 1,
        totalFare: `${individualFare * seats}`
    };

    const ticketData = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(data),
    };

    return fetch(`http://localhost:3000"/passenger`, ticketData)
    .then(response => response.json())
    .then(data => {
        document.body.innerHTML = object["id"];
        console.log(object);
    })
    .catch(error => {
        document.body.innerHTML = error.message
    });
}


