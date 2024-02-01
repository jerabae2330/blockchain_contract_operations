import { document, return_ } from "./types";
import { documents } from "./utils";
import {increment} from './redux'

const operation = async (req:any , res:any) => {
    try{
                const body:document= {
                    id:req.body.id,
                    private_key:req.body.private_key,
                    reviewer_id:"",
                    contact:req.body.contact,
                    date:req.body.date,
                    device:req.body.device,
                    platform:req.body.platform,
                    Intervention_of_law:req.body.intervention,
                    current_status:req.body.current_status,
                    incident_details:req.body.incident_details
                }
                console.log(body)
                documents.push(body)
                //Add data to blockchain
                await increment(body)
                const response: return_={
                    state:true,
                    data:{
                        body,
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
    try{
       
    }
    catch{
        res.send("error")
    }
}

export default operation