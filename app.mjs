import express from "express";
const app = express();
const port = 4000 ;

app.get("/profiles",(req,res) => {
    const response = {
        data: {
            name: 'john',
            age: 20
        }
    };
    // Send the response with status 200
    res.status(200).json(response);
    
});
app.listen(port, ()=> {
    console.log(`Server is runing at ${port}`);
    
});