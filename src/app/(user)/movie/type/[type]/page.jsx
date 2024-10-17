import MovieComponent from '../../MovieComponent';
import MovieBreadcrumbs from '../../MovieBreadcrumbs';
import { getMovieByType } from "@/services/movieService";
import { getData } from "@/services/dataService";
import UserLayout from "@/app/(layout)/UserLayout";

export default async function TypeMovie({ params, searchParams }) {
  const currentPage= parseInt(searchParams.page) || 1;

  const dataPromise = await getMovieByType(params.type, currentPage);
  const types = await getData('type', params.type);

  const type = types?.filter(type => type.type_slug===params.type);
  
  return(
    <UserLayout>
      <div className="relative mt-2 pb-2">
        <MovieBreadcrumbs data={type[0].type_name} />
        <MovieComponent dataPromise={dataPromise} currentPage={currentPage}/>
      </div>
    </UserLayout>
  );
}