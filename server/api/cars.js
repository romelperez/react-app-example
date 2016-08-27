import Car from '../models/Car';

export default {
  '/api/cars': {
    get (req, res, next) {
      Car.find({}).exec(function (err, cars) {
        if (err) {
          return res.json({ error: err });
        }
        res.json({ data: cars });
      });
    }
  }
};
