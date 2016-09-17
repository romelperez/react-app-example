import i18n from 'i18n';

export default {
  '/register': {
    get (req, res, next) {

      const title = i18n.t('register.title');

      res.render('users/register.html', {
        seo: { title }
      });
    }
  }
};
