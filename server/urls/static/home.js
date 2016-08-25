import i18n from 'i18n';
import app from 'static/index/server';

export default {
  '/': {
    get (req, res, next) {

      const lng = req.query.lng || 'en';
      const title = i18n.t('index.title', { lng });
      const content = app();

      res.render('static/index.html', {
        seo: { title },
        content
      });
    }
  }
};
