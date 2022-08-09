function fizzbuzz(){

    for (let i = 1; i<101; i++){

        var outputString = ""


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

        if (outputString == ""){
            outputString = String(i)
        }
        console.log(outputString)
    }
}

fizzbuzz()