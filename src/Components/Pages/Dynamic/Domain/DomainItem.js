import React from "react";

import { Row, Col } from "react-bootstrap";

import DomainList from "./DomainList";

const DomainItem = (props) => {
    return (
        <div>
            <Row>
                <Col md={3}>
                    <DomainList
                        image={props.domains[0].image}
                        name={props.domains[0].name}
                    />
                </Col>
                <Col md={3}>
                    <DomainList
                        image={props.domains[1].image}
                        name={props.domains[1].name}
                    />
                </Col>
                <Col md={3}>
                    <DomainList
                        image={props.domains[2].image}
                        name={props.domains[2].name}
                    />
                </Col>
                <Col md={3}>
                    <DomainList
                        image={props.domains[3].image}
                        name={props.domains[3].name}
                    />
                </Col>
            </Row>

            <Row>
                <Col md={3}>
                    <DomainList
                        image={props.domains[4].image}
                        name={props.domains[4].name}
                    />
                </Col>
                <Col md={3}>
                    <DomainList
                        image={props.domains[5].image}
                        name={props.domains[5].name}
                    />
                </Col>
                <Col md={3}>
                    <DomainList
                        image={props.domains[6].image}
                        name={props.domains[6].name}
                    />
                </Col>
                <Col md={3}>
                    <DomainList
                        image={props.domains[7].image}
                        name={props.domains[7].name}
                    />
                </Col>
            </Row>
            <Row>
                <Col md={3}>
                    <DomainList
                        image={props.domains[8].image}
                        name={props.domains[8].name}
                    />
                </Col>
                <Col md={3}>
                    <DomainList
                        image={props.domains[9].image}
                        name={props.domains[9].name}
                    />
                </Col>
            </Row>
        </div>
    );
};

export default DomainItem;
