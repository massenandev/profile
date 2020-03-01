const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))


server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false
})

server.get("/", function (req, res){
    const about = {
        avatar_url: "https://avatars0.githubusercontent.com/u/56275776?s=460&v=4",
        name: "MassenanDev",
        role: "Software Developer",
        description: 'Backend development as a passion and building a full-stack knowledge. Learning from <a href="https://rocketseat.com.br/" target="_blank">Rocketseat</a>.',
        links: [
            { name: "GitHub", url: "https://github.com/massenandev" },
            { name: "LinkedIn", url: "https://www.linkedin.com/in/leticiamassenan/" },
            { name: "Instagram", url: "https://www.instagram.com/massenanpersonal/" }
        ]
    }


    return res.render("about", { about })
})

server.get("/development", function (req, res){
    return res.render("development",{ items: videos })
})

server.listen(5000, function(){
    console.log("Server is running")
})