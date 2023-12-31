import {Schema, model, models} from "mongoose" 

const SchemaBlog = new Schema ({
    title : {type : String, required : true}, 
    category : {type : String }, 
    description : {type : String, required : true}, 
    thumbnail : {type : String, required : true}, 
    titleData : {type : String}, 
    descData : {type : String}, 
  }, {timestamps : true}) 

const M_Blog = models.posts || model("posts" , SchemaBlog)

export default M_Blog