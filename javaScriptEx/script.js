'use strict';

const myProjects = [
  {
  //https://replit.com/@SRJCEthanWilde/CS50C-Week03-32-joeLinnemeier#index.html
    title: "Project 1",
    description: "Pyramid, fizzBuzz, and chess board",
    img_path:"images/p1.png",
    alt: "picture of Project1",
    link: "https://cs50c-week03-32-joelinnemeier.srjcethanwilde.repl.co/",
    date: "February 7, 2022"
  },
//https://replit.com/@SRJCEthanWilde/CS50C-Week04-25-joeLinnemeier#script.js
  {
    title: "Project 2",
    description: "Basic quiz game",
    img_path:"images/p2.png",
    alt: "picture of Project2",
    link: "https://cs50c-week04-25-joelinnemeier.srjcethanwilde.repl.co/",
    date: "February 14, 2022"
  },
//https://replit.com/@SRJCEthanWilde/CS50C-Week05-20-joeLinnemeier#index.html
  {
    title: "Project 3",
    description: "Multiple choice quiz",
    img_path:"images/p3.png",
    alt: "picture of Project3",
    link: "https://cs50c-week05-20-joelinnemeier.srjcethanwilde.repl.co/",
    date: "February 21, 2022"
  },

//https://replit.com/@SRJCEthanWilde/CS50C-Week06-19-joeLinnemeier#script.js
  {
    title: "Project 4",
    description: "Drag and drop quiz",
    img_path:"images/p4.png",
    alt: "picture of Project4",
    link: "https://cs50c-week06-19-joelinnemeier.srjcethanwilde.repl.co/",
    date: "February 28, 2022"
  },
//SKIPPNG WEEK 7 & 8 !!!!
//https://replit.com/@SRJCEthanWilde/CS50C-Week09-16-joeLinnemeier#index.html
  {
    title: "Project 5",
    description: "A promotional site of Jquery Plug-Ins",
    img_path:"images/p5.png",
    alt: "picture of Project5",
    link: "https://cs50c-week07-18-joelinnemeier.srjcethanwilde.repl.co/",
    date: "May 7, 2022"
  },

  {
    title: "Project 6",
    description: "A Food Tour with Google Maps API",
    img_path:"images/p6.png",
    alt: "picture of Project6",
    link: "https://cs50c-week08-20-joelinnemeier.srjcethanwilde.repl.co/",
    date: "March 14, 2022"
  },
  
  {
    title: "Project 7",
    description: "Bucket list using Google Maps API",
    img_path:"images/p7.png",
    alt: "picture of Project7",
    link: "https://cs50c-week09-16-joelinnemeier.srjcethanwilde.repl.co/",
    date: "March 28, 2022"
  },
//https://replit.com/@SRJCEthanWilde/CS50C-Week12-16-joeLinnemeier#index.html
//NOW WE NEED WEEK 10 and 11 !!
    {
    title: "Project 8",
    description: "Bar Graphs and Drawing with JavaScript Canvas",
    img_path:"images/p8.png",
    alt: "picture of Project8",
    link: "https://cs50c-week11-17-joelinnemeier.srjcethanwilde.repl.co/",
    date: "April 11, 2022"
    },
  
    {
    title: "Project 9",
    description: "Graphing data with JSON and D3JS",
    img_path:"images/p9.png",
    alt: "picture of Project9",
    link: "https://cs50c-week12-16-joelinnemeier.srjcethanwilde.repl.co/",
    date: "April 18, 2022"
    },
//https://replit.com/@SRJCEthanWilde/CS50C-Week14-16-joeLinnemeier#index.html
    {
    title: "Project 10",
    description: "Phaser Tutorial Game (Some Modifications)",
    img_path:"images/p10.png",
    alt: "picture of Project10",
    link: "https://cs50c-week13-17-joelinnemeier.srjcethanwilde.repl.co/",
    date: "April 25, 2022"
    },
  
    {
    title: "Project 11",
    description: "Phaser Tutorial Game (Much More Modification)",
    img_path:"images/p11.png",
    alt: "picture of Project11",
    link: "https://cs50c-week14-16-joelinnemeier.srjcethanwilde.repl.co/"
    }
  
];

var app = $("#appView");

for(var i=0; i<myProjects.length;i++)
  {
    app.append('<strong>'+ myProjects[i].title + '</strong>');
    app.append("<br>");
  app.append('<em>'+myProjects[i].description+'</em>');
    app.append("<br>");
    app.append('<button><i class="bi bi-cursor"></i> <a target="_blank" href =' + myProjects[i].link + '> View project </a> </button>');
    app.append("<br> <br>");
    app.append('<img src=' + myProjects[i].img_path + '>');
    app.append("<br> <br>");
  }