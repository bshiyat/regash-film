# Adding Instagram Images to Regash Portfolio

## Step 1: Download Images from Instagram

Go to https://www.instagram.com/regash.personal/ and save images for each project:

### Suggested Downloads:
- **Balad Documentary** - Stand-up comedy performance shots
- **False Awakening** - Dance performance images  
- **Four Phases of Fear** - Dance collaboration photos
- **Freedom Bus Film** - Theatre/documentary shots
- **Palestine Circus** - Circus performance images
- **200 Meters Film** - Behind-the-scenes or poster image

## Step 2: Organize Images

Create folders and add images:
```bash
mkdir -p public/images/projects
mkdir -p public/images/hero
```

Copy your downloaded images:
- Hero background: `public/images/hero/background.jpg`
- Project thumbnails: `public/images/projects/project-name.jpg`

## Step 3: Update Code

Edit: `client/src/lib/projects.ts`

Replace Unsplash URLs with your images:

```typescript
{
  id: '1',
  title: 'Balad - Palestine Comedy Club Documentary',
  // OLD: thumbnail: 'https://images.unsplash.com/photo-...',
  thumbnail: '/images/projects/balad-comedy.jpg',  // NEW
  // ... rest stays same
}
```

## Step 4: Update Hero Background

Edit: `client/src/components/Hero.tsx`

Line 10-11, replace:
```typescript
// OLD:
src="https://images.unsplash.com/photo-1485846234645..."

// NEW:
src="/images/hero/background.jpg"
```

## Step 5: Rebuild

```bash
npm run dev
```

Your Instagram images will now appear throughout the site!

---

## Alternative: Use Instagram Embed (No Download)

For the Hero or About section, you can embed Instagram posts:

```tsx
<iframe 
  src="https://www.instagram.com/p/POST_ID/embed"
  width="400" 
  height="480"
  frameBorder="0"
></iframe>
```

Get POST_ID from the Instagram URL (e.g., instagram.com/p/**CxYz123**/)
