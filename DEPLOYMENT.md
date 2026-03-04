# 🚀 TEMS AURA - Deployment Guide

## Complete Deployment Instructions for Netlify

### Step 1: Prepare Your GitHub Repository

1. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: TEMS AURA website"
   ```

2. **Create GitHub Repository**:
   - Go to [github.com](https://github.com)
   - Click "New Repository"
   - Name it: `tems-aura`
   - Keep it **Public** for free Netlify deployment
   - Don't initialize with README (we already have one)

3. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/tems-aura.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Netlify

1. **Sign up for Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub (free plan)

2. **Create New Site**:
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Authorize Netlify to access your repositories
   - Select `tems-aura` repository

3. **Configure Build Settings**:
   Netlify will auto-detect from `netlify.toml`:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Node version**: 18
   
   Just click **"Deploy site"**!

4. **Wait for Deployment**:
   - First deployment takes 2-3 minutes
   - You'll get a URL like: `https://tems-aura-xyz123.netlify.app`

### Step 3: Enable Netlify Identity (for CMS)

1. **In Netlify Dashboard**:
   - Go to your site
   - Click "Identity" in top menu
   - Click "Enable Identity"

2. **Configure Registration**:
   - Go to "Settings and usage"
   - Change "Registration preferences" to **"Invite only"**
   - This prevents random people from accessing your CMS

3. **Invite Yourself as Admin**:
   - Click "Invite users"
   - Enter your email: `tems_aura@gmail.com`
   - Check your email and accept the invitation
   - Set your password

### Step 4: Enable Netlify Forms

1. **In Netlify Dashboard**:
   - Go to "Forms" tab
   - Forms are automatically detected from your site
   - No configuration needed!

2. **Configure Notifications** (Optional):
   - Go to "Settings" → "Forms"
   - Add "Email notification"
   - Enter: `tems_aura@gmail.com`
   - You'll receive emails when customers submit orders

### Step 5: Set Up Custom Domain (Optional)

1. **Buy a Domain** (from Namecheap, GoDaddy, etc.)
   Example: `temsaura.com`

2. **In Netlify Dashboard**:
   - Go to "Domain management"
   - Click "Add custom domain"
   - Enter your domain
   - Follow DNS configuration instructions

3. **Enable HTTPS**:
   - Netlify automatically provisions free SSL certificate
   - Takes 1-2 minutes

### Step 6: Access Your CMS

1. **Navigate to**: `https://your-site-name.netlify.app/admin`

2. **Log in** with your Netlify Identity credentials

3. **Start Managing Content**:
   - Add gallery images
   - Update testimonials
   - Modify homepage settings
   - Change contact information

### Step 7: Test Everything

#### Test Custom Order Form:
1. Go to `/custom-order`
2. Fill in all required fields
3. Submit the form
4. Check your email for notification

#### Test Gallery:
1. Go to `/admin`
2. Add a new gallery item
3. Upload an image
4. Mark it as "Featured"
5. View it on the gallery page

#### Test Social Sharing:
1. Open gallery item modal
2. Click social share buttons
3. Verify they work correctly

## 🔧 Configuration Files

### netlify.toml
Located at project root. Controls:
- Build command
- Publish directory
- Environment variables
- Redirects

### public/admin/config.yml
Decap CMS configuration. Controls:
- CMS collections
- Field types
- Media uploads
- Authentication

## 📝 Content Management

### Adding Gallery Images
1. Go to `/admin`
2. Click "Gallery" → "New Gallery Item"
3. Fill in:
   - Title
   - Category (Evening Dresses, Wedding Guest, etc.)
   - Upload Image
   - Check "Featured" for special promotion
4. Click "Save" → "Publish"

### Managing Testimonials
1. Go to `/admin` → "Testimonials"
2. Add client name, role, testimonial text
3. Set rating (1-5 stars)
4. Upload client photo (optional)
5. Publish

### Updating Contact Info
1. Go to `/admin` → "Site Settings" → "Contact Information"
2. Update email, phone, social media links
3. Save changes

## 🐛 Troubleshooting

### Build Failed
**Problem**: Deployment fails with build errors

**Solution**:
```bash
# Test build locally first
npm run build

# If it works locally, clear Netlify cache:
# In Netlify: Site settings → Build & deploy → Clear cache and retry deploy
```

### CMS Not Loading
**Problem**: `/admin` shows blank page

**Solution**:
- Verify Netlify Identity is enabled
- Check browser console for errors
- Clear browser cache
- Try in incognito mode

### Forms Not Submitting
**Problem**: Form submission doesn't work

**Solution**:
- Ensure form has `data-netlify="true"` attribute
- Check Netlify Forms dashboard for submissions
- Verify email notifications are configured

### Images Not Displaying
**Problem**: Uploaded images don't show

**Solution**:
- Check file path in CMS (should be `/uploads/filename.jpg`)
- Verify image was uploaded to correct folder
- Clear browser cache
- Re-deploy site

## 🔄 Making Updates

### Update Content:
- Use `/admin` CMS - changes are automatic

### Update Code:
```bash
git add .
git commit -m "Description of changes"
git push origin main
```
Netlify auto-deploys on every push!

## 📊 Analytics Setup (Optional)

### Add Google Analytics:
1. Get GA4 tracking ID
2. Add to `src/app/layout.tsx`:
```tsx
<Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
```

## 🎯 Next Steps

1. ✅ Deploy to Netlify
2. ✅ Enable Identity & Forms
3. ✅ Invite admin users
4. ✅ Add real content via CMS
5. ✅ Replace placeholder images
6. ✅ Test all forms
7. ✅ Share with customers!

## 📞 Support

For deployment issues:
- Email: tems_aura@gmail.com
- Netlify Docs: [docs.netlify.com](https://docs.netlify.com)
- Decap CMS Docs: [decapcms.org/docs](https://decapcms.org/docs)

---

**Congratulations! Your TEMS AURA website is now live! 🎉**
