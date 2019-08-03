module.exports = {
  apps: [
    {
      name: "personal-site-frontend",
      script: "npx",
      interpreter: "none",
      args: "serve build -s -l 3002",
      env: {
        NODE_ENV: "development",
        HOME_URL: "http://localhost:3002",
        API_URL: "http://localhost:3001",
        PORT: 3002
      },
      env_production: {
        NODE_ENV: "production",
        HOME_URL: "http://cyamonide.me",
        API_URL: "http://api.cyamonide.me",
        PORT: 3002
      }
    }
  ]
};
