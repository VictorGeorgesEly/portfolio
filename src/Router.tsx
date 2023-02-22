import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

export default function Router(): JSX.Element {

	// TODO Outlet and loader ?
	return (
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<Layout />} />
			</Routes>
		</BrowserRouter>
	);
}