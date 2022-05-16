import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface EnvironmentState {
        userSetTimeZone: string | null | undefined
}


const initialState = { userSetTimeZone: 'UTC' } as EnvironmentState

const environmentSlice = createSlice({
    name: 'environment',
    initialState,
    reducers: {
        setTimezone(state, action: PayloadAction<string>) {
            state.userSetTimeZone = action.payload
        },
    },
    extraReducers: {
        'reset-state': () => initialState,
    },
})

export const { setTimezone } = environmentSlice.actions
export default environmentSlice.reducer



