import React from 'react'

const BookCover = ({src}) => {
  return (
    <div className='bg-background rounded-2xl py-16 flex items-center justify-center'>
        <img src={src} alt='' className='max-h-[280px] sm:max-h-[470px]' />
    </div>
  )
}

export default BookCover