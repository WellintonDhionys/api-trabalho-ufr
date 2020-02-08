const server = require("./server");

server.listen(process.env.PORT || 3001, () => {
  console.log("server up!");
});
