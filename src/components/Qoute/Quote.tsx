import { useEffect, useState } from "react";
import { Loader } from "../Loader/Loader";
import { Button } from "../Button/Button";
import { quoteAPI } from "../../api/api";
import { FaFacebook} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export const Quote = () => {
    const [quote, setQoute] = useState<{content: string; author: string} | null>(null)
    const [copy, setCopy] = useState<string | null>(null)

    const fetchQuote = async () => {
        try {
            const newQuote = await quoteAPI.getRandomQuote(setQoute, setCopy);
            console.log("Fetched new quote:", newQuote);
        } catch (error) {
            console.error("Error fetching new quote:", error);
        }
    };
    useEffect(() => {
        fetchQuote()
    },[])

  return (
    <article className="bg-gray-100 p-4 rounded shadow-lg text-center flex items-center justify-center h-64">
        {!quote ? 
            <Loader /> : 
            <div className="w-full">
            <div className="flex justify-between mb-4">
                <div className="space-x-2 flex">
                                <Button as="a" href='https://x.com/home' target="blank" className="p-2">
                                    <FaXTwitter className="w-6 h-6" /> 
                                </Button>
                                <Button as="a" className="p-2">
                                    <FaFacebook className="w-6 h-6" /> 
                                </Button>
                </div>
                <Button name="New quote" onClick={fetchQuote} />
            </div>
            <q className="text-xl font-semibold mb-2 block">"{quote.content}"</q>
            <p className="text-gray-600 font-mono">- {quote.author}</p>
            <Button name="Copy quote" copyText={copy} />
        </div>
        }
    </article>
  )
}
