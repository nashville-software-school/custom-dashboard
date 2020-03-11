export const Score = score => `
    <section class="score">
        <header class="score__header">
            <h2>${score.team}</h2>
        </header>
        <p class="score__points">Score: ${score.points}</p>
        <p class="score__date">Date: ${score.timestamp}</p>
    </section>
`