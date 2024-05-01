const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors()); // Isso permitirá todas as origens por padrão
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const linguagens = [
    {
        linguagem: "Python",
        criador: "Guido van Rossum",
        helloWorld: "print('Hello World')"
    },
    {
        linguagem: "JavaScript",
        criador: "Brendan Eich",
        helloWorld: "console.log('Hello World')"
    },
    {
        linguagem: "PHP",
        criador: "Rasmus Lerdorf",
        helloWorld: "echo 'Hello World';"
    },
    {
        linguagem: "Java",
        criador: "James Gosling",
        helloWorld: "System.out.println('Hello World');"
    },
    {
        linguagem: "C#",
        criador: "Anders Hejlsberg",
        helloWorld: "Console.WriteLine('Hello World');"
    },
    {
        linguagem: "Ruby",
        criador: "Yukihiro Matsumoto",
        helloWorld: "puts 'Hello World'"
    },
    {
        linguagem: "Swift",
        criador: "Apple Inc.",
        helloWorld: "print('Hello World')"
    },
    {
        linguagem: "Go",
        criador: "Robert Griesemer, Rob Pike, Ken Thompson",
        helloWorld: "fmt.Println('Hello World')"
    },
    {
        linguagem: "Rust",
        criador: "Graydon Hoare",
        helloWorld: "println!(\"Hello, world!\");"
    },
    {
        linguagem: "Kotlin",
        criador: "JetBrains",
        helloWorld: "println(\"Hello, World!\")"
    }
];


app.get("/linguagens", function (request, response) {
    //response.sendFile(__dirname + "/views/index.html");
    response.send(linguagens);
  });
  
  
  const listener = app.listen(process.env.PORT || 3000, function () {
    console.log("Sua porta é " + listener.address().port);
  });