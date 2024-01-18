let totalStat = 0

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

    totalStat = gpaPoints + satPoints + raPoints + saPoints + naPoints
    
    console.log('total for stats:', totalStat)

}

let ecPoints = 0
let totalECPoints = 0;
let ecCount = 0
let ecFinalPoints = 0;

function addEC() {
    let newRow = document.createElement("div")
    newRow.className = "ec-row"

    newRow.innerHTML = `
        <div class="ec-dropdown">
            <button class="ec-type-ph">EC Type</button>
            <div class="ec-type">
                <p onclick="changeType(this, 'School Club')">School club</p>
                <p onclick="changeType(this, 'School Sport')">School sport</p>
                <p onclick="changeType(this, 'Internship/Research')">Internship/Research</p>
                <p onclick="changeType(this, 'Volunteering')">Volunteering</p>
                <p onclick="changeType(this, 'Job')">Job</p>
            </div>
        </div>
        <div class="ec-dropdown">
            <button class="ec-pos-ph">Highest Position Acheived</button>
            <div class="ec-type">
                <p onclick="changePos(this, 'Chapter Officer'); ecPoints = 1;">Chapter Officer</p>
                <p onclick="changePos(this, 'Club President/VP'); ecPoints = 2;">Club President/VP</p>
                <p onclick="changePos(this, 'State Officer'); ecPoints = 2;">State Officer</p>
                <p onclick="changePos(this, 'National Officer'); ecPoints = 3;">National Officer</p>
                <p onclick="changePos(this, 'Varsity'); ecPoints = 1;">Varsity</p>
                <p onclick="changePos(this, 'Team Captain'); ecPoints = 2;">Team Captain</p>
                <p onclick="changePos(this, 'Founder/Co-Founder'); ecPoints = 3;">Founder/Co-Founder</p>
                <p onclick="changePos(this, 'Organizer'); ecPoints = 2;">Organizer (Volunteering)</p>
                <p onclick="changePos(this, 'Manager or higher'); ecPoints = 2;">Manager or higher (Job)</p>
                <p onclick="changePos(this, 'None'); ecPoints = 0;">None</p>


            </div>
        </div>
    `

    document.querySelector(".ec").appendChild(newRow)
    ecCount += 1
}

function changeType(element, type) {
    let row = element.closest('.ec-row')

    let typeElement = row.querySelector('.ec-type-ph')

    typeElement.innerHTML = type
}

function changePos(element, pos) {
    let row = element.closest('.ec-row')

    let posElement = row.querySelector('.ec-pos-ph')

    posElement.innerHTML = pos
}

function calcEC(){
    totalECPoints += ecPoints
    ecFinalPoints = totalECPoints + ecCount
    console.log('EC points:', ecFinalPoints)
}


let major = ''

function changeMajor(majorChoice){
    document.querySelector(".selected-major").innerHTML = majorChoice
}

let college = ''
let collegePoints = 0


function changeCollege(collegeChoice){
    document.querySelector(".selected-college").innerHTML = collegeChoice
}

function calcCollegeMajor(){
    
    if (major == 'Computer Science'){

        if (college != 'MIT' && college != 'Stanford' && college != 'CMU' && college != 'Princeton' && college != 'GA Tech' && college != 'Cal Tech' && college != 'UC Berkeley' && college != 'Urbana Champaign'){
            collegePoints = 2
        }
    }
    else if (major == 'Engineering'){

        if (college != 'MIT' && college != 'Stanford' && college != 'CMU' && college != 'Princeton' && college != 'GA Tech' && college != 'Cal Tech' && college != 'UC Berkeley' && college != 'Urbana Champaign'){
            collegePoints = 2
        }
    }
    else if (major == 'Medicine' || major == 'Biology' || major == 'Chemistry'){

        if (college != 'Harvard' && college != 'Stanford' && college != 'John Hopkins' && college != 'UPenn' && college != 'Columbia' && college != 'Duke'){
            collegePoints = 2
        }
    }
    else if (major == 'Physics'){

        if (college != 'MIT' && college != 'GA Tech' && college != 'Cal Tech' && college != 'UC Berkeley' && college != 'Urbana Champaign'){
            collegePoints = 2
        }
    }
    else if (major == 'Business' || major == 'Economics'){

        if (college != 'Dartmouth' && college != 'Stanford' && college != 'Harvard' && college != 'UPenn' && college != 'Cornell' && college != 'Northwestern' && college != 'Yale'){
            collegePoints = 2
        }
    }
    else if (major == 'Liberal Arts'){

        if (college != 'Princeton' && college != 'Brown'){
            collegePoints = 2
        }
    }
    else{
        collegePoints = 0
    }
  
    console.log('this is', collegePoints)
    
}







