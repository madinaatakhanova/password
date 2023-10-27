let massage = document.getElementById(`message`)

massage.style.display = `none`

function checkPassword() {
    let password = document.getElementById('password').value;
    let cnfrmPassword = document.getElementById('cnfrmPassword').value;
    console.log(cnfrmPassword);
    
    


    if(password.length != 0){
        if(password == cnfrmPassword){
            massage.style.display = `block`
            massage.textContent = `Password Match`
            massage.style.color= `green`
        }
        else{
            massage.style.display = `block`
            massage.textContent= ` Password don't match`
            massage.style.color = `red`
        }
    }
}


 let eyeIcon = document.getElementById(`eyeicon`)
 let eyeIcon2 = document.getElementById(`eyeicon2`)


 eyeIcon.onclick = function(){
    if(password.type == `password`){
        password.type= `text`
        eyeIcon.src = `eye-open.png`
    } else{
        password.type= `password`
        eyeIcon.src = `eye-close.png`
    }
 }

 eyeIcon2.onclick = function(){
    if(cnfrmPassword.type == `password`){
        cnfrmPassword.type= `text`
        eyeIcon.src = `eye-open.png`
    } else{
        cnfrmPassword.type= `password`
        eyeIcon.src = `eye-close.png`
    }
 }