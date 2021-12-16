import React from "react";

import { Row, Col, Card, Button } from "react-bootstrap";

const Project = () => {
    let projects = [
        {
            id: "proj1",
            projectName: "Test",
            projectInfo: "React allows you to easily write JavaScript code inside your components. This makes it easy for any developer to comfortably handle common programming techniques in React, such as looping through a set of items, creating and invoking functions, storing data in local variables, and so on.",
        },
        {
            id: "proj2",
            projectName: "Test",
            projectInfo: "React allows you to easily write JavaScript code inside your components. This makes it easy for any developer to comfortably handle common programming techniques in React, such as looping through a set of items, creating and invoking functions, storing data in local variables, and so on.",
        },
        {
            id: "proj3",
            projectName: "Test",
            projectInfo: "React allows you to easily write JavaScript code inside your components. This makes it easy for any developer to comfortably handle common programming techniques in React, such as looping through a set of items, creating and invoking functions, storing data in local variables, and so on.",
        },
        {
            id: "proj4",
            projectName: "Test",
            projectInfo: "React allows you to easily write JavaScript code inside your components. This makes it easy for any developer to comfortably handle common programming techniques in React, such as looping through a set of items, creating and invoking functions, storing data in local variables, and so on.",
        },
    ];

    let projectList = [];
    projects.forEach((item, index) => {
        projectList.push(
            <Col md={6} key={index} className="mt-3">
                <Card>
                    <Card.Body>
                        <Card.Title>
                            <h5 className="py-2">{item.projectName}</h5>
                        </Card.Title>
                        <Card.Text className="clearfix text-start text-break fw-normal lh-base justify-content-evenly">
                            <p
                                className="py-3"
                                style={{ textAlign: "justify" }}
                            >
                                {item.projectInfo}
                            </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        );
    });

    return (
        <div className="mt-3 mx-2 px-2">
            <Row>
                {projectList}
                <Col className="mt-3">
                    <Button variant="info">Know More</Button>
                </Col>
            </Row>
        </div>
    );
};

export default Project;
