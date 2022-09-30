let Ontario_HST = 0
game.splash("welcome to pizza place")
let labor_cost = 0.75
let rent = 1
let diameter_cost = 0.5
Ontario_HST += 1.13
let diameter_of_pizza = game.askForNumber("How much pizza would you like?")
let pizza_price = Math.round(labor_cost / (rent / (diameter_cost * 100)))
game.splash(convertToText(pizza_price))
