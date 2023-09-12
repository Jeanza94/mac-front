import { FC } from 'react';
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { twMerge } from 'tailwind-merge';

interface PropsIconButton {
  className?: string,
  icon: IconDefinition,
  title: string,
  onClick?: () => void
}

export const IconButton: FC<PropsIconButton> = ({icon, title, onClick, className}) => {
  return (
    <button
      className={twMerge(`
        rounded-full p-2 flex justify-center items-center bg-blue-950 hover:bg-blue-600
        transition-colors duration-300 ease-in-out active:bg-black
      `, className)}
      title={title}
      onClick={onClick}
    >
      <FontAwesomeIcon 
        icon={icon}
        className="h-3 w-3 text-white"
      />
    </button>
  )
}
