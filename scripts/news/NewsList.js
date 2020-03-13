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
    const newsContainer = document.querySelector(".news")
    newsContainer.classList.forEach(singleClass => {
        let isPresent = false
        e.detail.allPossibleColors.forEach(color => {
            if (color === singleClass){
                isPresent = true
            }

        });
        if(isPresent){
            newsContainer.classList.remove(singleClass)
        }
    })
    newsContainer.classList.add(e.detail.color)

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

    const newsContainer = document.querySelector(".news")
    newsContainer.classList.forEach(singleClass => {
        let isPresent = false
        e.detail.allPossibleFontSizes.forEach(fontSize => {
            if (fontSize === singleClass){
                isPresent = true
            }

        });
        if(isPresent){
            newsContainer.classList.remove(singleClass)
        }
    })
    newsContainer.classList.add(e.detail.fontSize)
 })
