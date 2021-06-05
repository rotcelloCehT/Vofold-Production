import React from 'react';
import cardImg1 from '../../images/sdcard.svg';
import cardImg2 from '../../images/mouse.svg';
import cardImg3 from '../../images/clock.svg';
import { StyledTriplecards} from './Triplecards.styled';

const Triplecards = () => {
    return (
        <StyledTriplecards className="triple-container">
            <div className="card">
                <img src={ cardImg1 } alt="folder illustration" />
                <p>Select the source. Ex) SD Card or smartphone photos folder</p>
            </div>
            <div className="card">
                <img src={ cardImg2 } alt="folder illustration" />
                <p>Select the source. Ex) SD Card or smartphone photos folder</p>
            </div>
            <div className="card">
                <img src={ cardImg3 } alt="folder illustration" />
                <p>Select the source. Ex) SD Card or smartphone photos folder</p>
            </div>
        </StyledTriplecards>
    )
};

export default Triplecards;