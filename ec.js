function addEC() {
    let newRow = document.createElement("div")
    newRow.className = "ec-row"

    newRow.innerHTML = `
        <div class="ec-dropdown">
            <button class="ec-type-ph">Type</button>
            <div class="ec-type">
                <p onclick="changeType(this, 'School Club')">School club</p>
                <p onclick="changeType(this, 'School Sport')">School sport</p>
                <p onclick="changeType(this, 'Internship/Research')">Internship/Research</p>
                <p onclick="changeType(this, 'Volunteering')">Volunteering</p>
                <p onclick="changeType(this, 'Job')">Job</p>
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