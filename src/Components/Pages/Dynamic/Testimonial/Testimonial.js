import React from 'react';

import { ActionKind, usePony } from "pony-props";

import { Row, Col } from "react-bootstrap";

export const MyTestimonial = () => {
    const items = new Array(10).fill(null).map((_, idx) => ({
        id: idx,
        name: `Testimonial number ${idx}`,
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
        <Row className='mt-3'>
            <Col>
                <div {...getSectionProps()}>
                    <h3 {...getHeadingProps()}>Client Name</h3>
                    <h5 {...getHeadingProps()}>Project Name</h5>
                    <div {...getCarouselWrapperProps()}>
                        <ul {...getCarouselProps()}>
                            {items.map((item, idx) => (
                                <li key={idx} {...getCarouselItemProps(idx)}>
                                    {item.name}
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

const Testimonial = () => {
    return (
        <div className='mt-3 mx-2 px-2'>
            <MyTestimonial />
        </div>
    );
};

export default Testimonial;