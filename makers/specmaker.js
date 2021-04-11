const fs = require("fs");

exports.specmaker = (requests, path, arr, func) => {
    console.log(arr)

  for (let i = 0; i < arr.length; i++) {
    let counter = 0;

    fs.writeFileSync(
      path + "/Спецификация_№" + arr[i] + ".xls",
      "№" +
        "\t" +
        "файл" +
        "\t" +
        "материал" +
        "\t" +
        "толщина" +
        "\t" +
        "количество" +
        "\n",
         'utf8'
    );

    for (let j = 0; j < requests.length; j++) {
      if (requests[j].specification === arr[i]) {

        counter = counter + 1

        fs.appendFile(
            path + "/Спецификация_№" + arr[i] + ".xls",
          counter +
            "\t" +
            requests[j].userrequest +
            "_" +
            requests[j].quantity +
            ".dxf" +
            "\t" +
            requests[j].steel +
            "\t" +
            requests[j].thickness +
            "\t" +
            requests[j].quantity +
            "\n",'utf8',
          (err) => {
            if (err) throw err;
            console.log("Data has been added!");
          }
        );
      }
    }
  }
  func();
};
