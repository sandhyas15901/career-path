# Learnify Cyberpunk Theme Guide

Learnify currently renders through a React SPA in `src` with Django serving the API from `backend`. There is no server-rendered Django `base.html` in this repo today, so the practical equivalents are:

- `src/index.css` as the shared global theme layer instead of `base.css`
- `src/components/ui/AppShell.tsx` as the reusable layout shell instead of `base.html`

If you later move parts of the LMS to Django templates, keep the same tokens and class names so both stacks stay visually aligned.

## 1. Global CSS Variables

Core login-page tokens now live in `src/index.css` under `:root`:

- Backgrounds: `--bg`, `--bg-soft`, `--bg-elevated`
- Glass surfaces: `--surface`, `--surface-strong`, `--surface-soft`
- Typography: `--text`, `--text-muted`, `--text-soft`
- Neon accents: `--accent`, `--accent-2`, `--accent-3`
- State colors: `--accent-success`, `--accent-danger`
- Borders and effects: `--border`, `--border-strong`, `--shadow-lg`, `--shadow-glow`, `--blur`, `--blur-strong`
- Fonts: `--font-sans`, `--font-display`

These tokens are already wired into shared utility classes such as:

- Shell and layout: `theme-shell`, `page-shell`, `cyber-navbar`, `cyber-main`, `cyber-footer`
- Cards and glass: `cyber-card`, `cyber-card-strong`, `cyber-panel`, `glass`, `glass-strong`
- Text: `page-kicker`, `page-title`, `page-subtitle`, `cyber-section-title`
- Forms: `cyber-label`, `cyber-field`, `cyber-select`, `cyber-textarea`
- Actions: `cyber-btn`, `cyber-btn-primary`, `cyber-btn-secondary`
- Status and chips: `cyber-chip`, `cyber-empty`, `cyber-alert`, `cyber-alert-success`, `cyber-alert-error`

## 2. Master Template Equivalent

The reusable shell is now in `src/components/ui/AppShell.tsx`. This is the React equivalent of a Django `base.html` and gives each screen:

- A glassmorphism top bar
- Standard page title and subtitle treatment
- A consistent Learnify brand block
- A footer that keeps the cyberpunk theme present across screens

Usage:

```tsx
<AppShell
  kicker="Learnify Dashboard"
  title="Course Catalog"
  subtitle="Browse and manage courses inside the shared cyberpunk shell."
  onBack={() => setScreen('home')}
>
  <div className="cyber-card">...</div>
</AppShell>
```

If you later need a real Django `base.html`, mirror the same structure:

```html
<body class="theme-shell">
  <div class="page-shell">
    <header class="cyber-navbar">...</header>
    <main class="cyber-main">
      {% block content %}{% endblock %}
    </main>
    <footer class="cyber-footer">...</footer>
  </div>
</body>
```

## 3. Component Standardization Guide

Use these classes for all new LMS UI work:

- Primary button: `cyber-btn cyber-btn-primary`
- Secondary button: `cyber-btn cyber-btn-secondary`
- Standard text input: `cyber-field`
- Standard dropdown: `cyber-select`
- Standard textarea: `cyber-textarea`
- Field label: `cyber-label`
- Default card: `cyber-card`
- Emphasized hero or summary card: `cyber-card-strong`
- Dark content block: `cyber-panel`
- Empty tag container: `cyber-empty`
- Selected pill or metadata chip: `cyber-chip`
- Inline status message: `cyber-alert cyber-alert-success`
- Inline error message: `cyber-alert cyber-alert-error`
- Full-page shell: `theme-shell > page-shell`

## 4. Refactoring Instructions

Use this sequence for each screen you migrate:

1. Remove page-level hardcoded background colors like `bg-[#0d0d1a]`, repeated blob divs, and duplicate glass wrappers if the page will sit inside `AppShell`.
2. Replace one-off header sections with `AppShell` so the navbar, title, and footer stop being reinvented per page.
3. Replace repeated inline form classes like `bg-white/10 backdrop-blur-md border border-white/20 rounded-xl ...` with `cyber-field`, `cyber-select`, and `cyber-textarea`.
4. Replace custom button gradients with `Button` plus the shared variants, or use `cyber-btn cyber-btn-primary` directly.
5. Convert course cards, dashboard tiles, and profile panels to `cyber-card` or `cyber-card-strong`.
6. Keep only layout-specific Tailwind utilities on each page, such as grid, spacing, width, and responsive breakpoints.
7. After the page looks correct, delete any now-unused custom CSS tied only to that page.

Suggested order in this repo:

1. `src/screens/ProfileScreen.tsx` and `src/components/StudentProfileForm.tsx`
2. `src/screens/HomeScreen.tsx`
3. `src/screens/CareerDashboard.tsx`
4. High-volume content screens such as `src/screens/SoftwareAppDevelopmentScreen.tsx` and related catalog screens

When adapting the Django-style pages you mentioned conceptually:

- `course_list.html`: replace local card/button styles with `cyber-card` and `cyber-btn-primary`
- `profile.html`: map every form control to `cyber-field`, `cyber-select`, and `cyber-textarea`
- `study_room.html`: wrap the page in the shared shell and use `cyber-panel` for live session sections

## Recommended Migration Rule

Every screen should keep only two categories of page-local classes:

- Layout classes: grid, flex, spacing, width, responsive behavior
- Unique visual exceptions: one-off hero gradients or domain-specific chart colors

Everything else should come from the shared cyberpunk design system.
