import React, {useState, useEffect} from 'react'
import Main from './Main'
import backgroundImage from '../../../assets/LifeSkills.png';
import { useReadStatus } from '../../Account/update_read';

import StudyHacks from '../Abstracts/LifeSkills/StudyHacks';
import Procrastination from '../Abstracts/LifeSkills/Procrastination';
import WorkspaceOptimisation from '../Abstracts/LifeSkills/WorkspaceOptimisation';
import TimeManagement from '../Abstracts/LifeSkills/TimeManagement';

const LifeSkills = () => {
    const [readStatuses, toggleReadStatus] = useReadStatus('life skills')
    const [currentComponent, setCurrentComponent] = useState(null);
    const [cardsData, setCardsData] = useState([]);

    useEffect(() => {
      setCardsData([
        { emoji: '📚', title: 'Study Hacks', completed: readStatuses['study_hacks'] ? 100 : 0, path: 'studyHacks' },
      { emoji: '🗓', title: 'Time Management', completed: readStatuses['time_management'] ? 100 : 0, path: 'timeManagement' },
      { emoji: '🖥', title: 'Workspace Optimisation', completed: readStatuses['workspace_optimisation'] ? 100 : 0, path: 'workspaceOptimisation' },
      { emoji: '🤸🏻', title: 'Procrastination', completed: readStatuses['procrastination'] ? 100 : 0, path: 'procrastination' },
      ]);
  }, [readStatuses]);
    
  const handleToggleReadStatus = (path) => {
    toggleReadStatus(path);
  };
  
  const componentMapping = {
    studyHacks: <StudyHacks onBackClick={() => setCurrentComponent(null)} 
                                 readStatus={readStatuses['study_hacks']} 
                                 onToggleRead={() => handleToggleReadStatus('study_hacks')} />,
    procrastination: <Procrastination onBackClick={() => setCurrentComponent(null)} 
                                 readStatus={readStatuses['procrastination']} 
                                 onToggleRead={() => handleToggleReadStatus('procrastination')} />,
    workspaceOptimisation: <WorkspaceOptimisation onBackClick={() => setCurrentComponent(null)} 
                                 readStatus={readStatuses['workspace_optimisation']} 
                                 onToggleRead={() => handleToggleReadStatus('workspace_optimisation')} />,
    timeManagement: <TimeManagement onBackClick={() => setCurrentComponent(null)} 
                                 readStatus={readStatuses['time_management']} 
                                 onToggleRead={() => handleToggleReadStatus('time_management')} />,
  };
    
    const navigateTo = (path) => {
      const ComponentToShow = componentMapping[path];
      setCurrentComponent(ComponentToShow);
    };

    return (
      <div>
       {currentComponent ? 
           currentComponent : 
           <Main background={backgroundImage}
                 mainTitle='Life Skills'
                 cardsData={cardsData}
                 gridCols="md:grid-cols-3 grid-cols-1"
                 navigateTo={navigateTo} />
         }
   </div>
   );
}

export default LifeSkills
