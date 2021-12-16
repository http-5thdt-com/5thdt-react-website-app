import React from "react";
import { ActionKind, usePony } from "pony-props";

import { Row, Col } from "react-bootstrap";

export const MyFunky = () => {
    const items = new Array(10).fill(null).map((_, idx,) => ({
        id: idx,
        name: `Funky Text number ${idx}`,
    }));

    const {
        getSectionProps,
        getHeadingProps,
        getCarouselWrapperProps,
        getCarouselProps,
        getCarouselItemProps,
        getButtonProps,
        getAnnouncerProps,
        state,
    } = usePony({ numItems: items.length });

    return (
        <Row>
            <Col>
                <div {...getSectionProps()}>
                    <h1 {...getHeadingProps()}>Heading</h1>
                    <div {...getCarouselWrapperProps()}>
                        <ul {...getCarouselProps()}>
                            {items.map((item, idx) => (
                                <li key={idx} {...getCarouselItemProps(idx)}>
                                    {item.name} <br/>
                                    {item.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button {...getButtonProps(ActionKind.Next)} style={{float: 'right'}}>Next</button>
                    <button {...getButtonProps(ActionKind.Previous)} style={{float: 'right'}}>
                        Previous
                    </button>
                    
                    <div {...getAnnouncerProps()}>
                        <p>{`Item ${state.activeSlideIndex + 1} of ${
                            items.length
                        }`}</p>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

const Funky = () => {
    let funkyText = [
        {
            fid: "f1",
            ftxt: "This guide demonstrates how to implement loops in common use cases, such as rendering a list of static data and outputting data from an API.",
        },
        {
            fid: "f1",
            ftxt: "This guide demonstrates how to implement loops in common use cases, such as rendering a list of static data and outputting data from an API.",
        },
        {
            fid: "f1",
            ftxt: "This guide demonstrates how to implement loops in common use cases, such as rendering a list of static data and outputting data from an API.",
        },
    ];

    return (
        <div className="mt-3 mx-2 px-2">
            <MyFunky />
        </div>
    );
};

export default Funky;
