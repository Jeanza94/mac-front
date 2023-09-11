import { ForwardRefExoticComponent, ForwardedRef, InputHTMLAttributes, forwardRef } from "react"
import { twMerge } from "tailwind-merge"

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export const Input:ForwardRefExoticComponent<Props & { ref?: ForwardedRef<HTMLInputElement>}> = forwardRef((props, ref)=>{
  return (
    <input
      className={twMerge(`
        border-2 px-3 py-2 rounded-lg focus:outline-none focus:shadow-primary
      `, props.className)}
      ref={ref}
      {
        ...props
      }
    />
  )
})