import { createClient } from "@supabase/supabase-js";

// Replace with your Supabase project credentials
const SUPABASE_URL = "https://rhmjgzbjufondcyczgyq.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJobWpnemJqdWZvbmRjeWN6Z3lxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg4NjgyODAsImV4cCI6MjA1NDQ0NDI4MH0.Sx1hiVq_ohHikSUvDFvpWJkbPszq_Q9K8nFZ-TVPkDY";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
