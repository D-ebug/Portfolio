function countryShipment(country) {
    switch(country) {
    case 'China':
        price = 100;
        message = `Shipping to ${country} will cost ${price} credits`;
        return(message);
    case 'Chile':
        price = 250;
        message = `Shipping to ${country} will cost ${price} credits`;
        return(message);
    case 'Australia':
        price = 170;
        message = `Shipping to ${country} will cost ${price} credits`;
        return(message);
    case 'Jamaica':
        price = 120;
        message = `Shipping to ${country} will cost ${price} credits`;
        return(message);
    default:
        message = 'Error'
        return(message);
    }
}

console.log(countryShipment('China'));