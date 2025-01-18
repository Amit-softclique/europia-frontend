import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const MainLayout = () => {
  return (
    <>
        {/* <div style={{display: 'flex'}}> */}
            {/* <div className=" ">
                <Sidebar />
            </div> */}
            <div>
            {/* style={{display: 'flex', flexDirection: 'column', width: '100%'}} */}
                {/* <Header /> */}
                    <Outlet />
                <Footer />
            </div>
        {/* </div> */}
    </>
  )
}

export default MainLayout