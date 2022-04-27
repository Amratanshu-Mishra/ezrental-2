import React from "react";
import {Card, Button} from "react-bootstrap"
function Offerscard(props) {
    return (
        <> 
        <Card  className="offerscard" style={{ width: '18rem' }}>
  <Card.Img variant="top" src="/images/Offers/offer1.jpg" />
  <Card.Body className="offerbody">
    <Card.Title >Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
   <Button type="submit" >Go Somewhere</Button>
  </Card.Body>
</Card>
</>
    )
}

export default Offerscard;