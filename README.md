# Strapi YouTube Preview Plugin

A custom field plugin for Strapi that allows you to add YouTube video URLs to your content types with a preview functionality.

## Features

- Custom field for YouTube URLs
- TypeScript support
- Internationalization ready
- Built with Strapi Design System

## Installation

```bash
npm install strapi-plugin-youtube-preview
# or
yarn add strapi-plugin-youtube-preview
```

## Configuration

1. Add the plugin to your `config/plugins.js` file:

```javascript
module.exports = {
  'youtube-preview': {
    enabled: true,
    resolve: './src/plugins/youtube-preview'
  },
};
```

2. Build your admin panel:

```bash
npm run build
# or
yarn build
```

## Usage

1. Go to Content-Type Builder
2. Choose or create a content type
3. Add a new field
4. Select "YouTube Preview" from the Custom section
5. Configure the field settings
6. Save your content type

## Development

To contribute to this plugin:

1. Clone the repository
```bash
git clone https://github.com/yourusername/strapi-plugin-youtube-preview.git
cd strapi-plugin-youtube-preview
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Build the plugin
```bash
npm run build
# or
yarn build
```

## License

MIT License - see LICENSE file for details

## Author

Kamil Hussain
