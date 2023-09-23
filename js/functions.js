
export function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

export function getWord(listWords){
    const randomIndex = getRandomInt(listWords.length)
    return listWords[randomIndex]
}
export function changeWord(m) {
    const motElement = document.getElementById("mot")
    motElement.textContent = m
}
export function viewScore(s) {
    const scoreElement=document.getElementById("score")
    scoreElement.textContent = s
    
}