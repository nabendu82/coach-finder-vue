import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            coaches: [
                {
                    id: 'c1',
                    firstName: 'Nabendu',
                    lastName: 'Biswas',
                    areas: ['frontend', 'backend', 'career'],
                    description: "I'm Nabendu and I've worked in IT industry for many years.",
                    hourlyRate: 45
                },
                {
                    id: 'c2',
                    firstName: 'Robin',
                    lastName: 'Hood',
                    areas: ['frontend', 'career'],
                    description: 'I am Robin and as a senior developer in a big tech company.',
                    hourlyRate: 30
                }
            ]
        };
    },
    mutations,
    actions,
    getters
};
