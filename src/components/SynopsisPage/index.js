import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadBookFromAPI } from '../../actions';
import './styles.scss';

const SynopsisPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(
    () => {
      dispatch(loadBookFromAPI(id));
    },
  );

  const baseURI = useSelector((state) => (state.display.baseURI));
  const title = useSelector((state) => (state.books.book.title));
  const picture = useSelector((state) => (state.books.book.picture));
  const synopsis = useSelector((state) => (state.books.book.synopsis));

  return (
    <div className="synopsis-page">
      <div
        className="synopsis-page__cover"
        style={{ backgroundImage: `url("${baseURI}/images_book_folder/${picture}")` }}
      />
      <h2 className="synopsis-page__title">{title}</h2>
      {/* <div className="synopsis-page__recommandations">
        <p className="synopsis-page__recommandations-item"><i className="fas fa-thumbs-up item--up" /><span className="synopsis-page__recommandations-number">3</span></p>
        <p className="synopsis-page__recommandations-item"><i className="fas fa-thumbs-down item--down" /><span className="synopsis-page__recommandations-number">1</span></p>
      </div> */}
      <Link to={`/livre/${id}/lecture`}><button className="synopsis-page__reading" type="button">Lecture</button></Link>
      <p className="synopsis-page__extract">{synopsis}</p>
    </div>
  );
};

export default SynopsisPage;
