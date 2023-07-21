export default (req, res) => {

    if (req.method === "GET") {
        res.status(200).json({nome: "Felipe" })
    }
    else{
        res.status(200).json({ nome: "Maria" })
    }

}