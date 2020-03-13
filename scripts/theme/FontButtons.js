const eventHub = document.querySelector("#container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("btnFont--")) {
        const allFontSizeBtns = document.querySelectorAll('button[id^="btnFont--"]')

        // Start with empty array to store all possible font sizes
        let allPossibleFontSizes = []

        // Get each font size from the buttons
        for (const btn of allFontSizeBtns) {
            let [prefix, fontSize] = btn.id.split("--")
            allPossibleFontSizes.push(fontSize)
        }
        const [prefix, chosenSize] = clickEvent.target.id.split("--")

        const fontChosen = new CustomEvent("fontChosen", {
            detail: {
                fontSize: chosenSize,
                allPossibleFontSizes: allPossibleFontSizes
            }
        })

        eventHub.dispatchEvent(fontChosen)
    }
})

export const FontButtons = () => {
    return `
        <article class="fonts">
            <fieldset>
                <legend>Font Sizes</legend>

                <button id="btnFont--xsmall">Extra Small</button>
                <button id="btnFont--small">Small</button>
                <button id="btnFont--large">Large</button>
                <button id="btnFont--xlarge">Extra Large</button>
            </fieldset>
        </article>
    `
}
