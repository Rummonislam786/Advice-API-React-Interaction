

import  { useState } from 'react'; // Importing React and useState hook

export default function App() { //this is a component
  const [advice, setAdvice] = useState(''); // this is a state variable
  async function getAdvice(){ // this is an async function
      // Fetching advice from an API
      // and logging it to the console
      // This is a simple example of an async function
      // that fetches data from an API
      // and logs it to the console
      // You can replace this with any API you want
      // to fetch data from
      // For example, you can fetch data from a weather API
      // or a news API
      const res = await fetch('https://api.adviceslip.com/advice');
      const data = await res.json();
      console.log(data.slip.advice);
      setAdvice(data.slip.advice); // Updating the state with the fetched advice
  }

  return ( // JSX to render the component
    // This is a simple React component that fetches advice from an API
    // and displays it on the screen
    // It also has a button to fetch new advice
    // You can replace the API URL with any other API you want to fetch data from
    // This is a simple example of a React component
    // that fetches data from an API and displays it on the screen
    // You can replace this with any other component you want to create
    
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
    </div>
  );
}
