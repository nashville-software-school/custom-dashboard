import { ColorButtons } from "./ColorButtons.js"
import { FontButtons } from "./FontButtons.js"
import { BorderButtons } from "./BorderButtons.js"
import { ToggleButtons } from "./ToggleButtons.js"

export const ThemeOptions = () => {
    return `
        <article class="container__panel themeOptions">
            ${ColorButtons()}
            ${FontButtons()}
            ${BorderButtons()}
            ${ToggleButtons()}
        </article>
    `
}
