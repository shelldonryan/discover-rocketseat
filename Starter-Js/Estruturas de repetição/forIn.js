let person = {
    name:'Shelldon',
    age: '17',
    weight: 56.4 
}

for(let property in person) {
    console.log(property)
    console.log(person[property])
}