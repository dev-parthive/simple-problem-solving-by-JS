// var marks = [40, 60, 40];

// function  make_avg(makrs, marks.length){
//     var totalMarks = marks[0] + marks[1] + marks[2];
//     return totalMarks / 3;
// }

// console.log(make_avg());



// var marks = [40, 40, 34];
// var sum = 0;
// var sum = sum + marks[i];
// for(var i = 0; i < marks.length; i++){

// }

// 3) Challenging: Write a function called make_avg() which will take an array of integers and 
// the size of that array and return the average of those values
var marks = [50, 55, 46,]
function make_arr_avg(marks){
    var size = marks.length
    let sum = 0;
    for(let i = 0; i <marks.length; i ++){
        sum += marks[i];
    }
    var average = sum / size;
    return average;
}

var average = make_arr_avg(marks);
console.log(average)



// alternative way 
