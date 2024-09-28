import { useEffect, useState } from "react";
import { Loader } from "../Loader/Loader";
import { Button } from "../Button/Button";


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

    // if(!quote) return <Loader />;

  return (
    <article className="bg-gray-100 p-4 rounded shadow-lg text-center flex items-center justify-center h-64">
        {!quote ? 
            <Loader /> : 
            <div>
                <p className="text-xl font-semibold mb-2 font-light">"{quote.content}"</p>
                <p className="text-gray-600 font-mono">- {quote.author}</p>
                <Button />
            </div>
        }
    </article>
  )
}
