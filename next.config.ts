import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: "/", // redirect from root
                destination: "https://github.com/deep-vinci", // target URL
                permanent: false, // or true for 308 permanent redirect
            },
        ];
    },
};

export default nextConfig;
