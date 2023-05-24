class StartPlan {
    constructor(userData) {
        this.userData = userData;
        this.cost = 0;
        this.advantages = ['Vexillologist pitchfork', 'Tumeric plaid portland', 'Mixtape chillwave tumeric'];
    }
}

class ProPlan {
    constructor(userData) {
        this.userData = userData;
        this.cost = 38;
        this.advantages = ['Vexillologist pitchfork', 'Tumeric plaid portland', 'Hexagon neutra unicorn', 'Mixtape chillwave tumeric'];
    }
}

class BusinessPlan {
    constructor(userData) {
        this.userData = userData;
        this.cost = 56;
        this.advantages = ['Vexillologist pitchfork', 'Tumeric plaid portland', 'Hexagon neutra unicorn', 'Vexillologist pitchfork', 'Mixtape chillwave tumeric'];
    }
}

class SpecialPlan {
    constructor(userData) {
        this.userData = userData;
        this.cost = 72;
        this.advantages = ['Vexillologist pitchfork', 'Tumeric plaid portland', 'Hexagon neutra unicorn', 'Vexillologist pitchfork', 'Mixtape chillwave tumeric'];
    }
}

class PricePlanFactory {
    static plans = {
        start: StartPlan,
        pro: ProPlan,
        business: BusinessPlan,
        special: SpecialPlan,
    }

    getPlans() {
        const keys = Object.keys(PricePlanFactory.plans);
        return Object.values(PricePlanFactory.plans).map((plan, index) => {
            const pricePlan = new plan();
            return {
                type: keys[index],
                ...pricePlan,
            }
        });
    }

    checkUserExists(userData) {
        const users = JSON.parse(localStorage.getItem('users'));

        if (!users) {
            localStorage.setItem('users', JSON.stringify([]));
        }

        return users?.some(user => user.userData.email === userData.email)
    }

    getUser (email) {
        const users = JSON.parse(localStorage.getItem('users'));

        return users.find(user => user.userData.email === email);
    }

    create(userData, type = 'start') {
        const PricePlan = PricePlanFactory.plans[type] || PricePlanFactory.plans.start;
        const user = new PricePlan(userData);
        user.type = type;

        const users = JSON.parse(localStorage.getItem('users'));
        users.push({
            userData: user.userData,
            cost: user.cost,
            type: user.type,
        });

        localStorage.setItem('users', JSON.stringify(users));
    }
}

export const factory = new PricePlanFactory();

export const plans = factory.getPlans();