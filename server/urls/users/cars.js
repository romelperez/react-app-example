import i18n from 'i18n';

export default {
  '/cars': {
    get (req, res, next) {

      const title = i18n.t('cars.title');
      const content = 'Cars <br /> <a href="/">Index</a>';

      res.render('users/cars.html', {
        seo: { title },
        content
      });
    }
  }
};
