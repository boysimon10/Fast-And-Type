function getRandomInt() {
    const max = listWords.lenght + 1
    return Math.floor(Math.random() * max);
}

function getWord(listWords){
    return listWords[getRandomInt()];
}