// USED FOR TOOLS
const readline = require('readline');
const fs = require('fs');
// decryptor and encryptor (0)
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');

// bahan penting
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Random OTP Generator
function frenzyOTP(len) {
    var str = "";                          
    for (var i = 0; i < len; i++) {   
             // Loop `len` times
      var rand = Math.floor(Math.random() * 62);
      var charCode = rand += rand > 9 ? (rand < 36 ? 55 : 61) : 48; 
      str += String.fromCharCode(charCode);      
    }
  // then => returned
    return str; // (str) the function
  }
  // next => 
let OTPNya = frenzyOTP(6);
// const fs = require('fs');

try {
    if(fs.existsSync('db.json')) {
        const { name, passwordAcc, securityCodes } = require('./db.json')
        console.log(`Welcome back ' ${name} ' to the tools!`)
        console.log(`Write 'logout to logout, i hope you remeber your account pass and name :)`)
        rl.question("Enter Your Usernames : ", usernameLogBeta => {
            if(usernameLogBeta == "") {
                console.log("i dont know blank message")
            } else {
                if(usernameLogBeta == "logout") {
                    console.log("Hi! who are you?")
                    console.log("Lets write 'signup' to signup 'login' to login")
                    rl.question("Where the methode thats do you want to use? : ", MethodeOne => {
                        if(MethodeOne == "") {
                            console.log("dont let it blank :(")
                        } else {
                            if(MethodeOne == "signup") {
                                console.log("Weww.. we are creating a new accounts again.")
                                rl.question("Ok so, what is your name ? : ", namaSign1 => {
                                    if(namaSign1 == "") {
                                        console.log("well thats a bad name for your account.")
                                    } else {
                                        rl.question("Ok now, your pass account will be : ", passAcc => {
                                            if(passAcc == "") {
                                                console.log("well thats a bad password.")
                                            } else {
                                                // const pass1Enc = cryptr.encrypt(passAcc)
                                                console.log("Nice, now what is your Security Code?")
                                                console.log("This will be used if you forget your password.")
                                                rl.question("Any number or smth ? : ", SecurityCok => {
                                                    if(SecurityCok == "") {
                                                        console.log("well thats will bad if you forget your password.")
                                                    } else {
                                                        const pass1 = cryptr.encrypt(passAcc);
                                                        const security1 = cryptr.encrypt(SecurityCok)
                                                        fs.writeFileSync(
                                                            `db.json`,
                                                            `{
                                                                "name": "${namaSign1}",
                                                                "passwordAcc": "${pass1}",
                                                                "securityCodes": "${security1}"
                                                            }`
                                                        );
                                                        console.clear();
                                                        console.log("ACCOUNT CREATED!")
                                                        console.log("[AUTO-LOGIN] Auto login pages")
                                                        const { name, passwordAcc, securityCodes } = require('./db.json');
                                                        const decPass = cryptr.decrypt(passAcc)
                                                        const decSecurity = cryptr.decrypt(securityCodes)
                                                        rl.question("Enter Your Account Username : ", userlog2 => {
                                                            if(userlog2 == "") {
                                                                console.log("well you need your username, dont let it blank.")
                                                            } else {
                                                                if(userlog2 == name) {
                                                                    console.log("[V] Correct username")
                                                                    console.log("If you forget your password, type 'forget'")
                                                                    rl.question("Now your password : ", passLog2 => {
                                                                        if(passLog2 == "") {
                                                                            console.log("need a password.")
                                                                        } else {
                                                                            if(passLog2 == "forget") {
                                                                                console.log("Tsk tsk tsk forget your password?")
                                                                                rl.question("So enter your security code here to recover your account : ", forgetPass => {
                                                                                    if(forgetPass == "") {
                                                                                        console.log("You need a security code, if you forget it, thats will be bad.")
                                                                                    } else {
                                                                                        if(forgetPass == decSecurity) {
                                                                                            console.log("Nice, so this your password")
                                                                                            console.log(`--- ${decPass} ---`)
                                                                                            console.log("dont forget it again.")
                                                                                        }
                                                                                    }
                                                                                })
                                                                            } else {
                                                                                if(passLog2 == decPass) {
                                                                                    console.log("Horray succes loginned!")
                                                                                    console.log("This code ended.")
                                                                                } else {
                                                                                    console.log("wrong pass, did you forget it?")
                                                                                }
                                                                            }
                                                                        }
                                                                    })
                                                                } else {
                                                                    console.log("wrong username, did you forget it?")
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
                                if(MethodeOne == "login") {
// const fs = require('fs');
try {
    if(fs.existsSync('./db.json')) {
        const { name, passwordAcc, securityCodes } = require('./db.json')
        const decryptPass = cryptr.decrypt(passwordAcc)
        const decryptSec = cryptr.decrypt(securityCodes)
        console.log("Hell yeah! welcome back bro!")
        rl.question("Enter yout username : ", userLog7 => {
            if(userLog7 == "") {
                console.log("lol bro we cant detect your account")
            } else {
                if(userLog7 == name) {
                    console.log(`Great ${name} you remember your names!`)
                    console.log("write 'forget' if you forget it!")
                    rl.question("Now your password : ", passwordLog7 => {
                        if(passwordLog7 == "") {
                            console.log("Umm, thats not a password.")
                        } else {
                            if(passwordLog7 == "forget") {
                                console.log("thats bad bro you're forget your password")
                                rl.question("enter your security code to recover : ", secLupa => {
                                    if(secLupa == "") {
                                        console.log("donnt try to hacking bro ;0")
                                    } else {
                                        if(secLupa == decryptSec) {
                                            console.log("nice so here your pass.")
                                            console.log(`this your pass : ${decryptPass}`)
                                        }
                                    }
                                })
                            } else {
                                if(passwordLog7 == decryptPass) {
                                    console.log("succes loginned!")
                                    console.log("Horray this code ended!")
                                }
                            }
                        }
                    })
                }
            }
        })
    } else {
        // protection, abuse user
        console.log('Bro, you have not account. so please register, or maybe you delete the data?');
    }
} catch (err) {
    console.error(err);
}
                                }
                            }
                        }
                    })
                } else {
                    if(usernameLogBeta == name) {
                        const { name, passwordAcc, securityCodes } = require('./db.json')
                        const decPass = cryptr.decrypt(passwordAcc)
                        const decSecurity = cryptr.decrypt(securityCodes)
                        console.log("Nice you remember your name.")
                        console.log("write 'forget' if you forget your password.")
                        rl.question("Now your password : ", passlogAnjae => {
                            if(passlogAnjae == "") {
                                console.log("need pass.")
                            } else {
                                if(passlogAnjae == "forget") {
                                    console.log("Tsk tsk tsk forget your password?")
                                    rl.question("So enter your security code here to recover your account : ", forgetPass => {
                                    if(forgetPass == "") {
                                    console.log("You need a security code, if you forget it, thats will be bad.")
                                    } else {
                                    if(forgetPass == decSecurity) {
                                    console.log("Nice, so this your password")
                                    console.log(`--- ${decPass} ---`)
                                    console.log("dont forget it again.")
                                    }
                                    }
                                    })
                                } else {
                                    if(passlogAnjae == decPass) {
                                        console.log("Succes loginned. yeay this code ended.")
                                        // Your code HERE
                                        // anti ddos, ddos tools, or etc
                                    }
                                }
                            }
                        })
                    }
                }
            }
        })
    } else {
        console.log("Hi, write 'signup' to signup, 'login' to login, 'delete' to delete account");
rl.question("Which one methode you want use : ", Methode => {
    if(Methode == "") {
        console.log("select signup or login pls")
    } else {
        if(Methode == "signup") {
            console.log(`----- ${OTPNya} -----`)
            console.log("[+] Please verify thats you're humans by write the OTP Code!")
            rl.question(">>> ", jawabOTP => {
                if(jawabOTP == "") {
                    console.log("You cant sending blank messages.")
                } else {
                    if(jawabOTP == OTPNya) {
                        console.clear();
                        console.log("Making Accounts Pages")
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
            console.log("OTP Wrong did you not a humans?")
        }
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
                                    "deleted": "${tanggal}"
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
    }
} catch (err) {
    console.error(err);
}
// END, ACCOUNT DETECTOR SYSTEM

// lol
// Coded by FreenzySG (Credits/Mention to use)
