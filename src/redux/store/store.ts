import { configureStore } from '@reduxjs/toolkit'
import changeLanguageSlice from '../reducer/changeLanguageSlice'
import fetchLanguageSlice from '../reducer/fetchLanguageSlice'

export const store = configureStore({
  reducer: {
	changeLanguage:fetchLanguageSlice,
	language:changeLanguageSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch