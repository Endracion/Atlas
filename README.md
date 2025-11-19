# Les Entrepreneurs Atlas - RenoTheme

A professional Jekyll website for Les Entrepreneurs Atlas, a licensed general contractor in Québec, featuring the RenoTheme - a modern, responsive design inspired by construction and renovation themes.

## Features

### RenoTheme
- **Professional Design**: Clean, modern layout perfect for construction and renovation businesses
- **Responsive**: Fully responsive design that works on all devices
- **RenoTheme Components**: Header with contact info, sticky navigation, hero sections, project showcases
- **Bootstrap Grid**: Uses Bootstrap-style grid system for consistent layouts
- **Font Awesome Icons**: Integrated icon library for visual elements
- **Custom Styling**: Adapted RenoTheme CSS with company branding colors

### Site Features
- **Portfolio Collection**: Showcase construction projects with images and details
- **Services Pages**: Detailed service information with call-to-action sections
- **Contact Forms**: Professional contact forms with validation
- **Company Information**: Centralized company data in _config.yml
- **SEO Optimized**: Proper meta tags and structured data

## Theme Structure

### Layouts
- `renotheme.html` - Base RenoTheme layout with header, navigation, footer
- `renotheme-home.html` - Home page layout with hero section and services
- `renotheme-page.html` - Standard page layout
- `renotheme-project.html` - Individual project page layout

### Configuration
The theme supports configuration through `_config.yml`:

```yaml
# RenoTheme Settings
renotheme:
  style_switcher: false  # Enable/disable the style switcher
  layout_style: "wide"   # "wide" or "boxed"
  navigation_position: "sticky"  # "static" or "sticky"
  color_skin: "atlas"    # "atlas", "blue", "green", etc.
```

### Company Information
Centralized company data:

```yaml
company:
  name: "Les Entrepreneurs Atlas"
  rbq_license: "5731-6820-01"
  phone: "514-967-0145"
  email: "lesentrepreneursatlas@gmail.com"
  address: "Montréal, Québec, Canada"
  license: "Licensed General Contractor (RBQ 5731-6820-01)"
```

## Installation

1. Clone or download this repository
2. Install dependencies: `bundle install`
3. Run the development server: `bundle exec jekyll serve`
4. Visit `http://localhost:4000` to view the site

## Usage

### Creating Pages
Use the appropriate layout in your page front matter:

```yaml
---
title: "About Us"
layout: renotheme-page
subtitle: "Meet Our Team"
---
```

### Adding Projects
Create new files in the `portfolio/` directory:

```yaml
---
title: "Kitchen Renovation"
layout: renotheme-project
location: "Montréal, QC"
thumbnail: "/assets/images/project.jpg"
year: 2024
cost: "$25,000"
---
```

### Customizing Colors
The theme uses CSS custom properties. Edit `assets/css/renotheme.css` to customize colors:

```css
:root {
  --primary-color: #be2c33;    /* Company red */
  --secondary-color: #f7c51e;  /* Accent yellow */
  --text-color: #333;
  --background-color: #fff;
}
```

## File Structure

```
├── _layouts/
│   ├── renotheme.html          # Base theme layout
│   ├── renotheme-home.html     # Home page layout
│   ├── renotheme-page.html     # Standard page layout
│   └── renotheme-project.html  # Project page layout
├── _includes/
│   └── services-cta.html        # Call-to-action component
├── assets/
│   ├── css/
│   │   ├── main.css            # Original styles
│   │   └── renotheme.css       # RenoTheme styles
│   ├── fonts/                  # Font Awesome fonts
│   ├── images/
│   │   ├── renotheme/          # Theme images
│   │   └── AtlasLogo*.png      # Company logos
│   └── js/
│       └── renotheme/          # Theme JavaScript
├── portfolio/                   # Project pages
├── _config.yml                  # Site configuration
└── *.md                        # Content pages
```

## Development

### Building the Site
```bash
bundle exec jekyll build
```

### Serving Locally
```bash
bundle exec jekyll serve --host 0.0.0.0 --port 4000
```

### Adding New Features
1. Modify layouts in `_layouts/`
2. Add styles to `assets/css/renotheme.css`
3. Update configuration in `_config.yml`
4. Test changes locally

## Browser Support

- Chrome/Chromium (recommended)
- Firefox
- Safari
- Edge
- Internet Explorer 11+

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Credits

- **RenoTheme**: Adapted from the RenoTheme HTML template
- **Jekyll**: Static site generator
- **Font Awesome**: Icon library
- **Bootstrap**: CSS framework inspiration

## Support

For questions or issues with the RenoTheme, please check:
1. Jekyll documentation
2. RenoTheme documentation
3. GitHub issues

---

**Les Entrepreneurs Atlas** - Licensed General Contractor (RBQ 5731-6820-01)
Serving Montréal, Québec City, and surrounding areas.