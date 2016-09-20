import i18n from 'i18n';

export default {
  '/cars': {
    get (req, res, next) {

      const title = i18n.t('cars.title');

      res.render('users/cars.html', {
        seo: { title }
      });
    }
  }
};
