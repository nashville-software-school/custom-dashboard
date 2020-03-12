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
    const favoriteContainer = document.querySelector(".scores")
    favoriteContainer.classList = []
    favoriteContainer.classList.add("container__panel")
    favoriteContainer.classList.add("scores")
    favoriteContainer.classList.add(e.detail.color)
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
    const scoreContainer = document.querySelector(".scores")
    scoreContainer.classList = []
    scoreContainer.classList.add("container__panel")
    scoreContainer.classList.add("scores")
    scoreContainer.classList.add(e.detail.fontSize)
})
