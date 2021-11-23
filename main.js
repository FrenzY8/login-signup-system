// USED FOR TOOLS
const readline = require('readline');
const fs = require('fs');
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// login / signup version 2
console.log("Hi, write 'signup' to signup, 'login' to login, 'delete' to delete account");
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
                                const securityEncrypt = cryptr.encrypt(securityCode);
                                const passEncrypt = cryptr.encrypt(PassSign);
// thanks to my friend make this encrypted xd
// next we will update a log out system                                
                                fs.writeFileSync(
                                "db.json",
`{
    "name": "${namesign}",
    "passwordAcc": "${passEncrypt}",
    "securityCodes": "${securityEncrypt}"
}`)
console.clear();
                                    console.log("Account Created!")
                                    console.log("LOGIN-PAGES!")
                                    console.log("[AUTO-LOGIN]")
                                    const { name, passwordAcc, securityCodes } = require('./db.json');
                                    const passDecLogin = cryptr.decrypt(passwordAcc);
                                    const securityLupaPass = cryptr.decrypt(securityCodes);
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
                                                                    if(forgetsecurity == securityLupaPass) {
                                                                        const LupaPassword = cryptr.decrypt(passwordAcc);
                                                                        console.log("Password Showen!")
                                                                        console.log(`Your Password : ${LupaPassword}`)
                                                                        console.log("dont forget it.")
                                                                    } else {
                                                                        console.log("wrong security code")
                                                                    }
                                                                }
                                                            })
                                                        } else {
                                                            if(passlog == passDecLogin) {
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
      const passDecLogin = cryptr.decrypt(passwordAcc);
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
                        if(passlog == passDecLogin) {
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
                // console.log("Unknown Commands :(")
                if(Methode == "delete") {
                    console.log("You will lost your account are you sure?")
                    console.log("Write Y to countinue, any key to cancel.")
                    const tanggal = new Date();
                    rl.question("Sure ? : ", tanyaDulu => {
                        if(tanyaDulu == "Y") {
                            fs.writeFileSync(
                                'db.json',
                                `{
                                    "deleted": "${tanggal}''
                                }`
                            );
                        } else {
                            // console.log("program-cancelled")
                            if(tanyaDulu == "y") {
                                fs.writeFileSync(
                                    'db.json',
                                    `{
                                        "deleted": "${tanggal}"
                                    }`
                                );
                                console.log("account deleted.")
                            } else {
                                console.log("Cancelled-Delete_Accounts")
                                fs.writeFileSync(
                                    `logsaccount.txt`,
                                    `${tanggal} Cancelled delete account.`
                                )
                            }
                        }
                    })
                } else {
                    console.log("Unknown Commands!")
                }
            }
        }
    }
})

// lol
// Coded by FreenzySG (Credits/Mention to use)
