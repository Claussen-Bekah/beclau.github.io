var dinoArray = [{
        'name': 'Allosaurus',
        'diet': 'carnivore'
    }, {
        'name': "T.Rex",
        'diet': 'carnivore'
    }, {
        'name': "Ankylosaurus",
        'diet': 'herbivore'
    }, {
        'name': "Ichthyosaurus",
        'diet': 'carnivore'
    }, {
        'name': "Styracosaurus",
        'diet': 'herbivore'
    },
    {
        'name': "Brachiosaurus",
        'diet': 'herbivore'
    },
    {
        'name': 'Velociraptor',
        'diet': 'carnivore'
    }, {
        'name': "Ceratosaurus",
        'diet': 'carnivore'
    }, {
        'name': "Lambeosaurus",
        'diet': 'herbivore'
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

    var h2 = document.createElement('h2');
    h2.textContent = dino.name;
    div.appendChild(h2);

    var img = document.createElement('img');
    img.setAttribute('src', 'img/' + dino.name.toLowerCase() + '.png');
    img.setAttribute('alt', 'picture of the mighty' + dino.name.toLowerCase());
    div.appendChild(img);

    var h3 = document.createElement('h3');
    h3.textContent = dino.diet;
    div.appendChild(h3);

    if (dino.diet == 'herbivore') {
        var p = document.createElement('p');
        p.textContent = "Eat me!";
        div.appendChild(p);
    }
}