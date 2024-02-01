import { Console } from "console";
import { document } from "./types";

export const documents:document[] = [
    {
        id:1,
        private_key:"64b0f02e367de6fbc6de7410",
        reviewer_id:"194002A",
        contact:"07700000000",
        date:"2024/01/25",
        device:"mobile",
        platform:"facebook",
        Intervention_of_law:"yes",
        current_status:"bad",
        incident_details:"bad comments has published for my posts"
    }
]

export function print(print_object:any){
    console.log(print_object);
    
}