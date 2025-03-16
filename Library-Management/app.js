const express = require("express");

const books = [
  {
    bookName: "Rudest Book Ever",
    bookAuthor: "Shwetabh Gangwar",
    bookPages: 200,
    bookPrice: 240,
    bookState: "Available",
  },
  {
    bookName: "Do Epic Shit",
    bookAuthor: "Ankur Wariko",
    bookPages: 200,
    bookPrice: 240,
    bookState: "Available",
  },
];

const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.render("home", { data: books });
});

app.post("/", (req, res) => {
  const inputBookName = req.body.bookName;
  const inputBookAuthor = req.body.bookAuthor;
  const inputBookPages = parseInt(req.body.bookPages, 10);
  const inputBookPrice = parseFloat(req.body.bookPrice);

  books.push({
    bookName: inputBookName,
    bookAuthor: inputBookAuthor,
    bookPages: inputBookPages,
    bookPrice: inputBookPrice,
    bookState: "Available",
  });

  res.render("home", { data: books });
});

app.post("/issue", (req, res) => {
  var requestedBookName = req.body.bookName;
  let book = books.find((book) => book.bookName === requestedBookName);
  if (book) {
    book.bookState = "Issued";
  }
  res.render("home", { data: books });
});

app.post("/return", (req, res) => {
  var requestedBookName = req.body.bookName;
  let book = books.find((book) => book.bookName === requestedBookName);
  if (book) {
    book.bookState = "Available";
  }
  res.render("home", { data: books });
});

app.post("/delete", (req, res) => {
  var requestedBookName = req.body.bookName;
  const index = books.findIndex((book) => book.bookName === requestedBookName);

  if (index !== -1) {
    books.splice(index, 1);
  }

  res.render("home", { data: books });
});

app.listen(3000, () => {
  console.log("App is running on port 3000");
});
