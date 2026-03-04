# 🌸 TEMS AURA - Quick Start Guide

Welcome to your beautiful new luxury fashion website! Follow these simple steps to get started.

## ⚡ Quick Setup (5 minutes)

### 1. Start Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see your website! 🎉

### 2. Explore Your Website

Visit these pages:
- **Homepage**: `/` - Beautiful hero, featured designs, testimonials
- **Gallery**: `/gallery` - Filterable design gallery
- **Custom Order**: `/custom-order` - Complete measurement form
- **About**: `/about` - Brand story
- **CMS Admin**: `/admin` - Content management (requires setup)

## 🎨 Customization Checklist

### ✅ Replace Placeholder Images
Current placeholders show colored gradients. Replace with:
- Hero image: Beautiful fashion photoshoot
- Gallery images: Your actual designs
- About page image: Studio or designer photo

Images should be:
- High quality (at least 1200px width)
- Optimized (use [TinyPNG](https://tinypng.com/))
- Soft luxury aesthetic (blush, nude, gold tones)

### ✅ Update Contact Information
Edit in `/content/settings/contact.json` or via CMS:
```json
{
  "email": "your@email.com",
  "phone": "+44 YOUR NUMBER",
  "instagram": "https://instagram.com/your_handle"
}
```

### ✅ Add Real Content
1. Open `/admin` (after Netlify deployment)
2. Add gallery images
3. Add client testimonials
4. Update about page story

## 🚀 Deploy to Netlify (10 minutes)

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Initial setup"
git push origin main
```

### Step 2: Connect to Netlify
1. Go to [netlify.com](https://netlify.com) (sign up free)
2. Click "Add new site" → "Import from Git"
3. Choose your `tems-aura` repository
4. Click "Deploy" (settings auto-detected!)

### Step 3: Enable CMS
1. In Netlify dashboard → "Identity" → "Enable Identity"
2. Change to "Invite only"
3. Invite yourself: `tems_aura@gmail.com`
4. Check email and set password
5. Access CMS at: `your-site.netlify.app/admin`

### Step 4: Enable Forms
- Automatically enabled!
- Check "Forms" tab in Netlify
- Set up email notifications

## 📝 Daily Workflow

### Adding New Designs
1. Take professional photos of your work
2. Optimize images
3. Go to `/admin` → Gallery → New Gallery Item
4. Upload, categorize, publish!
5. Mark as "Featured" for social promotion

### Managing Orders
- Orders submitted via `/custom-order` form
- You receive email notifications
- Follow up directly with clients
- All their measurements are in the email

### Updating Content
- Login to `/admin`
- Edit any content without coding
- Changes go live immediately

## 🎯 Test Everything

### ✅ Test Custom Order Form
1. Visit `/custom-order`
2. Fill in all fields
3. Upload test images
4. Submit
5. Check your email

### ✅ Test Gallery
1. Add a test design via CMS
2. View on gallery page
3. Click to expand
4. Test social share buttons

### ✅ Test Mobile Responsiveness
- Open site on phone
- Check all pages
- Test navigation menu
- Try submitting forms

## 🎨 Brand Assets

### Logo Usage
The "TEMS AURA" text appears in:
- Navigation (top)
- Footer
- Various pages

It uses gradient colors automatically:
- Blush pink → Gold

### Color Palette
```
Blush Pink:   #F4C2C2, #FFE5E5
Nude Beige:   #F5E6D3
Soft Gold:    #D4AF37, #FFD700
Gold Accent:  #F4E4C1
```

### Typography
- **Logo**: Playfair Display Italic (bold)
- **Headings**: Playfair Display
- **Body text**: Inter

## 🆘 Need Help?

### Common Issues

**"npm run dev" doesn't work**
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
npm run dev
```

**Changes not showing**
- Hard refresh: `Cmd/Ctrl + Shift + R`
- Clear browser cache
- Check you saved the file!

**Build fails on Netlify**
- Test locally first: `npm run build`
- Check build logs in Netlify
- Verify all files committed to Git

### Getting Support
- Email: tems_aura@gmail.com
- Check `DEPLOYMENT.md` for detailed guides
- Read `README.md` for full documentation

## 🎉 You're All Set!

Your luxury fashion website is ready to:
- Accept custom orders with detailed measurements
- Showcase your beautiful designs
- Connect with clients remotely
- Manage everything via easy CMS

**Start creating magic! ✨**

---

<div align="center">
  <p><strong>TEMS AURA</strong></p>
  <p>Soft Luxury. Custom Made For You.</p>
  <p>💕</p>
</div>
