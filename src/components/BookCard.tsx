import React from "react";
import { Book } from "../types";
import Badge from "./Badge";
import { formatPrice, stars } from "../utils";
import styles from "./BookCard.module.css";

const BookCard = (props: { book: Book }) => {
  const { title, author, year, genre, rating, price, available } = props.book;

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.meta}>
        {author} {year}
      </p>
      <div className={styles.footer}>
        <p>
          <Badge>{genre} </Badge>
          {stars(rating)}
        </p>
        <div className={styles.price}>
          {formatPrice(price)}

          {available ? (
            <Badge tone="success">Dostępna</Badge>
          ) : (
            <Badge tone="warning">Brak w magazynie</Badge>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
