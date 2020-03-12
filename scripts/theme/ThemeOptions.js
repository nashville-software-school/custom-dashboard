import { ColorButtons } from "./ColorButtons.js"
import { FontButtons } from "./FontButtons.js"
import { BorderButtons } from "./BorderButtons.js"

export const ThemeOptions = () => {
    return `
        <article class="container__panel themeOptions">
            ${BorderButtons()}
            ${ColorButtons()}
            ${FontButtons()}
        </article>
    `
}
