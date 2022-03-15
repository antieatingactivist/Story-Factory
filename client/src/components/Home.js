import Snippet from './Snippet';
import Create from './Create';
import { useState, useEffect } from 'react';
import { getMe } from '../utils/API';
import Auth from '../utils/auth';

const tempData = [
    {
        id: 1,
       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed hendrerit libero. Morbi tristique, quam nec condimentum mattis, enim turpis aliquam ligula, non efficitur ex dolor nec metus. Pellentesque purus massa, pretium a mollis non, scelerisque vel elit. Aliquam tortor nisi, ultricies quis elementum non, faucibus ut neque." 
    },
    {
        id: 2,
        text: "Aenean a dui venenatis, luctus erat ut, pulvinar est. Sed pretium mattis erat eu aliquam. Vestibulum diam velit, faucibus ac urna et, varius accumsan diam. Maecenas vitae mi sem. Vestibulum maximus, ex id porttitor tristique, elit purus laoreet enim, sed semper ante nisl eu tortor." 
    },
    {
        id: 3,
        text: "Vestibulum accumsan egestas enim. Maecenas quis turpis scelerisque, pulvinar ipsum nec, molestie massa. Aenean iaculis eleifend sapien, in feugiat purus mattis sed. Curabitur et augue at orci efficitur commodo. Donec libero velit, scelerisque sit amet lobortis nec, aliquam id ipsum." 
    },
    {
         id: 4,
         text: "Aenean a dui venenatis, luctus erat ut, pulvinar est. Sed pretium mattis erat eu aliquam. Vestibulum diam velit, faucibus ac urna et, varius accumsan diam. Maecenas vitae mi sem. Vestibulum maximus, ex id porttitor tristique, elit purus laoreet enim, sed semper ante nisl eu tortor." 
    },
    {
         id: 5,
         text: "Vestibulum accumsan egestas enim. Maecenas quis turpis scelerisque, pulvinar ipsum nec, molestie massa. Aenean iaculis eleifend sapien, in feugiat purus mattis sed. Curabitur et augue at orci efficitur commodo. Donec libero velit, scelerisque sit amet lobortis nec, aliquam id ipsum." 
    },    
    {
        id: 6,
       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed hendrerit libero. Morbi tristique, quam nec condimentum mattis, enim turpis aliquam ligula, non efficitur ex dolor nec metus. Pellentesque purus massa, pretium a mollis non, scelerisque vel elit. Aliquam tortor nisi, ultricies quis elementum non, faucibus ut neque." 
    },
    {
        id: 7,
        text: "Aenean a dui venenatis, luctus erat ut, pulvinar est. Sed pretium mattis erat eu aliquam. Vestibulum diam velit, faucibus ac urna et, varius accumsan diam. Maecenas vitae mi sem. Vestibulum maximus, ex id porttitor tristique, elit purus laoreet enim, sed semper ante nisl eu tortor." 
    },
    {
        id: 8,
        text: "Vestibulum accumsan egestas enim. Maecenas quis turpis scelerisque, pulvinar ipsum nec, molestie massa. Aenean iaculis eleifend sapien, in feugiat purus mattis sed. Curabitur et augue at orci efficitur commodo. Donec libero velit, scelerisque sit amet lobortis nec, aliquam id ipsum." 
    },
    {
         id: 9,
         text: "Aenean a dui venenatis, luctus erat ut, pulvinar est. Sed pretium mattis erat eu aliquam. Vestibulum diam velit, faucibus ac urna et, varius accumsan diam. Maecenas vitae mi sem. Vestibulum maximus, ex id porttitor tristique, elit purus laoreet enim, sed semper ante nisl eu tortor." 
    },
    {
         id: 10,
         text: "Vestibulum accumsan egestas enim. Maecenas quis turpis scelerisque, pulvinar ipsum nec, molestie massa. Aenean iaculis eleifend sapien, in feugiat purus mattis sed. Curabitur et augue at orci efficitur commodo. Donec libero velit, scelerisque sit amet lobortis nec, aliquam id ipsum." 
    }
]

const textColors = [
    "#ef4444",
    "#f97316",
    "#f59e0b",
    "#eab308",
    "#84cc16",
    "#22c55e",
    "#10b981",
    "#06b6d4",
    "#0ea5e9",
    "#3b82f6",

]

const homeStyle = {

 width: '80%',
//  backgroundColor: '#222222',
 marginLeft: '10%',
 marginTop: '3%',
}

const divStyle = {
    border: '1px solid #ffffff',
    padding: '20px',
}
const outLine = {
    border: '1px solid #222222',
    padding: '10px',
}

const buttonDivStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '50px',
    marginTop: '50px',
}
const buttonStyle = {
    fontSize: '2em',
    padding: '0.5em'
}

export default function Home() {
    const [createStart, setCreateStart] = useState(false);
    // user result 96
    const [userResult, setUserResult] = useState([]);
    // console.log(createStart)
    const returnUser = async () => {
        
        try {
            const token = Auth.retrieveToken();

            console.log("return user token:", token)

            if(!token) {
                console.log('Problem with token found.')
            }

            const response = await getMe(token);

            const result = await response.json();

            console.log("console log of result: ", result);

            //hands off response 116
            setUserResult(result);
        } catch (error){
            console.error(error);
        }
    }
    //calls return user function 122
    // returnUser();
    useEffect(()=>{

        returnUser();
        
    }, [])
    console.log("xxx");
   
    return (
        <section style={homeStyle}>
            
            {createStart ? 
                <Create /> 
                
                :
                //  This is the name rendered to the page 133
                <div>                  
                    <h1>Welcome back {userResult.username}</h1>
                    <div style={buttonDivStyle}>
                        <button style={buttonStyle} onClick={() => setCreateStart(true)}>Contribute to a Story!</button>
                    </div>

                    <div style={divStyle}>
                        <h2>Contributions</h2>
                        {tempData.map((snippet, index) => (
                            <div key={index}>
                            <Snippet  story={"default story"} text={userResult.Snippet} color={textColors[index]} />
                            </div>
                        ))}
                    </div>
                </div>
            }
            


        </section>
    );
  }