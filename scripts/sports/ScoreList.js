import { useScores } from "./ScoreProvider.js"
import { Score } from "./Score.js"

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


const eventHub = document.querySelector("#container")

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
        f.classList.add("score")
        f.classList.add(e.detail.borderSize)
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
