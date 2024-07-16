/*const express = require('express')
//const http = require('http')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
app.use(express.json())
app.use(cors()) */

const app = require('./app')
const config = require('./utils/config')
const logger = require('./utils/logger')

/*if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]
                  
const mongoUrl = `mongodb+srv://solarsystems3:Ji6PK7mSbT2iBAby@clustertest.zwk5zxv.mongodb.net/bloglist?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose.connect(mongoUrl)

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})

const Blog = mongoose.model('Blog', blogSchema)*/

//const mongoUrl = 'mongodb://localhost/bloglist'

/*let blogs = [
    {
      id: 1,
      title: "HTML is easy",
      author: "Brian Johnson",
      url: "bjbj",
      likes: 2
    },
    {
      id: 2,
      title: "Hzzzzz is easy",
      author: "Mal Young",
      url: "kjfkjdddddk",
      likes: 8
    },
    {
      id: 3,
      title: "its so  easy",
      author: "Johnson Boris",
      url: "zzzzzzzzzzzzz",
      likes: 6
    }
  ]

  const blog =new Blog({
   title: "Pentti Murole blogi",
    author: "Pentti Murole",
    url: "https://penttimurole.blogspot.com/",
    likes: 12,
  })*/

  /*blog.save().then(result => {
    console.log('blog saved!')
    mongoose.connection.close()
  })*/

  /*Blog.find({}).then(result => {
    result.forEach(blog => { 
    console.log('blog saved!')
  })
    mongoose.connection.close()
  })*/


  /*app.get('/', (req, res) => {
    res.send('<h1>Hello!</h1>')
  })


  app.get('/api/blogs', (request, response) => {
    Blog.find({}).then(blogs => {
      response.json(blogs)
       })
})*/

/*app.post('/api/blogs', async (request, response) => {
  const body = request.body;

  if (!body.title || !body.author || !body.url || !body.likes) {
    return response.status(400).json({
      error: 'Missing required fields: title, author, url, likes'
    });
  }

  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes
  });

  try {
    const savedBlog = await blog.save();
    response.status(201).json(savedBlog);
  } catch (error) {
    response.status(500).json({ error: 'Failed to add the blog to the database' });
  }
});*/






/*
app.get('/api/blogs/:id', (request, response) => {
  const id = Number(request.params.id)
  console.log(id)
  const blog = blogs.find(blog => blog.id === id)
  if (blog) {
    console.log(blog.title)
    response.json(blog)
  } else {*/
  /*Blog
    .find({})
    .then(blogs => {*/
    //response.status(404).send('blog not found')
    /*response.status(404).end()
    }
    })*/
//})

 /*const generateId = () => {
  return Math.floor(Math.random() * 1000000)
 const maxId = blogs.length > 0
  ? Math.max(...blogs.map(b => b.id))
  : 0
  return maxId + 1 
}*/

/*app.post('/api/blogs', (request, response) => {
  const body = request.body

  if (!body.title) {
    return response.status(400).json({
      error: 'content missing'
    })
  }
  const blog = {
    id: generateId(),
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes
  }

  blogs = blogs.concat(blog)
  response.json(blog)
})*/

  /*  const blog = new Blog(request.body)
  blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
})*/

//const app = http.createServer((request, response) => {
  //response.writeHead(200, { 'Content-Type': 'application/json' })
  //response.writeHead(200, { 'Content-Type': 'text/plain' })
 /// response.end(JSON.stringify(blogs))
  //response.end('Hezzz babe')
//})*/

/*const PORT = 3003
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})*/

app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})

/*const PORT = 3003
app.listen(PORT)
  console.log(`Server running on port ${PORT}`)*/

  /*
PS administrator
netstat -ano | findstr :3001
taskkill /PID 3984 /F

Käynnistetään palvelin uudelleen (palvelin suljetaan painamalla konsolissa yhtä aikaa ctrl + c) ja refreshataan selain.
*/
