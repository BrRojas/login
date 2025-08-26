import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'
import Login from './components/Login'
import Menu from './components/Menu'
import type{ User } from '@supabase/supabase-js'

export default function App() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    // mantiene la sesión aunque recargues
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) setUser(data.session.user)
    })

    // escucha los cambios en la sesión
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null)
      }
    )
    return () => {
      listener.subscription.unsubscribe()
    }
  }, [])
  return user ? <Menu user={user} setUser={setUser} ><p>Este es el menu de inicio</p></Menu> : <Login setUser={setUser} />
}

