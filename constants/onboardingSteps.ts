// Onboarding step configuration
export const onboardingSteps = [
  'FirstNameScreen',
  'DOBScreen',
  // Add more screens as needed
  // 'GenderScreen',
  // 'PhotoScreen',
] as const;

export type OnboardingStep = typeof onboardingSteps[number];

export default onboardingSteps;

