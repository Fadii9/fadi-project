type mealsList = {
    mealName: string;
    ingredients: string[]
}[]

const meals: mealsList = [{
    mealName: "Hamburger",
    ingredients: ["Bread" , "Patty" , "Tomato", "pickles", "Lettuce", "onions"]
}, {
    mealName: "Salad",
    ingredients: ["Tomato", "Cucumber", "Lettuce" , "onions" ]
}, {
    mealName: "Steak",
    ingredients: ["meat"]
}, {
    mealName: "Pizza",
    ingredients: ["Dough" , "Tomato-sauce", "cheese"]
}, {
    mealName: "Spaghetti",
    ingredients: ["Spaghetti", "Tomato-sauce"]
}, {
    mealName: "Baguette",
    ingredients: ["Dough"]
}]
export default meals;