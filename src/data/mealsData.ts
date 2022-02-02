type mealsList = {
  id: string;
  mealName: string;
  ingredients: string[];
  imageUrl: string;
}[];

const meals: mealsList = [
  {
    id: "m1",
    mealName: "Hamburger",
    ingredients: ["Bread", "Patty", "Tomato", "pickles", "Lettuce", "onions"],
    imageUrl:
      "https://granddigital.com.au/wp-content/uploads/2017/08/Hamburger-Thumbnail-1.jpg",
  },
  {
    id: "m2",
    mealName: "Salad",
    ingredients: ["Tomato", "Cucumber", "Lettuce", "onions"],
    imageUrl:
      "https://static.vecteezy.com/system/resources/thumbnails/002/552/508/small_2x/bowl-with-salad-tomato-lettuce-health-food-flat-style-icon-free-vector.jpg",
  },
  {
    id: "m3",
    mealName: "Steak",
    ingredients: ["meat"],
    imageUrl:
      "https://i.pinimg.com/originals/27/a4/d6/27a4d623a10de5292f293fa8a1216cdb.jpg",
  },
  {
    id: "m4",
    mealName: "Pizza",
    ingredients: ["Dough", "Tomato-sauce", "Cheese"],
    imageUrl:
      "https://st.depositphotos.com/1332722/1245/v/950/depositphotos_12454057-stock-illustration-pizza-vector-illustration.jpg",
  },
  {
    id: "m5",
    mealName: "Spaghetti",
    ingredients: ["Spaghetti", "Tomato-sauce"],
    imageUrl:
      "https://previews.123rf.com/images/alvincadiz/alvincadiz1703/alvincadiz170300003/73522378-vector-illustration-of-spaghetti-with-fork-on-plate.jpg",
  },
  {
    id: "m6",
    mealName: "Baguette",
    ingredients: ["Dough"],
    imageUrl:
      "https://static.vecteezy.com/system/resources/thumbnails/001/931/606/small/bread-baguette-of-bakery-isolated-style-icon-design-free-vector.jpg",
  },
];
export default meals;
