import M_product from "@/server/models/M_posts"
import {MongoConnection} from "@/server/MongoConnection"

export default async function handler (req , res){
  const {method} = req ;
  await MongoConnection() ;

  if(method == "GET"){
  M_product.find()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(400).json({message:err}))
  }

  if(method == "POST"){
  M_product.create(req.body)
    .then(data => res.status(201).json(data))
    .catch(err => res.status(400).json({message:err}))
  }
}