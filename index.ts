import inquirer from 'inquirer';
import chalk from 'chalk';
class Player{
    name:string
    fuel: number = 100
    constructor(name:string){
        this.name = name
    }
    fuelDecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel 
    }
    fuelIncrease(){
        this.fuel = 100
    }
}
class Oponent{
    name:string
    fuel: number = 100
    constructor(name:string){
        this.name = name
    }
    fuelDecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel 
    }
}
let player= await inquirer.prompt([{
    type: "input",
    name: "name",
    message: "Enter your name."
}])


let oponent= await inquirer.prompt([{
    type: "list",
    name: "select",
    message: "Select your oponent",
    choices: ["Zombie", "Assassin", "Skeleton"]
}])


let pl1 = new Player(player.name)
let o1 = new Oponent(oponent.select)

do {
    //skeleton
    if (oponent.select == "Skeleton"){
        console.log(`${chalk.bold.red(pl1.name)} VS ${chalk.bold.green(o1.name)}`)
         let ask = await inquirer.prompt([{
            type: "list",
            name: "option",
            message: "Select your oponent",
            choices:["Attack", "Drink Portion", "Run for your life..."],
         }]);

         if(ask.option == "Attack"){
            let num = Math.floor(Math.random()*2)
            if (num > 0 ){
                pl1.fuelDecrease()
                console.log(chalk.bold.red(`${pl1.name} fuel is ${pl1.fuel}`))
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
            }
            if (pl1.fuel <= 0) {
                console.log(chalk.bold.red.italic("you loose"))
                process.exit()
            } 
            
            if (num <= 0 ){
                o1.fuelDecrease()
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
                console.log(chalk.bold.green(`${pl1.name} fuel is ${pl1.fuel}`))
            }
            if (o1.fuel <= 0) {
                console.log(chalk.bold.green.italic("you Win"))
                process.exit()
            }

         }
         if(ask.option == "Drink Portion"){
            pl1.fuelIncrease()
            console.log(chalk.bold.green.italic(`You drink health portion your fuel is ${pl1.fuel}`))
         }
                 if(ask.option == "Run for your life..."){
                    console.log(chalk.bold.red.italic("you loose"))
                    process.exit()
                 }
         }
//assassin
         if (oponent.select == "Assassin"){
            console.log(`${chalk.bold.red(pl1.name)} VS ${chalk.bold.green(o1.name)}`)
             let ask = await inquirer.prompt([{
                type: "list",
                name: "option",
                message: "Select your oponent",
                choices:["Attack", "Drink Portion", "Run for your life..."],
             }]);
    
             if(ask.option == "Attack"){
                let num = Math.floor(Math.random()*2)
                if (num > 0 ){
                    pl1.fuelDecrease()
                    console.log(chalk.bold.red(`${pl1.name} fuel is ${pl1.fuel}`))
                    console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
                }
                if (pl1.fuel <= 0) {
                    console.log(chalk.bold.red.italic("you loose"))
                    process.exit()
                } 
                
                if (num <= 0 ){
                    o1.fuelDecrease()
                    console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
                    console.log(chalk.bold.green(`${pl1.name} fuel is ${pl1.fuel}`))
                }
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.green.italic("you Win"))
                    process.exit()
                }
    
             }
             if(ask.option == "Drink Portion"){
                pl1.fuelIncrease()
                console.log(chalk.bold.green.italic(`You drink health portion your fuel is ${pl1.fuel}`))
             }
                     if(ask.option == "Run for your life..."){
                        console.log(chalk.bold.red.italic("you loose"))
                        process.exit()
                     }
             }
//zombie
             if (oponent.select == "Zombie"){
                console.log(`${chalk.bold.red(pl1.name)} VS ${chalk.bold.green(o1.name)}`)
                 let ask = await inquirer.prompt([{
                    type: "list",
                    name: "option",
                    message: "Select your oponent",
                    choices:["Attack", "Drink Portion", "Run for your life..."],
                 }]);
        
                 if(ask.option == "Attack"){
                    let num = Math.floor(Math.random()*2)
                    if (num > 0 ){
                        pl1.fuelDecrease()
                        console.log(chalk.bold.red(`${pl1.name} fuel is ${pl1.fuel}`))
                        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
                    }
                    if (pl1.fuel <= 0) {
                        console.log(chalk.bold.red.italic("you loose"))
                        process.exit()
                    } 
                    
                    if (num <= 0 ){
                        o1.fuelDecrease()
                        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
                        console.log(chalk.bold.green(`${pl1.name} fuel is ${pl1.fuel}`))
                    }
                    if (o1.fuel <= 0) {
                        console.log(chalk.bold.green.italic("you Win"))
                        process.exit()
                    }
        
                 }
                 if(ask.option == "Drink Portion"){
                    pl1.fuelIncrease()
                    console.log(chalk.bold.green.italic(`You drink health portion your fuel is ${pl1.fuel}`))
                 }
                         if(ask.option == "Run for your life..."){
                            console.log(chalk.bold.red.italic("you loose"))
                            process.exit()
                         }
                 }
    }

while(true)




