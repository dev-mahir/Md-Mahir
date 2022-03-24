import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// install bootstrap and import css in index.js file 
// import bootstrap components and use 

function ReactBootstrap() {
    return (
        <div>
            <Card style={{ width:'300px'}} className="mt-5 ms-5">
                <Card.Img variant="top" style={{height: "200px"}} src="https://thumbs.dreamstime.com/b/handsome-man-hair-style-beard-beauty-face-portrait-fashion-male-model-black-hair-high-resolution-handsome-man-125031765.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <hr />
                    <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </Card.Text>
                    <Button className="btn btn-danger">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
}
export default ReactBootstrap;
