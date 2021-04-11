const fs = require("fs");

exports.dirmaker = (requests, request, path) => {
  console.log(requests);
  let arr = [];
  let arr1 = [];

  for (let i = 0; i < requests.length; i++) {
    arr.push(requests[i].specification);
    arr.push(requests[i].specification);
  }
  const result = arr.reduce((x, y) => (x.includes(y) ? x : [...x, y]), []);
  console.log(result);

  let Path = "./requests/Заявка №" + request;

  if (fs.existsSync(Path)) {
    path(Path, result);
  } else {
    fs.mkdirSync(Path);
    path(Path, result);
  }
  for (let i = 0; i < result.length; i++) {
    let PathSp =
      "./requests/Заявка №" + request + "/Спецификация № " + result[i];
    if (!fs.existsSync(PathSp)) {
      fs.mkdirSync(PathSp);
    }
  }
};
