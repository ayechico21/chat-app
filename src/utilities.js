export const _SUPABASE_URL = "https://befufldoxnoflkexrskn.supabase.co";
export const _SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJlZnVmbGRveG5vZmxrZXhyc2tuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk1NTkyODcsImV4cCI6MTk5NTEzNTI4N30.j5pQ9CipYoQgNkOuUWVsZ9wLRU2qJyQVP9rEOsYmkUg";

export async function getAllMessages(supabase) {
  const { data, error } = await supabase.from("messages").select();
  console.log(data);
}

export async function insertData(supabase, data) {
  const { error } = await supabase.from("messages").insert(data);
}
