# Development Server:
Start dev server
1. Run command "npm run start"

# Production Build:
Build project
1. "npm run build"

Serve built static files

2. "npx serve build"

# Docker:
Build image
1. "docker build . -t dockerized-react"

Run app in Docker container

2. "docker run -p 3000:80 -d dockerized-react"
