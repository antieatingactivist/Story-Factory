import Snippet from './Snippet';
import { getAllStories, getSingleStory } from '../utils/API';
import { useState, useEffect } from 'react';


const textColors = [
    "#ef4444",
    "#f97316",
    "#f59e0b",
    "#eab308",
    "#84cc16",
    "#22c55e",
    "#10b981",
    "#06b6d4",
    "#0ea5e9",
    "#3b82f6",

]

const storyStyle = {

 width: '80%',
//  backgroundColor: '#222222',
 marginLeft: '10%',
 marginTop: '3%',
}

export default function Story({storyName}) {
    const [currentStory, setCurrentStory] = useState(0);
    const getStory = async () => {
        
        try {
            
            if (!storyName) {
                const response = await getAllStories();
                const result = await response.json();

                const randomNumber = Math.floor(Math.random() * result.length);
    
                setCurrentStory(result[randomNumber]);
            }
            
            
            
            else {
                const response = await getSingleStory(storyName);
                const result = await response.json();

                setCurrentStory(result);
            }
    

        } catch (error){
            console.error(error);
        }
    }

    useEffect((storyName)=>{

        getStory();
       
        
    }, [])
    console.log("yyyy", storyName);
    return (
        <section style={storyStyle}>
      
            <p>{currentStory.storyname}</p>
            <p>{currentStory.prompt}</p>
            {currentStory.snippets?.map((snippet, index) => (
                <Snippet text={snippet.snippetText} color={textColors[index]} key={index}/>


            ))}


        </section>
    );
  }