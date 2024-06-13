// 2037. Minimum Number of Moves to Seat Everyone


// There are "n" seats and "n" students in a room. You are given an array "seats" of length "n",
// where "seats[i]" is the position of the "ith" seat. You are also given the array "students"
// of length "n", where "students[j]" is the position of the "jth" student.

// Return the minimum number of moves required to move each student to a seat such that no two students
// are in the same seat.
// Note that there may be multiple seats or students in the same position at the beginning.








/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    
    let movesCount = 0;

    seats.sort((a,b) => a-b)
    students.sort((a,b) => a-b)

    for(let i = 0; i < seats.length; i++){
        let sum = 0
        if(seats[i] > students[i]){
            sum = seats[i] - students[i]
            movesCount += sum
        }
        else{
            sum = students[i] - seats[i]
            movesCount += sum
        }
    } 

    return movesCount   
};