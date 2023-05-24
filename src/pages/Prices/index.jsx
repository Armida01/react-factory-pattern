import { Link } from 'react-router-dom';
import { plans } from 'app/factory'

// Components
import { Icon } from 'components';

const Prices = () => {
    const plansContent = plans.length && plans?.map((plan, index) => {
        const { cost, type, advantages } = plan;

        return (
            <div key={index} className="relative p-4 xl:w-1/4 md:w-1/2 w-full">
                {type === 'pro' && (
                    <span className="bg-blue-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                )}

                <div className={`h-full p-6 rounded-lg ${type === 'pro' ? 'border-blue-500' : 'border-gray-300'} border-2  flex flex-col relative overflow-hidden`}>
                    <h2 className="text-sm tracking-widest title-font mb-1 font-medium uppercase">{type}</h2>
                    <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                        {cost === 0 ? 'Free' : `$${cost}`}
                        {cost !== 0 && (
                            <span className="text-lg ml-1 font-normal text-gray-400">/mo</span>
                        )}
                    </h1>

                    {advantages?.map((advantage, i) => {
                        return (
                            <div key={i} className="flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <Icon name="checkbox"/>
                                </span>
                                {advantage}
                            </div>
                        );
                    })}

                    <Link to='/register' className={`flex items-center mt-auto text-white ${type === 'pro' ? 'bg-blue-500' : 'bg-gray-400'} border-0 py-2 px-4 w-full focus:outline-none hover:hover:bg-blue-600 rounded`}>
                        Button
                        <Icon name='arrow-right' />
                    </Link>
                    <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                </div>
            </div>
        );
    })

    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Pricing</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Whatever cardigan tote bag
                        tumblr hexagon brooklyn asymmetrical.</p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {plansContent}
                </div>
            </div>
        </section>
    );
}

export default Prices;