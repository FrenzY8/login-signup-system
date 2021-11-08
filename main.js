const readline = require('readline');
const fs = require('fs');
const eter = "0";
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
console.log("You must Sign Up first before use this tools")
rl.question("Enter your names : ", namadia => {
  if(namadia == "") {
    console.log("At last you have a name.")
  } else {
    rl.question("Enter the password for your account : ", password => {
      if(password == "") {
        console.log("at last you have a password")
      } else {
        console.log(`We will write : 
{
  "users": "${namadia}",
  "passwords": "${password}"
}`)
rl.question("This is ok? write n to cancel : ", nanyaok => {
  if(nanyaok == "") {
    console.log("please answer.")
  } else {
    if(nanyaok == "n") {
      console.log("cancelled")
    } else {
      if(nanyaok == "N") {
        console.log("cancelled")
      } else {
        fs.writeFileSync(
          "db.json",
          `{
  "users": "${namadia}",
  "passwords": "${password}"
}`
        );
        console.log("Account Created")
        const { users, passwords } = require('./db.json')
        console.log("Login System!")
        rl.question("enter your username : ", userlog => {
          if(userlog == "") {
            console.log("failed login.")
          } else {
            if(userlog == users) {
              rl.question("enter the password : ", passlog => {
                if(passlog == "") {
                  console.log("failed log.")
                } else {
                  if(passlog == passwords) {
                    console.log("SUCCES LOGIN")
                    console.log("Login System by FrenzySG (FrenzY8)")
                    // YOUR CODE HERE, ANTI DDOS, DDOS TOOLS, ETC.
                    
                  } else {
                    console.log("wrong pass.")
                  }
                }
              })
            } else {
              console.log("user wrong.")
            }
          }
        })
      }
    }
  }
})
      }
    })
  }
})
