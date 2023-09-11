import { ForwardRefExoticComponent, ForwardedRef, InputHTMLAttributes, forwardRef } from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export const Input:ForwardRefExoticComponent<Props & { ref?: ForwardedRef<HTMLInputElement>}> = forwardRef((props, ref)=>{
  return (
    <input
      className={`
        border-2 p-1 rounded-lg
      `}
      ref={ref}
      {
        ...props
      }
    />
  )
})