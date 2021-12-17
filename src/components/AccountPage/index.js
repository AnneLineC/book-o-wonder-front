import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setFieldValue } from '../../actions';
import BookReview from '../BookReview';

import './styles.scss';

const AccountPage = () => {
  const dispatch = useDispatch();

  const nicknameValue = useSelector((state) => state.user.nicknameValue);
  const emailValue = useSelector((state) => state.user.emailValue);

  const handleInputNicknameChange = (event) => {
    dispatch(setFieldValue('nicknameValue', event.target.value));
  };
  const handleInputEmailChange = (event) => {
    dispatch(setFieldValue('emailValue', event.target.value));
  };

  return (

    <div className="account-page">

      <form autoComplete="off" className="account-page__form">

        <div className="account-page__avatar-button">
          <i className="account-page__avatar fas fa-upload" />

          <label className="custom-file-upload">
            <span className="sr-only">changement d'avatar</span>
            <input
              type="file"
              name="file"
              id="file"
            />
          </label>
        </div>

        <p> Inscrit depuis le </p>
        <label className="account-page__label" htmlFor="pseudo">
          <span className="sr-only">Pseudo</span>
          <input
            className="account-page__input"
            type="text"
            name="nickname"
            id="nickname"
            placeholder="Pseudo"
            value={nicknameValue}
            onChange={handleInputNicknameChange}
          />
        </label>

        <label className="account-page__label" htmlFor="email">
          <span className="sr-only">Adresse Mail</span>
          <input
            className="account-page__input"
            type="email"
            name="email"
            id="email"
            placeholder="Adresse mail"
            value={emailValue}
            onChange={handleInputEmailChange}
          />
        </label>

        <p>
          Pour changer votre mot de passe, <span className="account-page__password"><Link to="/mon-compte/mot-de-passe">cliquez ici</Link></span>
        </p>
      </form>

      <BookReview />
    </div>
  );
};
export default AccountPage;
