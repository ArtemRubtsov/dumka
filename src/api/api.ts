const instance = 'https://api.quotable.io'

export const quoteAPI = {
    async getRandomQuote(setQoute: React.Dispatch<React.SetStateAction<{ content: string; author: string } | null>>, setCopy: React.Dispatch<React.SetStateAction<string | null>>) {
        const response = await fetch(`${instance}/random`)
        const data = await response.json()
        setQoute(data)
        setCopy(data.content)
        return data
    }
}
