# Decap CMS Setup Guide for TEMS AURA

## Overview
This guide will help you set up authentication for the Decap CMS admin panel, allowing you to manage your gallery, testimonials, and site content.

## Prerequisites
- GitHub account (you already have this)
- Netlify account (free tier works fine)
- Your site deployed on Vercel

---

## Step 1: Create a Netlify Site (For Identity Only)

Even though your site is hosted on Vercel, you need a Netlify site for authentication.

1. **Go to Netlify**: https://app.netlify.com
2. **Sign up/Login** with your GitHub account
3. **Click "Add new site"** → "Import an existing project"
4. **Connect to your GitHub repository**: `dreams331/tems-aura`
5. **IMPORTANT - Build Settings**:
   - Build command: Leave empty or put `echo "Using Vercel for hosting"`
   - Publish directory: `public`
   - **This site won't actually deploy anything, it's just for authentication**
6. Click "Deploy site"

---

## Step 2: Enable Netlify Identity

1. In your Netlify site dashboard, go to **"Identity"** tab
2. Click **"Enable Identity"**
3. Under **"Registration preferences"**, select **"Invite only"** (recommended for security)
4. Under **"External providers"**, you can optionally enable GitHub login
5. Click **"Enable Git Gateway"** (this is crucial!)

---

## Step 3: Configure Git Gateway

1. Still in the Identity tab, scroll down to **"Services"** → **"Git Gateway"**
2. Click **"Enable Git Gateway"**
3. This allows the CMS to commit changes to your GitHub repository

---

## Step 4: Update Your Vercel Site

Add the Netlify Identity widget to your main site. We need to add it to your root layout:

**File: `src/app/layout.tsx`**

Add this script tag in the `<body>` section:

```tsx
<Script
  src="https://identity.netlify.com/v1/netlify-identity-widget.js"
  strategy="afterInteractive"
/>
```

Don't forget to import Script at the top:
```tsx
import Script from 'next/script'
```

---

## Step 5: Update CMS Config with Your Netlify Site

**File: `public/admin/config.yml`**

The config already has the correct backend setup. No changes needed!

---

## Step 6: Invite Yourself as Admin

1. Back in Netlify, go to **Identity** tab
2. Click **"Invite users"**
3. Enter your email: `tems_aura@gmail.com`
4. Check your email and click the invitation link
5. Set a password for your CMS access

---

## Step 7: Access Your CMS

1. **Go to**: `https://your-vercel-site.vercel.app/admin`
2. Click **"Login with Netlify Identity"**
3. Enter your email and password
4. You should now see your CMS dashboard! 🎉

---

## Step 8: Test the CMS

Try these actions:
1. **Add a Gallery Item**: Upload an image and fill in the details
2. **Add a Testimonial**: Create a new customer review
3. **Edit Site Settings**: Update contact information

Each save will:
- Commit changes to your GitHub repository
- Trigger a new Vercel deployment
- Update your live site

---

## Troubleshooting

### "Cannot read property 'split' of undefined"
- Make sure Git Gateway is enabled in Netlify Identity

### "Not Found" on /admin page
- Verify the `public/admin/index.html` file exists
- Check that your Vercel deployment includes the `public` folder

### "Failed to load config.yml"
- Check that `public/admin/config.yml` exists and has correct YAML syntax
- Make sure the file is committed to GitHub

### Can't login / Authentication issues
- Verify you've invited yourself in Netlify Identity
- Check that the Netlify Identity widget script is loaded on your site
- Try clearing browser cache and cookies

---

## Local Development (Optional)

To test the CMS locally:

1. **Uncomment this line in `public/admin/config.yml`**:
   ```yaml
   local_backend: true
   ```

2. **Install and run the proxy**:
   ```bash
   npx decap-server
   ```

3. **In another terminal, run your dev server**:
   ```bash
   npm run dev
   ```

4. **Access**: `http://localhost:3000/admin`

---

## Security Best Practices

1. ✅ Keep "Invite only" registration enabled
2. ✅ Use a strong password for your CMS account
3. ✅ Don't share your admin credentials
4. ✅ Regularly backup your content (it's all in Git!)
5. ✅ Consider enabling 2FA on your GitHub account

---

## What's Next?

Once authentication is working:
1. Upload your real product images
2. Add customer testimonials
3. Update site settings and contact info
4. Customize the about page content

---

## Need Help?

If you run into issues:
1. Check the browser console for errors (F12)
2. Verify all steps above were completed
3. Check Netlify Identity logs
4. Review the [Decap CMS docs](https://decapcms.org/docs/intro/)

---

**Created for TEMS AURA - Luxury Fashion Designer Website**
