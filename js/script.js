function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getWord(listWords){
    const randomIndex = getRandomInt(listWords.length);
    return listWords[randomIndex];
}

const listWords = ["apple","banana","cherry"];
console.log("Random word: " + getWord(listWords));