count = 0

function increment(){
    count += 1
    document.getElementById("count-el").innerText = count
    console.log(count)
}

function save (){
    let salvo = count + " - "
    document.getElementById("save-el").innerHTML += salvo
    console.log(count)
    document.getElementById("count-el").textContent = 0
    count = 0
}
