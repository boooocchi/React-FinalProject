const config = {
  localStorageKey: "root",
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL,
  supabaseKey: import.meta.env.VITE_SUPABASE_KEY,

  tableName: "Smart Recipe"
};
export const config2 = {
  recipeAPIkey: import.meta.env.VITE_API_KEY
};

export default config;
