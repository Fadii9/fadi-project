type ingList = {
    id: string;
    ing: string;
    icon: string;
    amount: number;
    prepTime: number;
}[];

const ingredients :ingList = [
    {
        id: "i1",
        ing : "Bread",
        icon: "&#127838;" ,
        amount: 50,
        prepTime: 1
    },
    {
        id: "i2",
        ing : "Patty",
        icon: "&#129385;" ,
        amount: 50,
        prepTime: 8
    },

    {
        id: "i3",
        ing : "Tomato",
        icon: "&#127813;" ,
        amount: 50,
        prepTime: 1
    },

    {
        id: "i4",
        ing : "pickles",
        icon: "&#129362;" ,
        amount: 50,
        prepTime: 1
    },

    {
        id: "i5",
        ing : "Lettuce",
        icon: "&#1F96C;" ,
        amount: 50,
        prepTime: 1
    },

    {
        id: "i6",
        ing : "Cucumber",
        icon: "&#x1f952;" ,
        amount: 50,
        prepTime: 1
    },

    {
        id: "i7",
        ing : "onions",
        icon: "&#129477;" ,
        amount: 50,
        prepTime: 1
    },

    {
        id: "i8",
        ing : "meat",
        icon: "&#129385;" ,
        amount: 0,
        prepTime: 10
    },

    {
        id: "i9",
        ing : "Dough",
        icon: "&#129747;" ,
        amount: 50,
        prepTime: 4
    },

    {
        id: "i10",
        ing : "Tomato-sauce",
        icon: "&#x2668;" ,
        amount: 50,
        prepTime: 3
    },

    {
        id: "i11",
        ing : "Cheese",
        icon: "&#x2668;" ,
        amount: 50,
        prepTime: 2
    },

    {
        id: "i12",
        ing : "Spaghetti",
        icon: "&#x1f35d;" ,
        amount: 50,
        prepTime: 10
    }
];
export default ingredients;