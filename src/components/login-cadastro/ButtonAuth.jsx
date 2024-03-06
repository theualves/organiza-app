import React from 'react'

export default function ButtonAuth({ text, className, ...props }) {
  return (
    <button {...props} className={className}>
      {text}
    </button>
  )
}
