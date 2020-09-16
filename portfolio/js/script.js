let imgArray = [
    'jpg4.png',
    'jpg5.png',
    'jpg6.png',
    'jpg1.jpg',
    'jpg2.jpg',
    'jpg3.jpg',
    'jpg7.jpg',
    '21 Days to Detoxify Your Life.jpg',
    'Artisan_Caramels_FULL.jpg',
    'Canning_Cents.jpg',
    'Canning_Cents_sample.jpg',
    'Colorful_Cooking_sample.jpg',
    'Crave_Eat_Heal.jpg',
    'Eat_Green.jpg',
    'GWAE_example.jpg',
    'Party_With_Sweet_Treats_SAMPLE.jpg',
    'Stack_Happy_Sample.jpg',
    'The_Magical_Slow Cooker_SAMPLE.jpg',
    'The_Magical_Slow_Cooker.jpg',
    'cheesesteak.jpg',
    'dec10post.jpg',
    'stackhappy.jpg',
    'trip.jpg'
];



for (let i = 0; i < imgArray.length; i++) {
    buildFile(imgArray[i]);
}





function buildFile(img) {

    let output = document.getElementById('display');

    let div = document.createElement('div');
    div.setAttribute('class', 'cell');
    output.appendChild(div);

    let link = document.createElement('a');
    link.setAttribute('href', 'samples/print-samples/' + img);
    div.appendChild(link);

    let image1 = document.createElement('img');
    image1.setAttribute('src', 'samples/print-samples/' + img);
    image1.setAttribute('alt', 'sample design project');
    image1.setAttribute('class', 'sampleImg')
    link.appendChild(image1);


}

