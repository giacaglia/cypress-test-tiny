import "./App.css";

const baseUrl = "http://localhost:4000";
const ONE_SECOND = 1000;

function App() {
	function getData() {
		console.log("DATA!!!");
		return fetch(`${baseUrl}/firstTest`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
				"Access-Control-Allow-Headers":
					"Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
			},
		}).then(async (response) => {
			console.log(response);
			if (response.ok) {
				console.log("HReuhreuhre");
				return response;
			} else {
				console.log("FROTNEDNCANT FIND HEADER");
				throw new Error("Something went wrong.");
			}
		});
	}

	function handleSubmit(e) {
		// console.log("Before data");
		setTimeout(() => {
			getData();
		}, ONE_SECOND);
	}

	return (
		<div className="App">
			<header className="App-header">
				<button onClick={handleSubmit}>Press here!!!</button>
			</header>
		</div>
	);
}

export default App;
