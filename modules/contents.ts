// Layer 2 - feature module for the "contents"/customers featu
// define the shape of the state we want to keep

import { Module } from "@opensource-dev/athena" 

interface ContentsState {
  count: number;
}

// create a named module instance with initial state and action reducers
const contents = new Module<ContentsState>({
  initialState: { count: 0 },
  actions: {
    incrementCount(state) {
      return { count: state.count + 1 };
    },
    resetCount() {
      return { count: 0 };
    },
    incrementCountTimes2(state) {
      return { count: state.count + 2 };
    },
  },
});

// expose the hook and actions via a simple, flat API
export const useContents = contents.useState.bind(contents);
export const { incrementCount, resetCount, incrementCountTimes2 } =
  contents.actions;
