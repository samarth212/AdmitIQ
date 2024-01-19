let ecResetString = `

    <div class="ec-header">
        <p class="user-info-header">Extracurriculars</p>
        <p class="add-ec" onclick="
            addEC()
        ">+</p>
    </div>



`
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
            satPoints = 2
        }
        else if (sat >= 1400){
            satPoints = 0
        }
        else if (sat == 36 || sat == 35){
            satPoints = 5
        }
        else if (sat == 34 || sat == 33){
            satPoints = 3
        }
        else{
            satPoints = -5
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

let finalScore = 0

function calcFinalScore(){
    finalScore = totalStat + ecFinalPoints + collegePoints
    console.log('final:', finalScore)
}

let chance = 'You are very unlikely to be accepted.'
function calcChance(){
   
    console.log(finalScore)
    if (college == 'Harvard'){
        if (finalScore >= 42){
            document.querySelector('.chance-chart').src = "images/verylikely.png"
            chance = 'You are very likely to be accepted into Harvard!'
        }
        else if (37 < finalScore && finalScore < 42){
            document.querySelector('.chance-chart').src = "images/likely.png"
            chance = 'You are likely to be accepted into Harvard.'
        }
        else if (34 < finalScore && finalScore <= 37){
            document.querySelector('.chance-chart').src = "images/somewhatlikely.png"
            chance = 'You are somewhat likely to be accepted into Harvard. Increase your test scores, awards, and extracurriculars to get a better chance.'
        } 
        else if (31 < finalScore && finalScore <= 34){
            chance = 'You are unlikely to be accepted into Harvard. Increase your test scores, awards, and extracurriculars to get a better chance.'
        }
        else{
            chance = 'You are very unlikely to be accepted into Harvard. Increase your test scores, awards, and extracurriculars to get a better chance.'
        }
         
    }
    else if (college == 'Cal Tech'){
        if (finalScore >= 42){
            document.querySelector('.chance-chart').src = "images/verylikely.png"
            chance = 'You are very likely to be accepted into Cal Tech!'
        }
        else if (37 < finalScore && finalScore < 42){
            document.querySelector('.chance-chart').src = "images/likely.png"
            chance = 'You are likely to be accepted into Cal Tech.'
        }
        else if (34 < finalScore && finalScore <= 37){
            document.querySelector('.chance-chart').src = "images/somewhatlikely.png"
            chance = 'You are somewhat likely to be accepted into Cal Tech. Increase your test scores, awards, and extracurriculars to get a better chance.'
        } 
        else if (31 < finalScore && finalScore <= 34){
            chance = 'You are unlikely to be accepted into Cal Tech. Increase your test scores, awards, and extracurriculars to get a better chance.'
        }
        else{
            chance = 'You are very unlikely to be accepted into Cal Tech. Increase your test scores, awards, and extracurriculars to get a better chance.'
        }
         
    }
    else if (college == 'MIT'){
        if (finalScore >= 42){
            document.querySelector('.chance-chart').src = "images/verylikely.png"
            chance = 'You are very likely to be accepted into MIT!'
        }
        else if (37 < finalScore && finalScore < 42){
            document.querySelector('.chance-chart').src = "images/likely.png"
            chance = 'You are likely to be accepted into MIT.'
        }
        else if (34 < finalScore && finalScore <= 37){
            document.querySelector('.chance-chart').src = "images/somewhatlikely.png"
            chance = 'You are somewhat likely to be accepted into MIT. Increase your test scores, awards, and extracurriculars to get a better chance.'
        } 
        else if (31 < finalScore && finalScore <= 34){
            chance = 'You are unlikely to be accepted into MIT. Increase your test scores, awards, and extracurriculars to get a better chance.'
        }
        else{
            chance = 'You are very unlikely to be accepted into MIT. Increase your test scores, awards, and extracurriculars to get a better chance.'
        }
         
    }
    else if (college == 'Stanford'){
        if (finalScore >= 42){
            document.querySelector('.chance-chart').src = "images/verylikely.png"
            chance = 'You are very likely to be accepted into Stanford!'
        }
        else if (37 < finalScore && finalScore < 42){
            document.querySelector('.chance-chart').src = "images/likely.png"
            chance = 'You are likely to be accepted into Stanford.'
        }
        else if (34 < finalScore && finalScore <= 37){
            document.querySelector('.chance-chart').src = "images/somewhatlikely.png"
            chance = 'You are somewhat likely to be accepted into Stanford. Increase your test scores, awards, and extracurriculars to get a better chance.'
        } 
        else if (31 < finalScore && finalScore <= 34){
            chance = 'You are unlikely to be accepted into Stanford. Increase your test scores, awards, and extracurriculars to get a better chance.'
        }
        else{
            chance = 'You are very unlikely to be accepted into Stanford. Increase your test scores, awards, and extracurriculars to get a better chance.'
        }
         
    }
    else if (college == 'Yale'){
        if (finalScore >= 40){
            document.querySelector('.chance-chart').src = "images/verylikely.png"
            chance = 'You are very likely to be accepted into Yale!'
        }
        else if (35 < finalScore && finalScore < 40){
            document.querySelector('.chance-chart').src = "images/likely.png"
            chance = 'You are likely to be accepted into Yale.'
        }
        else if (33 < finalScore && finalScore <= 35){
            document.querySelector('.chance-chart').src = "images/somewhatlikely.png"
            chance = 'You are somewhat likely to be accepted into Yale. Increase your test scores, awards, and extracurriculars to get a better chance.'
        } 
        else if (29 < finalScore && finalScore <= 33){
            chance = 'You are unlikely to be accepted into Yale. Increase your test scores, awards, and extracurriculars to get a better chance.'
        }
        else{
            chance = 'You are very unlikely to be accepted into Yale. Increase your test scores, awards, and extracurriculars to get a better chance.'
        }
         
    }
    else if (college == 'Columbia'){
        if (finalScore >= 40){
            document.querySelector('.chance-chart').src = "images/verylikely.png"
            chance = 'You are very likely to be accepted into Columbia!'
        }
        else if (35 < finalScore && finalScore < 40){
            document.querySelector('.chance-chart').src = "images/likely.png"
            chance = 'You are likely to be accepted into Columbia.'
        }
        else if (33 < finalScore && finalScore <= 35){
            document.querySelector('.chance-chart').src = "images/somewhatlikely.png"
            chance = 'You are somewhat likely to be accepted into Columbia. Increase your test scores, awards, and extracurriculars to get a better chance.'
        } 
        else if (29 < finalScore && finalScore <= 33){
            chance = 'You are unlikely to be accepted into Columbia. Increase your test scores, awards, and extracurriculars to get a better chance.'
        }
        else{
            chance = 'You are very unlikely to be accepted into Columbia. Increase your test scores, awards, and extracurriculars to get a better chance.'
        }
         
    }
    else if (college == 'Brown'){
        if (finalScore >= 40){
            document.querySelector('.chance-chart').src = "images/verylikely.png"
            chance = 'You are very likely to be accepted into Brown!'
        }
        else if (35 < finalScore && finalScore < 40){
            document.querySelector('.chance-chart').src = "images/likely.png"
            chance = 'You are likely to be accepted into Brown.'
        }
        else if (33 < finalScore && finalScore <= 35){
            document.querySelector('.chance-chart').src = "images/somewhatlikely.png"
            chance = 'You are somewhat likely to be accepted into Brown. Increase your test scores, awards, and extracurriculars to get a better chance.'
        } 
        else if (29 < finalScore && finalScore <= 33){
            chance = 'You are unlikely to be accepted into Brown. Increase your test scores, awards, and extracurriculars to get a better chance.'
        }
        else{
            chance = 'You are very unlikely to be accepted into Brown. Increase your test scores, awards, and extracurriculars to get a better chance.'
        }
         
    }
    else if (college == 'Princeton'){
        if (finalScore >= 40){
            document.querySelector('.chance-chart').src = "images/verylikely.png"
            chance = 'You are very likely to be accepted into Princeton!'
        }
        else if (35 < finalScore && finalScore < 40){
            document.querySelector('.chance-chart').src = "images/likely.png"
            chance = 'You are likely to be accepted into Princeton.'
        }
        else if (33 < finalScore && finalScore <= 35){
            document.querySelector('.chance-chart').src = "images/somewhatlikely.png"
            chance = 'You are somewhat likely to be accepted into Princeton. Increase your test scores, awards, and extracurriculars to get a better chance.'
        } 
        else if (29 < finalScore && finalScore <= 33){
            chance = 'You are unlikely to be accepted into Princeton. Increase your test scores, awards, and extracurriculars to get a better chance.'
        }
        else{
            chance = 'You are very unlikely to be accepted into Princeton. Increase your test scores, awards, and extracurriculars to get a better chance.'
        }
         
    }
    else if (college == 'UPenn'){
        if (finalScore >= 40){
            document.querySelector('.chance-chart').src = "images/verylikely.png"
            chance = 'You are very likely to be accepted into UPenn!'
        }
        else if (35 < finalScore && finalScore < 40){
            document.querySelector('.chance-chart').src = "images/likely.png"
            chance = 'You are likely to be accepted into UPenn.'
        }
        else if (33 < finalScore && finalScore <= 35){
            document.querySelector('.chance-chart').src = "images/somewhatlikely.png"
            chance = 'You are somewhat likely to be accepted into UPenn. Increase your test scores, awards, and extracurriculars to get a better chance.'
        } 
        else if (29 < finalScore && finalScore <= 33){
            chance = 'You are unlikely to be accepted into UPenn. Increase your test scores, awards, and extracurriculars to get a better chance.'
        }
        else{
            chance = 'You are very unlikely to be accepted into UPenn. Increase your test scores, awards, and extracurriculars to get a better chance.'
        }
         
    }
    else if (college == 'Cornell'){
        if (finalScore >= 39){
            document.querySelector('.chance-chart').src = "images/verylikely.png"
            chance = 'You are very likely to be accepted into Cornell!'
        }
        else if (34 < finalScore && finalScore < 39){
            document.querySelector('.chance-chart').src = "images/likely.png"
            chance = 'You are likely to be accepted into Cornell.'
        }
        else if (32 < finalScore && finalScore <= 34){
            document.querySelector('.chance-chart').src = "images/somewhatlikely.png"
            chance = 'You are somewhat likely to be accepted into Cornell. Increase your test scores, awards, and extracurriculars to get a better chance.'
        } 
        else if (28 < finalScore && finalScore <= 32){
            chance = 'You are unlikely to be accepted into Cornell. Increase your test scores, awards, and extracurriculars to get a better chance.'
        }
        else{
            chance = 'You are very unlikely to be accepted into Cornell. Increase your test scores, awards, and extracurriculars to get a better chance.'
        }
         
    }
    else if (college == 'CMU'){
        if (finalScore >= 39){
            document.querySelector('.chance-chart').src = "images/verylikely.png"
            chance = 'You are very likely to be accepted into CMU!'
        }
        else if (34 < finalScore && finalScore < 39){
            document.querySelector('.chance-chart').src = "images/likely.png"
            chance = 'You are likely to be accepted into CMU.'
        }
        else if (32 < finalScore && finalScore <= 34){
            document.querySelector('.chance-chart').src = "images/somewhatlikely.png"
            chance = 'You are somewhat likely to be accepted into CMU. Increase your test scores, awards, and extracurriculars to get a better chance.'
        } 
        else if (28 < finalScore && finalScore <= 32){
            chance = 'You are unlikely to be accepted into CMU. Increase your test scores, awards, and extracurriculars to get a better chance.'
        }
        else{
            chance = 'You are very unlikely to be accepted into CMU. Increase your test scores, awards, and extracurriculars to get a better chance.'
        }
         
    }
    else if (college == 'Dartmouth'){
        if (finalScore >= 39){
            document.querySelector('.chance-chart').src = "images/verylikely.png"
            chance = 'You are very likely to be accepted into Dartmouth!'
        }
        else if (34 < finalScore && finalScore < 39){
            document.querySelector('.chance-chart').src = "images/likely.png"
            chance = 'You are likely to be accepted into Dartmouth.'
        }
        else if (32 < finalScore && finalScore <= 34){
            document.querySelector('.chance-chart').src = "images/somewhatlikely.png"
            chance = 'You are somewhat likely to be accepted into Dartmouth. Increase your test scores, awards, and extracurriculars to get a better chance.'
        } 
        else if (28 < finalScore && finalScore <= 32){
            chance = 'You are unlikely to be accepted into Dartmouth. Increase your test scores, awards, and extracurriculars to get a better chance.'
        }
        else{
            chance = 'You are very unlikely to be accepted into Dartmouth. Increase your test scores, awards, and extracurriculars to get a better chance.'
        }
         
    }
    else if (college == 'Duke'){
        if (finalScore >= 39){
            document.querySelector('.chance-chart').src = "images/verylikely.png"
            chance = 'You are very likely to be accepted into Duke!'
        }
        else if (34 < finalScore && finalScore < 39){
            document.querySelector('.chance-chart').src = "images/likely.png"
            chance = 'You are likely to be accepted into Duke.'
        }
        else if (32 < finalScore && finalScore <= 34){
            document.querySelector('.chance-chart').src = "images/somewhatlikely.png"
            chance = 'You are somewhat likely to be accepted into Duke. Increase your test scores, awards, and extracurriculars to get a better chance.'
        } 
        else if (28 < finalScore && finalScore <= 32){
            chance = 'You are unlikely to be accepted into Duke. Increase your test scores, awards, and extracurriculars to get a better chance.'
        }
        else{
            chance = 'You are very unlikely to be accepted into Duke. Increase your test scores, awards, and extracurriculars to get a better chance.'
        }
         
    }
    else if (college == 'John Hopkins'){
        if (finalScore >= 39){
            document.querySelector('.chance-chart').src = "images/verylikely.png"
            chance = 'You are very likely to be accepted into John Hopkins!'
        }
        else if (34 < finalScore && finalScore < 39){
            document.querySelector('.chance-chart').src = "images/likely.png"
            chance = 'You are likely to be accepted into John Hopkins.'
        }
        else if (32 < finalScore && finalScore <= 34){
            document.querySelector('.chance-chart').src = "images/somewhatlikely.png"
            chance = 'You are somewhat likely to be accepted into John Hopkins. Increase your test scores, awards, and extracurriculars to get a better chance.'
        } 
        else if (28 < finalScore && finalScore <= 32){
            chance = 'You are unlikely to be accepted into John Hopkins. Increase your test scores, awards, and extracurriculars to get a better chance.'
        }
        else{
            chance = 'You are very unlikely to be accepted into John Hopkins. Increase your test scores, awards, and extracurriculars to get a better chance.'
        }
         
    }
    else if (college == 'Northwestern'){
        if (finalScore >= 39){
            document.querySelector('.chance-chart').src = "images/verylikely.png"
            chance = 'You are very likely to be accepted into Northwestern!'
        }
        else if (34 < finalScore && finalScore < 39){
            document.querySelector('.chance-chart').src = "images/likely.png"
            chance = 'You are likely to be accepted into Northwestern.'
        }
        else if (32 < finalScore && finalScore <= 34){
            document.querySelector('.chance-chart').src = "images/somewhatlikely.png"
            chance = 'You are somewhat likely to be accepted into Northwestern. Increase your test scores, awards, and extracurriculars to get a better chance.'
        } 
        else if (28 < finalScore && finalScore <= 32){
            chance = 'You are unlikely to be accepted into Northwestern. Increase your test scores, awards, and extracurriculars to get a better chance.'
        }
        else{
            chance = 'You are very unlikely to be accepted into Northwestern. Increase your test scores, awards, and extracurriculars to get a better chance.'
        }
         
    }
    else if (college == 'UC Berkeley'){
        if (finalScore >= 39){
            document.querySelector('.chance-chart').src = "images/verylikely.png"
            chance = 'You are very likely to be accepted into UC Berkeley!'
        }
        else if (34 < finalScore && finalScore < 39){
            document.querySelector('.chance-chart').src = "images/likely.png"
            chance = 'You are likely to be accepted into UC Berkeley.'
        }
        else if (32 < finalScore && finalScore <= 34){
            document.querySelector('.chance-chart').src = "images/somewhatlikely.png"
            chance = 'You are somewhat likely to be accepted into UC Berkeley. Increase your test scores, awards, and extracurriculars to get a better chance.'
        } 
        else if (28 < finalScore && finalScore <= 32){
            chance = 'You are unlikely to be accepted into UC Berkeley. Increase your test scores, awards, and extracurriculars to get a better chance.'
        }
        else{
            chance = 'You are very unlikely to be accepted into UC Berkeley. Increase your test scores, awards, and extracurriculars to get a better chance.'
        }
         
    }
    else if (college == 'Urbana Champaign'){
        if (finalScore >= 39){
            document.querySelector('.chance-chart').src = "images/verylikely.png"
            chance = 'You are very likely to be accepted into Urbana Champaign!'
        }
        else if (34 < finalScore && finalScore < 39){
            document.querySelector('.chance-chart').src = "images/likely.png"
            chance = 'You are likely to be accepted into Urbana Champaign.'
        }
        else if (32 < finalScore && finalScore <= 34){
            document.querySelector('.chance-chart').src = "images/somewhatlikely.png"
            chance = 'You are somewhat likely to be accepted into Urbana Champaign. Increase your test scores, awards, and extracurriculars to get a better chance.'
        } 
        else if (28 < finalScore && finalScore <= 32){
            chance = 'You are unlikely to be accepted into Urbana Champaign. Increase your test scores, awards, and extracurriculars to get a better chance.'
        }
        else{
            chance = 'You are very unlikely to be accepted into Urbana Champaign. Increase your test scores, awards, and extracurriculars to get a better chance.'
        }
         
    }
    else if (college == 'GA Tech'){
        if (finalScore >= 36){
            document.querySelector('.chance-chart').src = "images/verylikely.png"
            chance = 'You are very likely to be accepted into GA Tech!'
        }
        else if (31 < finalScore && finalScore < 36){
            document.querySelector('.chance-chart').src = "images/likely.png"
            chance = 'You are likely to be accepted into GA Tech.'
        }
        else if (29 < finalScore && finalScore <= 31){
            document.querySelector('.chance-chart').src = "images/somewhatlikely.png"
            chance = 'You are somewhat likely to be accepted into GA Tech. Increase your test scores, awards, and extracurriculars to get a better chance.'
        } 
        else if (25 < finalScore && finalScore <= 29){
            chance = 'You are unlikely to be accepted into GA Tech. Increase your test scores, awards, and extracurriculars to get a better chance.'
        }
        else{
            chance = 'You are very unlikely to be accepted into GA Tech. Increase your test scores, awards, and extracurriculars to get a better chance.'
        }
         
    }
    
    document.querySelector('.chance-text').innerHTML = chance
    
}




function changePicture(source){
    document.querySelector('.college-display').src = source
}
