import { ReactReader } from 'react-reader';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { setPinnedPage } from '../../actions';
import './styles.scss';

const BookReadingPage = () => {
  const { id } = useParams();
  parseInt(id, 10);

  const pinnedPages = useSelector((state) => state.user.pinnedPages);
  let pageLocation;
  console.log(pinnedPages);
  pinnedPages.forEach((pinnedPage) => {
    // console.log(pinnedPage.location);
    if (parseInt(pinnedPage.bookId, 10) === id) {
      pageLocation = pinnedPage.location;
    }
  });
  // console.log(pageLocation);

  const dispatch = useDispatch();
  const locationChanged = (epubcifi) => {
    dispatch(setPinnedPage(id, epubcifi));
  };

  return (
    <div className="book-reading-page">
      <ReactReader
        url="https://gerhardsletten.github.io/react-reader/files/alice.epub"
        location={pageLocation}
        locationChanged={locationChanged}
      />
    </div>
  );
};

export default BookReadingPage;
