import i18n from 'shared/i18n';
import createReactFactory from 'server/tools/createReactFactory';
import App from 'client/static/home/containers/App';

export default {
  '/': {
    get (req, res) {

      const factory = createReactFactory(App);
      const title = i18n.t('home.title');
      const content = factory();

      res.render('static/home.html', {
        seo: { title },
        content
      });
    }
  }
};
