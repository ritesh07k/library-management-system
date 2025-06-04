import React from "react";
import BookModel from "../../../models/BookModel";

interface ReturnBookProps {
  book: BookModel;
}

export const ReturnBook: React.FC<ReturnBookProps> = ({ book }) => {
  return (
    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
      <div className="text-center">
        {book.img ? (
          <img
            src={book.img}
            style={{ width: "100px", height: "150px" }}
            className="img-fluid"
            alt="book"
          />
        ) : (
          <img
            src={require("./../../../Images/BooksImages/book-luv2code-1000.png")}
            style={{ width: "100px", height: "150px" }}
            className="img-fluid"
            alt="book"
          />
        )}

        <h6 className="mt-2">{book.title}</h6>
        <p>{book.author}</p>
        <a className="btn main-color text-white" href="#">
          Reserve
        </a>
      </div>
    </div>
  );
};
