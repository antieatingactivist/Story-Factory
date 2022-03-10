// import '../index.css';
import Nav from './Nav';

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

export default function Header({hidden, scrollPosition}) {

 


    return (
        <header style={headerStyle}>
            <div style={titleStyle}>Story Factory</div>
            <Nav />
      
        </header>
    );
  }