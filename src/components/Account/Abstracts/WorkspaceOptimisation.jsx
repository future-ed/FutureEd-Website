import React from 'react'
import GeneralAbstract from './General_Abstract';
import backgroundImage from '../../../assets/LifeSkills.png';

const WorkspaceOptimisation = ({ onBackClick }) => {
  const content = (
      <div>
          <h1 className='mt-1'>Workspace Optimization</h1>
          <p>• How to Design an Effective Workspace </p>
          <p>• Design Your Ideal Workspace (Exercise)</p>

          <div className='mt-3'>
              <p> In this section, we'll focus on optimizing your workspace, offering guidance on designing an effective 
                and efficient working environment. Additionally, we'll provide an exercise to help students conceptualize 
                and create their ideal workspace, promoting productivity and comfort in their working area.</p>
          </div>          
      </div>
  );
return (
  <GeneralAbstract 
          backgroundImage={backgroundImage}
          title="Abstract"
          content={content}
          onBackClick={ onBackClick }
  />
)
}

export default WorkspaceOptimisation
