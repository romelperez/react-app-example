import mongoose, { Schema } from 'mongoose';

const BrandSchema = new Schema({
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
