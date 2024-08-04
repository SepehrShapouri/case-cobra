import React from 'react'
import { Button } from './ui/button'
import { logout } from '@/app/(auth)/actions'

function LogoutButton() {
  return (
    <form action={logout}>
        <Button variant="ghost" size="sm">Sign out</Button>
    </form>
  )
}

export default LogoutButton