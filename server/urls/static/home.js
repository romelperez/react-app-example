import i18n from 'i18n';
import app from 'static/index/server';

export default {
  '/': {
    get (req, res, next) {

      const title = i18n.t('index.title');
      const content = app();

      res.render('static/index.html', {
        seo: { title },
        content
      });
    }
  }
};
