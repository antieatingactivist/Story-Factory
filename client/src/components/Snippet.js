

   
export default function Snippet({text, color}) {

    const snippetStyle = {
        color: color
    }

    return (
        <section style={snippetStyle}>
         
               <p>{text}</p>
   
               
        </section>
    );
}