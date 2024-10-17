import React from 'react';
import RegisterForm from './RegisterForm';
import UserLayout from '@/app/(layout)/UserLayout';

export const metadata = {
  title: "Đăng ký",
  description: "Trang đăng ký phimvip.com",
};

export default function Register() {
  return (
    <UserLayout>
      <div className='flex justify-center items-center'>
          <h1 className='text-white font-bold text-[14px] xl:text-[18px] 3xl:text-[25px]'>ĐĂNG KÝ</h1>
      </div>
      <div className='w-full xl:flex xl:justify-center'>
        <RegisterForm />
      </div>
    </UserLayout>
  )
}
