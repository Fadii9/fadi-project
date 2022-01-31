type mealsList = {
    id: string;
    mealName: string;
    ingredients: string[];
}[]

const meals: mealsList = [{
    id: "m1",
    mealName: "Hamburger",
    ingredients: ["Bread" , "Patty" , "Tomato", "pickles", "Lettuce", "onions"]
}, {
    id: "m2",
    mealName: "Salad",
    ingredients: ["Tomato", "Cucumber", "Lettuce" , "onions" ]
}, {
    id: "m3",
    mealName: "Steak",
    ingredients: ["meat"]
}, {
    id: "m4",
    mealName: "Pizza",
    ingredients: ["Dough" , "Tomato-sauce", "Cheese"]
}, {
    id: "m5",
    mealName: "Spaghetti",
    ingredients: ["Spaghetti", "Tomato-sauce"]
}, {
    id: "m6",
    mealName: "Baguette",
    ingredients: ["Dough"]
}]
export default meals;