const apiHost = " http://localhost:3000";


// submit form 

function display() {
    DispWin = window.open('','NewWin', 'toolbar=no,status=no,width=300,height=200')
    message = "<ul><li><b>NAME: </b>" + document.form1.yourname.value;
    message += "<li><b>PHONE: </b>" + document.form1.phone.value;
    message += "<li><b>FROM: </b>" + document.form1.from.value;
    message += "<li><b>TO: </b>" + document.form1.to.value;
    message += "<li><b>SEATS: </b>" + document.form1.seats.value;
    message += "<li><b>FARE: </b>" + document.form1.fare.value + "</ul>";
    DispWin.document.write(message);
  }

  

  // function myTicket (ticketInput) {
//     let li = document.createElement('li')
//     li.textContent = `${ticketInput}`
//     document.querySelector('#tripInputs').appendChild(li)
// }

// document.addEventListener('DOMContentLoaded', () => {
//     evt.preventDefault();
 //      myTicket(ticketInput) 
//    // myTicket(evt.target.newName.value)
  
// })

// search ticket data
function searchTicket(name) {
    fetch(`${apiHost}/passenger/${ticketId}`)
    .then(response => {
        if(response.status != 200) {
            throw new Error(response.statusText);
        }
        else {
            return response.json();
        }
    })
    .then(ticket => {
        document.getElementById('departureTown').innerHTML = ticket.depTown;
        document.getElementById('arrivalTown').innerHTML = ticket.arrivalTown;
        document.getElementById('depDate').innerHTML = ticket.DepDate;
        document.getElementById('depTime').innerHTML = ticket.depTime;
        document.getElementById('newName').innerHTML = ticket.name;
        document.getElementById('newIdNumber').innerHTML = ticket.idNumber;
        document.getElementById('newNumOfSeats').innerHTML = ticket.numOfSeats;
        document.getElementById('newfareAmount').innerHTML = ticket.fareAmout.map(totalFare => (newfareAmount * triFare))
    })
    .catch(err => {
        console.log(err.message)
    })
}

//POST ticket to database

// function getTicket(name, idNumber, seats, totalFare) {
//    const totalAmount = individualFare * seats
      
//     const data = {
//         name: "Miss Shilah",
//         idNumber: "1567392",
//         depTown: "Nairobi",
//         arrivalTown: "Eldoret",
//         date: "09/01/2022",
//         seats: 1,
//         totalFare: `${individualFare * seats}`
//     };

//     const ticketData = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json",
//         },
//         body: JSON.stringify(data),
//     };

//     return fetch(`http://localhost:3000"/passenger`, ticketData)
//     .then(response => response.json())
//     .then(data => {
//         document.body.innerHTML = object["id"];
//         console.log(object);
//     })
//     .catch(error => {
//         document.body.innerHTML = error.message
//     });
// }

