const fs = require("fs");
const { DxfCreator } = require("../dxf_creator");

exports.filemaker = (requests, path, arr) => {
  for (let i = 0; i < arr.length; i++) {
    let counter = 0;

    for (let j = 0; j < requests.length; j++) {
      if (requests[j].specification === arr[i]) {
        counter = counter + 1;

        DxfCreator(
          requests[j].config,
          JSON.parse(requests[j].params),
          (string) => {
            fs.writeFile(
              path + "/Спецификация № " + arr[i] +"/"+requests[j].userrequest+"_"+requests[j].quantity+ ".dxf",
              string,
              (err) => {
                if (err) console.log(err);
                else {
                  console.log("записано");
                }
              }
            );
          }
        );
      }
    }
  }
};
