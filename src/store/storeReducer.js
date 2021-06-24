export const types = {
  changePlan: 'CHANGE_PLAN',
}

export const initialStore = {
  isPremium: false,
  standardPlan: {
    name: 'Estándar',
    currency: 'S/',
    price: 29,
    period: 'al mes',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
  premiumPlan: {
    name: 'Premium',
    currency: 'S/',
    price: 59,
    period: 'al mes',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
  planDetails: [
    {
      id: 1,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
    {
      id: 2,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
    {
      id: 3,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
    {
      id: 4,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
  ],
  hasSubmitted: false,
};

const storeReducer = (state, action) => {
  switch(action.type) {
    case types.changePlan:
      return {
        ...state,
        isPremium: !state.isPremium,
      }
    case types.formSubmitted:
      return {
        ...state,
        hasSubmitted: true,
      }
    default:
      return state;
  }
};

export default storeReducer;
