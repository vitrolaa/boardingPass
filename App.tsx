import {
	Poppins_400Regular,
	Poppins_500Medium,
	Poppins_700Bold,
	Poppins_800ExtraBold,
	useFonts,
} from "@expo-google-fonts/poppins"
import { StatusBar } from "expo-status-bar"
import { Home } from "@/app/home"

export default function App() {
	const [fontsLoaded] = useFonts({
		Poppins_500Medium,
		Poppins_400Regular,
		Poppins_700Bold,
		Poppins_800ExtraBold,
	})

	if (!fontsLoaded) {
		return null
	}

	return (
		<>
			<StatusBar style="light" backgroundColor="transparent" translucent />
			<Home />
		</>
	)
}
