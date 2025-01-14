import { GeistSans } from 'geist/font/sans'
import React from 'react'

const page = () => {
  return (
    <div className={`${GeistSans.className} font-medium`}>
      <h1 className='text-white'>HelloWorld</h1>
    </div>
  )
}

export default page
