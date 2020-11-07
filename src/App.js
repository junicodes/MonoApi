import React from 'react';
import MonoConnect from '@mono.co/connect.js';
import './App.css';

export default function App() {
  const monoConnect = React.useMemo(() => {
    const monoInstance = new MonoConnect("test_pk_C2ozPjWOCkytgJKwM2M9", {
      onClose: () => console.log('Widget closed'),
      onLoad: () => console.log('Widget loaded successfully'),
      onSuccess: ({ code }) => {
        console.log(`Linked successfully: ${code}`)
        window.parent.postMessage({ message: "getAppData", value: `Linked successfully: ${code}`, authCode: code }, "*");
       
      }
    })

    monoInstance.setup()
    
    return monoInstance;
  }, [])

  if(window.origin){
    monoConnect.open()
  }

  return (
    <div>
      {/* <button onClick={() => monoConnect.open()}>
        Authenticate with Mono
      </button> */}
      {/* <button onClick={() => monoConnect.open()}>
        Authenticate with Mono
      </button> */}
    </div>
  )
}