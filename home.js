function calcStats(){

    let gpa = Number(document.querySelector('.gpa').value)
    let gpaPoints = 0

    if (isNaN(gpa)){
        alert('Please enter a valid GPA.')
    }
    else{
        if (gpa >= 4){
            gpaPoints = 4
        }
        else if (gpa >= 3.5){
            gpaPoints = 3
        }
        else if (gpa >= 3){
            gpaPoints = 2
        }
        else{
            gpaPoints = 0
        }
    
        
        console.log(gpaPoints)
    }

    

}
