// return HTML for toggle buttons

const eventHub = document.querySelector("#container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("btnToggle--")) {

        // Get the chosen component to be toggled
        const [prefix, chosenComponent] = clickEvent.target.id.split("--")

        // Construct the toggledEvent
        const toggleEvent = new CustomEvent("visibilityToggled", {
            detail: {
                chosenComponent: chosenComponent,
            }
        })

        // Dispatch event to system
        eventHub.dispatchEvent(toggleEvent)
    }
})
export const ToggleButtons = () => {
    return `
        <article class="toggles">
            <fieldset>
                <legend>Visibility Togglers</legend>

                <button id="btnToggle--news">Toggle News</button>
                <button id="btnToggle--favorites">Toggle Favorites</button>
                <button id="btnToggle--sports">Toggle Scores</button>
            </fieldset>
        </article>
    `
}