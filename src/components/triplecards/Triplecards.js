import React from 'react';
import cardImg1 from '../../images/clock.svg';
import cardImg2 from '../../images/mouse.svg';
import cardImg3 from '../../images/sdcard.svg';
import { StyledTriplecards} from './Triplecards.styled';

const Triplecards = () => {
    return (
        <StyledTriplecards className="triple-container">
            <div className="card"><img src={ cardImg1 } alt="folder illustration" /></div>
            <div className="card"><img src={ cardImg2 } alt="folder illustration" /></div>
            <div className="card"><img src={ cardImg3 } alt="folder illustration" /></div>
        </StyledTriplecards>
    )
};

export default Triplecards;