import { useScores } from "./ScoreProvider.js"
import { Score } from "./Score.js"

const eventHub = document.querySelector("#container")
let childrenVisible = true
export const ScoreList = () => {
    const scores = useScores()
    return render(scores)
}

const render = scoreCollection => {
    return `
        <article class="container__panel scores">
            ${scoreCollection.map(score => Score(score)).join("")}
        </article>
    `
}

eventHub.addEventListener("visibilityToggled", e => {
    if(e.detail.chosenComponent === "sports"){
         const allSportsItems = document.querySelectorAll(".score")
         childrenVisible = !childrenVisible


         allSportsItems.forEach(item => item.classList.toggle("invisible"))
     }
 })

eventHub.addEventListener("colorChosen", e => {

    const scoresContainer = document.querySelector(".scores")
    scoresContainer.classList.forEach(singleClass => {
        let isPresent = false
        e.detail.allPossibleColors.forEach(color => {
            if (color === singleClass){
                isPresent = true
            }

        });
        if(isPresent){
            scoresContainer.classList.remove(singleClass)
        }
    })
    scoresContainer.classList.add(e.detail.color)

})

eventHub.addEventListener("borderSizeChosen", e => {
    const favorites = document.querySelectorAll(".score")
    favorites.forEach(f => {
        f.classList = []
        f.classList.add("score", e.detail.borderSize)
    })
})

eventHub.addEventListener("fontChosen", e => {
    const scoresContainer = document.querySelector(".scores")
    scoresContainer.classList.forEach(singleClass => {
        let isPresent = false
        e.detail.allPossibleFontSizes.forEach(fontSize => {
            if (fontSize === singleClass){
                isPresent = true
            }

        });
        if(isPresent){
            scoresContainer.classList.remove(singleClass)
        }
    })
    scoresContainer.classList.add(e.detail.fontSize)

})
