
export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export function getWord(listWords){
    const randomIndex = getRandomInt(listWords.length);
    return listWords[randomIndex];
}
