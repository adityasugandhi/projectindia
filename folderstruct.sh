#!/bin/bash

# Create the root directory for the React app
mkdir your-react-app
cd your-react-app

# Create the src directory
mkdir src
cd src

# Create the components directory
mkdir components
cd components

# Create example component files
touch Header.js
touch Sidebar.js
touch Button.js

# You can create more components if needed
# touch AnotherComponent.js

# Navigate back to the src directory
cd ..

# Create example App.js file
touch App.js

# Create example index.js file
touch index.js

# Navigate back to the root directory of the app
cd ..

echo "React app directory structure created successfully!"
