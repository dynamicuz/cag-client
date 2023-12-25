import React from 'react'
import Image from 'next/image'
export default function Students() {
    return (
      <section className='py-[80px]'>
            
            <div className=' max-w-[1440px] w-full mx-auto px-[24px] lg:px-[40px]  grid grid-cols-2 gap-[20px]'>
                <div>
                <Image src={"/assets/images/png/student-1.png"} alt='image' width={300} height={200} className='w-full' />
                </div>
                <div className='grid grid-cols-2 gap-[20px]'>
                    <Image src={"/assets/images/png/student-2.png"} alt='image' width={300} height={200} className='w-full' />
                    <Image src={"/assets/images/png/student-3.png"} alt='image' width={300} height={200} className='w-full' />
                    <Image src={"/assets/images/png/student-4.png"} alt='image' width={300} height={200} className='w-full' />
                    <Image src={"/assets/images/png/student-5.png"} alt='image' width={300} height={200} className='w-full' />

                </div>
    </div>
      </section>
  )
}
