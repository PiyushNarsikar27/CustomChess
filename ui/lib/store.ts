import { gameStateSlice } from '@/app/game/reducers/gameStateSliceReducer'
import { configureStore  } from '@reduxjs/toolkit'

export const makeStore = () => {
  return configureStore({
    reducer: {
      gameState:gameStateSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']