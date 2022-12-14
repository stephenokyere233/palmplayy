import React from 'react'
import Sidebar from '../sidebar/Sidebar';

const Layout = ({children}) => {
    const styles = {
      container:'grid min-h-screen border-2 border-red-500 w-screen grid-cols-4 lg:grid-cols-5 bg-[#5564DF] text-white',
    };

  return (
    <div className={styles.container}>
        <Sidebar/>
      {children}
    </div>
  )
}


export default Layout
