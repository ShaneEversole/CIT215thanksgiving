const thanksgivingMeal = {
    starter: {
        fruit: "honeydew melon",
        wine: "moscato",
        calories: 180
    },
    entree: {
        meat: "Turkey",
        alt: "Stuffed green peppers",
        vegetables: {
            potatoes: "Creamed mashed potatoes",
            greens: "French beans",
            salad: "Radacchio"
        },
        sides: {
            bread: "garlic bread rolls",
            pasta: "Macaroni and Cheese"
        },
        calories: 450
    },
    dessert: {
        ice_cream: "pumpkin-vanilla",
        cake: "frosted pumpkin pie",
        calories: 300
    },
    total_cost: 25.0,
    senior_discount: 0.10,

    prettyPrint: function() {
        let menu = `Start your meal with ${this.starter.fruit}, a glass of ${this.starter.wine}. Help yourself to ${this.entree.meat} or ${this.entree.alt}, with ${this.entree.vegetables.potatoes}, ${this.entree.vegetables.greens}, and ${this.entree.vegetables.salad}. Have a side! Plenty of ${this.entree.sides.bread} and ${this.entree.sides.pasta}. Finish your meal with a sweet - ${this.dessert.ice_cream} ice-cream, ${this.dessert.cake}.`;
        console.log("Menu Displayed: ", menu);
        return menu;
    },

    totalPrice: function(isSenior) {
        let price = this.total_cost;
        if (isSenior) {
            price -= price * this.senior_discount;
            console.log(`Applying Senior Discount: New Price is $${price.toFixed(2)}`);
        } else {
            console.log(`Total Price without Discount: $${price.toFixed(2)}`);
        }
        return `$${price.toFixed(2)}`;
    },

    totalCalories: function() {
        let totalCalories = this.starter.calories + this.entree.calories + this.dessert.calories;
        console.log("Total Calories Calculated: ", totalCalories);
        return totalCalories;
    },

    caloriesFrom: function(indicator) {
        let calories = 0;
        switch (indicator) {
            case 'starter':
                calories = this.starter.calories;
                console.log(`Calories from Starter: ${calories}`);
                break;
            case 'entree':
                calories = this.entree.calories;
                console.log(`Calories from Entree: ${calories}`);
                break;
            case 'dessert':
                calories = this.dessert.calories;
                console.log(`Calories from Dessert: ${calories}`);
                break;
            default:
                console.log("Invalid indicator. No calories to display.");
                calories = 0;
        }
        return calories;
    }
};


document.querySelector(".fullMeal").textContent = thanksgivingMeal.prettyPrint();
document.querySelector(".priceInfo").textContent = `Seniors get a 10% discount, the total cost for your Thanksgiving meal? Adults: $${thanksgivingMeal.total_cost}, Seniors: ${thanksgivingMeal.totalPrice(true)}.`;
document.querySelector(".calorieInfo").textContent = `Worried about calories? Total damage is ${thanksgivingMeal.totalCalories()} (starter: ${thanksgivingMeal.caloriesFrom('starter')}, entree: ${thanksgivingMeal.caloriesFrom('entree')}, dessert: ${thanksgivingMeal.caloriesFrom('dessert')})`;
