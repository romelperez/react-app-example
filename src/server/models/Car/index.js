import mongoose from 'mongoose';
import settings from 'server/settings';

if (!mongoose.connection.readyState) {
  mongoose.connect(settings.mongodb.url);
}

const CarSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const CarModel = mongoose.model('cars', CarSchema);

export default CarModel;
