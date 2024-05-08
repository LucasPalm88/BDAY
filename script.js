document.addEventListener('DOMContentLoaded', function() {
    const events = [
        {
            date: "April 29, 2011",
            description: "On this day in 2011, Prince William of Wales, second in line to the British throne, married his longtime girlfriend, Catherine Middleton, in a lavish ceremony broadcast to millions of television viewers.",
            imageSrc: "Event1.webp"
            
        },
        {
            date: "April 29, 2018",
            description: "The animated TV series The Simpsons aired its 636th episode, surpassing Gunsmoke (1955–75) to become the longest-running scripted prime-time show in the United States.",
            imageSrc: "event2.jpg"
        },
        {
            date: "April 29, 2015",
            description: "In what was thought to be the lowest-attended baseball game in MLB history, the Baltimore Orioles defeated the Chicago White Sox, 8–2, in an empty Camden Yards, Baltimore; the game was closed to fans because of rioting in the city following the death of an African American man who was fatally injured while in police custody.",
            imageSrc: "event3.jpg"
        },
        {
            date: "April 29, 1899",
            description: "American composer, bandleader, and pianist Duke Ellington, among the most significant figures in jazz history, was born.",
            imageSrc: "event4.jpg"
        },
        {
            date: "April 29, 1954",
            description: "Comedian Jerry Seinfeld, whose television show Seinfeld was a landmark of American pop culture in the late 20th century, was born in Brooklyn, New York.",
            imageSrc: "event5.jpg"
        }
    ];

    const eventDate = document.getElementById('event-date');
    const eventDescription = document.getElementById('event-description');
    const eventImage = document.getElementById('event-image');

    function displayEvent(index) {
        const event = events[index];
        eventDate.textContent = event.date;
        eventDescription.innerHTML = `<p>${event.description}</p>`;
        eventImage.src = event.imageSrc;
    }

    // Add event listeners for all buttons
    const buttons = document.querySelectorAll('#buttons button');
    buttons.forEach((button, index) => {
        button.addEventListener('click', function() {
            displayEvent(index);
        });
    });
});