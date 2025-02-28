import express from "express";
import cors from "cors"
import { sample_foods, sample_tags } from "./data";


const app = express();

app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.get("/api/foods", (req, res) =>{
    res.send(sample_foods);

});

app.get("/api/foods/search/:searchTerm", (req, res) =>{
    const foods = sample_foods.filter(food => food.name.toLowerCase().includes(req.params.searchTerm.toLowerCase()));

    res.send(foods);
});

app.get("/api/foods/tags", (req, res) =>{
    
    res.send(sample_tags);

});

app.get("/api/foods/tag/:tagName", (req, res) =>{
    const tag = req.params.tagName;
    
    if(tag==="All"){
        res.send(sample_foods);
      }
      else{
        res.send(sample_foods.filter(food=>food.tags?.includes(tag)));
      }

});

app.get("/api/foods/:foodId", (req, res) =>{
    const id = req.params.foodId;
    
    res.send(sample_foods.find(food=>food.id===id));

});

const port = 5000;

app.listen(port, ()=>{
    console.log("Posluša na http://localhost:" + port);
})