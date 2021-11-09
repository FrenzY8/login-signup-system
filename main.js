const readline = require('readline');
const fs = require('fs');
const savedatabase = console.log;
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
console.log("Please write 'signup' to signup, 'login' to login")
rl.question("Select your method : ", methodDia => {
  if(methodDia == "") {
    console.log("Select a method.")
  } else {
    if(methodDia == "signup") {
      rl.question("enter your username : ", usersign => {
        if(usersign == "") {
          console.log("need username")
        } else {
          rl.question("enter the password : ", passSign => {
            if(passSign == "") {
              console.log("need pass.")
            } else {
              fs.writeFileSync(
                "data.json",
                `{
  "usernames": "${usersign}",
  "passwords": "${passSign}"
}`
              );
            }
          })
        }
      })
    } else {
    if(methodDia == "login") {
      //const fs = require("fs")
const path = "./data.json"
try {
  if (fs.existsSync(path)) {
    const { usernames, passwords } = require('./data.json');
    rl.question("Enter your username for login : ", userlog => {
      if(userlog == "") {
        console.log("failed login")
      } else {
        if(userlog == usernames) {
          console.log("Usernames true.")
          rl.question("Enter your password : ", passlog => {
            if(passlog == "") {
              console.log("cannot login, blank pass.")
            } else {
              if(passlog == passwords) {
                console.log("LOGINNED! Tools succes accesed!")
                console.log("Via : github.com/FrenzY8")
                // YOUR CODE HERE
                //ANTI DDOS, DDOS TOOLS, ETC!!
              } else {
                console.log("wrong pass.")
              }
            }
          })
        } else {
          console.log("username wrong.")
        }
      }
    })
  } else {
    console.log("Please signup, we did not found your data...")
  }
} catch(err) {
  console.error(err)
}
    } else {
      console.log("Unknown Command, the currently commands are 'signup' , 'login'")
    }
    }
  }
})
