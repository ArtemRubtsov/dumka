import { useEffect, useState } from "react";
import { Loader } from "../Loader/Loader";
import { Button } from "../Button/Button";
import { quoteAPI } from "../../api/api";
import { FaFacebook} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { LangSwitcher } from "../LangSwitcher/LangSwitcher";



export const Quote = () => {
    const [quote, setQoute] = useState<{content: string; author: string} | null>(null)
    const [copy, setCopy] = useState<string | null>(null)
    const [scale, setScale] = useState<number>(1);
    const { t } = useTranslation(); 
    const fetchQuote = async () => {
        try {
            await quoteAPI.getRandomQuote(setQoute, setCopy);
            setScale(1.1);
            setTimeout(() => setScale(1), 300);
        } catch (error) {
            console.error("Error fetching new quote:", error);
        }
    };
    useEffect(() => {
        fetchQuote()
    },[])

    const tweetUrl = quote ? `https://x.com/intent/tweet?text="${encodeURIComponent(quote.content)}" - ${encodeURIComponent(quote.author)}` : '';
    const facebookShareUrl = quote ? `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://yourwebsite.com')}&quote="${encodeURIComponent(quote.content)}" - ${encodeURIComponent(quote.author)}` : '';
  return (
    <article className="bg-gray-100 p-4 rounded shadow-lg text-center flex items-center justify-center h-64">
        {!quote ? 
            <Loader /> : 
            <div className={`w-full transform transition-transform duration-300 ${scale === 1.1 ? "scale-110" : "scale-100"}`}>
            <div className="flex justify-between mb-4">
                <div className="space-x-2 flex">
                                <Button as="a" href={tweetUrl} target="_blank" className="p-2">
                                    <FaXTwitter className="w-6 h-6" /> 
                                </Button>
                                <Button as="a" href={facebookShareUrl} target={"_blank"} className="p-2">
                                    <FaFacebook className="w-6 h-6" /> 
                                </Button>
                </div>
                <Button name={t('copy_quote')} copyText={copy} />
                <LangSwitcher />
            </div>
            <div className="max-w-lg mx-auto">
                <q className="text-xl font-semibold mb-2 block">"{quote.content}"</q>
                <p className="text-gray-600 font-mono">- {quote.author}</p>
            </div>
            <Button name={t('new_quote')} onClick={fetchQuote}  className="mt-6"/>
        </div>
        }
    </article>
  )
}
