// Your code here

function greet() {
    let name = prompt("What is your name?")
    alert("Hello, " + name)
    currentYear = new Date().getFullYear()
    let age = prompt("How old are you?")
    parseInt(age)

    if (window.confirm("Have you had a birthday this year?")) {
            alert("You were born in " + (currentYear - age))
    } else {
        alert("You were born in " + (currentYear - age - 1))
    }
}