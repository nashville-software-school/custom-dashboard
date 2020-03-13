const eventHub = document.querySelector("#container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("btnTheme--")) {
        // Get a reference to ALL color buttons
        const allColorBtns = document.querySelectorAll('button[id^="btnTheme--"]')

        // Start with empty array to store all possible colors
        let allPossibleColors = []

        // Get each color from the buttons
        for (const btn of allColorBtns) {
            let [prefix, color] = btn.id.split("--")
            allPossibleColors.push(color)
        }

        // Get the chosen color
        const [prefix, chosenColor] = clickEvent.target.id.split("--")

        // Construct the colorChosen event
        const colorChosenEvent = new CustomEvent("colorChosen", {
            detail: {
                color: chosenColor,
                allPossibleColors: allPossibleColors
            }
        })

        // Dispatch event to system
        eventHub.dispatchEvent(colorChosenEvent)
    }
})

export const ColorButtons = () => {
    return `
        <article class="colors">
            <fieldset>
                <legend>Background Colors</legend>

                <button id="btnTheme--red">Red</button>
                <button id="btnTheme--purple">Purple</button>
                <button id="btnTheme--blue">Blue</button>
                <button id="btnTheme--green">Green</button>
            </fieldset>
        </article>
    `
}
