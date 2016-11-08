import i18n from 'shared/i18n';

export default {
  '/cars': {
    get (req, res) {

      const title = i18n.t('cars.title');

      res.render('users/cars.html', {
        seo: { title }
      });
    }
  }
};
