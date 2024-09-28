import { ComponentPropsWithRef, ElementType, MouseEventHandler, MouseEvent} from "react"

type Props<T extends  ElementType  = 'button'> = {
    name: string
    copyText?: string | null
    onClick?: MouseEventHandler<T>
    as?: T
} & ComponentPropsWithRef<T>

export const Button = <T extends  ElementType  = 'button'>({name,copyText, onClick, as: Component = 'button', ...props}: Props<T>) => {
    const commonClasses = "bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-200";

    const handleClick = (event:  MouseEvent<T>) => {
        if(copyText) {
            navigator.clipboard.writeText(copyText)
                .then(() => {
                    console.log('coppied', copyText)
                })
                .catch(err => console.error('Failed to copy:', err))
        }
        if (onClick) {
            onClick(event);
        }
    }
    

  return <Component className={commonClasses} name={name} onClick={handleClick} {...props}>{name}</Component>
}
