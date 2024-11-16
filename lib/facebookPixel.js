import ReactPixel from 'react-facebook-pixel';

const options = {
  autoConfig: true, // Habilita configurações automáticas.
  debug: false,     // Debug desativado.
};

export const initFacebookPixel = (pixelId) => {
  ReactPixel.init(pixelId, options);
};

export const trackPageView = () => {
  ReactPixel.pageView();
};
