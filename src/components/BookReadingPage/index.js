import { useEffect, useRef, useState } from 'react';
import { ReactReader, ReactReaderStyle } from 'react-reader';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { setPinnedPage } from '../../actions';
import BookReadingFooter from './BookReadingFooter';
import './styles.scss';

const BookReadingPage = () => {
  const { id } = useParams();
  parseInt(id, 10);

  const pinnedPages = useSelector((state) => state.user.pinnedPages);
  let pageLocation;
  console.log(pinnedPages);
  pinnedPages.forEach((pinnedPage) => {
    if (parseInt(pinnedPage.bookId, 10) === parseInt(id, 10)) {
      pageLocation = pinnedPage.location;
    }
  });
  console.log(pageLocation);

  const dispatch = useDispatch();
  const locationChanged = (epubcifi) => {
    dispatch(setPinnedPage(id, epubcifi));
  };

  useEffect(
    () => {
      const bodyElement = document.querySelector('body');
      bodyElement.classList.add('reading-page');

      return () => {
        bodyElement.classList.remove('reading-page');
      };
    },
  );

  const [size, setSize] = useState(100);
  const renditionRef = useRef(null);
  const changeSize = (newSize) => {
    setSize(newSize);
  };
  useEffect(() => {
    if (renditionRef.current) {
      renditionRef.current.themes.fontSize(`${size}%`);
    }
  }, [size]);

  const ownStyles = {
    ...ReactReaderStyle,
    readerArea: {
      ...ReactReaderStyle.readerArea,
      backgroundColor: '#2f2f2f',
      // color: 'white',
    },
  };

  return (
    <div className="book-reading-page">
      <ReactReader
        url="https://gerhardsletten.github.io/react-reader/files/alice.epub"
        location={pageLocation}
        locationChanged={locationChanged}
        swipeable="true"
        styles={ownStyles}
        getRendition={(rendition) => {
          renditionRef.current = rendition;
          renditionRef.current.themes.fontSize(`${size}%`);
          rendition.themes.register('custom', {
            img: {
              border: '2px solid #e9ab9c',
              borderRadius: '5px',
            },
            p: {
              color: 'white',
            },
            h2: {
              color: 'white',
            },
          });
          rendition.themes.select('custom');
        }}
      />
      <BookReadingFooter changeSize={changeSize} size={size} />
    </div>
  );
};

export default BookReadingPage;
