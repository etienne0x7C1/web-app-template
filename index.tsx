import Apps from "../appRouting"
import { MyApp } from "./my-app/MyApp"

/**
 * Module Apps here
 */
export const MyModule = () => {
    return (
        <Apps>
             <MyApp />
        </Apps>
    )
}
