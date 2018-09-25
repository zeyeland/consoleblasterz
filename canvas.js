var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var widthMain = document.getElementById('main').offsetWidth;

canvas.width = widthMain;//window.innerWidth * .78;
canvas.height = window.innerHeight;

var squareWidth = canvas.width / 11;
var squareHeight = canvas.height / 4;

