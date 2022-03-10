
import Nav from './Nav';


export default function Header({hidden, scrollPosition}) {

    const headerStyle = {
        paddingTop: "10px",
        display: "flex",
        width: "100%",
        fontFamily: "American Typewriter",
    }
    const titleStyle = {
        
        fontSize: "4em",
        paddingLeft: "30px",
        // backgroundColor: "#000000",
        whiteSpace: "nowrap"
        
    }


    return (
        <header style={headerStyle}>
            <div style={titleStyle}>Story Factory</div>
            <Nav />
      
        </header>
    );
  }