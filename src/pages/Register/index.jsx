import { useState } from 'react';
import { factory } from 'app/factory';

// Components
import { Icon, Step1, Step2, Step3 } from 'components';

// Constants
import { registerSteps } from '../../constants';

const Register = () => {
    const [step, setStep] = useState(0);
    const [passedStep, setPassedStep] = useState(0);
    const [data, setData] = useState({
        userData: {},
        type: 'start'
    })

    const handlePassedStepChange = (stepIndex) => {
        const index = stepIndex === registerSteps.length - 1 ? stepIndex : stepIndex + 1;
        setStep(index);
        setPassedStep(index);
    }

    const handleStepChange = (stepIndex) => {
        if (stepIndex <= passedStep) {
            return setStep(stepIndex);
        }
    }

    const setUserRegisterData = (userData) => {
        setData({
            ...data,
            userData,
        });
    }

    const setUserPlan = (type) => {
        setData({
            ...data,
            type,
        });

        factory.create(data.userData, type)
    }

    const steps = registerSteps.map((registerStep, index) => {
       return (
           <div key={index} className={`flex relative ${index !== registerSteps.length - 1 && 'pb-12'}`}>
               {index !== registerSteps.length - 1 && (
                   <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                       <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                   </div>
               )}
               <div
                   onClick={() => handleStepChange(registerStep.id)}
                   className={`flex-shrink-0 w-10 h-10 rounded-full ${passedStep >= index ? 'cursor-pointer bg-blue-500' : 'bg-blue-300'} inline-flex items-center justify-center text-white relative z-10`}
               >
                   <Icon name={registerStep.icon}/>
               </div>
               <div className="flex-grow pl-4">
                   <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                       {registerStep.name}
                   </h2>
                   <p className="leading-relaxed">
                       {registerStep.description}
                   </p>
               </div>
           </div>
       );
    });

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className="flex flex-wrap w-full items-center">
                    <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                        {steps}
                    </div>
                    {step === 0 && <Step1 onRegisterDataChange={setUserRegisterData} step={step} onStepChange={handlePassedStepChange} />}
                    {step === 1 && <Step2 onPlanChange={setUserPlan} step={step} onStepChange={handlePassedStepChange} />}
                    {step === 2 && <Step3 data={data} />}
                </div>
            </div>
        </section>
    );
}

export default Register;