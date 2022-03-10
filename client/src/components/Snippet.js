

   
export default function Snippet({text, color}) {

    const snippetStyle = {
        width: '80%',
        marginLeft: '5%',
        color: color
    }

    return (
        <section style={snippetStyle}>
         
               <p>{text}</p>
   
               
        </section>
    );
}