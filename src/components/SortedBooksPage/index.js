// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router';
import { useEffect } from 'react';
import { loadBooksByCategoryFromAPI } from '../../actions';
import BookCard from '../BookCard';

import './styles.scss';
import { Link } from 'react-router-dom';

const SortedBooksPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const booksList = useSelector((state) => state.books.booksList);
  const dispatch = useDispatch();

  // console.log(booksList);
  // const CategoryChosen = useSelector((state) => state.book.picture);

  useEffect(
    () => {
      // This function will be executed when the SortedBooksPage component will render
      dispatch(loadBooksByCategoryFromAPI(id));
    },
    [location],
  );

  return (
    <div className="sortedbookspage">
      {booksList.map((book) => (
        <Link to={`/livre/${book.id}`}>
          <div key={book.id} className="sortedbookspage__card">
            <BookCard picture={book.picture} />
            <h3 className="sortedbookspage__title">{book.title}</h3>
            {/* <p className-="sortedbookspage__author">{book.author.firstname} {book.author.lastname}</p> */}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SortedBooksPage;
