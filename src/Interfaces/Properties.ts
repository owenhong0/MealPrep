
export enum Weekday {
    MON = "monday",
    TUES = "tuesday",
    WEDS = "wednesday",
    THURS = "thursday",
    FRI = "friday",
    SAT = "saturday",
    SUN = "sunday",
}


export interface MealWeek {
    ingredients: IngredientsList;
    dishes: DishList;
    prepDays: MealDay[];
}

export interface MealDay {
    name: Weekday;
    brekkie: Recipe | null;
    lunch: Recipe | null;
    dinner: Recipe | null;
}

