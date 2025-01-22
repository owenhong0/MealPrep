
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
    ingredients: IngredientList;
    dishes: Recipe[];
    prepDays: MealDay[];
}

export interface MealDay {
    name: Weekday;
    brekkie: Recipe | null;
    lunch: Recipe | null;
    dinner: Recipe | null;
}

export interface Recipe {
    name: string;
    desc: string | null;
}

export interface IngredientList {
    ingredient_dict: Record<string, Ingredient>;
}

export interface Ingredient {
    name: string;
    desc: string;
    sources: string[];
    price: number;
}

