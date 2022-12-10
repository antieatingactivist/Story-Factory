import React from "react"


   
export default function Snippet({story, text, color, author}) {

    const snippetStyle = {
        // width: '80%',
        // marginLeft: '5%',
        // marginBottom: '5%',
        // backgroundColor: "#ef444422"
        // border: '1px solid #ffffff33'
        
        
    }
    const authorStyle = {
        color: "#444444",
        width: '120px',
        fontSize: '.8em'
    }
    const storyTitleStyle = {
        marginLeft: '30px',
        fontSize: '1.4em'
    }
    const colorStyle = {
        marginLeft: '20px',
        color: color,
        whiteSpace: "normal",
        overflowWrap: "break-word",
        width: '100%'
        
    }
    const divStyle = {
        display: 'flex',
        flexDirection: 'row',

    }
    const voteStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        fontSize: '2em'
    }

    return (
        <section style={snippetStyle}>
            
            <div style={divStyle}>
                {/* <div style={voteStyle}>
                    +1
                   
                </div> */}
                <div style={authorStyle}>
                    <p>{author}</p>
                </div>
                 
                <div>
                    { story ?
                        <a style={storyTitleStyle} href="#gotostory">{story}</a>
                        :
                        <></>
                    }
                    <p style={colorStyle}>{text}</p>
                </div>
            </div>
               
   
               
        </section>
    );
}