import { ReactNode, createContext, useContext, useReducer } from "react";

type State = {
  number: number;
  brand: string;
  model: string;
};

type Action =
  | { type: "SET_NUMBER"; payload: number }
  | { type: "SET_BRAND"; payload: string }
  | { type: "SET_MODEL"; payload: string };

const initialState: State = {
  number: 1,
  brand: "",
  model: "",
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_NUMBER":
      return { ...state, number: action.payload };
    case "SET_BRAND":
      return { ...state, brand: action.payload };
    case "SET_MODEL":
      return { ...state, model: action.payload };
    default:
      return state;
  }
};

type MemoryContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

const MemoryContext = createContext<MemoryContextType | undefined>(undefined);

export const MemoryProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MemoryContext.Provider value={{ state, dispatch }}>
      {children}
    </MemoryContext.Provider>
  );
};

export const useMemoryContext = () => {
  const context = useContext(MemoryContext);
  if (!context) {
    throw new Error("useCpuContext must be used within a CpuProvider");
  }
  return context;
};
