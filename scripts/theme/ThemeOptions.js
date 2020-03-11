import { ColorButtons } from "./ColorButtons.js"
import { FontButtons } from "./FontButtons.js"

export const ThemeOptions = () => {
    return `
        <article class="container__panel themeOptions">
            ${ColorButtons()}
            ${FontButtons()}
        </article>
    `
}
