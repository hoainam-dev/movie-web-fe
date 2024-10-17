import AdminLayout from '@/app/(layout)/AdminLayout';
import CreateMovieApi from '@/components/admin/movie/create-movie/CreateMovieApi';
import React from 'react';

export const metadata = {
  title: "Tạo mới phim",
  description: "Trang quản trị tạo mới phim phimvip.com",
};

export default function CreateMovie() {
  return (
    <AdminLayout>
        <CreateMovieApi />
    </AdminLayout>
  )
}