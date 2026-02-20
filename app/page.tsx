import GitHubHeatmap from "./components/github-heatmap";
import HomeClient from "./components/home-client";

export default function Page() {
    return (
        <HomeClient>
            <GitHubHeatmap username="deep-vinci" />
        </HomeClient>
    );
}
