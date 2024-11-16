import { createSlice } from '@reduxjs/toolkit';
import priMappingData from '../../db/priMapping.json';

const initialState = {
    priMapping: priMappingData,
    filteredPriMapping: [], // Holds filtered data if needed for specific UI state
    selectedModule: null,
    selectedScopeArea: null,
    selectedPRI: null,
};

const scopePriMappingSlice = createSlice({
    name: 'scopePriMapping',
    initialState,
    reducers: {
        filterByScopeArea(state, action) {
            const { scopeAreas } = action.payload;
            state.filteredPriMapping = state.priMapping.filter(scope =>
                scopeAreas.includes(scope.ScopeArea)
            );
        },
        resetFilter(state) {
            state.filteredPriMapping = state.priMapping;
        },
        setSelectedModule(state, action) {
            state.selectedModule = action.payload;
        },
        setSelectedScopeArea(state, action) {
            state.selectedScopeArea = action.payload;
        },
        setSelectedPRI(state, action) {
            state.selectedPRI = action.payload;
        },
    },
});

// Selector to retrieve full or filtered PRI mapping data
export const selectPRIMapping = (state) => 
    state.scopePriMapping.filteredPriMapping.length 
        ? state.scopePriMapping.filteredPriMapping 
        : state.scopePriMapping.priMapping;

// Selectors for current selections
export const selectSelectedModule = (state) => state.scopePriMapping.selectedModule;
export const selectSelectedScopeArea = (state) => state.scopePriMapping.selectedScopeArea;
export const selectSelectedPRI = (state) => state.scopePriMapping.selectedPRI;

// Export the actions
export const { filterByScopeArea, resetFilter, setSelectedModule, setSelectedScopeArea, setSelectedPRI } = scopePriMappingSlice.actions;

export default scopePriMappingSlice.reducer;
