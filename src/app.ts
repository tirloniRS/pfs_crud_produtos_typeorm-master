import express from "express";
import  AppDataSource from "./data-source";
import rotaProduto from './rotas/produto';

AppDataSource.initialize().then( () =>{
const app = express();
const PORT = 3000;

app.use(express.json())
app.use(express.urlencoded({extended:true}));


app.use('/api/produtos', rotaProduto);



app.listen(PORT, () => {
    console.log(`🚀 🆙 Servidor rodando em http://localhost:${PORT}`);    
})

})
