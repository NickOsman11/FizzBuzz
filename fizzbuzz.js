const readline = require('readline-sync');

function getIntWithPrompt(prompt){

    console.log(prompt)
    answer = parseInt(readline.prompt())
    while (!(Number.isInteger(answer))){
        console.log("That was not an integer, please try again")
        answer = parseInt(readline.prompt())
    }
    return answer
}

function getStringWithPrompt(prompt){

    console.log(prompt)
    return readline.prompt()
}


function getRules(allowedRules){

    console.log("Enter a number to enable the rules associated with it. \n"
                 + "The allowed rules are: \n" 
                  + allowedRules.join(", ")
                  )

    var rules = []
    while (true){
        var newRule = getStringWithPrompt("Enter a number, or press enter to exit: ")
        if (newRule == ""){
            break
        }
        newRule = parseInt(newRule)
        if (allowedRules.includes(newRule)){
            rules.push(newRule)
        }
        else {
            console.log("That was not an allowed rule, try again")
        }
    }
    return rules

}

function reverseFizzBuzzOrder(string){

    var words = string.match(/.{4}/g);
    return words.reverse().join("")
}

function addFezzBeforeB(string){

    var indexOfFirstB = string.indexOf("B")
    return string.slice(0, indexOfFirstB) 
                + "Fezz" + string.slice(indexOfFirstB)
}

function fizzbuzz(){

    var maxNumber = getIntWithPrompt("Please enter a max number: ")
    var rules = getRules([3, 5, 7, 11, 13, 17])
    console.log("Rules: ", rules)

    for (let i = 1; i<maxNumber + 1; i++){

        var outputString = "";

        if (i % 3 == 0 && rules.includes(3)){
            outputString += "Fizz"
        }

        if (i % 5 == 0 && rules.includes(5)){
            outputString += "Buzz"
        }

        if (i % 7 == 0 && rules.includes(7)){
            outputString += "Bang"
        }

        if (i % 11 == 0 && rules.includes(11)){
            outputString = "Bong"
        }

        if (i % 13 == 0 && rules.includes(13)){
            
            if (outputString.includes("B")){
                outputString = addFezzBeforeB(outputString)
            }
            else{
                outputString += "fezz"
            }
        }

        if (i % 17 == 0 && outputString != "" && rules.includes(17)){
            outputString = reverseFizzBuzzOrder(outputString)
        }

        if (outputString == ""){
            outputString = String(i)
        }
        console.log(outputString)
    }
}



fizzbuzz()