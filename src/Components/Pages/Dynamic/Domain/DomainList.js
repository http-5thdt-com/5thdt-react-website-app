import React from "react";

import { Card } from "react-bootstrap";

const DomainList = (props) => {
    return (
        <div>
            <Card style={{ marginTop: "3rem", height: "auto", objectFit: "contain" }}>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>
                        <h5 className="text-center mt-1 p-3">{props.name}</h5>
                    </Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
};

export default DomainList;
