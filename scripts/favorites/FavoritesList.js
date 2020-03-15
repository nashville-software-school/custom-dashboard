import { useFavorites } from "./FavoritesProvider.js"
import { FavoriteItem } from "./FavoriteItem.js"


export const FavoritesList = () => {
    /*
        Initial state of the component
    */
    let backgroundColorState = "white"
    let borderState = "onepixel"
    let fontState = "small"
    let childrenVisible = true
    let favoriteItems = useFavorites()

    // Get reference to event hub
    const eventHub = document.querySelector("#container")

    /*
        Handle when the user toggles the visibility of this component
    */
    eventHub.addEventListener("visibilityToggled", e => {
        if (e.detail.chosenComponent === "favorites") {
            childrenVisible = !childrenVisible

            const allFavoriteItems = document.querySelectorAll(".favoriteItem")

            allFavoriteItems.forEach(item => childrenVisible
                ? item.classList.remove("invisible")
                : item.classList.add("invisible")
            )
        }
    })

    /*
        Handle event when user chooses a theme color
    */
    eventHub.addEventListener("colorChosen", e => {
        const favoritesContainerClasses = document.querySelector(".favorites").classList

        favoritesContainerClasses.remove(backgroundColorState)
        backgroundColorState = e.detail.color
        favoritesContainerClasses.add(backgroundColorState)
    })

    /*
        Handle event when user chooses a theme border size
    */
    eventHub.addEventListener("borderSizeChosen", e => {
        const favorites = document.querySelectorAll(".favoriteItem")

        const currentBorder = borderState
        borderState = e.detail.borderSize

        favorites.forEach(fav => {
            fav.classList.remove(currentBorder)
            fav.classList.add(borderState)
        })
    })

    /*
        Handle event when user chooses a theme font size
    */
    eventHub.addEventListener("fontChosen", e => {
        const favoritesContainerClasses = document.querySelector(".favorites").classList

        favoritesContainerClasses.remove(fontState)
        fontState = e.detail.fontSize
        favoritesContainerClasses.add(fontState)
    })

    return `
        <article class="container__panel favorites">
            ${favoriteItems.map(favorite => FavoriteItem(favorite)).join("")}
        </article>
    `
}
