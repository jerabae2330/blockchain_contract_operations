import { type } from "os";

export type user={
    name:string,
    email:string,
    password:string,
    student_id?:string
    userType:string
}

export type document={
    id?:number
    private_key:string,
    reviewer_id:string,
    contact:string,
    date:string,
    device:string,
    platform:string,
    Intervention_of_law:string,
    current_status:string,
    incident_details:string
}

export type return_= {
    state:boolean,
    data?:object
}