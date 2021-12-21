import { useSelector, useDispatch } from 'react-redux';
import { useRef } from 'react';

import { Link } from 'react-router-dom';
import { editPictureAccountAttempt, editAccountAttempt, setFieldValue } from '../../actions';
import BookReview from '../BookReview';

import './styles.scss';

const AccountPage = () => {
  // const avatarInput = useRef(null);

  // const dispatch = useDispatch();

  const nickname = useSelector((state) => state.user.name);
  const email = useSelector((state) => state.user.email);

  // const handleInputNicknameChange = (event) => {
  //   dispatch(setFieldValue('nicknameValue', event.target.value));
  // };

  // const handleInputEmailChange = (event) => {
  //   dispatch(setFieldValue('emailValue', event.target.value));
  // };

  // const handleEditPictureAccountFormSubmit = (event) => {
  //   event.preventDefault();
  //   console.log('picture OK');
  //   console.log(avatarInput.current.value);
  //   dispatch(editPictureAccountAttempt(avatarInput.current.value));
  // };

  // const onChangeHandler = (event) => {
  //   console.log(event.target.files[0]);
  // };

  const handleEditAccountFormSubmit = (event) => {
    event.preventDefault();
    console.log('handler OK');
    dispatch(editAccountAttempt());
  };


  return (

    <div className="account-page">

      {/* <form autoComplete="off" className="account-page__form-top" onSubmit={handleEditPictureAccountFormSubmit}>

        <div className="account-page__avatar-button">
          <i className="account-page__avatar fas fa-upload" />

          <label className="account-page__upload">
            <span className="sr-only">changement d'avatar</span>
            <input
              type="file"
              name="profilePic"
              id="profilePic"
              ref={avatarInput}
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
      </form> */}

      {/* <form autoComplete="off" className="account-page__form-bottom" onSubmit={handleEditAccountFormSubmit}>
        <p>Inscrit depuis le </p>
        <label className="account-page__label" htmlFor="pseudo">
          <span className="sr-only">Pseudo</span>
          <input
            className="account-page__input"
            type="text"
            name="nickname"
            id="nickname"
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
      </form> */}

      <h1 className="account-page__title">Paramètres du compte</h1>

      <div className="account-page__infos">
        <div className="account-page__entry">
          <p className="account-page__label">Pseudo :</p>
          <p>{nickname}
            {/* <i className="fas fa-pencil-alt" /> */}
          </p>
        </div>
        <div className="account-page__entry">
          <p className="account-page__label">Adresse mail :</p>
          <p>{email}
            {/* <i className="fas fa-pencil-alt" /> */}
          </p>
        </div>
        <div className="account-page__entry account-page__entry--password">
          <Link to="/mon-compte/mot-de-passe">Modifier le mot de passe</Link>
        </div>
      </div>


    </div>
  );
};
export default AccountPage;
