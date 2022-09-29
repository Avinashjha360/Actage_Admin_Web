import React from 'react'
import { Button} from '@mui/material';
function MedicalDetail() {
    return (
        <>
            
                <h5>Shipping Address <img src="images/edit.png" alt="logo" style={{ float:"right" }}/></h5>
                <ul>
                    <li>e76, Ashok vihar</li>
                    <li>opposite Ashok Nagar Gate 1</li>
                    <li> Ranchi, Jharkhand</li>
                    <li>India 834001</li>
                </ul>
            
            
                <h5>Order Summary <img src="images/edit.png" alt="logo" style={{ float:"right" }}/></h5>
                <ul>
                    <li><span>Order Amount</span>  -  02</li>
                    <li><span>Delivery Charges</span> - 23 INR</li>
                    <li><span>Discount</span> - 10%</li>
                    <li><span>Amount Paid</span> - 234 INR</li>
                    <li><span>Order Status</span> - UnderReview</li>
                </ul>
            
          <Button variant="contained" className='' style={{ margin: "10px 9px" }}>Add to Cart</Button>
          <Button variant="contained" className='' style={{ margin: "5px" }}>Add Presentation</Button>
          <Button variant="contained" className='' style={{ margin: "0px 8px"}}>View invoice</Button>
          <Button variant="contained" className='' style={{ margin: "5px "}}>Share to Whatsapp</Button>

        </>
    )
}

export default MedicalDetail