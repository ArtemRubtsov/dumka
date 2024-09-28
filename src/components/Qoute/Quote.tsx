import { useEffect, useState } from "react";
import { Loader } from "../Loader/Loader";
import { Button } from "../Button/Button";
import { quoteAPI } from "../../api/api";


export const Quote = () => {

    const [quote, setQoute] = useState<{content: string; author: string} | null>(null)
    const [copy, setCopy] = useState<string | null>(null)

    useEffect(() => {
        const fetchQoute = async () => {
            try {
                const data = await quoteAPI.getRandomQuote()
                setQoute(data)
                setCopy(data.content)
            } catch (error) {
                console.error(error)
            }
        }

        fetchQoute()
    },[])

        console.log(copy)
  return (
    <article className="bg-gray-100 p-4 rounded shadow-lg text-center flex items-center justify-center h-64">
        {!quote ? 
            <Loader /> : 
            <div>
                <Button name="copy" copyText={copy}/>
                <q className="text-xl font-semibold mb-2 ">"{quote.content}"</q>
                <p className="text-gray-600 font-mono">- {quote.author}</p>
                <Button name="New qoute"/>
            </div>
        }
    </article>
  )
}
