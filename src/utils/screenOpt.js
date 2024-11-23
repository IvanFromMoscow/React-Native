import { THEME } from "../theme"
export const options = () => ({
        headerStyle: {
          backgroundColor:
            Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
        },
        headerTintColor:
          Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
        headerTitleAlign: "center",
      });