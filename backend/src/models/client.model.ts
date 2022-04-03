import mongoose from "mongoose";
const ClientSchema = new mongoose.Schema({
  name: String,
  clientId:{type:Number,unique:true},
  email: {type:String,unique:true},
  age: Number,
  civilstatus: String,
  score: Number,
  work: Boolean,
  created_at: Date,
});
export const ClientModel = mongoose.model("Client", ClientSchema);
