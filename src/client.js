
import { createClient } from '@supabase/supabase-js'

//Incluye los valores de conexión para las llamadas a la Api de supabase
//En otro fichero se le pone el alias api a supabase

const supabaseUrl = 'https://rdmybqbglpwbltepyhhz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkbXlicWJnbHB3Ymx0ZXB5aGh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMwNzQ1MzksImV4cCI6MjAyODY1MDUzOX0.P1HlXJnwSwafT5lwOo1BJYxp-xrQzp6uiBSAwbhDt9Q'
export const supabase = createClient(supabaseUrl, supabaseKey)