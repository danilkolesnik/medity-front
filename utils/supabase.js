import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

// TODO: env
const supabaseUrl = 'https://toibtypkhhonvqtbssic.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvaWJ0eXBraGhvbnZxdGJzc2ljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA4MDcyNjUsImV4cCI6MjAzNjM4MzI2NX0.7fi7Wj33mfTW3m3frVpyfZ1vyTA2IAAFR5_5ApuGfnc'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})