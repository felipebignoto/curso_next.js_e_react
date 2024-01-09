export default function params(req,res){
    res.status(200).send({
        params: req.query
    })
}