import React from 'react';
import { StyledFolderanimation} from './FolderAnimation.styled';

const folderAnimation = () => {
    return (
        <StyledFolderanimation>
            <div className="folder-animation-container">
                <h1>folder animation </h1>
                <p>
                    split the folder svg in two
                    -get date from an api
                    -make slider from amount on photos taken that day and display
                    -organise button animates the images down, display image count on top right
                </p>
            </div>
        </StyledFolderanimation>
    )
};

export default folderAnimation;