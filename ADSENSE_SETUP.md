# AdSense Setup Notes

The site is prepared for AdSense review, but three real-world details still need to be supplied by the site owner:

1. A custom domain that you own.
2. DNS records pointing that domain to GitHub Pages.
3. A real Google AdSense publisher ID.

## Domain

Do not add a live `CNAME` file until the domain is purchased and DNS is configured. A premature `CNAME` can disrupt the current GitHub Pages URL.

Recommended domain style:

- `gta6completionguide.com`
- `gta6gameguide.com`
- `gtaviwalkthrough.com`

Avoid using `official` because this is not an official Rockstar or Take-Two website.

## AdSense Code

After AdSense provides the code, replace the commented placeholder in each page head with the real script:

```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ID" crossorigin="anonymous"></script>
```

## ads.txt

Replace `ads.txt` with the exact line shown by AdSense, usually shaped like:

```text
google.com, pub-YOUR_ID, DIRECT, f08c47fec0942fa0
```
