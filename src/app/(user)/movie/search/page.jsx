import { getMovieByNameOrSlug } from "@/services/movieService";
import { IconHome } from '@/components/icon/Icon';
import Link from 'next/link';
import MovieComponent from '../MovieComponent';
import UserLayout from "@/app/(layout)/UserLayout";

export default async function SearchMovie({ searchParams }) {
  const currentPage= parseInt(searchParams.page) || 1;

  const dataPromise = await getMovieByNameOrSlug({query: searchParams.query}, currentPage);
  
  return(
    <UserLayout>
      <div className="relative mt-2 pb-2">
        <div className="flex gap-2 items-center text-gray-300 text-sm mb-4">
          <IconHome />
          <Link href="/" className=" text-[12px] sm:text-[14px] 3xl:text-[18px]">Trang chủ</Link>
          <span className="text-[12px] sm:text-[14px] 3xl:text-[18px]">{">"}</span>
          <span className="font-bold text-[12px] sm:text-[14px] 3xl:text-[18px]">Kết quả tìm kiếm: {searchParams.query}</span>
        </div>

        <MovieComponent dataPromise={dataPromise} currentPage={currentPage}/>
      </div>
    </UserLayout>
  );
}