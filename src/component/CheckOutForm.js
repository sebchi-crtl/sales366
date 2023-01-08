import React, { useState } from 'react';
import CarbonZeroWrapper from './CarbonZeroWrapper'
import { Form, Image, Button } from 'react-bootstrap'

function CheckOutForm() {
    const items = [
    {
      drink: 'coke',
      type: 'bottle',
      size: 35,
    },
  ];

  const [inputList, setInputList] = useState([{itemName:'', itemQuantity:'', itemPrice:''}]);

   const handleinputchange=(e, index)=>{
    const {name, value}= e.target;
    const list= [...inputList];
    list[index][name]= value;
    setInputList(list);

  }
 
  const handleremove= index=>{
    const list=[...inputList];
    list.splice(index,1);
    setInputList(list);
  }


  const handleAddList=()=>{
    setInputList([...inputList, {}]);
  }

  return (
    <div className='form col-lg-4 col-8 '>
        <Image className='image' src="https://sales366.com/storage/2021/09/cropped-Sales-3666-black.png" />
        <Form className=''>
              { 
            inputList.map( (x,i)=>{
              return(
                <div className='mb-3 py-3 row'>
                    <Form.Group className='mb-4' controlId="formBasicPassword">
                        
                        <Form.Control type="text" name="itemName" placeholder="Enter Item Name" onChange={ e=>handleinputchange(e,i) } />
                    </Form.Group>
                    <div className='col-6'>
                        <Form.Group controlId="formBasicEmail">
                            
                            <Form.Control type="number" name="itemQuantity" placeholder="Enter Item Quantity" onChange={ e=>handleinputchange(e,i) } />
                        </Form.Group>
                    </div>
                    <div className='col-6'>
                        <Form.Group controlId="formBasicEmail">
                            
                            <Form.Control type="text" name="itemPrice" placeholder="Enter Item Price" onChange={ e=>handleinputchange(e,i) }/>
                        </Form.Group>
                    </div>
                </div>
                 );
             } )}
        </Form>
        <Button className='col-12 my-2' variant="danger" onClick={handleremove}>
            Remove Item from List
        </Button>
        <Button className='col-12' variant="info" onClick={handleAddList}>
            Add Item to List
            </Button>
        <p className='float-right mt-3'>Total Price = 3000</p>
        <CarbonZeroWrapper
        totalPrice="3000"
        purchaseRefId={2002}
        purchasedItems={items.push()}
      />
    </div>
  )
}

export default CheckOutForm