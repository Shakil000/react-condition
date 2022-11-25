import React from 'react';

const User = (props) => {
    const familiar = props.familiar; 
    return (
        <div>
            <h1>Greetings</h1>
            {
                  familiar ? <p style={{color:'gold'}}>welcome my friend</p> : <p style={{color:'red'}}>Who are you?</p>
            }
          

            <h1>Food</h1>
            {
                familiar ? <p style={{color:'gold'}}>I will pay for you</p> : <p style={{color:'red'}}>Please pay for you</p>
            }
            
            

            <h1>Connection</h1>
            {
                familiar && <p>Let's join facebook</p>
            }
            


        </div>
    );
};

export default User;