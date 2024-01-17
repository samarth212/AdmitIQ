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

    let sat = Number(document.querySelector('.sat').value)
    let satPoints = 0

    if (isNaN(sat)){
        alert('Please enter a valid SAT Score.')
    }
    else{
        if (sat >= 1550){
            satPoints = 5
        }
        else if (sat >= 1500){
            satPoints = 3
        }
        else if (sat >= 1400){
            satPoints = 1
        }
        else{
            satPoints = 0
        }
    }

    console.log(satPoints)

    let ra = Number(document.querySelector('.regional-awards').value)
    let raPoints = 0

    if (isNaN(ra)){
        alert('Please enter a valid input for regional awards.')
    }
    else{
        raPoints = ra
    }
    console.log(raPoints)

    

}

function calcEC(){

}