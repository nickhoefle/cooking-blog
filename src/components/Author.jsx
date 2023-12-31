import React from 'react'
import Image from 'next/image';

const Author = ({ author }) => {
  return (
    <div className='text-center mt-8 mb-8 p-12 relative rounded-lg bg-black bg-opacity-80'>
      <Image
        alt={author.name}
        unoptimized
        height='100'
        width='100'
        className='align-middle rounded-full mx-auto'
        src={author.photo.url}
      />
      <h3 className='text-white my-4 text-xl font-bold'>{author.name}</h3>
      <p className='text-white text-lg'>{author.bio}</p>
    </div>
  )
}

export default Author