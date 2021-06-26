console.warn("Javascript is hard until you start practicing it")

document.querySelector("#loader").style.display="none"
document.querySelector(".output-data").style.display="none"


const clicker=document.querySelector("#btn")
clicker.addEventListener("click",loading)

function loading(e){
    document.querySelector("#loader").style.display="block"
    document.querySelector(".output-data").style.display="none"
    clicker.style.display="none"
    e.preventDefault()
    setTimeout(datahandler,2500)
}

function datahandler(){
    let amount=document.querySelector("#amount-taken")
    let intrst=document.querySelector("#interest")
    let years=document.querySelector("#time-needed")
    let monthly_amount=document.querySelector("#monthly_payment")
    let total_amount=document.querySelector("#total-payment")
    let interest_amount=document.querySelector("#total-interest")

    let principal=parseFloat(amount.value)
    let interest=parseFloat(intrst.value) / 100/12;
    let time=(years.value)*12

    // did not understand below two lines
    var x = Math.pow(1 + interest, time);
    var monthly = (principal*x*interest)/(x-1);

    if(isFinite(monthly)){
        monthly_amount.value=monthly.toFixed(2)
        total_amount.value=(monthly*time).toFixed(2)
        interest_amount.value=((monthly*time)-principal).toFixed(2)
        document.querySelector("#loader").style.display="none"
        document.querySelector(".output-data").style.display="block"
        clicker.style.display="inline-block"
    }
    else{
        // calling errorHandler function on no inputs
        errorHandler("Please enter data to process it")
    }
}

function errorHandler(error){
    document.querySelector("#loader").style.display="none"
    document.querySelector(".output-data").style.display="none"
    // creating a div and appending error node
    let errorDiv=document.createElement("div")
    errorDiv.setAttribute("class","err")
    errorDiv.appendChild(document.createTextNode(error))

    // calling the form .ie parent and inseting div before heading using insertBefore()
    // insertBefore() takes 2 values, one is the element u wannna insert and the element that u wanna insert before to
    let card=document.querySelector("#form-data")
    let heading=document.querySelector("#heading")
    // taking errorDiv and inserting before heading
    card.insertBefore(errorDiv,heading)
    // remving the error after 3secs using settimeout
    setTimeout(()=>{
        clearDiv()
        clicker.style.display="block"
    },2500)
}

function clearDiv(){
    document.querySelector(".err").remove()
}