export type customersList = {
  id: string;
  name: string;
  vip?: boolean;
  order: Product[];
}[];

export enum Product {
  Hamburger = "Hamburger",
  Salad = "Salad",
  Pizza = "Pizza" ,
  Steak = "Steak",
  Spaghetti = "Spaghetti",
  Baguette = "Baguette"
}

const customers: customersList = [
  {
    id: "c1",
    name: "Customer1",
    order: [Product.Hamburger],
  },

  {
    id: "c2",
    name: "Customer2",
    order: [Product.Salad],

  },

  {
    id: "c3",
    name: "Customer3",
    order: [Product.Spaghetti]
  },

  {
    id: "c4",
    name: "Customer4",
    order: [Product.Baguette]
  },

  {
    id: "c5",
    name: "Customer5",
    order: [Product.Spaghetti]
  },

  {
    id: "c6",
    name: "Customer6",
    order: [Product.Salad],
  },

  {
    id: "c7",
    name: "Customer7",
    order: [Product.Steak]
  },

  {
    id: "c8",
    name: "Customer8",
    order: [Product.Pizza]
  },

  {
    id: "c9",
    name: "Customer9",
    order: [Product.Baguette]
  },

  {
    id: "c10",
    name: "Customer10",
    order: [Product.Hamburger, Product.Pizza]
  },
  {
    id: "c11",
    name: "Customer11",
    order: [Product.Salad, Product.Spaghetti, Product.Baguette]
  },

  {
    id: "c12",
    name: "Customer12",
    order: [Product.Hamburger, Product.Pizza, Product.Steak],
    vip: true
  },

  {
    id: "c13",
    name: "Customer13",
    order: [Product.Pizza, Product.Steak, Product.Pizza]
  },

  {
    id: "c14",
    name: "Customer14",
    order: [Product.Hamburger, Product.Pizza, Product.Steak, Product.Salad, Product.Spaghetti, Product.Baguette]
  },

  {
    id: "c15",
    name: "Customer15",
    order: [Product.Spaghetti]
  },

  {
    id: "c16",
    name: "Customer16",
    order: [Product.Pizza],
    vip: true
  },

  {
    id: "c17",
    name: "Customer17",
    order: [Product.Hamburger]
  },

  {
    id: "c18",
    name: "Customer18",
    order: [Product.Spaghetti]
  },

  {
    id: "c19",
    name: "Customer19",
    order: [Product.Baguette]
  },

  {
    id: "c20",
    name: "Customer20",
    order: [Product.Spaghetti]
  },

  {
    id: "c21",
    name: "Customer21",
    order: [Product.Hamburger],
    vip: true
  },

  {
    id: "c22",
    name: "Customer22",
    order: [Product.Salad]
  },

  {
    id: "c23",
    name: "Customer23",
    order: [Product.Steak]
  },

  {
    id: "c24",
    name: "Customer24",
    order: [Product.Pizza]
  },

  {
    id: "c25",
    name: "Customer25",
    order: [Product.Spaghetti],
    vip: true
  },

  {
    id: "c26",
    name: "Customer26",
    order: [Product.Salad]
  },

  {
    id: "c27",
    name: "Customer27",
    order: [Product.Hamburger]
  },

  {
    id: "c28",
    name: "Customer28",
    order: [Product.Steak]
  },

  {
    id: "c29",
    name: "Customer29",
    order: [Product.Baguette],
    vip: true
  },

  {
    id: "c30",
    name: "Customer30",
    order: [Product.Salad]
  },
  {
    id: "c31",
    name: "Customer31",
    order: [Product.Salad]
  },

  {
    id: "c32",
    name: "Customer32",
    order: [Product.Hamburger],
    vip: true
  },

  {
    id: "c33",
    name: "Customer33",
    order: [Product.Pizza]
  },

  {
    id: "c34",
    name: "Customer34",
    order: [Product.Hamburger]
  },

  {
    id: "c35",
    name: "Customer35",
    order: [Product.Spaghetti],
    vip: true
  },

  {
    id: "c36",
    name: "Customer36",
    order: [Product.Pizza]
  },

  {
    id: "c37",
    name: "Customer37",
    order: [Product.Hamburger]
  },

  {
    id: "c38",
    name: "Customer38",
    order: [Product.Spaghetti]
  },

  {
    id: "c39",
    name: "Customer39",
    order: [Product.Baguette]
  },

  {
    id: "c40",
    name: "Customer40",
    order: [Product.Spaghetti]
  }

];

export default customers;
