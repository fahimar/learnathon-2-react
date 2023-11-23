import React, { useState, useContext, useCallback, ReactNode } from "react";

interface CounterContextValue {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const CounterContext = React.createContext<CounterContextValue | undefined>(
  undefined
);

export const useCounterContext = (): CounterContextValue => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounterContext must be used within a CounterProvider");
  }

  return context;
};

interface CounterProviderProps {
  children: ReactNode;
}

export const CounterProvider: React.FC<CounterProviderProps> = ({
  children,
}) => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, []);

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};
