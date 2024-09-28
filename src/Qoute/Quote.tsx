import { useEffect, useState } from "react";


export const Quote = () => {

    const [quote, setQoute] = useState<{content: string; author: string} | null>(null)

    useEffect(() => {
        const fetchQoute = async () => {
            try {
                const response = await fetch("https://api.quotable.io/random")
                const data = await response.json()
                setQoute(data)
            } catch (error) {
                console.error(error)
            }
        }

        fetchQoute()
    },[])

    if(!quote) return <div>Loading...</div>;

  return (
    <article className="bg-gray-100 p-4 rounded shadow-lg text-center">
        <p className="text-xl font-semibold mb-2">"{quote.content}"</p>
        <p className="text-gray-600">- {quote.author}</p>
    </article>
  )
}
