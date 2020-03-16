const eventHub = document.querySelector("#container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("btnTheme--")) {
        // Get the chosen color
        const [prefix, chosenColor] = clickEvent.target.id.split("--")

        // Construct the colorChosen event
        const colorChosenEvent = new CustomEvent("colorChosen", {
            detail: {
                color: chosenColor
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
                <button id="btnTheme--white">White</button>
            </fieldset>
        </article>
    `
}
