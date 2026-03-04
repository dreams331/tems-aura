# 🎯 DO THIS NOW - CMS Setup

## What You're About to Do
Set up authentication so you can manage your website content at `/admin`

**Time needed:** 15 minutes  
**Difficulty:** Easy - Just follow the steps!

---

## 📋 Step-by-Step Instructions

### STEP 1: Open Netlify (2 minutes)

1. **Go to:** https://app.netlify.com
2. **Click:** "Sign up" (or "Log in" if you have an account)
3. **Choose:** "Sign up with GitHub"
4. **Authorize:** Netlify to access your GitHub account
5. ✅ You should now be in the Netlify dashboard

---

### STEP 2: Import Your Repository (3 minutes)

1. **Click:** "Add new site" button (top right)
2. **Click:** "Import an existing project"
3. **Choose:** "Deploy with GitHub"
4. **Authorize:** Netlify (if prompted)
5. **Find and click:** `dreams331/tems-aura` repository
6. **Build settings:**
   - Site name: Leave default or type `tems-aura`
   - Branch to deploy: `main`
   - Build command: Leave EMPTY or type `echo "Auth only"`
   - Publish directory: `public`
7. **Click:** "Deploy [site-name]"
8. ✅ Wait 1 minute - deployment will complete (may show errors, that's OK!)

---

### STEP 3: Enable Identity (3 minutes)

1. **In your new Netlify site dashboard**, look at the top menu
2. **Click:** "Identity" tab
3. **Click:** Big "Enable Identity" button
4. ✅ You should see "Identity enabled" message

---

### STEP 4: Configure Identity Settings (2 minutes)

1. **Still in Identity tab**, scroll down to "Registration preferences"
2. **Click:** "Edit settings"
3. **Select:** "Invite only" (recommended for security)
4. **Click:** "Save"
5. ✅ Should show "Invite only" under Registration

---

### STEP 5: Enable Git Gateway (2 minutes)

1. **Still in Identity tab**, scroll to "Services" section
2. **Find:** "Git Gateway" 
3. **Click:** "Enable Git Gateway" button
4. **Confirm:** if prompted
5. ✅ Should show "Git Gateway: Enabled"

---

### STEP 6: Invite Yourself (2 minutes)

1. **Still in Identity tab**, click "Invite users" button
2. **Enter email:** `tems_aura@gmail.com`
3. **Click:** "Send"
4. **Check your email** (tems_aura@gmail.com inbox)
5. **Open:** Invitation email from Netlify
6. **Click:** The invitation link in the email
7. **Set a password:** Choose a strong password
8. **Confirm password**
9. **Click:** "Accept the invite" or "Sign up"
10. ✅ You should see "Account created" or similar message

---

### STEP 7: Login to Your CMS (1 minute)

1. **Go to your Vercel site:** `https://[your-vercel-url].vercel.app/admin`
   - (Find your URL in your Vercel dashboard if you don't have it)
2. **You should see:** Decap CMS login page
3. **Click:** "Login with Netlify Identity"
4. **Enter:**
   - Email: `tems_aura@gmail.com`
   - Password: [the password you just created]
5. **Click:** "Log in"
6. ✅ You should see the CMS dashboard!

---

### STEP 8: Test It! (2 minutes)

1. **In the CMS**, click "Gallery" in the left sidebar
2. **Click:** "New Gallery" button
3. **Fill in:**
   - Title: "Test Design"
   - Category: Pick any
   - Click "Choose an image" and upload any photo from your computer
   - Description: "This is a test"
   - Date: Select today's date
4. **Click:** "Publish" (top right)
5. **Wait 1-2 minutes**
6. **Go to:** Your live site gallery page
7. ✅ Your test image should appear!

---

## 🎉 Success!

If you can see your test content on the live site, **YOU'RE DONE!**

You can now:
- Delete the test content
- Upload real gallery images
- Add testimonials
- Update site settings
- Manage all your content!

---

## 🆘 Problems?

### "Can't find Identity tab"
- Make sure you're in the site dashboard (not team settings)
- Refresh the page

### "Invitation email not received"
- Check spam/junk folder
- Wait 5 minutes
- Try resending from Netlify

### "Login button doesn't appear at /admin"
- Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Try incognito mode
- Clear browser cache

### "Can't save content"
- Verify Git Gateway is enabled (Step 5)
- Log out and back in
- Check browser console (F12) for errors

### Still stuck?
See `CMS_TROUBLESHOOTING.md` for more help!

---

## 📧 Your Credentials

**CMS URL:** `https://[your-vercel-site].vercel.app/admin`  
**Email:** `tems_aura@gmail.com`  
**Password:** [What you set in Step 6]

---

**Ready? Start with Step 1! Go to https://app.netlify.com now! 🚀**
