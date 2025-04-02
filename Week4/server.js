const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost:27017/myprojectDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB!');
});

const ProjectSchema = new mongoose.Schema({
  title: String,
  image: String,
  link: String,
  description: String,
});
const Project = mongoose.model('Project', ProjectSchema);  

app.get('/api/projects', async (req, res) => {
  const projects = await Project.find({});
  res.json({ statusCode: 200, data: projects, message: "Success" });
});

app.listen(port, () => {
  console.log("App listening to: " + port);
});
