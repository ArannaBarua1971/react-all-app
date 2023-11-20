import { conf } from "../conf/conf";
import { Client, Account, ID } from "appwrite";


export class Authorization{
    client =new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.URL) // Your API Endpoint
        .setProject(conf.PROJECT_ID)
        this.account = new Account(this.client)
    }


    async createUser({email,password,name}) {
        try{
            const user = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            );

            if(user){

                const login =this.login({email,password})
                return true
            }
        }
        catch(error){
            throw error
        }
    }

    async authUser(){
        try{
            const authuser=await this.account.get()
            return authuser;
        }
        catch(error){
            throw error
        }
    }

    async login({email,password}){
        try{
            return await this.account.createEmailSession(email,password)
        }
        catch(error){
            throw error
        }
    }
    
    async logout(){
        try{
            await this.account.deleteSessions()
            return true
        }
        catch(error){
            return false
        }
    }
}

const auth = new Authorization()

export default auth