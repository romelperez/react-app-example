import i18n from 'i18n';
import app from 'static/index/server';

export default {
  /**
   * @api {GET} / Request Index
   * @apiName GetIndex
   * @apiGroup General
   * @apiDescription
   * Get the project index site as HTML content for public access.
   */
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
