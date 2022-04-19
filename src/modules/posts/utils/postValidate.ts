import * as Joi from "joi";
import { CreatePost } from "@src/modules/posts/dtos/createPostDto";

export class PostValidate {
  private joi: Joi.AnySchema;
 
  public vCreatePost(signupObj: CreatePost) {
    const object = {
        title: Joi.string().required(),
        description: Joi.string().required() 
    };
    return this.setUpJoi(object, signupObj);
  }
  private setUpJoi(objectInit: any, objectUpdate: any) {
    this.joi = Joi.object(objectInit);
    return this.joi.validateAsync(objectUpdate);
  }
}