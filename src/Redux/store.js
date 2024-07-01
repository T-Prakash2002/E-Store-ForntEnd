import { configureStore } from '@reduxjs/toolkit'

import { reducer } from './index'

export default configureStore({
  reducer: reducer,
})
