import React from 'react';

import education from '../../../../Assets/images/services/service_1.jpg';
import gaming from '../../../../Assets/images/services/service_2.jpg';
import arts from '../../../../Assets/images/services/service_3.jpg';
import animation from '../../../../Assets/images/services/service_4.png';
import uiux from '../../../../Assets/images/services/service_5.png';
import appdev from '../../../../Assets/images/services/service_6.png';
import hosp from '../../../../Assets/images/services/service_7.png';
import manage from '../../../../Assets/images/services/service_8.png';
import other from '../../../../Assets/images/services/service_9.png';
import serv from '../../../../Assets/images/services/service_10.png';

import DomainItem from './DomainItem';

const domainData = [
    {
        id: 1,
        name: 'Education',
        image: education
    },
    {
        id: 2,
        name: 'Gaming',
        image: gaming
    },
    {
        id: 3,
        name: 'Arts',
        image: uiux
    },
    {
        id: 4,
        name: 'Animation',
        image: arts
    },
    {
        id: 5,
        name: 'UI/UX',
        image: manage
    },
    {
        id: 6,
        name: 'Application Development',
        image: animation
    },
    {
        id: 7,
        name: 'Web Development',
        image: hosp
    },
    {
        id: 8,
        name: 'Hospitality',
        image: appdev
    },
    {
        id: 9,
        name: 'Managed Services',
        image: serv
    },
    {
        id: 10,
        name: 'We got it all covered. Pretty much',
        image: other
    },
];

const Domain = (props) => {

    // let domains = [
    //     'Education', 
    //     'Gaming', 
    //     'Arts', 
    //     'Animation', 
    //     'UI/UX', 
    //     'Application Development', 
    //     'Hospitality', 
    //     'Managed Services', 
    //     'We got it all covered. Pretty much'
    //     ];

    //let domainImg = [education];    

    // let domainList = [];
    // domainData.forEach((name, image, index) => {
    //     domainList.push(
    //             <Col md={3} key={index}>
    //                 <Card style={{marginTop: '3rem', height: '800px'}}>
    //                     <Card.Img variant="top" src={require(`${image[0]}`)}  />
    //                     <Card.Body>
    //                         <Card.Title>
    //                             <h5 className='text-center mt-5 p-3'>{name[0]}</h5>
    //                         </Card.Title>
    //                     </Card.Body>
    //                 </Card>
                    
    //             </Col>
    //         );
    // });

    return (
        <div className='mt-2 mx-2 px-2'>
            {/* {domainList} */}
            <DomainItem domains={domainData} />
        </div>
    );
};

export default Domain;