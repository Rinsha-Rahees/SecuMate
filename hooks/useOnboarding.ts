import { useState } from 'react';

const useOnboarding = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const totalSteps = 3; // Adjust based on the number of onboarding steps

    const nextStep = () => {
        if (currentStep < totalSteps - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const previousStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const resetOnboarding = () => {
        setCurrentStep(0);
    };

    return {
        currentStep,
        totalSteps,
        nextStep,
        previousStep,
        resetOnboarding,
    };
};

export default useOnboarding;