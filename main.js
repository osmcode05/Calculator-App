let input = document.querySelector('input')
function AppendToInput(shifre){
        input.value += shifre
}
// Clear Funtion
function Clear(){
    input.value = ""
}
// Delte Funtion
function Delete(){
    input.value = input.value.slice(0,-1);
}
// Get Total
function getTotal(){
    try {
        input.value = eval(input.value)
    } catch (error) {
        input.value = `Math Syntx`
    }
}