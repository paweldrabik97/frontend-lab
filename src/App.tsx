import { useState } from "react";
import BookList from "./components/BookList";
import { books } from "./data/books";
import { Genre } from "./types";
import FilterBar from "./components/FilterBar";
import SearchBar from "./components/SearchBar";
import SortBar from "./components/SortBar";

// TODO (Zadanie 1): zastąp poniższą listę komponentem <BookList books={books} />,
//                   który wyrenderuje karty <BookCard /> (oba komponenty utwórz w src/components).
// TODO (Zadanie 4): dodaj filtrowanie po gatunku i dostępności (komponent <FilterBar />).

type GenreFilter = Genre | "wszystkie";

export default function App() {
  const [genre, setGenre] = useState<GenreFilter>("wszystkie");
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [sortOption, setSortOption] = useState<"title" | "author" | "">("");
  const [searchQuery, setSearchQuery] = useState("");

  const visibleBooks = books.filter((b) => {
    const matchesGenre = genre === "wszystkie" || b.genre === genre;
    const matchesAvailable = !onlyAvailable || b.available;

    const query = searchQuery.toLowerCase();
    const matchesSearch =
      b.title.toLowerCase().includes(query) ||
      b.author.toLowerCase().includes(query);

    return matchesGenre && matchesAvailable && matchesSearch;
  });

  const sortedBooks = sortOption
    ? [...visibleBooks].sort((a, b) => {
        if (sortOption === "title") return a.title.localeCompare(b.title);
        if (sortOption === "author") return a.author.localeCompare(b.author);
        if (sortOption === "") return 0;
        return 0;
      })
    : visibleBooks;
  return (
    <div>
      <h1>📚 Katalog książek</h1>
      <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <SortBar
        sortOption={sortOption}
        onSortChange={(option) => {
          if (option === "title" || option === "author" || option === "") {
            setSortOption(option);
          }
        }}
      />
      <FilterBar
        genre={genre}
        available={onlyAvailable}
        onGenreChange={(value) => setGenre(value as GenreFilter)}
        onAvailableChange={setOnlyAvailable}
      />
      Znaleziono: {sortedBooks.length}
      <br />
      <br />
      <BookList books={sortedBooks} />
    </div>
  );
}
