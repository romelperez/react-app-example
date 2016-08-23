import i18n from 'i18n';

export default {
  '/login': {
    get (req, res, next) {

      const lng = req.query.lng || 'en';
      const title = i18n.t('login.title', { lng });
      const content = 'Login <br /> <a href="/">Index</a>';

      res.render('users/login.html', {
        seo: { title },
        content
      });
    }
  }
};
