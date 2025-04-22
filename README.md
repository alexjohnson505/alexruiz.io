[alexruiz.io](alexruiz.io)

## Setup & Deploy

### Development

Install node.js, and npm [with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

**Install the necessary dependencies.**
```npm i```

**Run development server with auto-reloading**
```npm run dev```

### Deploy

**Build to /dist folder**

```npm run build```

**Build .zip for deploy**

```
cd dist
zip -r ../build.zip .
cd ..
```

**Upload .zip to S3**
```
aws s3 cp build.zip s3://your-bucket-name/build.zip
```

**Deploy .zip from S3 with Amplify**
```
aws amplify start-deployment --app-id d7er6ag450hwu --branch-name main --source-url s3://alexruiz.io/build.zip
```

### Setup

**Create Amazon S3 Bucket**

Create new bucket: http://alexruiz.io.s3-website-us-west-2.amazonaws.com 
Enable static web hosting

**Set Up Amplify Hosting**

https://docs.aws.amazon.com/AmazonS3/latest/userguide/HostingWebsiteOnS3Setup.html

**Set DNS Records**

In iwantmyname

**Fix locale environment**

```
// Is python installed?
python3 --version

// Is pip4 installed?
pip3 --version

// Use alias for pip -> pip3
alias pip="pip3"

// Refresh config
source ~/.zshrc
```

**Install AWS CLI**

pip install awscli --force-reinstall --upgrade
aws configure
aws s3 ls

**AWS IAM - Configure Permissions**

Including: AmplifyBackendDeployFullAccess, and AmazonS3FullAccess

Add custom JSON policy:

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

**AWS IAM - Add user with group**

Created new `alexruiz.io` user account

**Check Identity**

```
aws sts get-caller-identity
```