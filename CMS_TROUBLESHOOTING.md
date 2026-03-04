# 🔧 CMS Troubleshooting Guide

Common issues and solutions for Decap CMS setup.

---

## Authentication Issues

### Problem: "Login with Netlify Identity" button doesn't appear

**Possible Causes:**
- Netlify Identity widget not loaded
- JavaScript errors blocking the widget

**Solutions:**
1. Check browser console (F12) for JavaScript errors
2. Verify `/admin/index.html` exists and has the identity script:
   ```html
   <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
   ```
3. Clear browser cache and reload
4. Try incognito/private browsing mode

---

### Problem: "Cannot read property 'split' of undefined"

**Cause:** Git Gateway not properly enabled

**Solutions:**
1. Go to Netlify site → Identity tab
2. Scroll to "Services" section
3. Click "Enable Git Gateway"
4. Refresh CMS page after 1 minute

---

### Problem: Invitation email not received

**Solutions:**
1. Check spam/junk folder
2. Verify email address is correct: `tems_aura@gmail.com`
3. Wait 5-10 minutes (email can be delayed)
4. Try resending invitation from Netlify dashboard
5. Check Netlify Identity logs for delivery issues

---

### Problem: "User not found" or "Invalid credentials"

**Solutions:**
1. Verify you accepted the invitation email
2. Use the password you set during invitation acceptance
3. Try "Forgot password" link
4. Check that you're using the correct email
5. Verify Netlify Identity is enabled

---

## Content Management Issues

### Problem: "Failed to load config.yml"

**Possible Causes:**
- File missing or in wrong location
- YAML syntax error
- Not deployed to Vercel

**Solutions:**
1. Verify file exists at `public/admin/config.yml`
2. Check YAML syntax (use a validator)
3. Ensure file is committed to GitHub
4. Check Vercel deployment logs
5. Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

---

### Problem: Can't save/publish content

**Possible Causes:**
- Git Gateway not enabled
- GitHub permissions issue
- Network error

**Solutions:**
1. Check browser console for errors
2. Verify Git Gateway is enabled in Netlify
3. Check GitHub authentication is working
4. Try logging out and back in
5. Check internet connection

---

### Problem: Changes not appearing on live site

**Possible Causes:**
- Vercel deployment failed
- Cache issue
- Timing (deployment in progress)

**Solutions:**
1. Check Vercel dashboard for deployment status
2. Wait 2-3 minutes for deployment
3. Hard refresh the page (Ctrl+Shift+R)
4. Clear browser cache
5. Check GitHub for the commit
6. Verify Vercel is connected to correct branch (main)

---

### Problem: Images not uploading

**Possible Causes:**
- File size too large
- Wrong format
- Git Gateway permissions

**Solutions:**
1. Compress images (use TinyPNG, Squoosh, etc.)
2. Keep images under 5MB
3. Use supported formats: JPG, PNG, GIF, WebP
4. Check Git Gateway is enabled
5. Try uploading a smaller test image first

---

## Configuration Issues

### Problem: Collections not showing in CMS

**Possible Causes:**
- config.yml syntax error
- Collections misconfigured

**Solutions:**
1. Validate YAML syntax at yamllint.com
2. Check indentation (use spaces, not tabs)
3. Verify collection names match folder structure
4. Review config.yml against documentation
5. Check browser console for config errors

---

### Problem: Local development not working

**Cause:** Proxy server not running

**Solutions:**
1. Install decap-server: `npm install -g decap-server`
2. Run proxy: `npx decap-server` in terminal
3. Uncomment `local_backend: true` in config.yml
4. Run dev server in another terminal: `npm run dev`
5. Access at `http://localhost:3000/admin`

---

## Network Issues

### Problem: "Network request failed"

**Solutions:**
1. Check internet connection
2. Verify Netlify services are operational (status.netlify.com)
3. Check GitHub is accessible (status.github.com)
4. Disable VPN if using one
5. Try different browser
6. Clear DNS cache

---

### Problem: Slow CMS loading

**Solutions:**
1. Check internet speed
2. Close unnecessary browser tabs
3. Clear browser cache
4. Optimize images before uploading
5. Consider using local development mode

---

## GitHub Integration Issues

### Problem: "Error creating commit"

**Solutions:**
1. Verify Git Gateway is enabled
2. Check Netlify has GitHub access
3. Re-authorize in Netlify settings
4. Check GitHub repository permissions
5. Verify branch name is correct (main)

---

### Problem: Commits not showing correct author

**Explanation:** This is normal - Git Gateway commits as "Netlify CMS"

**To show your name:**
1. This is handled by Git Gateway
2. You can see the CMS user in commit metadata
3. Not critical for functionality

---

## Deployment Issues

### Problem: Vercel build failing after CMS commit

**Solutions:**
1. Check Vercel deployment logs
2. Verify JSON/YAML files are valid
3. Test build locally: `npm run build`
4. Check for TypeScript errors
5. Review recent commits for issues

---

## Browser-Specific Issues

### Problem: CMS not loading in Safari

**Solutions:**
1. Enable JavaScript
2. Clear cache and cookies
3. Disable content blockers
4. Try Chrome or Firefox instead
5. Update Safari to latest version

---

### Problem: CMS not loading in Firefox

**Solutions:**
1. Disable Enhanced Tracking Protection for site
2. Clear cache
3. Check privacy settings
4. Try incognito mode

---

## Quick Diagnostic Steps

When something isn't working:

1. **Check Browser Console** (F12 → Console tab)
   - Look for red error messages
   - Note any 404 or 500 errors

2. **Verify Netlify Services**
   - Identity: Enabled?
   - Git Gateway: Enabled?
   - User invited and confirmed?

3. **Check GitHub**
   - Repository accessible?
   - Correct branch (main)?
   - Recent commits showing?

4. **Verify Vercel**
   - Latest deployment successful?
   - Correct branch connected?
   - Build logs clean?

5. **Test Fresh Session**
   - Log out completely
   - Clear cache/cookies
   - Try incognito mode
   - Log back in

---

## Still Stuck?

### Resources:
- 📖 Decap CMS Docs: https://decapcms.org/docs/intro/
- 📖 Netlify Identity Docs: https://docs.netlify.com/visitor-access/identity/
- 💬 Decap CMS Community: https://github.com/decaporg/decap-cms/discussions

### Before Asking for Help:
1. ✅ Read this entire guide
2. ✅ Check browser console for errors
3. ✅ Verify all setup steps completed
4. ✅ Note exact error message
5. ✅ Document steps to reproduce

### Getting Support:
- Include error messages (screenshots)
- Share browser/OS information
- Describe what you were trying to do
- Note when the issue started

---

**Remember:** Most issues are configuration-related and can be fixed by carefully reviewing the setup steps!

---

**Last Updated:** March 4, 2026  
**Project:** TEMS AURA - Luxury Fashion Designer Website
