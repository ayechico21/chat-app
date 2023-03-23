import { createClient } from "@supabase/supabase-js";

const _SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const _SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;
export const supabase = createClient(_SUPABASE_URL, _SUPABASE_KEY);
