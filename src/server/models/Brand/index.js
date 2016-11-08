import mongoose from 'mongoose';
import settings from 'server/settings';

if (!mongoose.connection.readyState) {
  mongoose.connect(settings.mongodb.url);
}

const BrandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
});

const BrandModel = mongoose.model('brands', BrandSchema);

export default BrandModel;
