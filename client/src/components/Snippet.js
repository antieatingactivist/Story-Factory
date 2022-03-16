

   
export default function Snippet({story, text, color}) {

    const snippetStyle = {
        width: '80%',
        marginLeft: '5%',
        marginBottom: '5%',
    
        
        
    }
    const storyTitleStyle = {
        marginLeft: '30px',
        fontSize: '1.4em'
    }
    const colorStyle = {
        marginLeft: '30px',
        color: color
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
                <div style={voteStyle}>
                    +1
                </div>
                <div>
                    <a style={storyTitleStyle} href="#gotostory">{story}</a>
                    <p style={colorStyle}>{text}</p>
                </div>
            </div>
               
   
               
        </section>
    );
}