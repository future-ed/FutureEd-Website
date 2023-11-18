import React, {useState} from 'react'
import Main from '../../components/Account/Main'
import backgroundImage from '../../assets/CareerBuilding.png';
import CVBuilding from './Abstracts/CVBuilding';
import LinkedInProfileBuilding from './Abstracts/LinkedInProfileBuilding';
import InterviewPreparation from './Abstracts/InterviewPreparation';
import FormalDressCode from './Abstracts/FormalDressCode';
import NetworkingPsychology from './Abstracts/NetworkPsychology';
import Negotiation from './Abstracts/Negotiation';



const Career_Building = () => {
    const [currentComponent, setCurrentComponent] = useState(null);
    const mainTitle = 'Career Building';
    const componentMapping = {
      cvBuilding: CVBuilding,
      linkedInProfileBuilding: LinkedInProfileBuilding,
      interviewPreparation: InterviewPreparation,
      formalDressCode: FormalDressCode,
      networkingPsychology: NetworkingPsychology,
      negotiation: Negotiation,
    };
  
    const handleBackClick = () => {
      setCurrentComponent(null);
    }
    const cardsData = [
      { emoji: '🔖', title: 'CV Building', completed: 50, path: 'cvBuilding' },
      { emoji: '👔', title: 'LinkedIn Profile Building', completed: 60, path: 'linkedInProfileBuilding' },
      { emoji: '🙋‍♀️', title: 'Interview Preparation', completed: 60, path: 'interviewPreparation' },
      { emoji: '🤵🏽', title: 'Formal Dress Code', completed: 60, path: 'formalDressCode' },
      { emoji: '💬', title: 'Negotiation', completed: 60, path: 'networkingPsychology' },
      { emoji: '🌐', title: 'Networking Psychology', completed: 60, path: 'negotiation' },
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

export default Career_Building
