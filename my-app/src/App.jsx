import { useState } from 'react';
import { FormProvider } from './context/FormContext';
import { StepProvider } from './context/StepContext';
import RenderStep from './comments/RenderStep';

function App() {


  return (
    <StepProvider><FormProvider><RenderStep /></FormProvider></StepProvider>

  );
}

export default App;
