import { useEffect, useRef, useState } from 'react';
import { ReactReader, ReactReaderStyle } from 'react-reader';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { updatePinnepageInBDD, loadBookFromAPI, postNewPinnedpageToBDD } from '../../actions';
import BookReadingFooter from './BookReadingFooter';
import './styles.scss';

const BookReadingPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const isLogged = useSelector((state) => state.user.logged);
  const userId = useSelector((state) => state.user.id);
  const pinnedPages = useSelector((state) => state.user.pinnedpages);

  let pageLocation = null;

  if (isLogged) {
    pinnedPages.forEach((pinnedPage) => {
      if (parseInt(pinnedPage.book.id, 10) === parseInt(id, 10)) {
        pageLocation = pinnedPage.page;
        console.log(`Le marque page existe déjà et vaut : ${pageLocation}`);
      }
    });
  }

  useEffect(
    () => {
      if (isLogged) {
        if (pageLocation === null) {
          dispatch(postNewPinnedpageToBDD(userId, id, null));
        }
      }
    },
    [],
  );

  useEffect(
    () => {
      dispatch(loadBookFromAPI(id));

      const bodyElement = document.querySelector('body');
      bodyElement.classList.add('reading-page');

      return () => {
        bodyElement.classList.remove('reading-page');
      };
    },
  );

  const locationChanged = (epubcifi) => {
    if (isLogged) {
      console.log(epubcifi);
      console.log(pinnedPages);
      pinnedPages.forEach((pinnedPage) => {
        if (parseInt(pinnedPage.book.id, 10) === parseInt(id, 10)) {
          dispatch(updatePinnepageInBDD(pinnedPage.id, userId, id, epubcifi));
        }
      });
    }
  };

  const epub = useSelector((state) => state.books.book.epub);
  const baseURI = useSelector((state) => (state.display.baseURI));
  const epubURI = `${baseURI}/epub_folder/${epub}`;
  // console.log(epubURI);

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
        // url="https://gerhardsletten.github.io/react-reader/files/alice.epub" // Ebook d'exemple fourni avec la librairie, marche bien
        // url="https://www.ebooksgratuits.com/newsendbook.php?id=457&format=epub" // Ebook pris au hasard sur le net pour tester
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
          renditionRef.current.themes.fontSize(`${size}%`);
          rendition.themes.register('custom', {
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
      <BookReadingFooter changeSize={changeSize} size={size} />
    </div>
  );
};

export default BookReadingPage;
