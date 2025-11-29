# 🔒 Secure App Subdomain Setup Guide

## 🚨 Security Best Practices for App Legal Pages

### **RECOMMENDED: Static Pages with Build Process**

Instead of allowing live editing, create **static HTML files** that you generate locally and upload.

## 📋 **Setup Process**

### **Step 1: Create Custom Content File**
Create a simple text file with your app's specific privacy policy:

```bash
# Create content file
nano apps/taskmaster-pro/custom-privacy.txt
```

**Content Format:**
```
Privacy Policy - TaskMaster Pro

Last updated: December 2024

1. Information We Collect
For TaskMaster Pro, we collect:
- Task data (titles, descriptions, due dates)
- Device information for sync functionality
- User account information (email, profile)
- Usage analytics (anonymized)

2. How We Use Your Information
- Task management and organization
- Cross-device synchronization
- Performance improvements
- Customer support

3. Data Security
- 256-bit encryption for data transmission
- Secure authentication for user accounts
- Regular security audits and updates
- Privacy by design - minimal data collection

4. Your Privacy Rights
- Access and export your task data
- Delete your account and associated data
- Opt-out of analytics
- Correct inaccurate information

Contact: privacy@rohpolabs.com
```

### **Step 2: Create Generator Script**
Create a simple script to convert your text file to HTML:

```bash
# Create generator
nano scripts/generate-privacy.sh
```

**Script Content:**
```bash
#!/bin/bash

APP_NAME="$1"
INPUT_FILE="$2"
OUTPUT_FILE="$3"

# Read custom content
CUSTOM_CONTENT=$(cat "$INPUT_FILE")

# Replace placeholders
FINAL_CONTENT=$(echo "$CUSTOM_CONTENT" | sed "s/\[APP_NAME]/$APP_NAME/g")

# Generate HTML with template
cat subdomains/app-template/privacy-policy.html | \
sed "s/\[APP_NAME]/$APP_NAME/g" | \
sed "s/\[APP_CATEGORY]/Productivity/g" | \
sed "s/\[APP_DESCRIPTION]/AI-powered task management with gamification/g" | \
sed "s/\[DEFAULT_PRIVACY_CONTENT]/$FINAL_CONTENT/g" \
> "$OUTPUT_FILE"

echo "Generated: $OUTPUT_FILE"
```

### **Step 3: Generate Static HTML**
Run the generator to create your static page:

```bash
# Make executable
chmod +x scripts/generate-privacy.sh

# Generate static privacy page
./scripts/generate-privacy.sh "TaskMaster Pro" "apps/taskmaster-pro/custom-privacy.txt" "apps/taskmaster-pro/privacy-policy.html"
```

### **Step 4: Upload to Server**
Upload the generated HTML file to your server:

```bash
# Upload using FTP/SCP
scp apps/taskmaster-pro/privacy-policy.html user@server:/var/www/taskmaster.rohpolabs.com/

# Or using Git
git add apps/taskmaster-pro/privacy-policy.html
git commit -m "Add TaskMaster Pro privacy policy"
git push origin main
```

### **Step 5: Set Up Subdomain**
Configure your web server for the subdomain:

**Apache (.htaccess):**
```apache
# Create .htaccess in apps/taskmaster-pro/
RewriteEngine on
RewriteRule ^privacy-policy.html$ /apps/taskmaster-pro/privacy-policy.html [L]
```

**Nginx:**
```nginx
# In nginx config
server {
    server_name taskmaster.rohpolabs.com;
    root /var/www/taskmaster.rohpolabs.com;

    location /privacy-policy.html {
        return 301 /apps/taskmaster-pro/privacy-policy.html;
    }

    location / {
        try_files $uri $uri/ /apps/taskmaster-pro/$uri/ =404;
    }
}
```

## 🔐 **Option 2: Server-Side Generation (Most Secure)**

### **Server-Side Template System**
Generate privacy pages dynamically from a database or content management system.

**PHP Implementation:**
```php
<?php
$app = $_GET['app'] ?? 'default';
$allowedApps = ['taskmaster-pro', 'focusflow', 'notecraft'];

if (!in_array($app, $allowedApps)) {
    http_response_code(404);
    exit;
}

// Load privacy content from database or file
$privacyContent = loadPrivacyContent($app);

echo $privacyContent;
?>
```

### **Node.js Implementation:**
```javascript
const express = require('express');
const fs = require('fs');

const appPrivacyContent = {
    'taskmaster-pro': '...',
    'focusflow': '...',
    'notecraft': '...'
};

app.get('/privacy-policy.html', (req, res) => {
    const appName = req.hostname.split('.')[0];
    const content = appPrivacyContent[appName] || defaultContent;

    // Render template with content
    res.render('privacy-template', {
        appName,
        content
    });
});
```

## ⚡ **Security Benefits of Secure Approach**

✅ **No Live Editing** - Only you can change the content
✅ **Version Control** - Track all changes with Git
✅ **App Store Compliance** - What you submit is what's actually deployed
✅ **Audit Trail** - Complete history of all privacy policy updates
✅ **Security** - No public write access to legal files
✅ **Scalability** - Easy to manage many apps

## 🚀 **Recommendation**

**Use Option 1 (Static Pages)** for the best security and App Store compliance. The generator script makes it easy to create professional, consistent privacy pages for all your apps without exposing edit capabilities to the public.