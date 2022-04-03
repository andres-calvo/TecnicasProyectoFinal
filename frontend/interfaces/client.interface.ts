export interface ClientDb {
    _id:string,
    name:string,
    email:string,
    age:number,
    civilstatus: "Soltero" | "Casado",
    work:boolean,
    created_at:Date,
    clientId:number,
    score:number,
}