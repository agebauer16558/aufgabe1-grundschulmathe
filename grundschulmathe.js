alert ("Grundschulmathe")

var maxRepeat = [0, 1, 2, 3, 4]
var points = 0 
const maxPoints = 5
const pointsRequiredNextLevel = 4

 for(let i = 0; i < maxRepeat.length; i++)
 {
    calculate("+")
 }

 if (points >= pointsRequiredNextLevel ) 
 {
     alert (`Congrats! You've reached ${points} / ${maxPoints}! Next Level!`)
     points = 0
     for(let i = 0; i < maxRepeat.length; i++)
     {
         calculate("-")
     }
 }
 else 
 {
     alert (`Sorry! You just reached ${points} / ${maxPoints}! Try again!`)
 }

 if (points >= pointsRequiredNextLevel)
 {
     alert (`Congrats! You've reached ${points} / ${maxPoints}! Next Level!`)
     points = 0
     for(let i = 0; i < maxRepeat.length; i++)
     {
         calculate("*")
     }
 }

if (points >= pointsRequiredNextLevel)
{
    alert (`Congrats! You've reached ${points} / ${maxPoints}! Next Level!`)
    points = 0
    for(let i = 0; i < maxRepeat.length; i++)
    {
        calculate("/")
    }
}
if (points >= pointsRequiredNextLevel)
{
    alert (`Congrats! You've reached ${points} / ${maxPoints}! You Won!`)
}




function calculate (operator) 
{ 
    var a = Math.floor(Math.random()*21)
    var b = Math.floor(Math.random()*21)
    if ( operator === "-") b = Math.min(b, a)
    if ( operator === "/" && a % b !== 0) b = a

    var result = prompt (`Wie viel ist ${a} ${operator} ${b}?`)

    function operatorChooser (a, b, operator) 
    {
        if (operator === "+") 
        {
            return a + b
        }
        if (operator === "-") 
        {
            return a - Math.min(b, a) 
        }
        if (operator === "*") 
        {
            return a * b 
        }
        if (operator === "/") 
        {
            return a / b 
        }
    }

    if (parseInt(result, 10) === operatorChooser(a, b, operator)) 
    {
        points++ 
        alert (`Richtig! ${points} / ${maxPoints}`)
    }
    else 
    {
        alert (`Falsch! ${points} / ${maxPoints}`)   
    }

}
