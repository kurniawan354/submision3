import HomePage from '../views/pages/home-page';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/Favorite';

const routes = {

  '/': HomePage,
  '/home-page': HomePage,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
