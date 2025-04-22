# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/231fe694-24de-4ae6-874e-cc6ca49975c4

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/231fe694-24de-4ae6-874e-cc6ca49975c4) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/231fe694-24de-4ae6-874e-cc6ca49975c4) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)


### Misc. Notes for self:

Create bucket
Enable static website hosting
Enable Amplify Hosting
Set DNS records (iwantmyname)

http://alexruiz.io.s3-website-us-west-2.amazonaws.com 

https://docs.aws.amazon.com/AmazonS3/latest/userguide/HostingWebsiteOnS3Setup.html



npm run build 

upload /dist to S3

Amplify -> created deploy -> from S3




zsh: command not found: pip
Py installed?

python3 --version
pip3 installed?
pip3 --version
add alais
alias pip="pip3"
reload
source ~/.zshrc

// 
pip install awscli --force-reinstall --upgrade

aws configure

// check aiuth
aws s3 ls

Create group IAM
add AmplifyBackendDeployFullAccess
add AmazonS3FullAccess
Add JSON policy:

```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowAmplifyStartDeployment",
      "Effect": "Allow",
      "Action": [
        "amplify:StartDeployment",
        "amplify:GetApp",
        "amplify:GetBranch",
        "amplify:GetJob",
        "amplify:ListJobs"
      ],
      "Resource": [
        "arn:aws:amplify:us-west-2:351656701692:apps/d7er6ag450hwu",
        "arn:aws:amplify:us-west-2:351656701692:apps/d7er6ag450hwu/branches/main",
        "arn:aws:amplify:us-west-2:351656701692:apps/d7er6ag450hwu/branches/main/*"
      ]
    }
  ]
}
```

//
s3-upload group AmazonS3FullAccess
alexruiz.io user

//
rm dist/.DS_Store

// delete remote that's not local
aws s3 sync dist s3://alexruiz.io --delete

aws amplify start-deployment --app-id d7er6ag450hwu --branch-name main --source-url s3://alexruiz.io/build.zip

// check itndidy
aws sts get-caller-identity        

cd dist
zip -r ../build-final.zip .
cd ..
aws s3 cp build-final.zip s3://your-bucket-name/build.zip

aws amplify start-deployment --app-id d7er6ag450hwu --branch-name main --source-url s3://alexruiz.io/build.zip
aws amplify get-job --app-id d7er6ag450hwu --branch-name main --job-id #