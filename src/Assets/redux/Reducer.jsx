import { ERROR, LOADING, SUCCESS } from "./Action";

const initialStore = {
  isLoading: false,
  isData: false,
  data: [],
  isFailure: false,
};

export const Reducer = (state = initialStore, { type, payload }) => {
  switch (type) {
    case LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case SUCCESS:
      return {
        ...state,
        isLoading: false,
        isData: true,
        data: payload,
        isFailure: false,
      };
    case ERROR:
      return {
        ...state,
        isLoading: false,
        isData: false,
        data: [],
        isFailure: true,
      };
    default:
      return state;
  }
};
