import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://efcxqvfrwjhicpmznbkf.supabase.co'
// const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmY3hxdmZyd2poaWNwbXpuYmtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEwMzQwNTQsImV4cCI6MjAzNjYxMDA1NH0.VXIMftDWYEdms57r5AkoRxOXgUwnAz5VFtrcocGU6j8'
const supabaseUrlRoleKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmY3hxdmZyd2poaWNwbXpuYmtmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyMTAzNDA1NCwiZXhwIjoyMDM2NjEwMDU0fQ.OKvkeqe3HP0eD6Zi1Pri8hRkcvM-mxsgvtHJ2Bfs9yI'

export const supabase = createClient(supabaseUrl,supabaseUrlRoleKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})