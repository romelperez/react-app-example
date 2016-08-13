// GET /

module.exports.path = '/';

module.exports.route = function (route) {
  route.get(function (req, res, next) {
    res.render('index.html', {
      seo: {
        title: 'Index title'
      },
      content: '<div>Index Application</div>'
    });
  });
};
