const express = require("express");
const app = express();
const port = 3000;
const Joi = require("joi");
app.use(express.json());


const courses = [
  {
    id: 1,
    name: "course1",
  },
  {
    id: 2,
    name: "course2",
  },
  {
    id: 3,
    name: "course3",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.post("/api/courses", (req, res) => {
  const schema = {
    name : Joi.string().min(3).required()
  };

  const result = Joi.validate(req.body, schema);
  console.log(result);


  if(!req.body.name || req.body.name.length < 3){
    // 404 bad request here
    res.send(400).send("Name is required and should be minimum 3 character")
    return; 
  }

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  }
  courses.push(course);
  res.send(course);
});


app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send("The course with the given id was not found"); // 404
  res.send(course);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
