import React from "react";
import { useForm } from "../context/FormContext";
import { useStep } from "../context/StepContext";

export default function EducationInfo() {
  const { formData, updateFormData } = useForm();
  const { nextStep, prevStep } = useStep();
  const { degree, school, graduationYear } = formData.educationInfo;

  // Prevent page refresh and move to the next step
  const nextHandler = (e) => {
    e.preventDefault();
    nextStep();
  };

  // Navigate back to the previous step
  const prevHandler = () => {
    prevStep();
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-xl border border-gray-100">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Education Details</h2>
        <p className="text-gray-500 text-sm">Please provide your academic background.</p>
      </div>

      <form onSubmit={nextHandler} className="space-y-5">
        {/* Degree Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Degree</label>
          <input
            type="text"
            value={degree}
            placeholder="e.g. Bachelor of Science"
            onChange={(e) => updateFormData("educationInfo", { degree: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            required
          />
        </div>

        {/* School Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">School / University</label>
          <input
            type="text"
            value={school}
            placeholder="Enter your school name"
            onChange={(e) => updateFormData("educationInfo", { school: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            required
          />
        </div>

        {/* Graduation Year Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Graduation Year</label>
          <input
            type="text"
            value={graduationYear}
            placeholder="e.g. 2024"
            onChange={(e) => updateFormData("educationInfo", { graduationYear: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            required
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between pt-4">
          <button
            type="button"
            onClick={prevHandler}
            className="px-6 py-2 text-sm font-semibold text-gray-600 hover:text-gray-800 transition-colors"
          >
            ← Previous
          </button>
          
          <button
            type="submit"
            className="px-8 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 shadow-lg shadow-blue-200 active:scale-95 transition-all"
          >
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
}
