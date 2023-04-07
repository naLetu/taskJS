const cart = [{ 

product: { id: 3,  name: 'Шампунь' },

quantity: 1 

},

{ 

product: { id: 5,  name: 'Молоко' },

quantity: 1 

}, 

{
product: { id: 11,  name: 'Сыр' }, 

quantity: 1 

}]

const newPurchases = [

{id: 1, name: 'Хлеб' },

{ id: 5,  name: 'Молоко' },

{ id: 5,  name: 'Молоко' }

];


// newPurchases.map((purch) => {
//     cart.map((item) => {
//         if ( item.id === purch.id) {
//             item.quantity++
//         }
        
//     })
//     if (item.id !== purch.id){
//         cart.push({
//             product:purch,
//             quantity: 1,
//         })
//     } 
    
// })

// console.log(cart)

newPurchases.forEach((purch) => {
    let isAddedToCart = false
    cart.forEach((item) => {
      if (item.product.id === purch.id) {
        item.quantity++
        isAddedToCart = true
      }
    })
  
    if (!isAddedToCart) {
      cart.push({
        product: purch,
        quantity: 1,
      })
    }
  })
  console.log(cart);