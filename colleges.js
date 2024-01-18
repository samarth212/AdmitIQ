let college = ''
let collegePoints = 0
import { major } from './majors.js'


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
  
    console.log(collegePoints)
    
}