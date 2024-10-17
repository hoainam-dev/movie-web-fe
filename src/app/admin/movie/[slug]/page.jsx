import AdminLayout from '@/app/(layout)/AdminLayout';
import { baseOpenGraph } from '@/app/sharedMetadata';
import MovieDetailAdmin from '@/components/admin/movie/detail-movie/MovieDetailAdmin';
import { getMovieBySlug } from '@/services/movieService';
import React from 'react'

export async function generateMetadata({ params }) {
  const movie = await getMovieBySlug(params.slug);
  
  const url = process.env.NEXT_PUBLIC_URL + '/movie/' + movie?movie.mov_slug:'';

  return {
    title: movie?movie.mov_name:'',
    description: movie?movie.content:'',
    openGraph: {
      ...baseOpenGraph,
      title: movie?movie.mov_name:'',
      description: movie?movie.content:'',
      url,
      images: [
        {
          url: movie?movie.poster_url:''
        }
      ]
    },
    alternates: {
      canonical: url
    }
  };
}

export default async function DetailMovie({ params }) {
    
    return (
        <AdminLayout>
            <MovieDetailAdmin slug={params.slug} />
        </AdminLayout>
    )
}
