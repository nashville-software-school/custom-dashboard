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
//listen for the colorChosen event
eventHub.addEventListener("colorChosen", e => {

    const scoresContainer = document.querySelector(".scores")
    //iterate over the classlist array on the scores container for each singleClass
    scoresContainer.classList.forEach(singleClass => {
        //declare a variable to track if there is currently a color class present on the classList- initially false
        let isPresent = false
        // iterate over the allPossibleColors property on the detail object from the event
        e.detail.allPossibleColors.forEach(color => {
            // IF the current color in allPossibleColors is exactly the current singleClass, then set isPresent to true
            if (color === singleClass){
                isPresent = true
            }
        });
        //if the isPresent variable is true, remove the singleClass from the classList
        if (isPresent) {
            scoresContainer.classList.remove(singleClass)
        }
    })
    //add the appropriate class sent on the detail
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
