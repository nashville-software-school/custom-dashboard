import { useNews } from "./NewsProvider.js"
import { NewsItem } from "./NewsItem.js"

export const NewsList = () => {
    const newsItems = useNews()
    return render(newsItems)
}

const render = newsCollection => {
    return `
        <article class="container__panel scores">
            ${newsCollection.map(news => NewsItem(news)).join("")}
        </article>
    `
}