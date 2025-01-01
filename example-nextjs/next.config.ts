import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ['my-package'],
  webpack: (config, { isServer }) => {
    // 웹팩 설정 추가
    config.resolve.alias = {
      ...config.resolve.alias,
      'my-package': require.resolve('my-package')
    }
    return config
  }
};

export default nextConfig;
