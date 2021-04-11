const fs = require("fs");
const { dirmaker } = require("./makers/dirmaker");
const { filemaker } = require("./makers/filesmaker");
const { specmaker } = require("./makers/specmaker");

exports.requestprinter = (requests,report) =>{

dirmaker(requests,requests[0].request,(path,arr)=>{
    specmaker(requests,path,arr,()=>{
        filemaker(requests,path,arr,()=>{

        })
    })
})


}