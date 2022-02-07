import { createSlice } from '@reduxjs/toolkit';

export const historySlice = createSlice({
  name: 'history',
  initialState: [],
  reducers: {
    clear: () => {
      return [];
    },
    deleteHistoryEntry: (state, action) => {
      const entryIndex = state.findIndex(
        entry => entry.id === action.payload.entryId);
      state.splice(entryIndex, 1);
    },
    math: (state, action) => {
      state.push({
        id: Math.max(...state.map(entry => entry.id), 0) + 1,
        ...action.payload,
      });
    },
  },
});

export const { clear, deleteHistoryEntry, math } = historySlice.actions;

export const historyReducer = historySlice.reducer;