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
                <p onclick="changePos(this, 'Chapter Officer')">Chapter Officer</p>
                <p onclick="changePos(this, 'Club President/VP')">Club President/VP</p>
                <p onclick="changePos(this, 'State Officer')">State Officer</p>
                <p onclick="changePos(this, 'National Officer')">National Officer</p>
                <p onclick="changePos(this, 'Varsity')">Varsity</p>
                <p onclick="changePos(this, 'Team Captain')">Team Captain</p>
                <p onclick="changePos(this, 'Founder/Co-Founder')">Founder/Co-Founder</p>
                <p onclick="changePos(this, 'Organizer')">Organizer (Volunteering)</p>
                <p onclick="changePos(this, 'Manager or higher')">Manager or higher (Job)</p>
                <p onclick="changePos(this, 'None')">None</p>


            </div>
        </div>
    `

    document.querySelector(".ec").appendChild(newRow)
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



















//BACKUP FOR HTML DONT WORRY ABOUT THIS
/*
<div class="ec-row">

                <div class="ec-dropdown">

                    <button class="ec-type-ph">Type</button>

                    <div class="ec-type">
                        <p onclick="changeType('School Club')">School club</p>
                        <p onclick="changeType('School Sport')">School sport</p>
                        <p onclick="changeType('Internship/Research')">Internship/Research</p>
                        <p onclick="changeType('Volunteering')">Volunteering</p>
                        <p onclick="changeType('Job')">Job</p>
                    </div>

                </div>
                
            </div>

*/