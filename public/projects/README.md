# Project cover screenshots

Drop a screenshot for each project here using these exact names — both the
project card and the detail page already point at these paths:

- `notary-office-company-profile.png`
- `hospital-inpatient-disease-analysis.png`
- `sukoharjo-economic-housing-affordability.png`
- `personal-portfolio-v1.png`
- `kampung-batik.png`
- `icareli-conference-website.png`
- `e-library-ui-ux-design.png`
- `olt-battery-monitoring-dashboard.png`

Until a file exists, that project shows a branded placeholder instead of a
broken image — nothing breaks if you leave one out.

## Source Code / Live Demo buttons

Those buttons only appear when you set a URL. In `data/profile.ts`, add to
any project:

```ts
sourceCodeUrl: "https://github.com/your-username/your-repo",
liveDemoUrl: "https://your-deployed-url.com",
```

Left unset (as they are now), the button row is hidden entirely — no dead
links.
