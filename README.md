# ICT E-Portfolio — Black & Gold

## Files
- `index.html` — public portfolio
- `style.css` — responsive black-and-gold design
- `script.js` — navigation and year
- `admin.html` / `admin.js` — local-only admin dashboard demonstration
- `assets/profile.jpg` — add your profile photo here
- `assets/projects/` — replace project placeholder images with screenshots
- `assets/documents/` — add your CV, certificates and recommendation PDF files

## Before publishing
1. Replace `YOUR_EMAIL@example.com` in `index.html` with your email address. For the contact form, update the FormSubmit action URL too.
2. Put your CV at `assets/documents/cv.pdf`.
3. Put a certificate PDF at `assets/documents/certificate.pdf` or update the link to your actual file.
4. Put a recommendation PDF at `assets/documents/recommendation.pdf` or update the link.
5. Add `assets/profile.jpg`.
6. Replace the three project images with `retreat-system.jpg`, `real-estate-system.jpg`, and `eportfolio.jpg`, or update the paths in `index.html`.
7. Verify that you have permission to publish every document, screenshot, and recommendation letter.

## Free GitHub Pages hosting
1. Sign in to GitHub and create a new public repository, e.g. `ict-eportfolio`.
2. Upload the files and the `assets` folder. Keep `index.html` in the repository root.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**, choose `main` and `/ (root)`, then save.
5. Wait for the published URL shown in the Pages section.

## Contact form
The form uses FormSubmit as a no-backend option. Replace the placeholder address in its `action` attribute with your own email. The service may send a verification email before it starts forwarding submissions. Test it after deployment.

## Admin dashboard security
`admin.html` is deliberately a demo. Its passphrase (`portfolio-demo`) is in public JavaScript, and its saved draft notes remain only in the current browser. It does not update the live portfolio or provide real authentication. Do not publish confidential content or rely on this for access control. A real admin dashboard requires a backend or hosted authentication/database service, such as Supabase or Firebase, with proper access rules.
<a class="nav-admin" href="admin.html">Admin</a>