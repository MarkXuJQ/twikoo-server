# Twikoo Server

A Vercel-deployed Twikoo comment system server with Web Analytics integration.

## Features

- Twikoo comment system API endpoint
- Vercel Web Analytics integration
- Simple landing page

## API Endpoint

The Twikoo API is available at `/api/twikko`

## Web Analytics

This project includes Vercel Web Analytics integration. To enable analytics:

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Click the **Analytics** tab
4. Click **Enable** to activate Web Analytics

Once enabled, the analytics script will automatically track page views on the landing page via the `/_vercel/insights/*` routes.

### Analytics Implementation

The landing page (`public/index.html`) includes the Web Analytics script using the HTML implementation method:

```html
<script>
    window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
</script>
<script defer src="/_vercel/insights/script.js"></script>
```

This lightweight implementation requires no additional dependencies for the frontend and will start tracking visitors automatically once Web Analytics is enabled in the Vercel dashboard.

## Deployment

Deploy to Vercel:

```bash
npm run deploy
```

Or connect your Git repository to Vercel for automatic deployments.

## Development

Run locally with Vercel CLI:

```bash
npm run dev
```

## Project Structure

```
.
├── api/
│   └── twikko.js       # Twikoo server API endpoint
├── public/
│   └── index.html      # Landing page with Web Analytics
├── package.json        # Project dependencies
├── vercel.json         # Vercel configuration
└── README.md           # This file
```

## Dependencies

- `tkserver`: Twikoo server implementation
- `@vercel/analytics`: Vercel Web Analytics package (available for future enhancements)

## Learn More

- [Twikoo Documentation](https://twikoo.js.org/)
- [Vercel Web Analytics Documentation](https://vercel.com/docs/analytics)
