

   
export default function Snippet({story, text, color}) {

    const snippetStyle = {
        width: '80%',
        marginLeft: '5%',
        marginBottom: '5%',
    
        
        
    }
    const colorStyle = {
        marginLeft: '5%',
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
            <a href="#gotostory">{story}</a>
            <div style={divStyle}>
                <div style={voteStyle}>
                    +1
                </div>
                <div>
                    <p style={colorStyle}>{text}</p>
                </div>
            </div>
               
   
               
        </section>
    );
}