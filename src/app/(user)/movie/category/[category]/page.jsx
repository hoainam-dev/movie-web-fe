import MovieComponent from '../../MovieComponent';
import MovieBreadcrumbs from '../../MovieBreadcrumbs';
import { getMovieByCategory } from "@/services/movieService";
import { getData } from "@/services/dataService";
import UserLayout from '@/app/(layout)/UserLayout';

export default async function CategoryMovie({ params, searchParams }) {
  const currentPage= parseInt(searchParams.page) || 1;

  const dataPromise = await getMovieByCategory(params.category, currentPage);
  const categories = await getData('category',params.category);

  const category = categories?.filter(cat => cat.cat_slug===params.category);
  
  return(
    <UserLayout>
      <div className="relative mt-2 pb-2">
        <MovieBreadcrumbs data={category[0].cat_name} />

        <MovieComponent dataPromise={dataPromise} currentPage={currentPage}/>
      </div>
    </UserLayout>
  );
}
