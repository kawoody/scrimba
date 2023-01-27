const btnPasswords = document.getElementById('btn-password-generator')
const btnPasswordLengthDec = document.getElementById('btn-password-length-dec')
const btnPasswordLengthInc = document.getElementById('btn-password-length-inc')

const passwordLengthEl = document.getElementById('password-length')
const newPasswordsEls = document.querySelectorAll('.new-password')

//Password length as a number
let passwordLength = 12

//list of all possible characters
const allChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*_+-="

//Button event listeners
btnPasswordLengthDec.addEventListener("click", function() {
    passwordLength -= 1
    passwordLengthEl.value = passwordLength
})
btnPasswordLengthInc.addEventListener("click", function() {
    passwordLength += 1
    passwordLengthEl.value = passwordLength
})
btnPasswords.addEventListener("click", generatePassword)

//Function to generate new passwords
function generatePassword() {    
    for (const password of newPasswordsEls) {
        
        //Empty string
        let newPassword = ""
        
        //Choose a random character from the allChars string and add it to newPassword
        for (let i = 0; i < passwordLength; i++) {
            newPassword += allChars[Math.floor( Math.random() * allChars.length)]
        }
        
        //Set each password element value to newPassword, then reset newPassword for next loop through
        password.value = newPassword
        newPassword = ""
    }
}

//For each password element add the ability to do a 1-click copy to clipboard
for (const password of newPasswordsEls) {
    password.addEventListener("click", function() {
        password.select()
        document.execCommand("Copy")
        alert("Copied!")
    })
}