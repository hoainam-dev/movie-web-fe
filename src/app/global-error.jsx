'use client'
 
export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <div className='w-screen h-screen flex flex-col justify-center items-center bg-[rgb(16,20,44)] text-white'>
          <h2 className='text-[50px]'>Toang rồi!</h2>
          <p>Có lỗi xảy ra</p>
          <Link href="/" className='underline hover:text-blue-700'>Trở về trang chủ</Link>
        </div>
      </body>
    </html>
  )
}