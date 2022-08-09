const readline = require('readline-sync');

function GetIntWithPrompt(prompt){

    console.log(prompt)
    answer = parseInt(readline.prompt())
    while (!(Number.isInteger(answer))){
        console.log("That was not an integer, please try again")
        answer = parseInt(readline.prompt())
    }
    return answer
}


function ReverseFizzBuzzOrder(string){

    var words = string.match(/.{4}/g);
    return words.reverse().join("")

}

function AddFezzBeforeB(string){

    var indexOfFirstB = string.indexOf("B")
    return string.slice(0, indexOfFirstB) 
                + "Fezz" + string.slice(indexOfFirstB)
}

function fizzbuzz(maxNumber){

    for (let i = 1; i<maxNumber + 1; i++){

        var outputString = "";


        if (i % 3 == 0){
            outputString += "Fizz"
        }

        if (i % 5 == 0){
            outputString += "Buzz"
        }

        if (i % 7 == 0){
            outputString += "Bang"
        }

        if (i % 11 == 0){
            outputString = "Bong"
        }

        if (i % 13 == 0){
            
            if (outputString.includes("B")){
                outputString = AddFezzBeforeB(outputString)
            }
            else{
                outputString += "fezz"
            }
        }

        if (i % 17 == 0 && outputString != ""){
            outputString = ReverseFizzBuzzOrder(outputString)
        }

        if (outputString == ""){
            outputString = String(i)
        }
        console.log(outputString)
    }
}


var maxNumber = GetIntWithPrompt("Please enter a max number: ")
getRules()
fizzbuzz(maxNumber)