# Decap CMS Setup & Troubleshooting Guide

## 🚨 CRITICAL: How to Access the CMS

**You MUST access the CMS through your Netlify URL, NOT Vercel!**

### ✅ Correct CMS Access URL:
```
https://tems-aura.netlify.app/admin/
```

### ❌ DO NOT use:
```
https://tems-aura.vercel.app/admin/  (This will cause auth errors!)
```

## Why This Matters

- **Netlify Identity** only works on the domain where it's configured (tems-aura.netlify.app)
- Accessing through Vercel creates cross-origin security issues
- The "Unable to access identity settings" error occurs when using the wrong domain

## Complete Setup Checklist

### 1. Netlify Identity Setup ✓
- [x] Site created on Netlify: `tems-aura.netlify.app`
- [x] Identity enabled
- [x] Registration preferences: Invite Only
- [x] External providers enabled (if desired)
- [x] Users invited via email

### 2. Git Gateway Setup ✓
- [x] Git Gateway enabled in Netlify
- [x] GitHub repository connected
- [x] GitHub personal access token added with these scopes:
  - `repo` (Full control of private repositories)
  - `user` (Update ALL user data)

### 3. Domain Configuration

#### In Netlify Dashboard:
1. Go to **Site Settings** → **Identity** → **Settings and usage**
2. Under "External providers", add allowed domains:
   - `https://tems-aura.vercel.app` (if you want Vercel access)
   - Your custom domain (if applicable)

### 4. User Invitation Process

1. **In Netlify Dashboard:**
   - Go to Identity tab
   - Click "Invite users"
   - Enter email: `tems_aura@gmail.com`
   - Send invitation

2. **Check Your Email:**
   - Look for invitation from Netlify
   - Click "Accept invitation"
   - Set your password
   - **IMPORTANT:** You'll be redirected to the site

3. **Access the CMS:**
   - Go to `https://tems-aura.netlify.app/admin/`
   - Click "Login with Netlify Identity"
   - Enter your credentials
   - You should now see the CMS dashboard!

## Troubleshooting Common Issues

### Issue: "Unable to access identity settings"

**Causes:**
- Accessing CMS through wrong URL (Vercel instead of Netlify)
- Identity not properly enabled
- Git Gateway not configured

**Solutions:**
1. Always use `https://tems-aura.netlify.app/admin/`
2. Clear browser cache and cookies
3. Try incognito/private browsing mode
4. Re-check Identity is enabled in Netlify dashboard
5. Verify Git Gateway token is still valid

### Issue: "Git Gateway Error"

**Solutions:**
1. Regenerate GitHub personal access token:
   - Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Generate new token with `repo` and `user` scopes
   - Copy token immediately (you won't see it again!)
2. Update token in Netlify:
   - Site Settings → Identity → Services → Git Gateway
   - Edit configuration
   - Paste new token
   - Save

### Issue: "403 Forbidden" or CORS Error

**Solutions:**
1. Verify CORS headers are set in `netlify.toml`
2. Check that user is authenticated in Netlify Identity
3. Try logging out and back in
4. Check browser console for specific error messages

## Configuration Files

### `/public/admin/config.yml`
This is your CMS configuration file. Key settings:
- `backend: git-gateway` - Uses Git Gateway for GitHub access
- `branch: main` - Which branch to commit to
- `collections` - Define your content types

### `/public/admin/index.html`
This loads the CMS interface. It includes:
- Netlify Identity widget script
- Decap CMS script
- Identity initialization with correct API URL

### `/netlify.toml`
Netlify-specific configuration:
- Build commands
- Redirect rules
- CORS headers
- Environment variables

## Post-Setup Workflow

Once successfully logged in to the CMS:

1. **Create Content:**
   - Navigate to "Gallery" or "Testimonials"
   - Click "New Gallery" / "New Testimonial"
   - Fill in the fields
   - Upload images
   - Click "Publish"

2. **What Happens:**
   - CMS commits changes to your GitHub repository
   - Vercel detects the commit and automatically rebuilds
   - New content appears on your live site in ~2-3 minutes

3. **Content Locations:**
   - Gallery items: `content/gallery/*.md`
   - Testimonials: `content/testimonials/*.md`
   - Images: `public/uploads/`

## Testing Locally (Optional)

To test CMS locally:

1. Uncomment in `config.yml`:
   ```yaml
   local_backend: true
   ```

2. Install Decap CMS proxy:
   ```bash
   npm install -g @decaporg/decap-server
   ```

3. Run proxy in one terminal:
   ```bash
   npx decap-server
   ```

4. Run your Next.js app in another:
   ```bash
   npm run dev
   ```

5. Access CMS at `http://localhost:3000/admin/`

## Support Resources

- **Decap CMS Docs:** https://decapcms.org/docs/
- **Netlify Identity Docs:** https://docs.netlify.com/visitor-access/identity/
- **Git Gateway Docs:** https://docs.netlify.com/visitor-access/git-gateway/

## Quick Reference: Your Setup

- **Netlify Site:** https://tems-aura.netlify.app
- **CMS Admin:** https://tems-aura.netlify.app/admin/
- **GitHub Repo:** [Your repo name]
- **Vercel Site:** https://tems-aura.vercel.app (for public viewing)
- **Admin Email:** tems_aura@gmail.com

---

## 🎯 Next Steps

1. **Deploy these changes:**
   ```bash
   git add .
   git commit -m "fix: Update CMS configuration and add CORS headers"
   git push origin main
   ```

2. **Wait for Netlify to deploy** (2-3 minutes)

3. **Access CMS:** Go to `https://tems-aura.netlify.app/admin/`

4. **Login with Netlify Identity** using your invited email

5. **Start managing content!** 🎉
