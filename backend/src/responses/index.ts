export const ErrorResponse=({data,res})=>{
    res.status(404).send(data)
}

export const SuccessResponse=({data,res})=>{
    res.status(200).send(data)
}