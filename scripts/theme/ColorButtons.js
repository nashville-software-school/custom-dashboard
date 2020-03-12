const eventHub = document.querySelector("#container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("btnTheme--")) {
        const [prefix, chosenColor] = clickEvent.target.id.split("--")

        const colorChosenEvent = new CustomEvent("colorChosen", {
            detail: {
                color: chosenColor
            }
        })

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
