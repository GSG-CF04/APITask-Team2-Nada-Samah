
let app = document.getElementById('root');


// Create Logo Element
let logo = document.createElement('img');
logo.src = 'cover.jpg';
app.appendChild(logo);

// Create div 
let container = document.createElement('div');
container.setAttribute('class','container');
app.appendChild(container);


fetch("https://www.boredapi.com/api/activity")
.then((res) => res.json())
.then((data) => {

        let card = document.createElement('div');
        card.setAttribute('class','card');
        container.appendChild(card);

        let activity = document.createElement('p');
        activity.textContent = data.activity;
        card.appendChild(activity);

})
.catch((err) => console.log(err));