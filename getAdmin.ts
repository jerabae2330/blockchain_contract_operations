import { document, return_ } from "./types";
import {init_state , getState} from './redux'

const operation = async (req:any , res:any) => {
    try{
            await init_state()
            const documents_:document[] = getState().document
            let return_docs:document[] = []
            for(let doc in documents_){
                if(documents_[doc].reviewer_id===""){
                    return_docs.push(documents_[doc])
                }
            }
            const response: return_={
                state:true,
                data:{
                    return_docs
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