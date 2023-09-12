import { FC, ReactNode } from "react"

interface Props {
  children: ReactNode,
  isOpen: boolean,
  onClose?: () => void
}

export const Modal: FC<Props> = ({ children, isOpen = false, onClose }) => {
  return (
    <section
      className={`
        bg-stone-900/70 h-screen w-full fixed top-0 left-0 
         ${!isOpen ? "hidden" : ""} z-10 
      `}
      onClick={onClose}
    >
      {children}
    </section>
  )
}
