import { useState } from "react";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";

export default function Search() {
  const [query, setQuery] = useState("pizza");
  return (
    <div>
      <SearchInput setQuery={setQuery} />
      <SearchResults query={query} />
    </div>
  );
}
