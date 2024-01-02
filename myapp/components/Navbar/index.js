import React from 'react'
import AuthLinks from './AuthLinks'
import getServerUser from '@/lib/getServerUser'

const Navbar = async () => {
    const user = await getServerUser()

  return (
    <header className='px-4 py-8'>
        <AuthLinks user={user} />
    </header>
  )
}

export default Navbar