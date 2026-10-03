import React from "react";
import { Book } from "../types";
import BookCard from "./BookCard";
import styles from "./BookList.module.css";

const BookList = (props: { books: Book[] }) => {
  if (props.books.length === 0) {
    return <p>Brak książek spełniających kryteria.</p>;
  }

  return (
    <div className={styles.grid}>
      {props.books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
