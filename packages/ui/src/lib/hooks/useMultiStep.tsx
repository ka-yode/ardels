import { ReactElement, useState } from "react";

export const useMultiStep = (steps: ReactElement[]) => {
  const totalSteps = steps.length - 1;
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  };
  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };
  const jumpToStep = (stepToGoTo: number) => {
    setCurrentStep(Math.min(stepToGoTo, totalSteps));
  };
  return {
    step: steps[currentStep],
    nextStep,
    prevStep,
    jumpToStep,
    currentStep,
  };
};
