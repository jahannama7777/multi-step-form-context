import { createContext, useContext, useState } from "react";

// Create a context to share form data across components
const FormContext = createContext();

// Provide form data and update logic to all child components
export const FormProvider = ({ children }) => {
  // Store all form sections in a single state object
  const [formData, setFormData] = useState({
    personalInfo: { name: "", email: "", phone: "" },
    educationInfo: { degree: "", school: "", graduationYear: "" },
    professionalInfo: { company: "", position: "", experience: "" },
  });

  // Update only one step of the form without losing previous data
  const updateFormData = (step, writtenData) => {
    setFormData((prevData) => ({
      ...prevData,
      [step]: { ...prevData[step], ...writtenData },
    }));
  };

  // Make state and updater available to nested components
  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};

// Custom hook for easier access to the form context
export const useForm = () => useContext(FormContext);
