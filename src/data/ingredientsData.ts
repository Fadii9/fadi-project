type IngredientsList = {
  id: string;
  ing: string;
  amount: number;
  prepTime: number;
}[];

const ingredients: IngredientsList = [
  {
    id: "i1",
    ing: "Bread",
    amount: 50,
    prepTime: 1,
  },
  {
    id: "i2",
    ing: "Patty",
    amount: 50,
    prepTime: 8,
  },

  {
    id: "i3",
    ing: "Tomato",
    amount: 50,
    prepTime: 1,
  },

  {
    id: "i4",
    ing: "pickles",
    amount: 50,
    prepTime: 1,
  },

  {
    id: "i5",
    ing: "Lettuce",
    amount: 50,
    prepTime: 1,
  },

  {
    id: "i6",
    ing: "Cucumber",
    amount: 50,
    prepTime: 1,
  },

  {
    id: "i7",
    ing: "onions",
    amount: 50,
    prepTime: 1,
  },

  {
    id: "i8",
    ing: "meat",
    amount: 50,
    prepTime: 10,
  },

  {
    id: "i9",
    ing: "Dough",
    amount: 50,
    prepTime: 1,
  },

  {
    id: "i10",
    ing: "Tomato-sauce",
    amount: 50,
    prepTime: 3,
  },

  {
    id: "i11",
    ing: "Cheese",
    amount: 50,
    prepTime: 2,
  },

  {
    id: "i12",
    ing: "Spaghetti",
    amount: 50,
    prepTime: 10,
  },
];
export default ingredients;
