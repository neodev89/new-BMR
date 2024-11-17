import { create } from 'zustand';

interface valueBmr {
    weight: string;
    height: string;
    age: string;
    vita: string;
    collo: string;
    fianchi: string;
}

type stateBmr = {
    state: valueBmr;
    updateState: (newState: valueBmr) => void;
    deleteState: () => void;
}

const initialValues: valueBmr = {
    weight: '',
    height: '',
    age: '',
    vita: '',
    collo: '',
    fianchi: '',
}

const useSaveStateBmr = create<stateBmr>((set) => ({
    state: initialValues,
    updateState: (newState: valueBmr) => set({ 
        state: newState 
    }),
    deleteState: () => set({ state: initialValues }),
}));

export { useSaveStateBmr };