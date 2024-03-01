import { MovieList } from '../MovieList';
import { movies } from '../../utils/movies';
import { useMemo, useState } from 'react';
import { Movie } from '../../types/Movie';
import { SearchLine } from '../SearchBar';

function App() {
  const [query, setQuery] = useState('');

  const visibleMovies: Movie[] = useMemo(() => movies.filter(movie =>
    movie.title.toLowerCase().includes(query.toLowerCase())
      || movie.description.toLowerCase().includes(query.toLowerCase())
  ) as Movie[], [query])

  return (
    <div className="App">
      <SearchLine query={query} setQuery={setQuery} />
      <MovieList movies={visibleMovies} />
    </div>
  );
}

export default App;