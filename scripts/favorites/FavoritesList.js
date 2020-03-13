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
     const favoritesContainer = document.querySelector(".favorites")
    favoritesContainer.classList.forEach(singleClass => {
        let isPresent = false
        e.detail.allPossibleColors.forEach(color => {
            if (color === singleClass){
                isPresent = true
            }

        });
        if(isPresent){
            favoritesContainer.classList.remove(singleClass)
        }
    })
    favoritesContainer.classList.add(e.detail.color)

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
    const favoritesContainer = document.querySelector(".favorites")
    favoritesContainer.classList.forEach(singleClass => {
        let isPresent = false
        e.detail.allPossibleFontSizes.forEach(fontSize => {
            if (fontSize === singleClass){
                isPresent = true
            }

        });
        if(isPresent){
            favoritesContainer.classList.remove(singleClass)
        }
    })
    favoritesContainer.classList.add(e.detail.fontSize)
})