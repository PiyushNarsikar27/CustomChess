import { gameStateSlice } from '@/app/game/reducers/gameStateSliceReducer'
import { homeStateSlice } from '@/app/reducers/homeStateSlice'
import { configureStore  } from '@reduxjs/toolkit'

export const makeStore = () => {
  return configureStore({
    reducer: {
      gameState:gameStateSlice.reducer,
      homeState: homeStateSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']