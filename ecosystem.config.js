module.exports = {
  apps : [{
    name: 'personal-site-frontend',
    script: 'npx',
    interpreter: 'none',
    args: 'serve build -s -l 3002',
    env_production: {
      NODE_ENV: 'production'
    }
  }]
}
