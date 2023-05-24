import { useState } from 'react';
import { factory } from 'app/factory';

const Step1 = ({ step, onStepChange, onRegisterDataChange }) => {
    const [data, setData] = useState({
        fullname: '',
        email: '',
        password: '',
    });

    const handleInput = (value, key) => {
        setData({
            ...data,
            [key]: value,
        })
    }
    const onSubmit = () => {
        if (Object.values(data).every(Boolean) && !factory.checkUserExists(data)) {
            onStepChange(step);

            onRegisterDataChange(data);
        }
    }

    return (
        <section className="text-gray-600 body-font lg:w-3/5 md:w-1/2">
            <div className="container px-5 py-24 mx-auto flex flex-wrap items-center justify-center w-full">
                <div className="bg-gray-100 rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0">
                    <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
                    <div className="relative mb-4">
                        <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
                        <input
                            type="text"
                            autoComplete="off"
                            id="full-name"
                            name="full-name"
                            onChange={(event) => handleInput(event.target.value, 'fullname')}
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input
                            type="email"
                            autoComplete="off"
                            id="email"
                            name="email"
                            onInput={(event) => handleInput(event.target.value, 'email')}
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Password</label>
                        <input
                            type="password"
                            autoComplete="off"
                            id="password"
                            name="password"
                            onInput={(event) => handleInput(event.target.value, 'password')}
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <button onClick={onSubmit} className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-500 rounded text-lg">
                        Submit
                    </button>
                    <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean
                        shorts.</p>
                </div>
            </div>
        </section>
    );
}

export default Step1;