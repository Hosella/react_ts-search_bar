import {FC} from 'react';
import { Movie } from '../../types/Movie';
import './style.scss'

type Props = {
  movie: Movie;
}

export const MovieItem: FC<Props> = ({ movie }) => {
  const { title, description, imgUrl, imdbUrl} = movie;

  return (
    <div className='MovieItem'>
      <img src={imgUrl} className='MovieItem__img' alt={`${title} poster`} />
      <span className='MovieItem__title'>{title}</span>
      <span className='MovieItem__description'>{description}</span>
      <a href={imdbUrl} className='MovieItem__link'>Watch now</a>
    </div>
  );
}