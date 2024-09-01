// const myObjects = {
//     'keyname': 'value',
//     'keyname2': 1230
// }
// console.log(myObjects.keyname,myObjects['keyname2'])
// console.log(myObjects['keyname'],myObjects['keyname2'])

// call by reference
const myProfile = {
    name : 'luffy',
    age: 19
}
const secondProfile = {
    name : 'ace',
    age: 21
}
const thirdProfile = {
    name : 'sabo',
    age: 22
}

console.log(secondProfile)
console.log(thirdProfile)
console.log(myProfile)

function eastBlue(obj)
{
    // console.log(obj.age)
    obj.age++
}
eastBlue(secondProfile)
eastBlue(thirdProfile)
eastBlue(myProfile)
console.log(secondProfile)
console.log(thirdProfile)
console.log(myProfile)
