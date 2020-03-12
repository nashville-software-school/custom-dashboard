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

eventHub.addEventListener("colorChosen", e => {
    const favoriteContainer = document.querySelector(".favorites")
    favoriteContainer.classList = []
    favoriteContainer.classList.add("container__panel")
    favoriteContainer.classList.add("favorites")
    favoriteContainer.classList.add(e.detail.color)
})

eventHub.addEventListener("borderSizeChosen", e => {
    const favorites = document.querySelectorAll(".favoriteItem")
    favorites.forEach(f => {
        f.classList = []
        f.classList.add("favoriteItem")
        f.classList.add(e.detail.borderSize)
    })
})

eventHub.addEventListener("fontChosen", e => {
    const favoriteContainer = document.querySelector(".favorites")
    favoriteContainer.classList = []
    favoriteContainer.classList.add("container__panel")
    favoriteContainer.classList.add("favorites")
    favoriteContainer.classList.add(e.detail.fontSize)
})