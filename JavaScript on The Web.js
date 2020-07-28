/* JavaScript Functions */

function multiply (a,b) {
    if (a>10 || b >10) {
        return ("It is Hard");
}
    else
    {
return a*b }
}

prompt("What is Your Name?")

function Multiply (a,b) {
    alert(a*b)
} 

function SayHello () {
    console.log ("Great")
}

var SayGo = function () {
    alert ("God is Good")
}

/* JavaScript Arrays */

var list = ["Grace", "Tola", "Titi", "Shade"]
console.log (list[3]);

var numbers = [1,2,3,4,5,6,7,8,9,10]
console.log (numbers[4])

var List = ["tiger", "Cat", "Goat", "Pig"]
 
List.push ("Elephant")
List.pop ()
List.shift ()
List.sort ()


/* JavaScript Objects */

var user = {
    name:"Ibukunoluwa Salau",
    age:34,
    College: "Federal University of Agriculture Abeokuta",
    MaritalStatus: "Single"
}

user.name
user.age


var List = [
    {
        username: "adesal120",
        password: "secret"
    },
    {
        username: "James2030",
        password: "secretpassword"
    }
];

List[0].password
List[1].username


/* Building Conditional */

/*Create Database*/
var Database = [
    {
        username: "adesal120",
        password: "secret",
        email: "ibukunoluwasalau4@gmail.com"
    },
    {
        username: "James2030",
        password: "secretpassword",
        email: "james@microsoft.com"
    },
    {
        username: "adesal2030",
        password: "secretsin",
        email: "adesal@google.com"
    }
]

var Newsfeed = [
    {
        username: "adesal120",
        timeline: "God is the Greatest in the World"
    },
    {
        username: "James2030",
        timeline: "Jesus is the Greatest in the World"
    },
    {
        username: "adesal2030",
        timeline: "My Heavely Father is the Greatest in the World"
    }
]

/*Create Login Form*/
var Username = prompt("What is your username")
var Password = prompt("What is your password?")

/*Build Conditional*/

function SignIn (user,pass) {
    if (user == Database[0].username && pass == Databse[0].password) {
        console.log(Newsfeed);
    } else {
        alert ("Username or Password is incorrect");
    }
}

SignIn (Username,Password)