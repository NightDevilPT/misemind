// src/redux/slices/dataSlice.js
import { languageSlicerType } from "@/types/languageTypes";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async Thunk
const fetchLanguageAsync = createAsyncThunk(
	"data/fetchData",
	async (language: string) => {
		const response = await axios.get(
			`http://localhost:3000/languages/${language}.json`
		);
		return response.data;
	}
);

const initialState: languageSlicerType = {
	error: null,
	status: "idle",
	data: null,
};

const fetchLanguageSlice = createSlice({
	name: "fetch Language Slice",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchLanguageAsync.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchLanguageAsync.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.data = action.payload;
			})
			.addCase(fetchLanguageAsync.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

export default fetchLanguageSlice.reducer;
export { fetchLanguageAsync };
