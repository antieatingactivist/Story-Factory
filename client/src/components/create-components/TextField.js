import { useState, useContext } from 'react';
import { CreateContext } from '../Create';


export default function TextField({text}) {
    
    const textFieldContents = useContext(CreateContext);

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        e.preventDefault();
        const { value } = e.target;
        console.log(value);
        textFieldContents.setTextFieldContents(value);

        // return setTextField(value)
    
    };

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
                <textarea onChange={handleInputChange} style={textareaStyle} name="textBox" defaultValue={textFieldContents.textFieldContents}></textarea>

            </form>

    
     
            
            


        </section>
    );
  }