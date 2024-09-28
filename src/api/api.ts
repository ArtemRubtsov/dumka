const instance = 'https://api.quotable.io'

export const quoteAPI = {
    async getRandomQuote() {
        const response = await fetch(`${instance}/random`)
        const data = await response.json()
        return data
    }
}
