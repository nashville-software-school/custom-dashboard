const eventHub = document.querySelector("#container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("btnFont--")) {
        const [prefix, chosenSize] = clickEvent.target.id.split("--")

        const fontChosen = new CustomEvent("fontChosen", {
            detail: {
                fontSize: chosenSize
            }
        })

        eventHub.dispatchEvent(fontChosen)
    }
})

export const FontButtons = () => {
    return `
        <article class="fonts">
            <button id="btnFont--xsmall">Extra Small</button>
            <button id="btnFont--small">Small</button>
            <button id="btnFont--large">Large</button>
            <button id="btnFont--xlarge">Extra Large</button>
        </article>
    `
}
