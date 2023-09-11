import {FC} from 'react'
import { twMerge } from 'tailwind-merge';

interface PropsButton {
  className?: string,
  text:string
  title: string 
  type?: "submit" | "button",
  onClick?: () => void,
}

export const Button:FC<PropsButton> = ({title, className, onClick, type="button", text}) => {
  return (
    <button
      title={title}
      onClick={onClick}
      type={type}
      className={twMerge(`
        border-2 h-10 text-sm uppercase px-4 rounded-lg transition-colors duration-300 ease-in-out
      `, className)}
    >
      {text}
    </button>
  )
}
