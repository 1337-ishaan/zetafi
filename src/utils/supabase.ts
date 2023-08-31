import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hyzvvsmybvplbrfvlhym.supabase.co";
const supabaseKey = process.env.REACT_APP_SUPABASE_PUBLIC_KEY!;
console.log(process.env.REACT_APP_SUPABASE_PUBLIC_KEY, "spk");
export const supabase = createClient(supabaseUrl, supabaseKey)!;
