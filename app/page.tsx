import GitHubHeatmap from "./components/github-heatmap";
import HomeClient from "./components/home-client";

export default function Page() {
    return (
        <HomeClient>
            <div className="w-full mb-12 opacity-80 hover:opacity-100 transition duration-500 overflow-x-auto overflow-y-hidden pb-4">
                <GitHubHeatmap username="deep-vinci" />
            </div>
        </HomeClient>
    );
}
