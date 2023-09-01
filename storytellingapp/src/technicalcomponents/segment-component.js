import React from 'react';

const StorySegment = ({ segment, handleOptionClick }) => {
  return (
    <div>
      <center><p>{segment.text}</p>
      <img src={segment.image} alt='' style={{ width: '250px', height: '180px' }} /></center>

      {(segment.end) ?
      <b><center>Story ended</center></b> :
      <ul>
        {segment.options.map(option => (
          <center key={option.id}>
            <button onClick={() => handleOptionClick(option.storyId)}>{option.text}</button>
            
          </center>
        ))}
      </ul>
        }

      
      
    </div>
  );
};

export default StorySegment;
