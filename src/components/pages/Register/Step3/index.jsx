import { factory } from 'app/factory';

const Step3 = ({ data }) => {
    const userData = factory.getUser(data.userData.email);

    return (
        <section className="text-gray-600 body-font lg:w-3/5 md:w-1/2">
            <div className="container px-5 py-24 mx-auto flex flex-wrap items-center justify-center w-full text-center flex-col	">
                You are Successfully registered!!!
                <div>
                    <strong>{userData.userData.fullname}</strong>, You choose the {userData.type} plan
                </div>
            </div>
        </section>
    );
}

export default Step3;