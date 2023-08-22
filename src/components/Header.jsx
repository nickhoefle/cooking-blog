import React, { useState, useEffect } from 'react'
import { getCategories } from "../services"
import Link from 'next/link';

const Header = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
    }, []);

    return (
        <div className="container mx-auto mb-8">
            <div className='w-full inline-block border-blue-400 py-8'>
                <div className='md:float-left block ml-10'>
                    <Link href="/">
                        <span className='cursor-pointer font-bold text-4xl text-black'>
                            Nick Hoefle Food and Cooking
                        </span>
                        <br />
                        <span>
                            {categories.map((category) => (
                                <Link key={category.slug} href={`/category/${category.slug}`}>
                                    <span className='md:float-left mt-2 align-middle text-black ml-4 font-semibold cursor-pointer'>
                                        {category.name}
                                    </span>
                                </Link>
                            ))}
                        </span>
                    </Link>
                </div>
                <div className='hidden md:float-left md:contents'>
                    
                </div>
            </div>
        </div>
    )
}

export default Header