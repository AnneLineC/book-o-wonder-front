import axios from 'axios';

const apiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {

    default:
      next(action);
  }
};

export default apiMiddleware;
