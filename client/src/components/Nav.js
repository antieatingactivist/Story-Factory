import { StoryContext } from '../App';
import { useContext } from 'react';

const navStyle = {
    paddingTop: "10px",
    display: "flex",
    justifyContent: "flex-end", 
    // backgroundColor: "#222222",
    fontSize: "1.4em",
    width: "100%",
       
}

const aStyle = {
    padding: "10px",
}



export default function Nav() {
    const storyShow = useContext(StoryContext);


    return (
        <nav style={navStyle}>

            
            <a style={aStyle} href="#">Other Link</a>
            <a style={aStyle} href="#" onClick={() => storyShow.setStoryShow({homeShow: true})} >Home</a>
            <a style={aStyle} href="#" onClick={() => storyShow.setStoryShow({loginShow: true})} >Login</a>
      
        </nav>
    );
  }