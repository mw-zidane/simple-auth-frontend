// import React, { useEffect, useState } from "react";

const Home = (props: {name: string}) => {
    console.log("Home: " + props.name);
    
    return (
        <div>
            {props.name ? 'Hi ' + props.name : 'You are not logged in'}
        </div>
    );
};

export default Home;