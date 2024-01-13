import { toPersianDigits } from '@/helper/dateTimeHelper'
import { Button, Link } from '@nextui-org/react'
import React from 'react'

function Page404() {
  return (
    <div className="w-full h-[100vh] flex !justify-center !items-center">
        <div className="text-center">
            <h2 className="text-[10rem]">{toPersianDigits('404')}</h2>
            <h2 className='mt-20 mb-10'>صفحه مورد نظر شما یافت نشد!</h2>
            <Link href='/' className="bg-[#0095de] text-white py-2 px-5 rounded-lg">صفحه اصلی</Link>
        </div>
    </div>
  )
}

export default Page404