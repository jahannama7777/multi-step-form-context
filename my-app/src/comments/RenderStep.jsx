import React from 'react'
import { useForm } from '../context/FormContext'
import { useStep } from '../context/StepContext';
import PersonalInfo from './PersonalInfo';
import EducationInfo from './EducationInfo';
import ProfessionalInfo from './PerofessionalInfo';
import FormSummary from './FormSummary';
export default function RenderStep() {
    const {formData} = useForm();
    const { step, nextStep, prevStep } = useStep();

    switch (step) {
        case 1:
            return <PersonalInfo nextStep = {nextStep} />
            case 2: 
            return <EducationInfo nextStep = {nextStep} prevStep = {prevStep} />
            case 3: 
            return <ProfessionalInfo nextStep = {nextStep} prevStep = {prevStep} />
            case 4: 
            return <FormSummary prevStep = {prevStep} />
            
    
        default:
            return <PersonalInfo nextStep = {nextStep} />
    }
    
}
