import { createContext, useContext, useReducer, ReactNode } from "react";

type State = {
  brand: string;
  model: string;
};

type Action =
  | { type: string; payload: string }
  | { type: string; payload: string };

const BRAND_CHANGE = "BRAND_CHANGE";
const MODEL_CHANGE = "MODEL_CHANGE";

const initialState = {
  brand: "",
  model: "",
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case BRAND_CHANGE:
      return { ...state, brand: action.payload };
    case MODEL_CHANGE:
      return { ...state, model: action.payload };
    default:
      return state;
  }
};

type GpuContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

const GpuContext = createContext<GpuContextType | undefined>(undefined);

export const GpuProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GpuContext.Provider value={{ state, dispatch }}>
      {children}
    </GpuContext.Provider>
  );
};

export const useGpuContext = () => {
  const context = useContext(GpuContext);
  if (!context) {
    throw new Error("useCpuContext must be used within a CpuProvider");
  }
  return context;
};
