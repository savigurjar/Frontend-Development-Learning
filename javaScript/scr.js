const friend = [12,13,7,28,30,95]

const sum = friend[0]+friend[1]+friend[2]+friend[3]+friend[4]+friend[5]
console.log("sum",sum)

const totalfriend = 5
console.log("totalfriends",totalfriend)

const average = sum / totalfriend
console.log("average of friends",average)

// increment decrement
 let myAge = 20
 myAge--
 console.log(myAge)
 myAge++
 console.log(myAge)

 //function
 function searchInsert()
 {
    console.log("hii i'm learning javascript")
 }
 searchInsert()

 //function parameters
 function addsToMyAge(incrementBy,multiplyBy)
 {
    //  console.log(incrementBy)
    // myAge = myAge+1
    myAge = (myAge+incrementBy)*multiplyBy
 }
 addsToMyAge(7,3)
 console.log(myAge)

 


