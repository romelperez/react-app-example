import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  hash: {
    type: String,
    required: true,
  },
  active: Boolean,
  admin: Boolean,
});

const UserModel = mongoose.model('users', UserSchema);

export default UserModel;
