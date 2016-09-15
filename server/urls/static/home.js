import i18n from 'i18n';
import app from 'static/home/server';

export default {
  '/': {
    get (req, res, next) {

      const title = i18n.t('home.title');
      const content = app();

      res.render('static/home.html', {
        seo: { title },
        content
      });
    }
  }
};
