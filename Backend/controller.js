import schema from "./user.model.js"
export function addtask(req,res){
    try {
    const {...movies}=req.body
    console.log(req.body);
    res.status(201).send(schema.create({...movies}));
        
    } catch (error) {
        res.status(404).send(error);
        
    }
    

}
export async function getdata(req,res){
    let task=await schema.find()
        res.status(200).send(task)
    

}
export async function getDetails(req,res){
    const{id}=req.params;
    console.log(id);
    let movie= await schema.findOne({_id:id});
    console.log(movie);
    res.status(200).send(movie)
}

export async function delMovie(req,res){
    const{id}=req.params;
    console.log(id);
    const data=schema.deleteOne({_id:id})
    data.then((resp)=>{
        res.status(200).send(resp)
    }).catch((error)=>{
        res.status(404).send(error)
    })
}