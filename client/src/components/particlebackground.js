import Particles from "react-tsparticles";

const particleBackground =() =>{
    return (
        <div className="app">
            <Particles 
            options={{
                background:{
                    color: 'black',
                },
                fpsLimit: 60,
                interactive: {
                    detectsOn: 'canvas',
                    events: {
                        resize:true,
                    },
                },
                particles:{
                    color: {
                        value: 'B43B20',
                    },
                    number: {
                        density:{ 
                        enable: true,
                        area: 1200
                        },
                        limit: 0,
                        value: 400,
                    },
                }
            }}/>
        </div>
    )
}

export default particleBackground