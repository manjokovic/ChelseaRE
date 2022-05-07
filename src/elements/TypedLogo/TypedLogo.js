import {React,useRef,useEffect} from 'react'
import Typed from 'typed.js';

function TypedLogo() {
  const el=useRef(null)  
  const typed = useRef(null);

  useEffect(() => {
    const options = {
    	strings: [
            ' Selling one yard at a time ',
            'Chelsea Real Estate'
      ],
      typeSpeed: 90,
      backSpeed: 50,

    };
    
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])


  return (
      <>
            <span style={{ whiteSpace: 'pre' }} ref={el}>Chelsea Real Estate</span>
      </>
  )
}

export default TypedLogo