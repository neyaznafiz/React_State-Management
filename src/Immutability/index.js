let player = [{ name: "sakib" }, { name: "tamim" }]
console.log(player)

// mutability
player = [{ name: "mashrafi" }]
console.log(player);

// immutability
player = [...player, { name: "mashrafi" }]
console.log(player);