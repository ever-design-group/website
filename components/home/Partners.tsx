import Image from 'next/image'
import React from 'react'

function Partners() {
  return (
    <div className=' flex w-full bg-primary py-14 justify-center items-center'>
      <div className=' flex w-4/5 flex-col gap-6 md:flex-row items-center '>
        <div className='  text-center font-light text-white text-2xl w-[400px]'>
        Trusted by leading enterprises,
        startups, and organizations
        </div>

        <div className=' flex md:flex-row gap-5'>
    <div>
              <Image src="/images/BK.jpeg" alt="" width={90} height={42}  className=""/>
    </div>
    {/* <div>
              <Image src="/images/mamaafri.jpeg" alt="" width={90} height={42}  className=""/>
    </div>
    <div>
              <Image src="/images/ncba.jpg" alt="" width={90} height={42}  className=""/>
    </div>
    <div>
              <Image src="/images/Ben.jpg" alt="" width={90} height={42}  className=""/>
    </div> */}
        </div>
      </div>
    </div>
  )
}

export default Partners