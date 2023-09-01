import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import { getCategories } from "../services"

const Categories = () => {
  const [categories, setCategories] = useState([]);

    useEffect(() => {
      getCategories()
        .then((newCategories) => setCategories(newCategories))
    }, []);

  return (
    <div className='bg-white shadow-lg border-2 border-black border-solid rounded-lg p-8 mb-8 pb-12'>
      <h3 className='text-black text-xl mb-8 font-semibold border-b border-black pb-4'>
        Categories
      </h3>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className='text-black cursor-pointer block pb-3 mb-3'>
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Categories