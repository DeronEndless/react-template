import { create } from 'zustand';

import { devtools } from '../utils';

type State = {
  count: number;
};

type Action = {
  increase: (by: number) => void;
};

const useHome = create<State & Action>()(
  devtools(
    (set) => ({
      count: 0,
      increase: (by) => set((state) => ({ count: state.count + by })),
    }),
    { name: 'useHome' },
  ),
);

export default useHome;
