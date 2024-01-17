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
        alert('Please enter a valid SAT or ACT score.')
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
        else if (sat == 36 || sat == 35){
            satPoints = 5
        }
        else if (sat == 34 || sat == 33){
            satPoints = 3
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

    let sa = Number(document.querySelector('.state-awards').value)
    let saPoints = 0

    if (isNaN(sa)){
        alert('Please enter a valid input for state awards.')
    }
    else{
        saPoints = sa*2
    }
    console.log(saPoints)

    let na = Number(document.querySelector('.national-awards').value)
    let naPoints = 0

    if (isNaN(na)){
        alert('Please enter a valid input for national awards.')
    }
    else{
        naPoints = na*3
    }
    console.log(naPoints)

    let totalStat = gpaPoints + satPoints + raPoints + saPoints + naPoints
    
    console.log('total for stats:', totalStat)

}

function calcEC(){

}