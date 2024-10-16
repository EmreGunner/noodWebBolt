#!/bin/bash

# Function to generate a custom commit message based on the changes
generate_commit_message() {
    # Get the list of changed files
    CHANGED_FILES=$(git diff --name-status)

    # If there are changes, generate a detailed commit message
    if [[ -n "$CHANGED_FILES" ]]; then
        # Parse changes into added, modified, deleted categories
        ADDED=$(echo "$CHANGED_FILES" | grep "^A" | awk '{print $2}')
        MODIFIED=$(echo "$CHANGED_FILES" | grep "^M" | awk '{print $2}')
        DELETED=$(echo "$CHANGED_FILES" | grep "^D" | awk '{print $2}')

        # Construct a commit message
        COMMIT_MESSAGE="Changes: "
        if [[ -n "$ADDED" ]]; then
            COMMIT_MESSAGE+="Added: $ADDED. "
        fi
        if [[ -n "$MODIFIED" ]]; then
            COMMIT_MESSAGE+="Modified: $MODIFIED. "
        fi
        if [[ -n "$DELETED" ]]; then
            COMMIT_MESSAGE+="Deleted: $DELETED. "
        fi
    else
        # Default commit message if no specific changes found
        COMMIT_MESSAGE="Auto commit at $(date)"
    fi

    echo "$COMMIT_MESSAGE"
}

# Check for changes, commit, and push every 5 minutes
while true
do
    # Move to the repository's root directory (optional)
    # cd /path/to/your/repository

    # Check for changes
    if ! git diff-index --quiet HEAD --; then
        echo "Changes detected. Committing and pushing changes..."

        # Add all changes to staging
        git add .

        # Generate the commit message based on the changes
        COMMIT_MESSAGE=$(generate_commit_message)

        # Commit with the personalized message
        git commit -m "$COMMIT_MESSAGE"

        # Push to the remote repository
        git push origin $(git rev-parse --abbrev-ref HEAD)
    else
        echo "No changes detected."
    fi

    # Wait for 5 minutes (300 seconds)
    sleep 300
done
