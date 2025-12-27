import React, { createContext, useState, useContext, useRef, useEffect } from "react";
import Toast from "../components/Toast";

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  const timeouts = useRef({}); // store timeouts for cleanup

  const addToast = (message) => {
    const id = new Date().getTime();
    setToasts(prev => [...prev, { id, message }]);

    // set timeout to remove toast
    const timeout = setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
      delete timeouts.current[id];
    }, 2500);

    timeouts.current[id] = timeout;
  };

  // cleanup on unmount
  useEffect(() => {
    // Copy current timeouts to a local variable for stable cleanup
    const currentTimeouts = { ...timeouts.current };

    return () => {
      Object.values(currentTimeouts).forEach(clearTimeout);
    };
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div style={styles.toastContainer}>
        {toasts.map(t => <Toast key={t.id} message={t.message} />)}
      </div>
    </ToastContext.Provider>
  );
};

const styles = {
  toastContainer: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: 1000,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: "10px",
  },
};
