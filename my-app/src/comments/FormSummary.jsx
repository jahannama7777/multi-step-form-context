import React from "react";
import { useForm } from "../context/FormContext";
import { useStep } from "../context/StepContext";

export default function FormSummary() {
    const { formData } = useForm();
    const { prevStep } = useStep();

    const { name, email, phone } = formData.personalInfo;
    const { degree, school, graduationYear } = formData.educationInfo;
    const { company, position, experience } = formData.professionalInfo;

    // Return to the previous step if the user wants to edit information
    const handlePrevious = () => {
        prevStep();
    };

    return (
        <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-xl border border-gray-100">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Form Summary</h1>
                <p className="text-sm text-gray-500 mt-2">
                    Review all your information before completing the process.
                </p>
            </div>

            <form className="space-y-6">
                {/* Personal information section */}
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                        Personal Information
                    </h2>
                    <div className="space-y-2 text-gray-700">
                        <p>
                            <span className="font-medium">Name:</span> {name}
                        </p>
                        <p>
                            <span className="font-medium">Email:</span> {email}
                        </p>
                        <p>
                            <span className="font-medium">Phone Number:</span> {phone}
                        </p>
                    </div>
                </div>

                {/* Education information section */}
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                        Education Information
                    </h2>
                    <div className="space-y-2 text-gray-700">
                        <p>
                            <span className="font-medium">Degree:</span> {degree}
                        </p>
                        <p>
                            <span className="font-medium">School:</span> {school}
                        </p>
                        <p>
                            <span className="font-medium">Graduation Year:</span> {graduationYear}
                        </p>
                    </div>
                </div>

                {/* Professional information section */}
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                        Professional Information
                    </h2>
                    <div className="space-y-2 text-gray-700">
                        <p>
                            <span className="font-medium">Company:</span> {company}
                        </p>
                        <p>
                            <span className="font-medium">Position:</span> {position}
                        </p>
                        <p>
                            <span className="font-medium">Years of Experience:</span> {experience}
                        </p>
                    </div>
                </div>

                {/* Navigation button */}
                <div className="pt-4 flex justify-start">
                    <button
                        type="button"
                        onClick={handlePrevious}
                        className="px-6 py-2 text-sm font-semibold text-gray-600 hover:text-gray-800 transition-colors"
                    >
                        ← Previous
                    </button>
                </div>
            </form>
        </div>
    );
}
