import React, { Fragment } from 'react';
import Loader from "../common/layout/loader";
import Header from '../common/layout/header'
import Sidebar from '../common/layout/sidebar'
import Footer from '../common/layout/footer'
import {ToastContainer} from 'react-toastify'

const App = ({children}) => {
  console.warn = () => {}
  return (
    <Fragment>
      <Loader/>
      <div className="page-wrapper compact-wrapper" id="pageWrapper">
      <Header/>
      <div className="page-body-wrapper sidebar-icon">
        <Sidebar/>
        <div className="page-body">
          {children}
        </div>
        <Footer/>
        </div>
      </div>
      <ToastContainer/>
    </Fragment>
  );
}

export default App;
