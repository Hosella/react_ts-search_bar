import {FC} from "react";
import './style.scss'

type Props = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  applyQuery: (...args: any) => void
}

export const SearchLine: FC<Props> = ({ query, setQuery, applyQuery }) => (
  <div className="SearchLine">
    <span className="SearchLine__text">Search</span>

    <input
      className="SearchLine__input"
      type="text"
      value={query}
      onChange={event => {
        setQuery(event.target.value);
        applyQuery(event.target.value);
      }}
    />
  </div>
)
