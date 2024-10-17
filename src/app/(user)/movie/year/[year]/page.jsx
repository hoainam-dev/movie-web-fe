import MovieComponent from '../../MovieComponent';
import MovieBreadcrumbs from '../../MovieBreadcrumbs';
import { getMovieByYear } from "@/services/movieService";
import UserLayout from "@/app/(layout)/UserLayout";

export default async function YearMovie({ params, searchParams }) {
  const currentPage= parseInt(searchParams.page) || 1;

  const dataPromise = await getMovieByYear(params.year, currentPage);
  
  return(
    <UserLayout>
      <div className="relative mt-2 pb-2">
        <MovieBreadcrumbs data={params.year} />

        <MovieComponent dataPromise={dataPromise} currentPage={currentPage}/>
      </div>
    </UserLayout>
  );
}