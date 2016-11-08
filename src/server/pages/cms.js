import i18n from 'shared/i18n';

export default {
  '/cms': {
    get (req, res) {

      const title = i18n.t('cms.title');
      const content = 'CMS <br /> <a href="/">Index</a>';

      res.render('cms.html', {
        seo: { title },
        content
      });
    }
  }
};
