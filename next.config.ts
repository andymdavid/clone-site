import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/clone-site",
  assetPrefix: "/clone-site",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/clone-site",
  },
};

export default nextConfig;
