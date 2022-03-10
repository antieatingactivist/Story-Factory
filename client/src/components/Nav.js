



export default function Nav() {

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


    return (
        <nav style={navStyle}>

            
            <a style={aStyle} href="#">Other Link</a>
            <a style={aStyle} href="#">Home</a>
            <a style={aStyle} href="#">Login</a>
      
        </nav>
    );
  }