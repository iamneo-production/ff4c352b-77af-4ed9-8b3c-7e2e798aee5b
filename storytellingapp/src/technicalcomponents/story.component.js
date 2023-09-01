import React, { useEffect, useState } from "react";
import StorySegment from "./segment";
import { getStory } from "../services/storytelling.services";

function InteractiveStory() {
  const [storyData, setStoryData] = useState(null);
  const [currentSegmentId, setCurrentSegmentId] = useState(1);

  useEffect(() => {
    // Fetch the story data from an API or JSON file
    getStory()
    //getStoredData()
      .then(response =>{
         setStoryData(response.data)
         console.log(response.data);
        })
      .catch(error => console.error('Error fetching data:', error));
  }, []
  );

  const handleOptionClick = (nextSegmentId) => {
    setCurrentSegmentId(nextSegmentId);
  };

  if (!storyData) {
    return <p>Loading...</p>;
  }
 // console.log("Current segment ID:", currentSegmentId); 
  const currentSegment = storyData.story.find(segment => segment.id === currentSegmentId);

  return (
    <div className="App">
      <StorySegment segment={currentSegment} handleOptionClick={handleOptionClick} />
    </div>
  );
}

export default InteractiveStory
