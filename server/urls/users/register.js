import i18n from 'i18n';

export default {
  '/register': {
    get (req, res, next) {

      const lng = req.query.lng || 'en';
      const title = i18n.t('register.title', { lng });
      const content = 'Register <br /> <a href="/">Index</a>';

      res.render('users/register.html', {
        seo: { title },
        content
      });
    }
  }
};
