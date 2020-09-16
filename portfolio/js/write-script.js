let docArray = [
    'Algebraic function.pdf',
    'Arborist.pdf',
    'Assistant professors.pdf',
    'Ayurvedic practitioner.pdf',
    'BYU-MBA.pdf',
    'Chemistry Teacher.pdf',
    'DU-MIS.pdf',
    'Durham Tech-MIS.pdf',
    'Eastern Florida State College-Database.pdf',
    'Events of the Renaissance.pdf',
    'Fashion journalism.pdf',
    'Food service specialist.pdf',
    'ICU careers.pdf',
    'Kitchen designer.pdf',
    'Life skills coach.pdf',
    'Multimedia Technology.pdf',
    'Multimedia specialist.pdf',
    'Portland State-Business.pdf',
    'Recording arts.pdf',
    'Redlands-MBA.pdf',
    'Renaissance literature.pdf',
    'SLCC-Networking.pdf',
    'Science & Religion in the Renaissance.pdf',
    'Singing and Polyphony during the Renaissance.pdf',
    'Temple-Finance.pdf',
    'Temple-Finance2.pdf',
    'Texas A&M--Network Management.pdf',
    'UPenn-ISYS.pdf',
    'VCU-IT security.pdf',
    'southern chef.pdf',
    'writingexample_1.pdf',
    'writingexample_2.pdf',
    'writingexample_3.pdf',
    'writingexample_4.pdf',
    'writingexample_5.pdf'
]

for (let i = 0; i < docArray.length; i++) {
    buildFileDoc(docArray[i]);
}

function buildFileDoc(doc) {

    let output = document.getElementById('display');

    let div = document.createElement('div');
    div.setAttribute('class', 'cell');
    output.appendChild(div);

    let link = document.createElement('a');
    link.setAttribute('href', 'samples/write-samples/' + doc);
    div.appendChild(link);

    let doc1 = document.createElement('embed');
    doc1.setAttribute('src', 'samples/write-samples/' + doc);
    doc1.setAttribute('class', 'sampleDoc')
    doc1.setAttribute('type', 'application/pdf');
    link.appendChild(doc1);


}