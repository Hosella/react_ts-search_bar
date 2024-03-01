import {FC} from 'react';
import { MovieItem } from '../MovieItem';
import './style.scss'
import { Movie } from '../../types/Movie';

type Props = {
  movies: Movie[]
}

export const MovieList: FC<Props> = ( { movies } ) => {
  return (
    <div className='MovieList'>
      {movies.map((movie) => (
        <MovieItem movie={movie} key={movie.imdbId}/>
      ))}
    </div>
  );
}