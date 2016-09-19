import mongoose, { Schema } from 'mongoose';

const CarSchema = new Schema({
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
