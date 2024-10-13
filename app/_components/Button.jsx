import React from 'react'

export const Button = ({ name, onClick, className, disabled = false, loading }) => {
  return (
    <button className={`btn w-32 ${className}`} onClick={onClick} disabled={disabled}>
      {loading && <span className='loading loading-spinner' />}
      {name}
    </button>
  )
}
