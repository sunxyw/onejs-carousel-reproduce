import { Slot } from "one";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
	return (
		<>
			{typeof document !== "undefined" && (
				<>
					<meta charSet="utf-8" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1, maximum-scale=5"
					/>
					<link rel="icon" href="/favicon.svg" />
				</>
			)}

			<GestureHandlerRootView style={{ flex: 1 }}>
				<Slot />
			</GestureHandlerRootView>
		</>
	);
}
