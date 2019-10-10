//associative array within an array
let dinoArray = [{
        'name': 'Allosaurus',
        'diet': 'carnivore',
        'time': 'Jurassic'
    }, {
        'name': "T.Rex",
        'diet': 'carnivore',
        'time': 'Cretaceous' 
    }, {
        'name': "Ankylosaurus",
        'diet': 'herbivore',
        'time': 'Cretaceous' 
    }, {
        'name': "Ichthyosaurus",
        'diet': 'carnivore',
        'time': 'Jurassic'
    }, {
        'name': "Styracosaurus",
        'diet': 'herbivore',
        'time': 'Cretaceous'
    },
    {
        'name': "Brachiosaurus",
        'diet': 'herbivore',
        'time': 'Cretaceous' 
    },
    {
        'name': 'Velociraptor',
        'diet': 'carnivore',
        'time': 'Cretaceous' 
    }, {
        'name': "Ceratosaurus",
        'diet': 'carnivore',
        'time': 'Jurassic'
    }, {
        'name': "Lambeosaurus",
        'diet': 'herbivore',
        'time': 'Cretaceous' 
    }
];

//loop through array and build out elements
for (let i = 0; i < dinoArray.length; i++) {
    buildDino(dinoArray[i]);
}

//function that flips card on click and starts the explosion if a carnivore
function flipCard(name, food, className){
    startExplosion(food, className);
    document.getElementById(name).classList.toggle('flipped');
}

//function that builds dinos and needs the parameter dino
function buildDino(dino) {
    
    //manipulate DOM using JS
    let output = document.getElementById('dino');
    let id = dino.name.toLowerCase();
    let food = dino.diet;

    let div1 = document.createElement('div');
    div1.setAttribute('class', 'cell');
    output.appendChild(div1);

    let containerDiv = document.createElement('div');
    containerDiv.setAttribute('class', 'card');
    containerDiv.setAttribute('id', id);
    //add onclick attribute
    containerDiv.setAttribute('onclick', `flipCard('${id}','${food}',this.className)`);
    div1.appendChild(containerDiv);

    let frontDiv = document.createElement('div');
    frontDiv.setAttribute('class', 'frontDiv side');
    containerDiv.appendChild(frontDiv);

    let backDiv = document.createElement('div');
    backDiv.setAttribute('class', 'backDiv side');
    containerDiv.appendChild(backDiv);

    let img = document.createElement('img');
    img.setAttribute('src', 'img/' + dino.name.toLowerCase() + '.png');
    img.setAttribute('alt', 'picture of the mighty' + dino.name.toLowerCase());
    frontDiv.appendChild(img);

    let h2 = document.createElement('h2');
    h2.textContent = dino.name;
    backDiv.appendChild(h2);

    let h3 = document.createElement('h3');
    h3.textContent = dino.diet;
    backDiv.appendChild(h3);

    let h3Time = document.createElement('h3');
    h3Time.textContent = dino.time;
    backDiv.appendChild(h3Time);

    //conditional statement
    if (dino.diet == 'herbivore') {
        let p = document.createElement('p');
        p.textContent = "eat me!";
        backDiv.appendChild(p);
    }
    else {
        let p = document.createElement('p');
        p.textContent = "mmm...meat";
        backDiv.appendChild(p);
    }
}

//find explosion svg and create variable
let explosion = document.getElementById('explosion');

//addEventListener for the animation end
explosion.addEventListener('animationend', listener, false);

//start the explosion
function startExplosion(diet, className) {
    //only explode if the dinosaur is a carnivoer and if the className only contains the word "card" (so that user can flip card back around)
    if (diet == 'carnivore' && className == 'card') {
        explosion.classList.toggle('hidden');
    }
}

//listener function that automatically hides the svg at the end of the function
function listener(event) {
    if (event.type = 'animationend') {
        explosion.classList.toggle('hidden');
    }
}
