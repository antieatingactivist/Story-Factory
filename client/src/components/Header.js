



export default function Header({hidden, scrollPosition}) {

    const headerStyle = {
        paddingTop: "10px"
    }
    const titleStyle = {
        fontFamily: "American Typewriter",
        fontSize: "4em",
        paddingLeft: "30px"
    }


    return (
        <header style={headerStyle}>
            <span style={titleStyle}>Story Factory</span>

      
        </header>
    );
  }