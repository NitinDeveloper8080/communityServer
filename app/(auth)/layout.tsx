import React from 'react'

const AuthLayout = ({children}:{children:React.ReactNode}) => {
  return <>
  <div className='bg-indigo-500  h-screen flex justify-center align-items-center p-10'>
  {children}

  </div>
  </>
}

export default AuthLayout