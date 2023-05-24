import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Checkbox,
    ArrowRight,
    Step1,
    Step2,
    Step3,
} from './icons';

const icons = {
    facebook: Facebook,
    twitter: Twitter,
    instagram: Instagram,
    linkedin: Linkedin,
    checkbox: Checkbox,
    'arrow-right': ArrowRight,
    step1: Step1,
    step2: Step2,
    step3: Step3,
};

const Icon = ({name, ...props}) => {
    const IconComponent = icons[name];

    return (
        <IconComponent {...props} />
    );
};

export default Icon;