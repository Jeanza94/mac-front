import { FC } from "react"

interface PropsTitleCustom {
  text: string
}

export const TitleCustom: FC<PropsTitleCustom> = ({ text }) => {
  return (
    <h3
      className={`
      capitalize text-white font-bold ps-4 py-2 rounded-s-full rounded-e-full 
      bg-gradient-to-r from-green-500 via-blue-800 to-sky-400
    `}
    >
      {text}
    </h3>
  )
}
