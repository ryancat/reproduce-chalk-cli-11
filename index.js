const { execSync } = require("child_process")

// This will fail
execSync('npx chalk yellow "expect my colorful log 1"');