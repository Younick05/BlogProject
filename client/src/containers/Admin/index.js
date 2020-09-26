import React from 'react';
import Admin from '../../components/adminpannel';
import Admintest from '../../components/admintest';
import Card from '../../components/UI/Card';



/**
* @author
* @function Admin
**/

const Admindashboard = (props) => {
  return(
    <div>
      <Card style={{marginTop:'20px'}}>
      <h1>Admin Pannel</h1>
      </Card>
      
      <Admintest></Admintest>
      
      <Admin></Admin>
    </div>
   )

 }

export default Admindashboard