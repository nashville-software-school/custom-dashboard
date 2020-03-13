import { useNews } from "./NewsProvider.js"
import { NewsItem } from "./NewsItem.js"

const eventHub = document.querySelector("#container")
let childrenVisible = true

export const NewsList = () => {
    const newsItems = useNews()
    return render(newsItems)
}

const render = (newsCollection) => {
    return `
        <article class="container__panel news">
            ${
                newsCollection.map(news => {
                    const itemHTML = NewsItem(news)
                    return itemHTML
                }).join("")
            }
        </article>
    `
}

eventHub.addEventListener("visibilityToggled", e => {
   if(e.detail.chosenComponent === "news"){
        const allNewsItems = document.querySelectorAll(".newsItem")
        childrenVisible = !childrenVisible

        allNewsItems.forEach(item => childrenVisible
            ? item.classList.remove("invisible")
            : item.classList.add("invisible")
        )
    }
})

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
        f.classList.add("newsItem", e.detail.borderSize)
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
