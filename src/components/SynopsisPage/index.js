import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadBookFromAPI } from '../../actions';
import './styles.scss';

const SynopsisPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(loadBookFromAPI(id));
  }, []);

  const baseURI = useSelector((state) => (state.display.baseURI));
  const title = useSelector((state) => (state.books.book.title));
  const picture = useSelector((state) => (state.books.book.picture));
  const synopsis = useSelector((state) => (state.books.book.synopsis));
  const currentBookIsLoaded = useSelector((state) => state.display.loaded.currentBook);

  return (
    <div className="synopsis-page">
      {currentBookIsLoaded && (
      <>
        <div
          className="synopsis-page__cover"
          style={{ backgroundImage: `url("${baseURI}/images_book_folder/${picture}")` }}
        />
        <h2 className="synopsis-page__title">{title}</h2>
        <Link to={`/livre/${id}/lecture`}><button className="synopsis-page__reading" type="button">Lecture</button></Link>
        <p className="synopsis-page__extract">{synopsis}</p>
      </>
      )}
    </div>
  );
};

export default SynopsisPage;
