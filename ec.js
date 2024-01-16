function addEC(){
    document.querySelector(".ec").innerHTML += `
    
    <div class="ec-row">

        <div class="ec-dropdown">

            <button class="ec-type-ph">Type</button>

            <div class="ec-type">
                <p>School club</p>
                <p>School sport</p>
                <p>Internship/Research</p>
                <p>Volunteering</p>
                <p>Job</p>
            </div>

        </div>
                
    </div>
       
    `
}

function changeType(type){
    document.querySelector(".ec-type").innerHTML = 'type'
}