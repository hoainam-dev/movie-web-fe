import MovieComponent from '../../MovieComponent';
import MovieBreadcrumbs from '../../MovieBreadcrumbs';
import { getMovieByCountry } from "@/services/movieService";
import { getData } from "@/services/dataService";
import UserLayout from "@/app/(layout)/UserLayout";

export default async function CountryMovie({ params, searchParams }) {
  const currentPage= parseInt(searchParams.page) || 1;

  const dataPromise = await getMovieByCountry(params.country, currentPage);
  const countries = await getData('country', params.country);

  const country = countries?.filter(ctr => ctr.ctr_slug===params.country);
  
  return(
    <UserLayout>
      <div className="relative mt-2 pb-2">
        <MovieBreadcrumbs data={country[0].ctr_name} />

        <MovieComponent dataPromise={dataPromise} currentPage={currentPage}/>
      </div>
    </UserLayout>
  );
}
