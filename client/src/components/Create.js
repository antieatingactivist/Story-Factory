import Prompt from './create-components/Prompt';
import Rules from './create-components/Rules';
import Confirm from './create-components/Confirm';
import LastSnippet from './create-components/LastSnippet';
import TextField from './create-components/TextField';

import { useState } from 'react';




const createStyle = {

 width: '80%',
//  backgroundColor: '#222222',
 marginLeft: '10%',
 marginTop: '3%',
}

const divStyle = {
    border: '1px solid #ffffff',
    padding: '20px',
}



export default function Create() {
    const [showPassage, setShowPassage] = useState(false);
    const [passageTimer, setPassageTimer] = useState(0);
    const [writingTimer, setWritingTimer] = useState(0);
    const [passageIntervalId, setPassageIntervalId] = useState(0);
    const [writingIntervalId, setWritingIntervalId] = useState(0);

    const startWriting = () => {
        setWritingTimer(20);
        const timer = setInterval(()=>{
            setWritingTimer(timer => timer-1);
            
            
        },1000);
        setWritingIntervalId(timer);
    }
    const startGame = () => {
        setShowPassage(true);
        setPassageTimer(20);
        const timer = setInterval(()=>{
            setPassageTimer(timer => timer-1);
            
            
        },1000);
        setPassageIntervalId(timer);
    }

    if (passageIntervalId && passageTimer <= 0) {
        clearInterval(passageIntervalId);
    }
    if (writingIntervalId && writingTimer <= 0) {
        clearInterval(writingIntervalId);
    }

    console.log(writingTimer);
    return (
        <section style={createStyle}>
            <h1>Are You Ready? Here is your Prompt</h1>

            <div style={divStyle}>
            
                <Prompt />

                {!showPassage ?
                <div>
                    <Rules />
                
                    <button onClick={startGame}>I want to write about this!</button>
                    <button>Try a different prompt</button>
                </div> :
                <div>
                    
                    {passageTimer ?
                        <div>
                            <LastSnippet />
                            <p>{passageTimer}</p> 
                        </div>
                        :
                        <div>
                        {!writingTimer ?
                        <div>
                            <button onClick={startWriting}>Ready?</button>
                            
                        </div>
                        :   <div>
                                {writingTimer}
                                <TextField />
                            </div>
                        }
                        </div>
                    }

                </div>
                }

            </div>
            
            


        </section>
    );
  }