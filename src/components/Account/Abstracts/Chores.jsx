import React from 'react'
import GeneralAbstract from './General_Abstract';
import backgroundImage from '../../../assets/IndependentLiving.png';

const Chores = ({ onBackClick }) => {
    const content = (
        <div>
            <h1 className='mt-1'>Chores</h1>
            <p>• A List of Chores to Do in a House, With The Corresponding Frequency</p>

            <div className='mt-3'>
                <p>In this section, we'll outline a helpful list of household chores along with their suggested frequencies. 
                    This comprehensive guide will cover various tasks essential for maintaining a tidy and organized home. </p>
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

export default Chores
