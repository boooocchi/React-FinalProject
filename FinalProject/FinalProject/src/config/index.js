const config = {
  localStorageKey: "root",
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL,
  supabaseKey: import.meta.env.VITE_SUPABASE_KEY,

  tableName: "SmartRecipe",
  categories: {
    snacks: "snacks",
    drinks: "drinks"
  }
};
export const config2 = {
  recipeAPIkey: import.meta.env.VITE_API_KEY
};

export default config;
