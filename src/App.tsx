import BookList from "./components/BookList";
import { books } from "./data/books";

// TODO (Zadanie 1): zastąp poniższą listę komponentem <BookList books={books} />,
//                   który wyrenderuje karty <BookCard /> (oba komponenty utwórz w src/components).
// TODO (Zadanie 4): dodaj filtrowanie po gatunku i dostępności (komponent <FilterBar />).

export default function App() {
  return (
    <div>
      <h1>📚 Katalog książek</h1>
      <BookList books={books} />
    </div>
  );
}
