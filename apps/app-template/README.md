# App Template - RohpoLabs

## Quick Setup for New Apps

Use this template to create privacy policy and terms of service pages for your new apps quickly.

## Steps to Create New App Pages

### 1. Copy Template
```bash
cp -r apps/app-template apps/your-new-app-name
```

### 2. Replace Placeholders
In both HTML files, replace `[APP_NAME]` with your actual app name:
- `privacy-policy.html` - Replace `[APP_NAME]` with your app name
- `terms-of-service.html` - Replace `[APP_NAME]` with your app name

### 3. Customize Content
Edit the content directly in the HTML files:
- **Privacy Policy**: Edit the content in the `.content-input` div
- **Terms of Service**: Edit the textarea content

### 4. Test Locally
Open `privacy-policy.html` and `terms-of-service.html` in your browser to verify styling and content.

### 5. Deploy
Upload the folder to your server or include in your app subdomain setup.

## File Structure
```
apps/your-app-name/
├── privacy-policy.html    # Privacy policy page
├── terms-of-service.html  # Terms of service page
└── custom-privacy.txt     # Optional: Text version of privacy policy
```

## Features
- ✅ Responsive design with mobile-first approach
- ✅ Consistent RohpoLabs branding and colors
- ✅ Proper CSS linking to main stylesheet
- ✅ Navigation that links back to main site
- ✅ Easy content editing directly in HTML
- ✅ App Store compliant legal pages

## Styling
All pages use the main RohpoLabs CSS framework with:
- Purple to blue gradient headers
- Clean, modern design
- Mobile-responsive layout
- Professional typography using Inter font

## Navigation
The navigation includes:
- Home (links to ../../index.html)
- About (links to ../../about.html)
- Apps (links to ../../index.html#apps)
- Privacy (links to privacy-policy.html)
- Terms (links to terms-of-service.html)

## Notes
- CSS path is already configured: `../../assets/css/style.css`
- All relative links are properly set up
- No external dependencies required
- Works offline when hosted locally