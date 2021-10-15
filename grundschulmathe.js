alert ("Grundschulmathe")

var a = Math.floor(Math.random()*21)
var b = Math.floor(Math.random()*21)
var result = prompt (`Wie viel ist ${a} + ${b}?`)

if (parseInt(result, 10) === a + b) 
{
    alert ("Richtig!")
}
else 
{
    alert ("Falsch!")
}