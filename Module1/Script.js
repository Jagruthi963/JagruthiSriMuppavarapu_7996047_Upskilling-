console.log("Welcome to Smart Event Management Portal");

window.onload = function () {
    alert("Smart Event Portal Loaded Successfully");
};

// Portal Information
const portalName = "Smart Event Portal";
let totalVisitors = 0;

console.log(`Portal Name: ${portalName}`);

// Event Data
let eventCatalog = [
    {
        title: "AI Workshop",
        schedule: "2026-08-15",
        type: "Education",
        capacity: 60,
        venue: "Seminar Hall",
        fee: 100,
        organizer: "Tech Club"
    },
    {
        title: "Photography Contest",
        schedule: "2026-09-10",
        type: "Competition",
        capacity: 40,
        venue: "Auditorium",
        fee: 50,
        organizer: "Media Club"
    },
    {
        title: "Career Guidance Seminar",
        schedule: "2026-10-05",
        type: "Seminar",
        capacity: 0,
        venue: "Conference Room",
        fee: 0,
        organizer: "Placement Cell"
    }
];

// Display Events
function displayEvents() {

    console.log("----- Event List -----");

    eventCatalog.forEach(event => {

        console.log(
            `${event.title} | ${event.type} | ${event.capacity} Seats`
        );
    });
}

displayEvents();

// Availability Check
function checkAvailability() {

    const today = new Date();

    eventCatalog.forEach(event => {

        const eventDate = new Date(event.schedule);

        if (eventDate > today && event.capacity > 0) {

            console.log(`${event.title} is Open for Registration`);

        } else {

            console.log(`${event.title} is Closed`);
        }
    });
}

checkAvailability();

// Registration Function
function registerParticipant(eventTitle) {

    let found = false;

    eventCatalog.forEach(event => {

        if (event.title === eventTitle) {

            found = true;

            if (event.capacity > 0) {

                event.capacity--;

                const regId =
                    "REG" + Math.floor(Math.random() * 10000);

                console.log(`Registration Successful`);
                console.log(`Registration ID: ${regId}`);
                console.log(`Remaining Seats: ${event.capacity}`);

            } else {

                console.log("Seats Not Available");
            }
        }
    });

    if (!found) {

        console.log("Event Not Found");
    }
}

registerParticipant("AI Workshop");

// Add Event
function createEvent(
    title,
    schedule,
    type,
    capacity,
    venue,
    fee,
    organizer
) {

    eventCatalog.push({
        title,
        schedule,
        type,
        capacity,
        venue,
        fee,
        organizer
    });

    console.log(`${title} Added Successfully`);
}

createEvent(
    "Cloud Computing Workshop",
    "2026-11-20",
    "Education",
    80,
    "Lab Block",
    150,
    "Cloud Team"
);

// Filter by Type
function getEventsByType(type) {

    return eventCatalog.filter(event => {

        return event.type === type;
    });
}

console.log(getEventsByType("Education"));

// Registration Counter (Closure)
function registrationCounter() {

    let count = 0;

    return function () {

        count++;

        console.log(`Total Registrations: ${count}`);
    };
}

const countRegistrations = registrationCounter();

countRegistrations();
countRegistrations();
countRegistrations();

// Calculate Revenue
function calculateRevenue() {

    let revenue = 0;

    eventCatalog.forEach(event => {

        revenue += event.capacity * event.fee;
    });

    console.log(`Expected Revenue: ₹${revenue}`);
}

calculateRevenue();

// Total Seats
function totalCapacity() {

    let total = 0;

    eventCatalog.forEach(event => {

        total += event.capacity;
    });

    console.log(`Total Available Seats: ${total}`);
}

totalCapacity();

// Sort Events
const sortedEvents = [...eventCatalog].sort((a, b) => {

    return b.capacity - a.capacity;
});

console.log("Sorted Events");
console.log(sortedEvents);

// Class Example
class Program {

    constructor(title, venue, capacity) {

        this.title = title;
        this.venue = venue;
        this.capacity = capacity;
    }

    displayInfo() {

        console.log(
            `${this.title} at ${this.venue} has ${this.capacity} seats`
        );
    }
}

const eventOne =
    new Program("Web Development Bootcamp", "Lab 1", 75);

eventOne.displayInfo();

// Object Entries
console.log(Object.entries(eventOne));

Object.entries(eventOne).forEach(([key, value]) => {

    console.log(`${key}: ${value}`);
});

// DOM Section
const container =
    document.querySelector("#eventContainer");

if (container) {

    const card = document.createElement("div");

    card.innerHTML = `
        <h3>AI Workshop</h3>
        <p id="seatCount">Seats: 60</p>
        <button id="joinBtn">Join Event</button>
        <button id="leaveBtn">Cancel Registration</button>
    `;

    container.appendChild(card);

    let seats = 60;

    const seatText =
        document.querySelector("#seatCount");

    document
        .querySelector("#joinBtn")
        .addEventListener("click", () => {

            if (seats > 0) {

                seats--;

                seatText.textContent =
                    `Seats: ${seats}`;

                console.log("Joined Successfully");
            }
        });

    document
        .querySelector("#leaveBtn")
        .addEventListener("click", () => {

            seats++;

            seatText.textContent =
                `Seats: ${seats}`;

            console.log("Registration Cancelled");
        });
}

// Dropdown Filter
const categoryDropdown =
    document.getElementById("eventType");

if (categoryDropdown) {

    categoryDropdown.onchange = function () {

        const selectedType = this.value;

        const result =
            eventCatalog.filter(event => {

                return (
                    selectedType === "all" ||
                    event.type === selectedType
                );
            });

        console.log(result);
    };
}

// Search Feature
const searchInput =
    document.getElementById("searchEvent");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const keyword =
            this.value.toLowerCase();

        const results =
            eventCatalog.filter(event => {

                return event.title
                    .toLowerCase()
                    .includes(keyword);
            });

        console.log(results);
    });
}

// Fetch API
const loader =
    document.getElementById("loader");

const resultBox =
    document.getElementById("resultBox");

async function loadPosts() {

    try {

        if (loader)
            loader.style.display = "block";

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );

        const data =
            await response.json();

        if (loader)
            loader.style.display = "none";

        if (resultBox)
            resultBox.innerHTML =
                data[0].title;

    } catch (error) {

        if (loader)
            loader.style.display = "none";

        console.log(
            "Failed to Fetch Data"
        );
    }
}

loadPosts();

// Current Time Feature
function showCurrentTime() {

    const now = new Date();

    console.log(
        `Current Time: ${now.toLocaleTimeString()}`
    );
}

showCurrentTime();

// Statistics
function portalStatistics() {

    console.log(
        `Total Events: ${eventCatalog.length}`
    );

    let freeEvents =
        eventCatalog.filter(
            event => event.fee === 0
        );

    console.log(
        `Free Events: ${freeEvents.length}`
    );
}

portalStatistics();