import { gameStateSlice } from '@/app/game/reducers/gameStateSliceReducer'
import { homeStateSlice } from '@/app/reducers/homeStateSlice'
import { loginStateSlice } from '@/app/reducers/loginStateSlice'
import { configureStore  } from '@reduxjs/toolkit'

export const makeStore = () => {
  return configureStore({
    reducer: {
      gameState:gameStateSlice.reducer,
      homeState: homeStateSlice.reducer,
      loginState: loginStateSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']