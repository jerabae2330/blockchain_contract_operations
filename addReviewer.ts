import {  document, return_ } from "./types";
import { documents } from "./utils";

const operation = async (req:any , res:any) => {
    try{
            let body:document = {
                id:0,
                private_key : "",
                reviewer_id:req.params.reviewer_id,
                contact:"",
                date:"",
                device:"",
                platform:"",
                Intervention_of_law:"",
                current_status:"",
                incident_details:""
            }
            for(let doc in documents){
                if(documents[doc].id===req.body.doc_id){
                    body = documents[doc]
                    documents[doc].reviewer_id=req.params.reviewer_id
                }
            }
            console.log(documents)
            let response: return_={
                state:true,
                data:{
                    documents
                }
            }
            res.send(response)
    }
    catch{
        console.log("catch")
        res.send("not valid")
        return
    }
}

export default operation