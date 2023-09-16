'use client'
import React, { createContext, FC, PropsWithChildren, useContext, useMemo, useState } from 'react';

export enum CallType {
    INGOING = 'Входящие',
    OUTGOING = 'Исходящие',
    ALL = 'Все типы'
}

interface ICallTypeContext {
  callType: CallType;
  setCallType: React.Dispatch<React.SetStateAction<CallType >>;
}

export const CallTypeContext = createContext<ICallTypeContext>({
    callType: CallType.ALL,
    setCallType: () => {},
});

export const CallTypeProvider:FC<PropsWithChildren> = ({ children }) => {
    const [callType, setCallType] = useState<CallType>(CallType.ALL);
  
    const values = useMemo(
        () => ({
            callType,
            setCallType,
        }),
        [callType]
    )

    return (
        <CallTypeContext.Provider value={values}>
            {children}
        </CallTypeContext.Provider>
    );
};

export const useCallTypeContext = () => useContext(CallTypeContext)