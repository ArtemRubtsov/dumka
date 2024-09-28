const instance = 'https://api.quotable.io'

export const quoteAPI = {
    async getRandomQuote(setQoute, setCopy) {
        const response = await fetch(`${instance}/random`)
        const data = await response.json()
        setQoute(data)
        setCopy(data.content)
        return data
    }
}
