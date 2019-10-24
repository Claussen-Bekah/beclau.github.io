function Tree() {
    this.name = '';
    this.age = 0;
}

function fruitTree() {
    Tree.call(this);
    this.fruitType = '';
    this.canWinter = true;
}

fruitTree.prototype = Object.create(Tree.prototype);
fruitTree.prototype.constructor = fruitTree;

function nonBearingTree() {
    Tree.call(this);
    this.height = 0;
    this.canopyWidth = 0;
}

nonBearingTree.prototype = Object.create(Tree.prototype);
nonBearingTree.prototype.constructor = nonBearingTree;

function deciduousTree(shade) {
    nonBearingTree.call(this);
    this.shade = shade;
}

deciduousTree.prototype = Object.create(nonBearingTree.prototype);
deciduousTree.prototype.constructor = deciduousTree;

function coniferousTree() {
    nonBearingTree.call(this);
    this.needleLength = 0;
}

coniferousTree.prototype = Object.create(nonBearingTree.prototype);
coniferousTree.prototype.constructor = coniferousTree;

let orangeTree = new fruitTree;

orangeTree.name = "Orange";
orangeTree.age = 12;
orangeTree.canWinter = false;
orangeTree.fruitType = 'orange';

let oakTree = new nonBearingTree;

oakTree.name = 'Oak';
oakTree.height = 100;
oakTree.canopyWidth = 30;

let mapleTree = new deciduousTree(true);

mapleTree.name = 'Maple';
mapleTree.height = 125;
mapleTree.width = 35;
mapleTree.shade = true;

let pineTree = new coniferousTree;

pineTree.name = 'Pine';
pineTree.height = 200;
pineTree.width = 20;
pineTree.needleLength = 2;

let treeArray = [];

treeArray.push(oakTree, mapleTree, orangeTree, pineTree);

console.log(treeArray);