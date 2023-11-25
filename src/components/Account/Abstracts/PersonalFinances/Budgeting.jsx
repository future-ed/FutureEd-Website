import React from 'react'
import GeneralAbstract from '../General_Abstract/General_Abstract';
import backgroundImage from '../../../../assets/Personal_Finances.png';

const Budgeting = ({ onBackClick, readStatus, onToggleRead }) => {
    const content = (
        <div>
            <p>• The 50/30/20-Framework (Living/Fun/Saving)</p>
            <p>• Managing Money (Cash-Flow Organisation)</p>
            <p>• Making the budgeting ratio that works for you (Exercise)</p>
            <div className='mt-3'>
                <p>Introduction to the 50/30/20 Framework, a guiding principle dividing income into three categories: 
                    Essential Living Expenses, Spending and Fun, Savings, and financial goals. We aim to highlight the 
                    simplicity and practicality of this approach to manage money effectively. The remainder of this 
                    chapter will guide students to set up their bank accounts to organize their money.</p>
            </div>       
        </div>
    );
  return (
    <GeneralAbstract 
            backgroundImage={backgroundImage}
            title="Budgeting"
            content={content}
            onBackClick={ onBackClick }
            readStatus={readStatus}
            onToggleRead={onToggleRead}
    />
  )
}

export default Budgeting
