#!/bin/bash
# publish.sh — automate npm publish

set -e

PACKAGE_NAME="resume-sukhamoy-roy"

# Step 1: Bump version (patch)
npm version patch

# Step 2: Publish to npm
npm publish --access public

# Step 3: Test via npx
echo "Testing with npx..."
npx $PACKAGE_NAME
