# ⚡ Quick CMS Login Fix

## The Problem
You're getting "Unable to access identity settings" when trying to login to the CMS.

## The Solution (Most Likely)

### 🎯 USE THE CORRECT URL!

**Access your CMS here:**
```
https://tems-aura.netlify.app/admin/
```

**NOT here:**
```
https://tems-aura.vercel.app/admin/  ❌
```

### Why?
- Netlify Identity only works on the Netlify domain
- Cross-origin access causes security errors
- Vercel is for your public site, Netlify is for CMS admin

---

## Step-by-Step Login Process

1. **Go to:** `https://tems-aura.netlify.app/admin/`

2. **Click:** "Login with Netlify Identity"

3. **If you haven't set a password yet:**
   - Check your email for Netlify invitation
   - Click "Accept invitation" 
   - Set your password
   - Return to `https://tems-aura.netlify.app/admin/`

4. **Enter your credentials:**
   - Email: `tems_aura@gmail.com`
   - Password: (the one you just set)

5. **Success!** You should see the CMS dashboard

---

## Still Not Working?

### Checklist:

- [ ] Are you using `https://tems-aura.netlify.app/admin/`? (Not Vercel URL?)
- [ ] Have you accepted the Netlify Identity invitation email?
- [ ] Have you set a password?
- [ ] Have you tried clearing browser cache/cookies?
- [ ] Have you tried incognito/private browsing mode?
- [ ] Has Netlify finished deploying? (Check Netlify dashboard)

### Verify in Netlify Dashboard:

1. Log into Netlify (https://app.netlify.com)
2. Go to your site: `tems-aura`
3. Click **Identity** tab
4. Verify:
   - [ ] Identity is enabled (green toggle)
   - [ ] Your email is listed under "Users"
   - [ ] User status shows as "Confirmed" (not "Invited")
5. Click **Site Settings** → **Identity** → **Services**
6. Verify:
   - [ ] Git Gateway is enabled
   - [ ] GitHub is connected

### If User Status is Still "Invited":

1. Check spam/junk folder for invitation email
2. Or manually confirm the user:
   - In Netlify Identity tab
   - Click on the user
   - Click "Send recovery email"
   - Use that to set password

---

## After Successful Login

Once logged in, you can:
- ✅ Create new gallery items
- ✅ Add testimonials
- ✅ Upload images
- ✅ Publish content (auto-commits to GitHub)
- ✅ See changes live on Vercel site in ~2-3 minutes

---

## Need More Help?

See the full guide: `CMS_SETUP_GUIDE.md`
