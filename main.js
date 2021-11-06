const readline = require('readline');
const fs = require('fs');
const eter = "0";
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
console.log("Write 'signup' for Countinue")
rl.question("Answer : ", enterewoi => {
  if(enterewoi == "signup") {
  console.log("SIGN UP! (CREATE ACCOUNT)")
    rl.question("enter your username : ", userdia => {
      if(userdia == "") {
        console.log("blank.")
      } else {
        rl.question("enter your password : ", passdia => {
          if(passdia == "") {
            console.log("blank.")
          } else {
            fs.writeFileSync(
              "data.json",
              `{
                "namaAkun": "${userdia}",
                "passAkun": "${passdia}"
              }`);
              console.log("Account data has been created!")
              console.log("LOGIN!")
              rl.question("enter the username : ", loguser => {
              if(loguser == userdia) {
              rl.question("enter the password : ", passlog => {
              if(passlog == passdia) {
              console.log("SUCCES LOGIN")
              // YOUR CODE HERE!!!........ ANTIDDOS, DDOS TOOLS, ETC DAN LAIN LAIN.!!
              
              } else {
              console.log("pass wrong.")
              }
              })
              } else {
              console.log("wrong")
              }
              })
            //console.log("data succes created.")
          }
        })
      }
    })
  } else {
  // BETA CODE, YOU WILL GET ERROR IF DO THIS!
    if(enterewoi == "ERROR404040404040404044040404004040404040404040404") { // PLEASE DONT TRY THIS, CUZ THIS WILL BE ERROR!
      const { namaAkun, passAkun } = require('./data.json')
      const fs = require("fs");
const path = "./data.json";
if (fs.existsSync(path)) {
  // path exists
  rl.question("enter username : ", userlogin => {
    if(userlogin == "") {
      console.log("blank.")
    } else {
      if(userlogin == namaAkun) {
        rl.question("enter password : ", passlog => {
          if(passlog == passAkun) {
            console.log("SUCCES LOGIN")
            // YOUR CODE HERE!
          }
        })
      }
    }
  })
} else {
  console.log("Please signup.");
}
    }
  }
})
