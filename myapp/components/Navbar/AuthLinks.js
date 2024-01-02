'use client'

import { signIn, signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import { FiPlus, FiList, FiActivity, FiHome, FiUser, FiLogOut } from 'react-icons/fi';




const AuthLinks = ({user}) => {
  return (
    <div className='flex items-center gap-4'>
               {
            !user
              ? <>
              <div className="flex items-center">
              <div className="circle-icon">
              <button
                  className='text-sm flex flex-col'
                  onClick={() => signIn('google')}
                  >
                   <FiUser />
                  </button>

                      </div>
                      <span className="ml-1 text-sm links adjustment">LogIn</span>
                    </div> 
              </>

              : <>
             <div className="flex items-center gap-4">
             <Link href={'/workouts'}>WorkOuts</Link>
              <div className='adjustment sm:text-2xl md:text-2xl'>
              <button
                  className='flex flex-col'
                  onClick={signOut}
                  >
                   <FiLogOut />
                  </button>
                      </div>
                    </div>        

                
              </>
          }
    </div>
  )
}

export default AuthLinks