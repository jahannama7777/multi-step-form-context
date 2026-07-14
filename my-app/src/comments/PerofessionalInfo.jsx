import React from 'react';
import { useForm } from '../context/FormContext';
import { useStep } from '../context/StepContext';

export default function ProfessionalInfo() {
    const { formData, updateFormData } = useForm();
    const { nextStep, prevStep } = useStep();
    
    // Destructuring fields from the correct state key
    const { company, position, experience } = formData.professionalInfo;

    // Handle the final form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Log final data or send to the backend
        console.log("Final Form Data Submitted: ", formData);
        nextStep(); // Navigate to the next step (e.g., success screen)
    };

    // Go back to the previous step (EducationInfo)
    const previousHandler = () => {
        prevStep();
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-xl border border-gray-100">
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800">Professional Experience</h2>
                <p className="text-gray-500 text-sm">Tell us about your work history and current role.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
                {/* Company Input */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 font-sans">Company Name</label>
                    <input 
                        type="text" 
                        value={company} 
                        onChange={(e) => updateFormData('professionalInfo', { company: e.target.value })} 
                        placeholder='e.g. Google' 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                        required
                    />
                </div>
                
                {/* Position Input */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Position / Role</label>
                    <input 
                        type="text" 
                        value={position} 
                        onChange={(e) => updateFormData('professionalInfo', { position: e.target.value })} 
                        placeholder='e.g. Full-stack Developer' 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                        required
                    />
                </div>
                
                {/* Experience Input */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience</label>
                    <input 
                        type="text" 
                        value={experience} 
                        onChange={(e) => updateFormData('professionalInfo', { experience: e.target.value })} 
                        placeholder='e.g. 3 years' 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                        required
                    />
                </div>
                
                {/* Navigation Buttons */}
                <div className="flex items-center justify-between pt-4">
                    <button 
                        type='button' 
                        onClick={previousHandler}
                        className="px-6 py-2 text-sm font-semibold text-gray-600 hover:text-gray-800 transition-colors"
                    >
                        ← Previous
                    </button>
                    
                    <button 
                        type='submit'
                        className="px-8 py-2 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 shadow-lg shadow-emerald-200 active:scale-95 transition-all"
                    >
                        Submit Form
                    </button>
                </div>
            </form>
        </div>
    );
}
