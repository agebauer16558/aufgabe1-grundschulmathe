alert ("Grundschulmathe")



var maxRepeat = [0, 1, 2, 3, 4]
var points = 0 
const maxPoints = 5

for(let i = 0; i < maxRepeat.length; i++)
{
    var a = Math.floor(Math.random()*21)
    var b = Math.floor(Math.random()*21)
    var result = prompt (`Wie viel ist ${a} + ${b}?`)

    if (parseInt(result, 10) === a + b) 
    {
        points++ 
        alert (`Richtig! ${points} / ${maxPoints}`)
    }
    else 
    {
        alert (`Falsch! ${points} / ${maxPoints}`)
    }
}