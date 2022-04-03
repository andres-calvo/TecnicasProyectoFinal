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
    const client = await ClientModel.findOne({ cedula: cedula }).exec();
    SuccessResponse({data:client,res})
  } catch (error) {
    ErrorResponse({data:{message:"Client does not exist"},res})    
  }
};

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