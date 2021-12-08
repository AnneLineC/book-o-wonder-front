import PropTypes from 'prop-types';

import './styles.scss';

const Favorite = ({ favorite }) => (
    if (isLogged) {
        if (isFavorite) {
            return ( 
                <div className = "full-star"> </div>
            )
        } else {
            return ( 
                <div className = "empty-star"> </div>
            )
        }
    } else {
        return null
    };
);

export default Favorite;