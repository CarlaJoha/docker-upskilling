const server = require("./src/server");
const { connectDB } = require("./src/db");

const port = process.env.PORT || 8004;

// Film.list().then((res)=> console.log(res))

connectDB(
  server.listen(port, () => {
    console.log(`>> Server on port ${port}`);
  })
  );
  
  // Character.list().then((res)=> console.log(res))
  // Character.getById("6").then((res) => console.log(res))
  // Character.insert({
  //   _id: "300",
  //   name: "Chica",
  //   height: "30cm",
  //   mass: "3kg",
  // }).then((res) => console.log(res));