import React, {useState, useEffect} from 'react'
import Main from './Main'
import backgroundImage from '../../../assets/bg/CareerBuilding.png';
import { useReadStatus } from '../../Account/update_read';
import {useChapterReadProgress} from '../Dashboard/Chapter_Read_Progress'

import CVBuilding from '../Abstracts/CareerBuilding/CVBuilding';
import LinkedInProfileBuilding from '../Abstracts/CareerBuilding/LinkedInProfileBuilding';
import InterviewPreparation from '../Abstracts/CareerBuilding/InterviewPreparation';
import FormalDressCode from '../Abstracts/CareerBuilding/FormalDressCode';
import NetworkingPsychology from '../Abstracts/CareerBuilding/NetworkPsychology';
import Negotiation from '../Abstracts/CareerBuilding/Negotiation';



const Career_Building = () => {
    const [readStatuses, toggleReadStatus] = useReadStatus('career building')
    const [currentComponent, setCurrentComponent] = useState(null);
    const [cardsData, setCardsData] = useState([]);
    const chapterReadProgress = useChapterReadProgress('career building');

    useEffect(() => {
      setCardsData([
        { emoji: '🔖', title: 'CV Building', completed: readStatuses['cv_building'] ? 100 : 0, path: 'cvBuilding' },
      { emoji: '👔', title: 'LinkedIn Profile Building', completed: readStatuses['linkedin_profile_building'] ? 100 : 0, path: 'linkedInProfileBuilding' },
      { emoji: '🙋‍♀️', title: 'Interview Preparation', completed: readStatuses['interview_preparation'] ? 100 : 0, path: 'interviewPreparation' },
      { emoji: '🤵🏽', title: 'Formal Dress Code', completed: readStatuses['formal_dress_code'] ? 100 : 0, path: 'formalDressCode' },
      { emoji: '💬', title: 'Negotiation', completed: readStatuses['negotiation'] ? 100 : 0, path: 'negotiation' },
      { emoji: '🌐', title: 'Networking Psychology', completed: readStatuses['networking_psychology'] ? 100 : 0, path: 'networkingPsychology' },
      ]);
  }, [readStatuses]);
    
  const handleToggleReadStatus = (path) => {
    toggleReadStatus(path);
  };
  
  const componentMapping = {
    cvBuilding: <CVBuilding onBackClick={() => setCurrentComponent(null)} 
                                 readStatus={readStatuses['cv_building']} 
                                 onToggleRead={() => handleToggleReadStatus('cv_building')} />,
    linkedInProfileBuilding: <LinkedInProfileBuilding onBackClick={() => setCurrentComponent(null)} 
                                 readStatus={readStatuses['linkedin_profile_building']} 
                                 onToggleRead={() => handleToggleReadStatus('linkedin_profile_building')} />,
    interviewPreparation: <InterviewPreparation onBackClick={() => setCurrentComponent(null)} 
                                 readStatus={readStatuses['interview_preparation']} 
                                 onToggleRead={() => handleToggleReadStatus('interview_preparation')} />,
    formalDressCode: <FormalDressCode onBackClick={() => setCurrentComponent(null)} 
                                 readStatus={readStatuses['formal_dress_code']} 
                                 onToggleRead={() => handleToggleReadStatus('formal_dress_code')} />,
    networkingPsychology: <NetworkingPsychology onBackClick={() => setCurrentComponent(null)} 
                                 readStatus={readStatuses['negotiation']} 
                                 onToggleRead={() => handleToggleReadStatus('negotiation')} />,                            
    negotiation: <Negotiation onBackClick={() => setCurrentComponent(null)} 
                                 readStatus={readStatuses['networking_psychology']} 
                                 onToggleRead={() => handleToggleReadStatus('networking_psychology')} />,
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
                 mainTitle='Career Building'
                 cardsData={cardsData}
                 gridCols="md:grid-cols-3 grid-cols-1"
                 navigateTo={navigateTo} 
                 readProgress={chapterReadProgress}
                 subChapter={'career_building'}
                 />
         }
   </div>
   );
}

export default Career_Building
