


export default function TextField() {

    const textareaStyle = {
        width: '100%',
        height: '200px',
        backgroundColor: '#ffffff11',
        resize: 'none',
        font: 'inherit',
        color: '#ffffff',
    }
    return (
        <section>
         

        
            <form>
                <textarea style={textareaStyle} name="textBox"></textarea>

            </form>

    
     
            
            


        </section>
    );
  }