import { conf } from "../conf/conf";
import { Client, Databases, Query } from "appwrite";

export class articleService {
  client = new Client();
  databases;

  constructor() {
    this.client.setEndpoint(conf.URL).setProject(conf.PROJECT_ID);
    this.databases = new Databases(this.client);
  }

  async createPost({title,slug,description,featured_img,user_id,status}) {
    try {
      
      return await this.databases.createDocument(
        conf.DATABASE_ID,
        conf.COLLECTION_ID,
        slug,
        {
          title,
          description,
          featured_img,
          user_id,
          status,
          slug,
        }
      );
    } catch (error) {
      console.log(error.message)
      throw error;
    }
  }

  async getSepecificePost(slug){
    try{

        return await this.databases.getDocument(conf.DATABASE_ID,conf.COLLECTION_ID,slug)

    }catch(error){
        throw error
        return false
    }
  }

  async getAllPost(){
    try{
        return await this.databases.listDocuments(
            conf.DATABASE_ID,
            conf.COLLECTION_ID,
            [
                Query.equal('status','active')
            ]
            )
    }
    catch(error){   
        throw error
    }
  }

  async updatePost(slug,{title,description,status,featured_img}){

    try{
        return await this.databases.updateDocument(
            conf.DATABASE_ID,
            conf.COLLECTION_ID,
            slug,
            {
                title,
                description,
                status,
                featured_img
            }
            )
    }catch(error){
       return false
    }

  }

  async deletePost({slug}){
    try{
        await this.databases.deleteDocument(conf.DATABASE_ID,conf.COLLECTION_ID,slug)
        return true
    }
    catch(error){
        return false
    }
  }
}

 const postController= new articleService()

 export default postController
