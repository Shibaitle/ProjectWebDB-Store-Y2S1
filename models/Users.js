import mongoose, {model, Schema, models} from "mongoose";

const UserSchema = new Schema({
  username: {type:String, required:true},
  description: String,
  email: {type:String},
  description: String,
  password: {type:String},
  description: String,
  balance: {type: Number, required: true},
  category: {type:mongoose.Types.ObjectId, ref:'Category'},
  properties: {type:Object},
}, {
  timestamps: true,
});

export const Users = models.Users || model('Users2', User);