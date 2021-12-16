import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { editAccountAttempt, setFieldValue } from '../../actions';
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
  const handleEditAccountFormSubmit = (event) => {
    event.preventDefault();
    console.log('handler OK');
    dispatch(editAccountAttempt());
  };

  onChangeHandler = (event) => {
    console.log(event.target.files[0]);
  };

  return (

    <div className="account-page">

      <form autoComplete="off" className="account-page__form" onSubmit={handleEditAccountFormSubmit}>

        <div className="account-page__avatar-button">
          <i className="account-page__avatar fas fa-upload" />

          <label className="custom-file-upload">
            <span className="sr-only">changement d'avatar</span>
            <input
              type="file"
              name="file"
              id="file"
              onChange={onChangeHandler}
            />

          </label>
        </div>

        <button
          type="submit"
          className="account-page__button"

        >
          Envoyer
        </button>

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

        <p className="account-page__password">
          <Link to="/">
            pour changer votre mot de passe, clickez ici
          </Link>
        </p>
      </form>
      <BookReview />
    </div>
  );
};
export default AccountPage;
