# Manual GitHub Pages Setup

If the automatic workflow is still failing, follow these steps for manual setup:

1. Go to your GitHub repository at https://github.com/SaifPunjwani/saifpunjwani.github.io

2. Click on "Settings" at the top of the repository

3. In the left sidebar, click on "Pages"

4. Under "Build and deployment" > "Source", select "Deploy from a branch" (NOT GitHub Actions)

5. Under "Branch", select either:
   - "main" branch and "/ (root)" folder
   - "gh-pages" branch and "/ (root)" folder

6. Click "Save"

7. Wait a few minutes for GitHub to deploy your site

8. Refresh the page and look for the message: "Your site is published at https://saifpunjwani.github.io"

9. Visit https://saifpunjwani.github.io to see your website

If you're still having issues, try these troubleshooting steps:

1. Make sure your username matches your repository name exactly (case-sensitive):
   - Your username: SaifPunjwani
   - Your repository should be: SaifPunjwani.github.io (same capitalization)

2. Check if any validation errors appear in the Settings > Pages section

3. Try removing the workflow file if it's causing issues:
   - Delete the .github/workflows/pages.yml file
   - Push the changes
   - Configure Pages settings manually as described above