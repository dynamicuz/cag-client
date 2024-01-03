import React from 'react'
import Image from 'next/image'
const BaseUrlLocal = process.env.NEXT_PUBLIC_ANALYTICS_BASEURLLOCAL;


export default function Students() {
    return (
      <section className='py-[50px] md:py-[80px]'>
            
            <div className=' max-w-[1440px] w-full mx-auto px-[24px] lg:px-[40px]  grid lg:grid-cols-2 gap-[20px]'>
                <div>
                <Image src={`${BaseUrlLocal}/assets/images/png/student-2.jpg`} alt='image' width={500} height={200} className='w-full' />
                </div>
                <div className='grid grid-cols-2 gap-[20px]'>
                    <Image  src={`${BaseUrlLocal}/assets/images/png/student-1.jpg`} alt='image' width={300} height={200} className='w-full' />
                    <Image src={`${BaseUrlLocal}/assets/images/png/student-3.JPG`} alt='image' width={300} height={200} className='w-full' />
                    <Image src={`${BaseUrlLocal}/assets/images/png/student-4.jpg`} alt='image' width={300} height={200} className='w-full' />
            <Image src={`${BaseUrlLocal}/assets/images/png/student-5.jpg`} alt='image' width={300} height={200} className='w-full' />

                </div>
    </div>
      </section>
  )
}
