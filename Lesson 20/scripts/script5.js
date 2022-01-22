let PricePerDroid = 800,
    orderedQuanity = 6,
    deliveryFee = 50,
    totalPrice = ((PricePerDroid*orderedQuanity)+deliveryFee);
console.log(`You ordered droids worth ${totalPrice} credits.\nDelivery (${deliveryFee} credits) is included in total price.`)