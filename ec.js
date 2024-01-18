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











