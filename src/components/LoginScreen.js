import React from 'react'

const LoginScreen = () => {
  return (
    <>
    <div className='w-full h-screen'>
      <img className='hidden sm:block absolute w-full h-full object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/935156fb-9579-4fc2-ad94-70680402b8ef/0ed2388e-b944-4310-9fb9-b54297a09ebb/PK-en-20230109-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt=''/>
      <div className='bg-black/60 w-full h-screen fixed top-0 left-0'></div>
      <div className='fixed w-full px-4 py-24 '>
        <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'></div>
      </div>
    </div>
    </>
    

  )
}

export default LoginScreen
