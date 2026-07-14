import React from "react";
import { useForm } from "../context/FormContext";
import { useStep } from "../context/StepContext";

export default function PersonalInfo() {
    const { formData, updateFormData } = useForm();
    const { nextStep } = useStep();

    const { name, email, phone } = formData.personalInfo;

    // Handle form submission and move to the next step
    const handleSubmit = (e) => {
        e.preventDefault();
        nextStep();
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-xl border border-gray-100">
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800">Personal Information</h2>
                <p className="text-sm text-gray-500">Please enter your basic contact details.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                    </label>
                    <input
                        type="text"
                        value={name}
                        placeholder="Enter your name..."
                        onChange={(e) =>
                            updateFormData("personalInfo", {
                                name: e.target.value,
                            })
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                    </label>
                    <input
                        type="email"
                        value={email}
                        placeholder="Enter your email..."
                        onChange={(e) =>
                            updateFormData("personalInfo", {
                                email: e.target.value,
                            })
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        value={phone}
                        placeholder="Enter your phone number..."
                        onChange={(e) =>
                            updateFormData("personalInfo", {
                                phone: e.target.value,
                            })
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        required
                    />
                </div>

                <div className="pt-4 flex justify-end">
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
