import { MovieList } from '../MovieList';
import { movies } from '../../utils/movies';
import { useCallback, useMemo, useState } from 'react';
import { Movie } from '../../types/Movie';
import { SearchLine } from '../SearchBar';

function debounce(callback: Function, delay: number) {
  let timerId = 0;

  return (...args: any) => {
    window.clearTimeout(timerId);

    timerId = window.setTimeout(() => {
      callback(...args)
    }, delay)
  };
}

function App() {
  const [query, setQuery] = useState('');
  const [appliedQuery, setAppliedQuery] = useState('');

  const applyQuery = useCallback(debounce(setAppliedQuery, 700), []);

  const visibleMovies: Movie[] = useMemo(() => movies.filter(movie =>
    movie.title.toLowerCase().includes(appliedQuery.toLowerCase())
      || movie.description.toLowerCase().includes(appliedQuery.toLowerCase())
  ) as Movie[], [appliedQuery])

  return (
    <div className="App">
      <SearchLine query={query} setQuery={setQuery} applyQuery={applyQuery} />
      <MovieList movies={visibleMovies} />
    </div>
  );
}

export default App;