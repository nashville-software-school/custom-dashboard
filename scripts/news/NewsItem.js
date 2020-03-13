export const NewsItem = (news) => {
    return `
    <section class="newsItem">
        <header class="newsItem_header">
            <h2>${news.title}</h2>
        </header>
        <p class="newsItem_mood">Mood: ${news.mood}</p>
        <p class="newsItem_date">Date: ${news.timestamp}</p>
    </section>
    `
}
