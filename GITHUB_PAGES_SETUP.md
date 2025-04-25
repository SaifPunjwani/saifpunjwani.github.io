# GitHub Pages Deployment Guide

Follow these steps to deploy your website using GitHub Pages:

## Step 1: Create a GitHub Repository
1. Sign in to your GitHub account or create one at [github.com](https://github.com)
2. Create a new repository named `username.github.io` where `username` is your GitHub username
   - This special repository name will be your free GitHub Pages site
   - Example: if your username is "saifpunjwani", name it "saifpunjwani.github.io"

## Step 2: Push Your Code to GitHub
From your local project directory, run these commands:
```bash
# If you haven't already initialized git
git init

# Add all your files
git add .

# Commit your files
git commit -m "Initial website commit"

# Add the remote repository (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/USERNAME.github.io.git

# Push your code to GitHub
git push -u origin main
```

## Step 3: Configure GitHub Pages
1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to the "GitHub Pages" section
4. For the source, select "main" branch
5. Click "Save"

Your site will be published at `https://username.github.io/`

## Step 4: Add a Custom Domain (Optional)
If you decide to purchase the domain "saifpunjwani.com" later:

1. In your GitHub repository settings, under GitHub Pages, add your custom domain
2. Create a file named "CNAME" in your repository with just your domain name:
   ```
   saifpunjwani.com
   ```
3. Update your domain's DNS settings to point to GitHub Pages
   - Create an A record pointing to GitHub Pages IP addresses:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or create a CNAME record pointing to your `username.github.io` domain

## Step 5: Verify Deployment
1. GitHub Pages may take a few minutes to build your site
2. Visit `https://username.github.io/` to see your deployed website