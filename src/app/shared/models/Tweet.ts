import { User } from "./User";

export class Tweet  {
    public id:string;
    public content:string;
    public user:User;
    public createdAt:Date;
    public updatedAt:Date;
    }


    export class ListTweet{
        data:Tweet[];
        message:string;
        total:number;
    }