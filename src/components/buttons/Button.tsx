import { FC } from 'react'
import { twMerge } from 'tailwind-merge';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface PropsButton {
  className?: string,
  icon?: IconDefinition,
  iconClassName?: string,
  spanClassName?: string,
  text: string,
  title: string,
  type?: "submit" | "button",
  onClick?: () => void,
}

export const Button: FC<PropsButton> = ({
  title,
  className,
  onClick,
  type = "button",
  text,
  spanClassName,
  icon,
  iconClassName
}) => {
  return (
    <button
      title={title}
      onClick={onClick}
      type={type}
      className={twMerge(`
        border-2 h-10  px-4 rounded-lg transition-colors duration-300 ease-in-out flex
        items-center gap-4 group focus:outline-none
      `, className)}
    >
      <span
        className={twMerge(`
          text-sm uppercase transition-colors duration-300 ease-in-out
        `, spanClassName)}
      >
        {text}
      </span>
      {
        icon && (
          <FontAwesomeIcon
            icon={icon}
            className={twMerge(`
              transition-colors duration-300 ease-in-out
            `, iconClassName)}
          />
        )
      }
    </button>
  )
}
