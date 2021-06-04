import React from 'react';
import headerImg from '../../images/app-display-header.svg';
import { StyledHeader} from './Header.styled';

const Header = () => {
    return (
        <StyledHeader className="header-container">
            <div className='text-container'>
                <h1>VOFOLD</h1>
                <h2>Organise photos<br/> into folder with<br/> one click</h2>
            </div>
            <span><img src={ headerImg } alt="folder illustration" /></span>
        </StyledHeader>
    )
};

export default Header;