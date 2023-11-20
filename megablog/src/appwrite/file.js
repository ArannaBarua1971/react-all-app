import { conf } from "../conf/conf";
import { Client, Storage,ID } from "appwrite";


export class fileManager{
    client = new Client();
    storage;

    constructor(){
        this.client.setEndpoint(conf.URL).setProject(conf.PROJECT_ID);
        this.storage = new Storage(this.client)
    }

    async fileUpload({file}){

        try{
            
            return await this.storage.createFile(conf.BUCKET_ID,ID.unique(),file)
        }
        catch(error){
            console.log(error.message)
            return false
        }
        
    }
    
    async fileDelete({fileId}){
        try{
            await this.storage.deleteFile(conf.BUCKET_ID,fileId)
            return true
        }
        catch(error){
            return false
        }

    }

    getFilePreview(fileId){
        const image= this.storage.getFilePreview(
            conf.BUCKET_ID,
            fileId
        )
        return image
    }

}

const fileManage = new fileManager()

export default fileManage;