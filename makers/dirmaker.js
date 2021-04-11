const fs = require("fs");

exports.dirmaker = (requests, request, path) => {
  console.log(requests);

  let arr = [];

  for (let i = 0; i < requests.length; i++) {
    arr.push(requests[i].specification);
  }
  const result = arr.reduce((x, y) => (x.includes(y) ? x : [...x, y]), []);
  console.log(result);

  let Path = "./requests/Заявка №" + request;


  const dirpromise = new Promise((resolve,reject)=>{
    const dirmake = () => {
      if (!fs.existsSync(Path)) {
        fs.mkdirSync(Path);
      }
      for (let i = 0; i < result.length; i++) {
        let PathSp =
          "./requests/Заявка №" + request + "/Спецификация № " + result[i];
        if (!fs.existsSync(PathSp)) {
          fs.mkdirSync(PathSp);
        }
      }
    };
    resolve(dirmake());
  })
  dirpromise.then(()=>{
    path(Path, result);
  })

  
};
