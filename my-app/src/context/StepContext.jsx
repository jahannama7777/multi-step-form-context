import { createContext, useContext, useState } from "react";

// Create a context to manage the multi-step navigation state
const StepContext = createContext();

// Provider component that wraps the application components
export const StepProvider = ({ children }) => {
    // State to keep track of the current step (starts at 1)
    const [step, setStep] = useState(1);

    // Function to move to the next step
    const nextStep = () => setStep((prev) => prev + 1);

    // Function to move to the previous step
    const prevStep = () => setStep((prev) => prev - 1);

    // Provide the current step and navigation functions to children
    return (
        <StepContext.Provider value={{ step, nextStep, prevStep }}>
            {children}
        </StepContext.Provider>
    );
};

// Custom hook to consume the StepContext easily in any component
export const useStep = () => useContext(StepContext);
