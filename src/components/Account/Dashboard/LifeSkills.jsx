import React, {useState} from 'react'
import Main from './Main'
import backgroundImage from '../../../assets/LifeSkills.png';
import StudyHacks from '../Abstracts/LifeSkills/StudyHacks';
import Procrastination from '../Abstracts/LifeSkills/Procrastination';
import WorkspaceOptimisation from '../Abstracts/LifeSkills/WorkspaceOptimisation';
import TimeManagement from '../Abstracts/LifeSkills/TimeManagement';

const LifeSkills = () => {
    const [currentComponent, setCurrentComponent] = useState(null);
    const mainTitle = 'Life Skills';
    const componentMapping = {
      studyHacks: StudyHacks,
      procrastination: Procrastination,
      workspaceOptimisation: WorkspaceOptimisation,
      timeManagement: TimeManagement,
    };
  
    const handleBackClick = () => {
      setCurrentComponent(null);
    }
    const cardsData = [
      { emoji: '📚', title: 'Study Hacks', completed: 50, path: 'studyHacks' },
      { emoji: '🗓', title: 'Time Management', completed: 60, path: 'procrastination' },
      { emoji: '🖥', title: 'Workspace Optimisation', completed: 60, path: 'workspaceOptimisation' },
      { emoji: '🤸🏻', title: 'Procrastination', completed: 60, path: 'timeManagement' },
      // { emoji: '', title: 'Coming soon', completed: 60, path: '' },
      // { emoji: '', title: 'Coming soon', completed: 60, path: '' },
    ];
    const gridCols = 'md:grid-cols-3 grid-cols-1';
    const navigateTo = (path) => {
      const ComponentToShow = componentMapping[path];
      if (ComponentToShow) {
        setCurrentComponent(<ComponentToShow onBackClick={handleBackClick}/>);
      }
    };

    return (
      <div>
        {currentComponent ? React.cloneElement(currentComponent, { onBackClick: handleBackClick }) : (
            <Main 
              background={backgroundImage}
              mainTitle={mainTitle}
              cardsData={cardsData}
              gridCols={gridCols}
              navigateTo={navigateTo}
            />
        )}
      </div>
    )
}

export default LifeSkills
