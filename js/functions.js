
export function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

export function getWord(listWords){
    const randomIndex = getRandomInt(listWords.length)
    return listWords[randomIndex]
}
export function changeMot(m) {
    const motElement = document.getElementById("mot")
    motElement.textContent = m
}

export function divMot(mot) {
    const tableauLettres = [];

    for (let i = 0; i < mot.length; i++) {
        tableauLettres.push(mot[i]);
    }

    return tableauLettres;
}
