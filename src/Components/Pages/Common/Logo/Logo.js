import React from 'react';

import Image from 'react-bootstrap/Image'

import logoimg from '../../../../Assets/images/logo/logo-96x96.png'

const Logo = () => {
    return (
        <div>
            <Image src={logoimg} fluid alt='5thdt-logo' />
        </div>
    );
};

export default Logo;