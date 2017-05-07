import { combineReducers } from 'redux';
import { routerReducer as router } from 'redux-router-kit';
import translation from './translation';
import network from './network';
import entities from './entities';
import visibilityFilter from './visibility-filter';
import todos from './todos';

export default combineReducers({
  router,
  translation,
  network,
  entities,
  visibilityFilter,
  todos,
});
