import React from 'react'
import GeneralAbstract from '../Abstracts/General_Abstract';
import backgroundImage from '../../../assets/Personal_Finances.png';

const MoneyPath = ({ onBackClick }) => {
    const content = (
        <div>
            <h1 className='mt-1'>Money Paths</h1>
            <p>• The ESBI Framework</p>
            <p className='italic ml-3'> E:Employee, S:Self-Employed, B:Business Owner, I: Investor</p>
            <p>• The Pros and Cons of All Paths</p>
            <p>• Understanding Your Money Motivations</p>
            <p>• Making a Choice which direction you are working towards (Exercise)</p>
            <div>
                <p>In this chapter, we explore the ESBI framework—Employee, Self-Employed, Business Owner, and Investor— 
                    a framework to understand different paths to financial independence. We examine the distinct traits of 
                    each path, aiming to illuminate the advantages and challenges of each path.</p>
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

export default MoneyPath
