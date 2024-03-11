import { languageType } from "@/types/languageTypes";
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


const initialState : languageType = {
	language:'english'
}

export const changeLanguageSlice = createSlice({
  name: 'Change Language Slice',
  initialState,
  reducers: {
    setLanguage:(state, action: PayloadAction<string>)=>{
		state.language = action.payload;
	}
  },
})

export const { setLanguage } = changeLanguageSlice.actions
export default changeLanguageSlice.reducer