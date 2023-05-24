import { useState } from 'react';
import { Link } from 'react-router-dom';
import { plans} from 'app/factory';

// Components
import { Icon } from 'components';

const Step2 = ({ step, onStepChange, onPlanChange }) => {
    const [selectedPlan, setSelectedPlan] = useState('start');

    const handleClick = (type) => {
        setSelectedPlan(type);
    }

    const onSubmit = () => {
        onStepChange(step);

        onPlanChange(selectedPlan);
    }

    const plansContent = plans.length && plans?.map((plan, index) => {
        const { cost, type } = plan;

        return (
            <div key={index} className="relative p-4 md:w-1/2">
                <div
                    className={`h-full p-6 rounded-lg ${selectedPlan === type ? 'border-blue-500' : 'border-gray-300'} border-2  flex flex-col relative overflow-hidden cursor-pointer`}
                    onClick={() => handleClick(type)}
                >
                    <h2 className="text-sm tracking-widest title-font mb-1 font-medium uppercase">{type}</h2>
                    <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                        {cost === 0 ? 'Free' : `$${cost}`}
                        {cost !== 0 && (
                            <span className="text-lg ml-1 font-normal text-gray-400">/mo</span>
                        )}
                    </h1>

                    <Link to='/prices' className="mt-3 text-blue-400 inline-flex items-center w-fit">
                        <span className="mr-1">Learn More</span>
                        <Icon name='arrow-right' />
                    </Link>
                    <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                </div>
            </div>
        );
    })

    return (
        <section className="text-gray-400 body-font lg:w-3/5 md:w-1/2">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className="flex flex-wrap -m-4">
                    {plansContent}
                </div>

                <button onClick={onSubmit} className="mt-5 w-full text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-500 rounded text-lg">
                    Next
                </button>
            </div>
        </section>
    );
}

export default Step2;