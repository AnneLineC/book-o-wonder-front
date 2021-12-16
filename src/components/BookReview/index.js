import { useSelector, useDispatch } from 'react-redux';
import BookCard from '../BookCard';
import { setFieldValue } from '../../actions';

import './styles.scss';

const BookReview = () => {
  const dispatch = useDispatch();

  const contentValue = useSelector((state) => state.user.textValue);
  const handleInputContentValueChange = (event) => {
    dispatch(setFieldValue('contentValue', event.target.value));
  };
  return (
    <div className="book-review">

      <div className="book-review__header">
        <p className="book-review__author">
          auteur : 00/00/0000
        </p>

        <p className="book-review__thumbs">
          <i className="fas fa-thumbs-up" /> <i className="fas fa-thumbs-down" />
        </p>
      </div>
      <div className="book-review__content">
        {/* <img className="comment-page__book-cover" src="https://images-na.ssl-images-amazon.com/images/I/513ub+gp6bL._SY344_BO1,204,203,200_.jpg" alt="test.jpg" /> */}
        <BookCard />
        
        <p className="book-review__text">Ici c'est PARIS je suis un petit papillon
          Ici c'est PARIS je suis un petit papillon
          Ici c'est PARIS je suis un petit papillon
          Ici c'est PARIS je suis un petit papillonIci c'est PARIS je suis un petit papillonIci c'est PARIS je suis un petit papillonIci c'est PARIS je suis un petit papillonIci c'est PARIS je suis un petit papillonIci c'est PARIS je suis un petit papillon
        </p>
        {/* <label className="sr-only account-page__text" htmlFor="content">
          <textarea
            cols="33"
            className="comment-page__textarea"
            name="content"
            id="content"
            placeholder="Votre avis ici"
            value={contentValue}
            onChange={handleInputContentValueChange}
          />
        </label> */}
      </div>
    </div>

  );
};
export default BookReview;
