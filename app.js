// import needed modules

// state
const character = {
    head: 'bird',
    middle: 'dress',
    pants: 'white',
    phrases: []
};

// components

// Designer
const designSection = document.getElementById('design-section');
var [headSelect, middleSelect, pantsSelect] = designSection.querySelectorAll('select');

headSelect.addEventListener('change', () => {
    character.head = headSelect.value;
    displayDesign();
});

middleSelect.addEventListener('change', () => {
    character.middle = middleSelect.value;
    displayDesign();
});

pantsSelect.addEventListener('change', () => {
    character.pants = pantsSelect.value;
    displayDesign();
});

function displayDesigner() {
    headSelect.value = character.head;
    middleSelect.value = character.middle;
    pantsSelect.value = character.pants;
    
}

// AddPhrase
const addPhraseSection = document.getElementById('add-phrase-section');
const phraseInput = addPhraseSection.querySelector('input');
const phraseButton = addPhraseSection.querySelector('button');

function handleAddPhrase() {
    

    displayPhrases();
    phraseInput.value = '';
    phraseInput.focus();
}

phraseButton.addEventListener('click', () => {
    handleAddPhrase();
});

phraseInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleAddPhrase();
    }
});

// Character
const characterSection = document.getElementById('character-section');
const [headImage, middleImage, pantsImage] = characterSection.querySelectorAll('img');

function displayCharacter() {
    // *** Set the src properties for the three images.
    // You can use:
    // 'assets/character/' + <get prop value here> + '-head.png'
    // to format the correct file name
}

// Phrases
const phrasesSection = document.getElementById('phrases-section');
const phraseList = phrasesSection.querySelector('ul');

function displayPhrases() {
    phraseList.innerHTML = '';

    // ** Create an li for each phrase and append to the list
}

// page load actions
function displayDesign() {
    displayCharacter();
    displayPhrases();
}

displayDesigner();
displayDesign();


