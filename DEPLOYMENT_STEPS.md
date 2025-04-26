# GitHub Pages Deployment Steps

Follow these steps exactly to deploy your website:

## 1. Go to your GitHub repository settings

1. Open your browser and go to https://github.com/SaifPunjwani/saifpunjwani.github.io
2. Click on "Settings" (tab in the top navigation)
3. In the left sidebar, click on "Pages" (under "Code and automation" section)

## 2. Configure GitHub Pages

1. Under "Build and deployment" section:
   - Source: Select "Deploy from a branch" from the dropdown
   - Branch: Select "main" as the branch and "/ (root)" as the folder
   - Click "Save"

2. Wait for a few minutes (up to 10 minutes) for GitHub to build and deploy your site
   - You'll see a blue box at the top saying "Your site is being built"
   - When complete, it will change to "Your site is published at https://saifpunjwani.github.io/"

## 3. Verify deployment

After the build completes, visit https://saifpunjwani.github.io to see your site.

## Troubleshooting

If your site isn't working after following these steps:

1. Check if GitHub Actions are enabled:
   - Go to the "Actions" tab in your repository
   - If you see a message about Actions being disabled, enable them

2. Create a simple change to trigger deployment:
   - Edit your README.md file directly on GitHub
   - Add a simple line like "Updated on [date]"
   - Commit the change
   - This will trigger a new deployment

3. Check deployment status:
   - Go to the "Actions" tab
   - Look for workflow runs related to Pages
   - Check if they succeeded or failed