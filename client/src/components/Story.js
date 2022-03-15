import Snippet from './Snippet';
import { getAllStories } from '../utils/API';
import { useState, useEffect } from 'react';
const tempData = [
    {
        id: 1,
       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed hendrerit libero. Morbi tristique, quam nec condimentum mattis, enim turpis aliquam ligula, non efficitur ex dolor nec metus. Pellentesque purus massa, pretium a mollis non, scelerisque vel elit. Aliquam tortor nisi, ultricies quis elementum non, faucibus ut neque." 
    },
    {
        id: 2,
        text: "Aenean a dui venenatis, luctus erat ut, pulvinar est. Sed pretium mattis erat eu aliquam. Vestibulum diam velit, faucibus ac urna et, varius accumsan diam. Maecenas vitae mi sem. Vestibulum maximus, ex id porttitor tristique, elit purus laoreet enim, sed semper ante nisl eu tortor." 
    },
    {
        id: 3,
        text: "Vestibulum accumsan egestas enim. Maecenas quis turpis scelerisque, pulvinar ipsum nec, molestie massa. Aenean iaculis eleifend sapien, in feugiat purus mattis sed. Curabitur et augue at orci efficitur commodo. Donec libero velit, scelerisque sit amet lobortis nec, aliquam id ipsum." 
    },
    {
         id: 4,
         text: "Aenean a dui venenatis, luctus erat ut, pulvinar est. Sed pretium mattis erat eu aliquam. Vestibulum diam velit, faucibus ac urna et, varius accumsan diam. Maecenas vitae mi sem. Vestibulum maximus, ex id porttitor tristique, elit purus laoreet enim, sed semper ante nisl eu tortor." 
    },
    {
         id: 5,
         text: "Vestibulum accumsan egestas enim. Maecenas quis turpis scelerisque, pulvinar ipsum nec, molestie massa. Aenean iaculis eleifend sapien, in feugiat purus mattis sed. Curabitur et augue at orci efficitur commodo. Donec libero velit, scelerisque sit amet lobortis nec, aliquam id ipsum." 
    },    
    {
        id: 6,
       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed hendrerit libero. Morbi tristique, quam nec condimentum mattis, enim turpis aliquam ligula, non efficitur ex dolor nec metus. Pellentesque purus massa, pretium a mollis non, scelerisque vel elit. Aliquam tortor nisi, ultricies quis elementum non, faucibus ut neque." 
    },
    {
        id: 7,
        text: "Aenean a dui venenatis, luctus erat ut, pulvinar est. Sed pretium mattis erat eu aliquam. Vestibulum diam velit, faucibus ac urna et, varius accumsan diam. Maecenas vitae mi sem. Vestibulum maximus, ex id porttitor tristique, elit purus laoreet enim, sed semper ante nisl eu tortor." 
    },
    {
        id: 8,
        text: "Vestibulum accumsan egestas enim. Maecenas quis turpis scelerisque, pulvinar ipsum nec, molestie massa. Aenean iaculis eleifend sapien, in feugiat purus mattis sed. Curabitur et augue at orci efficitur commodo. Donec libero velit, scelerisque sit amet lobortis nec, aliquam id ipsum." 
    },
    {
         id: 9,
         text: "Aenean a dui venenatis, luctus erat ut, pulvinar est. Sed pretium mattis erat eu aliquam. Vestibulum diam velit, faucibus ac urna et, varius accumsan diam. Maecenas vitae mi sem. Vestibulum maximus, ex id porttitor tristique, elit purus laoreet enim, sed semper ante nisl eu tortor." 
    },
    {
         id: 10,
         text: "Vestibulum accumsan egestas enim. Maecenas quis turpis scelerisque, pulvinar ipsum nec, molestie massa. Aenean iaculis eleifend sapien, in feugiat purus mattis sed. Curabitur et augue at orci efficitur commodo. Donec libero velit, scelerisque sit amet lobortis nec, aliquam id ipsum." 
    }
]

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

export default function Story() {
    const [currentStory, setCurrentStory] = useState(0);
    const getRandomStory = async () => {
        
        try {
            const response = await getAllStories();
            
            const result = await response.json();

            const randomNumber = Math.floor(Math.random() * result.length);

            setCurrentStory(result[randomNumber]);

        } catch (error){
            console.error(error);
        }
    }

    useEffect(()=>{

        getRandomStory();
        
    }, [])
    console.log("xxx", currentStory);
    return (
        <section style={storyStyle}>
      
            <p>Story Title</p>
            
            {tempData.map((snippet, index) => (
                <Snippet text={snippet.text} color={textColors[index]} key={snippet.id}/>


            ))}


        </section>
    );
  }