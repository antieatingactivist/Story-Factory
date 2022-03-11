// import '../index.css';
import Nav from './Nav';
import { StoryContext } from '../App';
import { useContext } from 'react';


const headerStyle = {
    paddingTop: "10px",
    display: "flex",
    width: "100%",
    // fontFamily: "Typewriter",
}
const titleStyle = {
        
    fontSize: "4em",
    paddingLeft: "30px",
    // backgroundColor: "#000000",
    whiteSpace: "nowrap"
        
}

export default function Header() {

    const storyShow = useContext(StoryContext);


    return (
        <header style={headerStyle}>
            <div style={titleStyle} onClick={() => storyShow.setStoryShow({homeShow: false})}>Story Factory</div>
            <Nav />
      
        </header>
    );
  }