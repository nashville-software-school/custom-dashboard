import { useFavorites } from "./FavoritesProvider.js"
import { FavoriteItem } from "./FavoriteItem.js"

export const FavoritesList = () => {
    const favoriteItems = useFavorites()
    return render(favoriteItems)
}

const render = favoriteCollection => {
    return `
        <article class="container__panel favorites">
            ${favoriteCollection.map(favorite => FavoriteItem(favorite)).join("")}
        </article>
    `
}

const eventHub = document.querySelector("#container")

eventHub.addEventListener("borderSizeChosen", e => {
    const favorites = document.querySelectorAll(".favoriteItem")
    favorites.forEach(f => {
        f.classList = []
        f.classList.add("favoriteItem")
        f.classList.add(e.detail.borderSize)
    })
})

eventHub.addEventListener("fontChosen", e => {
    const favorites = document.querySelector(".favorites")
    favorites.classList.add(e.detail.fontSize)
})
