// USED FOR TOOLS
const readline = require('readline');
const fs = require('fs');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// login / signup version 2
console.log("Hi, write 'signup' to signup, 'login' to login");
rl.question("Which one methode you want use : ", Methode => {
    if(Methode == "") {
        console.log("select signup or login pls")
    } else {
        if(Methode == "signup") {
            rl.question("Enter your name : ", namesign => {
                if(namesign == "") {
                    console.log("Must have names.")
                } else {
                    rl.question("enter your passwords : ", PassSign => {
                        if(PassSign == "") {
                            console.log("Need pass for your account")
                        } else {
                            console.log("Security Code will be used if you forget the password")
                            rl.question("enter your security code : ", securityCode => {
                                if(securityCode == "") {
                                    console.log("you need security code")
                                } else {
// security will be encrypted!
const securityEnc = securityCode;
const buffSec = Buffer.from(securityEnc, 'utf-8');
const SecurityEncrypted = buffSec.toString('base64');
console.log(SecurityEncrypted);
// PASSWORD WILL BE ENCRYPTED!
const str = PassSign;
const buff = Buffer.from(str, 'utf-8');
const base64 = buff.toString('base64');
console.log(base64);
fs.writeFileSync(
"db.json",
`{
    "name": "${namesign}",
    "passwordAcc": "${base64}",
    "securityCodes": "${SecurityEncrypted}"
}`)
console.clear();
// console.log(str);
                                    console.log("Account Created!")
                                    console.log("LOGIN-PAGES!")
                                    console.log("[AUTO-LOGIN]")
                                    const { name, passwordAcc, securityCodes } = require('./db.json');
                                    const passwordDec = passwordAcc;
const passBuff = Buffer.from(passwordDec, 'base64');
const resultPass = passBuff.toString('utf-8');
                                    rl.question("Enter Your Name : ", NameLog => {
                                        if(NameLog == "") {
                                            console.log("to login, you need a name.")
                                        } else {
                                            if(NameLog == name) {
                                                console.log("Usernames true.")
                                                console.log("write 'forget' if you forget your password")
                                                rl.question("Enter Your Password : ", passlog => {
                                                    // protection
                                                    if(passlog == "") {
                                                        console.log("Need password for login!")
                                                    } else {
                                                        if(passlog == "forget") {
                                                            console.log("Forget Passwords?")
                                                            rl.question("Enter your security codes : ", forgetsecurity => {
                                                                if(forgetsecurity == "") {
                                                                    console.log("sorry wrong security code.")
                                                                } else {
                                                                    if(forgetsecurity == securityCodes) {
const base64 = passwordAcc;
const buff = Buffer.from(base64, 'base64');
const str = buff.toString('utf-8');
// console.log(str);
                                                                        console.log("Password Showen!")
                                                                        console.log(`Your Password : ${str}`)
                                                                        console.log("dont forget it.")
                                                                    } else {
                                                                        console.log("wrong security code")
                                                                    }
                                                                }
                                                            })
                                                        } else {
                                                            if(passlog == resultPass) {
                                                                console.log("Succes Login!")
                                                                console.log("this code ended.")
                                                                // YOUR CODE HERE
                                                              
                                                            } else {
                                                                console.log("wrong password.")
                                                            }
                                                        }
                                                    }
                                                })
                                            } else {
                                                console.log("your username wrong. did you forget it?")
                                            }
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        } else {
            if(Methode == "login") {
const logpath = "./db.json"
try {
  if (fs.existsSync(logpath)) {
      console.log("Welcome back!")
      const { name, passwordAcc, securityCodes } = require('./db.json');
    rl.question("Enter Your Name : ", userlog => {
        if(userlog == "") {
            console.log("Hmmm.. thats not a username.")
        } else {
            if(userlog == name) {
                console.log("nice")
                rl.question("Enter the Passwords : ", passlog => {
                    //protection
                    if(passlog == "") {
                        console.log("need pass :0")
                    } else {
                        if(passlog == passwordAcc) {
                            console.log("Succes Login!")
                            console.log("this code ended.")
                            // YOUR CODE HERE !!

                        } else {
                            console.log("password wrong")
                        }
                    }
                })
            } else {
                console.log("wrong usernames.")
            }
        }
    })
  } else {
    console.log("Looks like you're new member, please signup!")
  }
} catch(err) {
  console.error(err)
}
            } else {
                console.log("Unknown Commands :(")
            }
        }
    }
})

// lol
// Coded by FreenzySG (Credits/Mention to use)
