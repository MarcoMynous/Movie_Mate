import React from 'react'
import pageNot from '../assets/404.jpg'
import { Link } from 'react-router-dom'


const PageNotFound = () => {
  return (
    <main>
      <section className='flex flex-col justify-center px-2'>
        <div className='flex flex-col items-center my-2'>
          <div className='max-w-lg'>
          <img className='rounded' src={pageNot} alt="" />
          </div>
        </div>
        <div className='flex justify-center my-4'>
        <Link to="/">
        <button className='w-64 text-lg dark:text-white bg-linear-to-t from-sky-500 to-indigo-500 rounded-lg font-medium py-2.5'>Back to MovieMate</button>
        </Link>
        </div>
      </section>
    </main>
  )
}

export default PageNotFound
