import { ReactNode, createContext, useContext, useReducer } from "react";

type State = {
  storageType: string;
  storage: string;
  brand: string;
  model: string;
};

type Action =
  | { type: "SET_STORAGE_TYPE"; payload: string }
  | { type: "SET_STORAGE"; payload: string }
  | { type: "SET_BRAND"; payload: string }
  | { type: "SET_MODEL"; payload: string };

const initialState: State = {
  storageType: "",
  storage: "",
  brand: "",
  model: "",
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_STORAGE_TYPE":
      return { ...state, storageType: action.payload };
    case "SET_STORAGE":
      return { ...state, storage: action.payload };
    case "SET_BRAND":
      return { ...state, brand: action.payload };
    case "SET_MODEL":
      return { ...state, model: action.payload };
    default:
      return state;
  }
};

type StorageContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

const StorageContext = createContext<StorageContextType | undefined>(undefined);

export const StorageProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StorageContext.Provider value={{ state, dispatch }}>
      {children}
    </StorageContext.Provider>
  );
};

export const useStorageContext = () => {
  const context = useContext(StorageContext);
  if (!context) {
    throw new Error("useCpuContext must be used within a CpuProvider");
  }
  return context;
};
