import { configureStore} from "@reduxjs/toolkit"
import { logger } from "redux-logger"
import general from "./generalReducer"
import api from "./APIReducer"

export default configureStore({
    reducer: {
        api
    },
    middleware: (def) => def().concat(logger)
})