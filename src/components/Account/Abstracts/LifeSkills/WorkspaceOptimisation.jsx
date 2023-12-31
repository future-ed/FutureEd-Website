import React from 'react'
import GeneralContent from '../General_Abstract/General_Content';
import c1 from '../../../../assets/content/nl-en/ls_wo1.svg';
import c2 from '../../../../assets/content/nl-en/ls_wo2.svg';
import c3 from '../../../../assets/content/nl-en/ls_wo3.svg';
import c4 from '../../../../assets/content/nl-en/ls_wo4.svg';

const WorkspaceOptimisation = ({ onBackClick, readStatus, onToggleRead }) => {
  const contentPictures = [
    c1,
    c2,
    c3,
    c4,
  ]
  return (
    <GeneralContent 
            title="Workspace Optimization"
            content={contentPictures}
            onBackClick={ onBackClick }
            readStatus={readStatus}
            onToggleRead={onToggleRead}
    />
  )
}


export default WorkspaceOptimisation
