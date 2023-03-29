const reactionImg = document.querySelector('.reaction-img'),
memoryImg = document.querySelector('.memory-img'),
verbalImg = document.querySelector('.verbal-img'),
visualImg = document.querySelector('.visual-img');

const reactionP = document.querySelector('.reaction'),
memoryP = document.querySelector('.memory'),
verbalP = document.querySelector('.verbal'),
visualP = document.querySelector('.visual');

const reactionVal = document.getElementById('reaction'),
memoryVal = document.getElementById('memory'),
verbalVal = document.getElementById('verbal'),
visualVal = document.getElementById('visual');



async function requData(){
    const data = await fetch('./data.json');
    const result = await data.json();

    reactionImg.src = result[0].icon;
    reactionImg.alt = result[0].category;
    memoryImg.src = result[1].icon;
    memoryImg.alt = result[1].category;
    verbalImg.src = result[2].icon;
    verbalImg.alt = result[2].category;
    visualImg.src = result[3].icon;
    visualImg.alt = result[3].category;

    reactionP.textContent = result[0].category;
    memoryP.textContent = result[1].category;
    verbalP.textContent = result[2].category;
    visualP.textContent = result[3].category;

    reactionVal.value = result[0].score;
    memoryVal.value = result[1].score;
    verbalVal.value = result[2].score;
    visualVal.value = result[3].score;
}
requData();
