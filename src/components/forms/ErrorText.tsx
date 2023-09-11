import { FC } from "react"

interface PropsErrorText {
  text: string
}

export const ErrorText: FC<PropsErrorText> = ({ text }) => {
  return (
    <span className="text-blue-950 font-bold text-xs ps-2">{text}</span>
  )
}
