# #!/bin/bash

# set -e  # Exit immediately if a command exits with a non-zero status.

# # Create build directory if it doesn't exist
# mkdir -p build

# # Navigate to build directory
# cd build

# # Run CMake
# cmake ..

# # Build the project
# make

# # Print the contents of the build directory
# echo "Contents of build directory:"
# ls -R

# # Navigate back to the backend directory
# cd ..

# # Try to find the Micro8085 executable
# echo "Searching for Micro8085 executable:"
# find . -name "Micro8085" -type f

# # Attempt to run the executable
# echo "Attempting to run the executable:"
# if [ -f "./build/Micro8085" ]; then
#     echo "Executable found at ./build/Micro8085"
#     file ./build/Micro8085
#     ldd ./build/Micro8085
#     ./build/Micro8085
# elif [ -f "./build/src/Micro8085" ]; then
#     echo "Executable found at ./build/src/Micro8085"
#     file ./build/src/Micro8085
#     ldd ./build/src/Micro8085
#     ./build/src/Micro8085
# elif [ -f "./build/bin/Micro8085" ]; then
#     echo "Executable found at ./build/bin/Micro8085"
#     file ./build/bin/Micro8085
#     ldd ./build/bin/Micro8085
#     ./build/bin/Micro8085
# else
#     echo "Executable not found in expected locations"
# fi


 



#!/bin/bash

set -e  # Exit immediately if a command exits with a non-zero status.

# Create build directory if it doesn't exist
mkdir -p build

# Navigate to the build directory
cd build

# Run CMake to configure the project
cmake ..

# Build the project using make
make

# Print the contents of the build directory for debugging purposes
echo "Contents of build directory:"
ls -R

# Navigate back to the backend directory
cd ..

# Try to find and run the Micro8085 executable
echo "Attempting to run the Micro8085 executable:"
if [ -f "./build/Micro8085" ]; then
    echo "Executable found at ./build/Micro8085"
    ./build/Micro8085
else
    echo "Executable not found."
    exit 1
fi
