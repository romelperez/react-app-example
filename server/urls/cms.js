import i18n from 'i18n';

export default {
  '/cms': {
    get (req, res, next) {

      const lng = req.query.lng || 'en';
      const title = i18n.t('cms.title', { lng });
      const content = 'CMS <br /> <a href="/">Index</a>';

      res.render('cms.html', {
        seo: { title },
        content
      });
    }
  }
};
