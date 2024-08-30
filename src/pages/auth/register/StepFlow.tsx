import React, { PropsWithChildren } from 'react';

interface StepFlowProps {
  activeStep: number;
  onNext: () => void;
}

export default function StepFlow({
  children,
  activeStep,
  onNext,
}: PropsWithChildren<StepFlowProps>) {
  const currentChild = React.Children.toArray(children)[activeStep];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild as JSX.Element, { onNext });
  }

  return currentChild;
}
