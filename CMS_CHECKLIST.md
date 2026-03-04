# ✅ CMS Setup Checklist

Follow these steps in order. Check off each item as you complete it.

---

## Phase 1: Netlify Setup (10 minutes)

### Step 1: Create Netlify Account
- [ ] Go to https://app.netlify.com
- [ ] Sign up/login with GitHub
- [ ] Authorize Netlify to access your repos

### Step 2: Import Your Repository
- [ ] Click "Add new site" → "Import an existing project"
- [ ] Choose GitHub provider
- [ ] Select repository: `dreams331/tems-aura`
- [ ] Build settings:
  - [ ] Build command: leave empty or `echo "Auth only"`
  - [ ] Publish directory: `public`
- [ ] Click "Deploy site"
- [ ] Wait for initial deploy (doesn't matter if it fails)

### Step 3: Enable Netlify Identity
- [ ] In site dashboard, click **"Identity"** tab
- [ ] Click **"Enable Identity"** button
- [ ] Under "Registration preferences":
  - [ ] Select **"Invite only"** (recommended)
- [ ] Under "External providers" (optional):
  - [ ] Enable GitHub login if desired
- [ ] Click **"Save"**

### Step 4: Enable Git Gateway
- [ ] Still in Identity tab, scroll to **"Services"**
- [ ] Find **"Git Gateway"** section
- [ ] Click **"Enable Git Gateway"**
- [ ] Confirm it shows as "Enabled"

---

## Phase 2: Create Your Admin Account (5 minutes)

### Step 5: Invite Yourself
- [ ] In Identity tab, click **"Invite users"**
- [ ] Enter email: `tems_aura@gmail.com`
- [ ] Click "Send invitation"
- [ ] Check your email inbox

### Step 6: Accept Invitation
- [ ] Open invitation email from Netlify
- [ ] Click the invitation link
- [ ] Create a strong password
- [ ] Confirm password
- [ ] Submit

---

## Phase 3: Access CMS (2 minutes)

### Step 7: Login to Your CMS
- [ ] Go to your Vercel site URL
- [ ] Add `/admin` to the end (e.g., `https://your-site.vercel.app/admin`)
- [ ] Click **"Login with Netlify Identity"**
- [ ] Enter your email and password
- [ ] Click "Log in"

### Step 8: Verify Access
- [ ] You should see the CMS dashboard
- [ ] Check left sidebar shows:
  - [ ] Gallery
  - [ ] Testimonials
  - [ ] Site Settings
  - [ ] Blog Posts

---

## Phase 4: Test the CMS (5 minutes)

### Step 9: Add Test Content
- [ ] Click **"Gallery"** in sidebar
- [ ] Click **"New Gallery"**
- [ ] Fill in sample data:
  - [ ] Title: "Test Design"
  - [ ] Category: Choose one
  - [ ] Upload a sample image
  - [ ] Description: Add some text
  - [ ] Date: Select today
- [ ] Click **"Publish"**
- [ ] Verify it says "Entry published"

### Step 10: Check GitHub
- [ ] Go to your GitHub repo
- [ ] Check for new commit from Netlify CMS
- [ ] Verify the file appears in `content/gallery/`

### Step 11: Check Live Site
- [ ] Wait 1-2 minutes for Vercel to deploy
- [ ] Visit your live site
- [ ] Go to Gallery page
- [ ] Verify your test content appears

---

## 🎉 Success Criteria

You've successfully set up the CMS when:
- ✅ You can login at `/admin`
- ✅ You can create/edit content
- ✅ Changes appear in GitHub
- ✅ Changes deploy to your live site

---

## 🚨 Troubleshooting

### Can't find Identity tab in Netlify
- Make sure you're in the site dashboard (not team settings)
- Try refreshing the page

### Invitation email not received
- Check spam folder
- Wait 5 minutes and try again
- Use the correct email: `tems_aura@gmail.com`

### Error: "Cannot read property 'split' of undefined"
- Git Gateway is not enabled
- Go back to Step 4

### Can't access /admin page
- Clear browser cache
- Try incognito/private window
- Verify the site deployed successfully

### "Failed to load config.yml"
- Check that file exists in `public/admin/config.yml`
- Verify YAML syntax is correct
- Push latest changes to GitHub

---

## 📞 Need Help?

If stuck:
1. Read `CMS_SETUP.md` for detailed explanations
2. Check browser console (F12) for errors
3. Review Netlify Identity logs
4. Check Decap CMS docs: https://decapcms.org/docs/intro/

---

## 📋 What's Next?

Once setup is complete:
- [ ] Delete test content
- [ ] Upload real product images
- [ ] Add customer testimonials
- [ ] Update site settings
- [ ] Customize about page

See `WHATS_NEXT.md` for next steps!

---

**Last Updated:** March 4, 2026
**Project:** TEMS AURA - Luxury Fashion Designer Website
