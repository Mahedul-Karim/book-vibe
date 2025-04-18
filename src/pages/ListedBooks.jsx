import BookTabs from '@/components/listed-books/BookTabs'
import Sort from '@/components/listed-books/Sort'
import React from 'react'

const ListedBooks = () => {
  return (
    <section className='py-16 text-dark'>
        <div className='bg-background rounded-2xl py-5'>
            <p className='text-center font-bold text-lg'>Books</p>
        </div>
        <Sort />
        <BookTabs />
    </section>
  )
}

export default ListedBooks