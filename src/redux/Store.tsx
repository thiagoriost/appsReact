import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

// Slice de ejemplo para manejar el estado del usuario
const userSlice = createSlice({
    name: 'user',
    initialState: { isAuthenticated: false, test:555 },
    reducers: {
        login: (state) => {
            console.log("login => ", {state})
            state.isAuthenticated = true;
        },
        logout: (state) => {
            console.log("logout => ", {state})
            state.isAuthenticated = false;
        }
    }
});

export const { login, logout } = userSlice.actions;

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
