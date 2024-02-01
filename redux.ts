import { documents } from "./utils";
import {document} from './types'
import {GetAllAssets ,addAssests} from './chain_operations/chain'

let appState = {
  document:documents
};

export async function init_state(){
  try{
    const documents_ = await GetAllAssets()
    appState.document = documents_

  }
  catch{
    appState.document = documents
  }
}

export async function increment(document:document) {
  try{
    await addAssests(document)
  }
  catch{

  }
  finally{
    appState.document.push(document);
  }
}

export function getState() {
  return { ...appState };
}