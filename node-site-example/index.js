const express = require("express");
const app = express();


app.listen(3000, function() {
    console.log("Example app listening on port 3000!");
  });

  app.set('view engine', 'pug');

  app.get("/", (req, res) => {
    const superheroes = [
      { name: "SPIDER-MAN", image: "spiderman.jpg" },
      { name: "CAPTAIN MARVEL", image: "captainmarvel.jpg" },
      { name: "HULK", image: "hulk.jpeg" },
      { name: "THOR", image: "thor.jpg" },
      { name: "IRON MAN", image: "ironman.jpg" },
      { name: "DAREDEVIL", image: "daredevil.jpg" },
      { name: "BLACK WIDOW", image: "blackwidow.jpg" },
      { name: "CAPTAIN AMERICA", image: "captanamerica.jpeg" },
      { name: "WOLVERINE", image: "wolverine.jpg" }
    ];
  
    res.render("index", { superheroes: superheroes });
  });

  app.use(express.static('public'));

