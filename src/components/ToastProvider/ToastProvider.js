import React from 'react';

import useKeyDown from '../../hooks/use-key-down';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([
    {
      id: crypto.randomUUID(),
      message: 'Something went wrong!',
      variant: 'error'
    },
    {
      id: crypto.randomUUID(),
      message: '17 photos uploaded',
      variant: 'success'
    },
  ]);

  function createToast(message, variant) {    
    const newItem = {
      id: crypto.randomUUID(),
      message, 
      variant
    };
    const newToasts = [...toasts, newItem]; 
    setToasts(newToasts);
  }

  function handleDismiss(id) {
    const newToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });

    setToasts(newToasts);
  } 

  const handleKeyDown = React.useCallback(() => {
    setToasts([]);
  }, []);

  useKeyDown('Escape', handleKeyDown);

  return (
    <ToastContext.Provider
      value={{toasts, createToast, handleDismiss}}
    >
      {children}
    </ToastContext.Provider>
    ); 
}

export default ToastProvider;
