import React, { createContext, useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';

type HistoryContext = {
  history: string[];
  setHistory: (history: string[]) => void;
  currentRouteIndex: number;
  setCurrentRouteIndex: (routeIndex: number) => void;
  goBack: () => void;
  goForward: () => void;
};

const HistoryContext = createContext<HistoryContext>({} as HistoryContext);

export const HistoryProvider = ({ children }) => {
  const { asPath } = useRouter();
  const [history, setHistory] = useState<string[]>([]);
  const [canRegisterNewRoute, setCanRegisterNewRoute] = useState(true);
  const [currentRouteIndex, setCurrentRouteIndex] = useState(0);

  function goBack() {
    setCurrentRouteIndex(previous => previous - 1);
    setCanRegisterNewRoute(false);
    window.history.back();
  }

  function goForward() {
    setCurrentRouteIndex(previous => previous + 1);
    setCanRegisterNewRoute(false);
    window.history.forward();
  }

  useEffect(() => {
    setHistory(previous =>
      canRegisterNewRoute
        ? [...previous.slice(0, currentRouteIndex), asPath]
        : previous
    );
    setCurrentRouteIndex(previous =>
      canRegisterNewRoute ? previous + 1 : previous
    );
    setCanRegisterNewRoute(true);
  }, [asPath]);

  return (
    <HistoryContext.Provider
      value={{
        history,
        setHistory,
        currentRouteIndex,
        setCurrentRouteIndex,
        goBack,
        goForward,
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
};

export const useHistory = (): HistoryContext => {
  const context = useContext(HistoryContext);

  return context;
};
