import { useEffect, useRef } from 'react';
import { ReactReader, ReactReaderStyle } from 'react-reader';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {
  updatePinnepageInBDD,
  loadBookFromAPI,
  postNewPinnedpageToBDD,
  setBookReadingPageDisplay,
} from '../../actions';
import BookReadingFooter from './BookReadingFooter';
import './styles.scss';

const BookReadingPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const isLogged = useSelector((state) => state.user.logged);
  const userId = useSelector((state) => state.user.id);
  const pinnedPages = useSelector((state) => state.user.pinnedpages);
  const fontSize = useSelector((state) => state.display.bookReadingPageDisplay.fontSize);

  // Check if a pinnedpage (pageLocation) exists for the current ebook
  let pageLocation = null;
  if (isLogged) {
    pinnedPages.forEach((pinnedPage) => {
      if (parseInt(pinnedPage.book.id, 10) === parseInt(id, 10)) {
        pageLocation = pinnedPage.page;
      }
    });
  }

  // If there is no pinnedpage, once the component is rendered, create a new one
  useEffect(
    () => {
      if (isLogged) {
        if (pageLocation === null) {
          dispatch(postNewPinnedpageToBDD(userId, id, null));
        }
      }
    },
    [], // (only once)
  );

  // Once the component is rendered, add a custom class to the body element 
  // (to manage footer display and page height)
  useEffect(
    () => {
      dispatch(loadBookFromAPI(id));

      const bodyElement = document.querySelector('body');
      bodyElement.classList.add('reading-page');

      return () => {
        bodyElement.classList.remove('reading-page'); // Remove the class when component is unmounted
      };
    },
  );

  // When location inside the epub is modified, updates the existent pinnedpage
  const locationChanged = (epubcifi) => {
    if (isLogged) {
      pinnedPages.forEach((pinnedPage) => {
        if (parseInt(pinnedPage.book.id, 10) === parseInt(id, 10)) {
          dispatch(updatePinnepageInBDD(pinnedPage.id, userId, id, epubcifi));
        }
      });
    }
  };

  // Generate epub URL
  const epub = useSelector((state) => state.books.book.epub);
  const baseURI = useSelector((state) => (state.display.baseURI));
  const epubURI = `${baseURI}/epub_folder/${epub}`;

  // Used by the library to custom rendition
  const renditionRef = useRef(null);
  useEffect(() => {
    if (renditionRef.current) {
      renditionRef.current.themes.fontSize(`${fontSize}%`);
    }
  }, [fontSize]);

  // Handler to change font size inside of the epub
  const changeFontSize = (newSize) => {
    dispatch(setBookReadingPageDisplay('fontSize', newSize));
  };

  // Custom CSS style for the *outside* of the epub
  const ownStyles = {
    ...ReactReaderStyle,
    readerArea: {
      ...ReactReaderStyle.readerArea,
      backgroundColor: '#2f2f2f',
    },
    titleArea: {
      ...ReactReaderStyle.titleArea,
      color: '#FFF',
    },
    tocArea: {
      ...ReactReaderStyle.tocArea,
      display: 'none',
    },
    tocButton: {
      ...ReactReaderStyle.tocButton,
      display: 'none',
    },
  };

  return (
    <div className="book-reading-page">
      <ReactReader
        url={epubURI}
        epubInitOptions={{
          openAs: 'epub',
        }}
        location={pageLocation}
        locationChanged={locationChanged}
        swipeable
        styles={ownStyles}
        getRendition={(rendition) => {
          renditionRef.current = rendition;
          renditionRef.current.themes.fontSize(`${fontSize}%`);
          rendition.themes.register('custom', { // Custum CSS inside the epub
            body: {
              backgroundColor: '#2f2f2f !important',
            },
            img: {
              border: '2px solid #e9ab9c',
              borderRadius: '5px',
            },
            div: {
              color: 'white',
              backgroundColor: '#2f2f2f !important',
            },
            p: {
              color: 'white',
              backgroundColor: '#2f2f2f !important',
            },
            h1: {
              color: 'white',
            },
            h2: {
              color: 'white',
            },
            a: {
              color: 'white',
            },
          });
          rendition.themes.select('custom');
        }}
      />
      <BookReadingFooter changeFontSize={changeFontSize} fontSize={fontSize} />
    </div>
  );
};

export default BookReadingPage;
