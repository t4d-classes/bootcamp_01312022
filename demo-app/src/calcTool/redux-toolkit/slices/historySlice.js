import { createSlice } from '@reduxjs/toolkit';

export const historySlice = createSlice({
  name: 'history',
  initialState: {
    history: [],
  },
  reducers: {
    clear: (state) => {
      state.history = [];
    },
    deleteHistoryEntry: (state, action) => {
      const entryIndex = state.history.findIndex(
        entry => entry.id === action.payload.entryId);
      state.history.splice(entryIndex, 1);
    },
    math: (state, action) => {
      state.history.push({
        id: Math.max(...state.history.map(entry => entry.id), 0) + 1,
        ...action.payload,
      });
    },
  },
});

export const { clear, deleteHistoryEntry, math } = historySlice.actions;

export const historyReducer = historySlice.reducer;