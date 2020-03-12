const eventHub = document.querySelector("#container")

eventHub.addEventListener("change", e => {
    if (e.target.name === "pixelsize") {
        console.log("Dispatch custom event letting other component know that a border size was chosen")
        eventHub.dispatchEvent(new CustomEvent("borderSizeChosen", {
            detail: {
                borderSize: e.target.value
            }
        }))
    }
})

export const BorderButtons = () => {
    return `
        <article class="borderSizes">
            <fieldset>
                <legend>Border Sizes</legend>

                <label for="onepixel">1px</label>
                <input type="radio" name="pixelsize" value="onepixel" />

                <label for="threepixels">3px</label>
                <input type="radio" name="pixelsize" value="threepixels" />

                <label for="fivepixels">5px</label>
                <input type="radio" name="pixelsize" value="fivepixels" />
            </fieldset>
        </article>
    `
}
