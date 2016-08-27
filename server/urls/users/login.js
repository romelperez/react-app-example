import i18n from 'i18n';

export default {
  '/login': {
    get (req, res, next) {

      const title = i18n.t('login.title');
      const content = 'Login <br /> <a href="/">Index</a>';

      res.render('users/login.html', {
        seo: { title },
        content
      });
    }
  }
};
