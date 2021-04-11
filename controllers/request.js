const { requestprinter } = require("../requestprinter")



module.exports.request = function(req,res){
    requestprinter(req.body.value, (report)=>{
        console.log(report)
    })
    
}