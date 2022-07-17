const socketio = require("socket.io");
const express = require("express");
const http = require("http");
const app = express();

const PORT = process.env.PORT || 2018
const hostname = process.env.HOST || "localhost"
const server = http.createServer(app) // sunucuyu derleyecek handler (express)

const io = socketio(server,{ //sunucu olusturuyoruz, sunucu icerisine bir tane server bekler
  cors: { //localhost'da calistigimizdan sunucu tarafı icin cors kurmamiz gerekiyor
    origin :"*", //nereden gelirse gelsin calistir.
    methods: ["GET","POST","OPTIONS"],
  }
})  

server.listen(PORT,hostname,()=>{
  //console.log(`server running at http://${hostname}:${PORT}/`);

  //sunucuyu io temsil ediyor, burada io.on: sunucu uzerinden gelen eventleri(gelen socket sunucusu) kontrol ediyoruz
  // io.on("connection", socket =>{}) burada connection eventi geliyorsa bunun client oldugunu anliyoruz
  // ona da socket dedik

  io.on("connection", (socket)=>{
    console.log("client ready!!!!!!")
    console.log(socket.id)

    socket.emit("WELCOME_MESSAGE",`welcome to hell ${socket.id} !!!!`) //karsilama mesaji gonder
    socket.on("SEND_MESSAGE", data => {
      console.log("Message has arrived !!!!!", data)
    })
  })
})