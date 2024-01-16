function addEC(){
    document.querySelector(".ec").innerHTML += `
    
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
       
    `
}

function changeType(type){
    document.querySelector(".ec-type-ph").innerHTML = type
}