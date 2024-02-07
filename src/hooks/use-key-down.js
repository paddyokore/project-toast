import React from 'react';

function useKeyDown(key, callback) {

    React.useEffect(() => {
        function escapeKey(event) {
            if (event.code === key) {
              callback(event);
            }
          }
    
        window.addEventListener("keydown", escapeKey);
    
        return () => {
          window.removeEventListener("keydown", escapeKey);
        };
    
      },[key, callback])
}

export default useKeyDown;