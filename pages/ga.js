// ga.js

import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-1MQDE7W3RC'); // Replace with your Tracking ID
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
