import React, { Component } from 'react';
import { Button} from 'react-bootstrap';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

class Menu extends Component {

   constructor(props) {
       super(props);

       this.state = {
           selectedDish: null
       }
   }

   onSelectedDish(user) {
       alert('Description : '+user.description);
       this.setState({
           selectedDish: user
       })
   }
   render() {
       
       const menu = this.props.users.map(user => {
           return (
               <div key={user.id} className='col-12 col-md-5 m-1'>
                    <Card style={{border:"2px solid",backgroundColor:"lightblue",textAlign:"center"}} onClick={() => this.onSelectedDish(user)} >
                           <CardTitle ><b>Item Id:</b> {user.item_id}</CardTitle>
                           <CardTitle ><b>Item Name:</b> {user.item_name}</CardTitle>
                           <CardTitle ><b>Category Name:</b> {user.category_name}</CardTitle>
                           <CardTitle ><b>Veg:</b> {user.is_veg}</CardTitle>
                           <CardTitle ><b>Price:</b> {user.price}</CardTitle>
                          
                   </Card>
               </div>
       );
         });
   
       
       return (
           <div className='container'>
               
               <div className='row'>
                   {menu}
               </div>
           </div>
       );
      
   }
   

}


export default Menu; 

