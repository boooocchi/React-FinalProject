import { createSlice } from '@reduxjs/toolkit'

import { getData } from '../middleware/api'
import { updateItemQty } from './helper'

const initialState = {
    data: [],
    loading: 'idle',
    error: null
}

const mainSlice = createSlice({
    name: 'oyastu',
    initialState,
    reducers: {
        addQty: (state, action) => updateItemQty(state, action, 1),
        removeQty: (state, action) => updateItemQty(state, action, -1)
    },
    extraReducers: (builder) => {
        builder
            .addCase(getData.pending, (state) => {
                if (state.loading === 'idle') {
                    state.loading = 'pending'
                }
            })
            .addCase(getData.fulfilled, (state, action) => {
                if (state.loading === 'pending') {
                    state.loading = 'idle'
                    state.data = action.payload
                }
            })
            .addCase(getData.rejected, (state, action) => {
                if (state.loading === 'pending') {
                    state.loading = 'idle'
                    state.error = action.error.message
                }
            })
    }
})

export const { addQty, removeQty } = mainSlice.actions
export default mainSlice.reducer