import React from 'react'
import network from '../../../../../assets/networking.png'

const Networking = () => {
  const fileName = 'Networking.docx';
  const numberOfRows = 10;
  const rows = Array.from({ length: numberOfRows }, (_, index) => index);

  return (
    <div className='text-lg mt-12 ml-[100px] mr-[120px]'>
      <div className="flex justify-end mt-[-30px] mb-3" style={{ position: 'relative' }}>
            <a 
              href={`${process.env.PUBLIC_URL}/${fileName}`}  
              download
              className="text-white bg-black py-2 px-5 rounded-full hover:underline"
            >
              Download
            </a>
        </div>
     <p className='mb-8'>We want you to complete the following chart to begin your networking journey and leverage the people you know to advance your career.</p>
     <img src={network} alt="" />
     {/* <table className="networking-table">
      <thead>
        <tr>
          <th>Most important<br />people you know</th>
          <th>How can they help you?</th>
          <th>How can you offer these people value?</th>
        </tr>
      </thead>
      <tbody>
        {[...Array(numberOfRows)].map((_, rowIndex) => (
          <tr key={rowIndex}>
            <td>
              <input
                type="text"
                className="input-large"
                placeholder={rowIndex < 2 ? (rowIndex === 0 ? '1. Mark Thuberman' : '2. John Smith') : `${rowIndex + 1}.`}
              />
            </td>
            <td>
              <input
                type="text"
                className={`input-large ${rowIndex < 2 ? '' : 'input-placeholder'}`}
                placeholder={
                  rowIndex === 0
                    ? 'Connect me to recruiter'
                    : rowIndex === 1
                    ? 'Can teach me something about Marketing that benefits me because I want to start digital marketing firm as well.'
                    : ''
                }
              />
            </td>
            <td>
              <input
                type="text"
                className={`input-large ${rowIndex < 2 ? '' : 'input-placeholder'}`}
                placeholder={
                  rowIndex === 0
                    ? 'When you meet them at a networking event, show interest in them and the role; be enthusiastic because sometimes you can\'t provide direct value.'
                    : rowIndex === 1
                    ? 'Do a short project for free, offer them this'
                    : ''
                }
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table> */}

    <p className='mb-12 mt-8'>Reach out to these people by providing value first!</p>
    </div>
  )
}

export default Networking
