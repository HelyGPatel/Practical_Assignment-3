const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/Pruduct_MeanStack").then(()=>{
    console.log("done");
}).catch((e)=>{
    console.log(e);
})