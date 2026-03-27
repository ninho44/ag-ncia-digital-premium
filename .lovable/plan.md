

## Plan: Update Portfolio references section

**Only file changed:** `src/pages/Portfolio.tsx`

### Changes

1. **Add `SitePreview` component** (lines 84-98 area) — new component with fake browser bar + scaled iframe, replacing `IconThumb`

2. **Update `references` data** (lines 33-61) — add `url` field to each reference, remove `icon` field:
   - advocacia: `https://roaring-marshmallow-9415c8.netlify.app/`
   - app-saas: `https://landingpagepadraoo.netlify.app/`
   - em-breve: `https://beautiful-bubblegum-25efe2.netlify.app/`

3. **Replace `<IconThumb>` with `<SitePreview>`** in the references map (line 212)

4. **Replace single button with two buttons** for non-locked cards (lines 229-241):
   - "Ver site" — gold outlined `<a>` with `ExternalLink` icon, opens in new tab
   - "Quero algo assim →" — existing outline `Button` linking to `/contato`
   - Card 3 (locked): keep lock icon only

5. **Clean up imports** — remove `Scale`, `Smartphone` from lucide imports (no longer needed). Keep `ExternalLink`, `Lock`, `Construction`.

### What stays untouched
- Projetos section (PrimeDPO, Octo Finance)
- All other pages, components, global styles
- Badge text, titles, descriptions, card layout, colors

