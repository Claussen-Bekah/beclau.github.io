var dinoArray = [{
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

for (let i = 0; i < dinoArray.length; i++) {
    buildDino(dinoArray[i]);
}

function buildDino(dino) {
    var output = document.getElementById('dino');

    var div = document.createElement('div');
    div.setAttribute('class', 'cell');
    output.appendChild(div);


    var img = document.createElement('img');
    img.setAttribute('src', 'img/' + dino.name.toLowerCase() + '.png');
    img.setAttribute('alt', 'picture of the mighty' + dino.name.toLowerCase());
    div.appendChild(img);

    var h2 = document.createElement('h2');
    h2.textContent = dino.name;
    div.appendChild(h2);

    var h3 = document.createElement('h3');
    h3.textContent = dino.diet;
    div.appendChild(h3);

    var h3Time = document.createElement('h3');
    h3Time.textContent = dino.time;
    div.appendChild(h3Time);

    if (dino.diet == 'herbivore') {
        var p = document.createElement('p');
        p.textContent = "Eat me!";
        div.appendChild(p);
    }
}
