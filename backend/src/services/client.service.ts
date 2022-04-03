import { ClientModel } from "../models/client.model";
import { ErrorResponse, SuccessResponse } from "../responses";
import { getScore } from "../utils";
export const GetClients = async (res) => {
  try {
    const allClients = await ClientModel.find({})
    .sort({ created_at: "desc" })
    .limit(10)
    .exec();
    SuccessResponse({data:allClients,res})
  } catch (error) {
    ErrorResponse({data:{message:"Error querying clients"},res})
  }
  
};

export const GetClientByCedula = async (cedula,res) => {
  try {
    const client = await ClientModel.findOne({ clientId: cedula }).exec();
    SuccessResponse({data:client,res})
  } catch (error) {
    ErrorResponse({data:{message:"Client does not exist"},res})    
  }
};
export const updateClient =async (data,res) => {
  try {
    const client = await ClientModel.findOne({ _id: data._id }).exec();
    client.age = data.age
    client.score = getScore(data)
    client.email = data.email
    client.name = data.name
    client.work = data.work
    client.civilstatus = data.civilstatus
    client.clientId = data.clientId
    await client.save()
    SuccessResponse({data:{message:"Success Update"},res})

  } catch (error) {
    ErrorResponse({data:{message:"Update Failed"},res})    
    
  }
}
export const deleteClient =async (data,res) => {
  try {
    await ClientModel.deleteOne({_id:data._id})
    SuccessResponse({data:{message:"Success Delete"},res})
  } catch (error) {
    ErrorResponse({data:{message:"Delete Failed"},res})    
    
  }
}
export const createClient = async(data,res)=>{
  const created_at = new Date()
  const score = getScore(data)
  const clientData ={
    ...data,
    score,
    created_at
  }
  try {
    await ClientModel.create(clientData)
    SuccessResponse({data:{message:"OK"},res})
  } catch (error) {
    ErrorResponse({data:{message:"ERROR creating this client"},res})
  }
}