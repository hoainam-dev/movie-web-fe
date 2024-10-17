import React from 'react';
import LoginForm from './LoginForm';
import UserLayout from '@/app/(layout)/UserLayout';
import { cookies } from 'next/headers';

export const metadata = {
  title: "Đăng nhập",
  description: "Trang đăng nhập phimvip.com",
};

export default async function Login() {
  
  return (
    <UserLayout>
        <LoginForm />
    </UserLayout>
  )
}
