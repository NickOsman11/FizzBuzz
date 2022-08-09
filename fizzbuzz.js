function ReverseFizzBuzzOrder(string){

    var words = string.match(/.{4}/g);
    return words.reverse().join("")

}

function AddFezzBeforeB(string){

    var splitString = string.split(/z(?=B)/)
    console.log(splitString)
}

function fizzbuzz(){

    for (let i = 1; i<256; i++){

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
            
            // if (outputString.includes("B")){
            //     outputString = AddFezzBeforeB(outputString)
            // }
            // else{
            //     outputString += "fezz"
            // }

        
            var indexOfFirstB = outputString.indexOf("B")
            if (indexOfFirstB != -1){
                outputString = outputString.slice(0, indexOfFirstB) 
                + "Fezz" + outputString.slice(indexOfFirstB)
            }
            else{
                outputString += "Fezz"
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

fizzbuzz()