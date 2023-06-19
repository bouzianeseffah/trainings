let newInventoryCarModels = ['S1', 'S1', 'S2', 'S1', 'S2', 'S1']
let newInventoryCarTypes = ['StockCar', 'Refrigerator', 'StockCar', 'Lorrie', 'Lorrie', 'Lorrie']
let newInventoryYearBuilt = [1922, 2011, 1975, 2002, 1965, 1951]
//let i = 0;
// let typeS1Count = 0;
// while (i < newInventoryCarModels.length) {
//    console.log(`${newInventoryCarModels[i]} is type of ${newInventoryCarTypes[i]}`)
   
//    if (newInventoryCarModels[i] === 'S1') {
//       typeS1Count++
      
//    }
//    i++
// }
// console.log(`Number of S1 Cars is:${typeS1Count}`)
// let lorrieCount = 0
// for (i = 0; i < newInventoryCarTypes.length; i++) {
//    if(newInventoryCarTypes[i] === 'Lorrie'){
//       lorrieCount++

//    }
// }
// console.log(`we have ${lorrieCount} Lorrie`)
let sum = 0

for (let i = 0; i < newInventoryYearBuilt.length; i++) {
    sum += ( 2022 - newInventoryYearBuilt[i] )
    
    
}
let average = (sum / newInventoryYearBuilt.length)
console.log(average)