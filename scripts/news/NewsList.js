import { useNews } from "./NewsProvider.js"
import { NewsItem } from "./NewsItem.js"

export const NewsList = () => {
    const newsItems = useNews()
    return render(newsItems)
}

const render = newsCollection => {
    return `
        <article class="container__panel news">
            ${newsCollection.map(news => NewsItem(news)).join("")}
        </article>
    `
}

const eventHub = document.querySelector("#container")

eventHub.addEventListener("colorChosen", e => {
    const favoriteContainer = document.querySelector(".news")
    favoriteContainer.classList = []
    favoriteContainer.classList.add("container__panel")
    favoriteContainer.classList.add("news")
    favoriteContainer.classList.add(e.detail.color)
})

eventHub.addEventListener("borderSizeChosen", e => {
    const allNews = document.querySelectorAll(".newsItem")
    allNews.forEach(f => {
        f.classList = []
        f.classList.add("newsItem")
        f.classList.add(e.detail.borderSize)
    })
})

eventHub.addEventListener("fontChosen", e => {
    const scoreContainer = document.querySelector(".news")
    scoreContainer.classList = []
    scoreContainer.classList.add("container__panel")
    scoreContainer.classList.add("news")
    scoreContainer.classList.add(e.detail.fontSize)
})
