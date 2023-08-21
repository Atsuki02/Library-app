import { createContext, useContext, useReducer, ReactNode } from "react";

type State = {
  brand: string;
  model: string;
};

type Action =
  | { type: "BRAND_CHANGE"; payload: string }
  | { type: "MODEL_CHANGE"; payload: string };

const BRAND_CHANGE = "BRAND_CHANGE";
const MODEL_CHANGE = "MODEL_CHANGE";

const initialState: State = {
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

type CpuContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

const CpuContext = createContext<CpuContextType | undefined>(undefined);

export const CpuProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CpuContext.Provider value={{ state, dispatch }}>
      {children}
    </CpuContext.Provider>
  );
};

export const useCpuContext = () => {
  const context = useContext(CpuContext);
  if (!context) {
    throw new Error("useCpuContext must be used within a CpuProvider");
  }
  return context;
};
