import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://ofxgcagnrbzozlxuecgg.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9meGdjYWducmJ6b3pseHVlY2dnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYxNjMxMjAsImV4cCI6MjA3MTczOTEyMH0.nJ10Gg7jSrEbvbw2pWWWIAeEYwKb27Tj_i3MPmQ62SE"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)