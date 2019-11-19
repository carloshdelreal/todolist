import './style.scss';
import load from './js/pageload';
import listeners from './js/listeners';

load();

window.onload = () => {
  listeners();
};
