# EduPulse — Professional School Management & Education Portal

> **Phase 1 Complete:** Public-facing website, dynamic multi-page navigation, role-based login gateway, student registration system, and portal architecture.

---

## 🚀 Overview

**EduPulse** is a modern, premium, fully responsive educational management platform designed to unify school administration, faculty productivity, student achievement, and parental transparency.

This initial release implements **Phase 1: Public Web Portal, Navigation & Authentication Architecture**.

---

## 🛠️ Tech Stack

- **Framework:** [React.js 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Routing:** [React Router DOM v6](https://reactrouter.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:** Plus Jakarta Sans & Inter
- **Architecture:** Modular, component-driven, responsive (Mobile, Tablet, Laptop, Desktop)

---

## 🌐 Routes & Completed Pages

| Route | Page | Purpose |
| :--- | :--- | :--- |
| `/` | **Home Page** | Premium landing with Hero, Dashboard Mockup, Benefits, Key Features, Portal Showcase, Why Choose Us, Demo Stats, Testimonials, FAQs, and CTA. |
| `/about` | **About Us** | Platform story, Mission, Vision, 4 Strategic Objectives, and Persona-specific value propositions. |
| `/features` | **Features Directory** | Complete breakdown of all 24 core platform features organized across 5 roles with search and filter. |
| `/contact` | **Contact Us** | Validated inquiry form, placeholder campus contact info, operating hours, and dedicated onboarding FAQ. |
| `/login` | **Role Selection** | Interactive gateway to choose between Student, Teacher, Admin, and Super Admin logins. |
| `/login/student` | **Student Login** | Student ID / Email authentication form with password toggle, remember me, forgot password, and autofill helper. |
| `/login/teacher` | **Teacher Login** | Faculty credential gateway with administrative provisioning notice. |
| `/login/admin` | **Admin Login** | Institutional administrator access portal with security governance notes. |
| `/login/super-admin`| **Super Admin Login** | Enterprise group & multi-campus governance access. |
| `/signup` | **Student Registration** | 10-field student enrollment form with validation, password strength meter, and guardian verification. |
| `/portal-preview` | **Student Portal Preview** | Interactive architecture for Section A (Student Workspace) and Section B (Parent Workspace). |
| `/privacy` | **Privacy Policy** | Student record privacy, data retention policies, and institutional custody. |
| `/terms` | **Terms of Service** | Acceptable educational use, credential confidentiality, and governance standards. |
| `*` | **404 Not Found** | Helpful fallback page with quick navigation links. |

---

## 📁 Project Folder Structure

```
school-management/
├── index.html                     # Entry HTML with fonts and educational favicon
├── package.json                   # Dependencies and build scripts
├── postcss.config.js              # PostCSS plugins
├── tailwind.config.js             # Custom theme colors, fonts, shadows
├── vite.config.js                 # Vite build and dev server config
├── src/
│   ├── main.jsx                   # React root mount with BrowserRouter
│   ├── App.jsx                    # Core route definitions & sticky layout
│   ├── assets/                    # Static media assets
│   ├── styles/
│   │   └── index.css              # Tailwind base, components, scrollbar styles
│   ├── data/
│   │   ├── navigation.js          # Main navbar links & role login configurations
│   │   ├── featuresData.js        # 24 core platform features with tags & highlights
│   │   ├── statsData.js           # Demo stats & platform benefits
│   │   ├── testimonialsData.js    # Community reviews & Why Choose Us data
│   │   └── faqData.js             # FAQs for Home and Contact pages
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.jsx         # Sticky header with active highlight & mobile drawer
│   │   │   ├── Footer.jsx         # 5-column institutional footer with quick links
│   │   │   ├── Button.jsx         # Reusable button with variants, sizes, and states
│   │   │   ├── Badge.jsx          # Color-coded status badges
│   │   │   └── ScrollToTop.jsx    # Resets scroll position on route transitions
│   │   └── home/
│   │       ├── HeroSection.jsx    # Main headline & CTA buttons
│   │       ├── DashboardMockup.jsx# Interactive preview illustration (Student/Admin)
│   │       ├── BenefitsSection.jsx# 6 core platform advantages
│   │       ├── PortalShowcase.jsx # Student/Parent vs. Teacher/Admin spotlight
│   │       ├── KeyFeaturesSection.jsx # Tabbed role feature matrix
│   │       ├── WhyChooseUs.jsx    # Value proposition cards
│   │       ├── StatsSection.jsx   # Marked demo figures & scale metrics
│   │       ├── TestimonialsSection.jsx # Sample community feedback
│   │       ├── FaqSection.jsx     # Smooth accordion drawer
│   │       └── CtaSection.jsx     # High-conversion bottom banner
│   └── pages/
│       ├── HomePage.jsx           # Aggregated landing page
│       ├── AboutPage.jsx          # Mission, Vision, and Objectives
│       ├── FeaturesPage.jsx       # Searchable and filterable feature catalog
│       ├── ContactPage.jsx        # Validated contact form & desk contacts
│       ├── LoginPage.jsx          # 4-role selection screen
│       ├── RoleLoginPage.jsx      # Individual role login forms (/login/:role)
│       ├── SignupPage.jsx         # Student enrollment form with validation
│       ├── PortalPreviewPage.jsx  # Student & Parent portal architecture
│       ├── PrivacyPage.jsx        # Institutional data policy
│       ├── TermsPage.jsx          # Platform usage terms
│       └── NotFoundPage.jsx       # 404 handler
```

---

## 🔒 Security Architecture (Phase 1 Ready)

1. **Role-Based Access Control (RBAC):** Prepared routes and layout hierarchy separating Students, Parents, Teachers, School Admins, and Super Admins.
2. **Restricted Administrative Self-Registration:** Public self-signup is strictly limited to Students (`/signup`). Faculty, Admin, and Super Admin accounts must be provisioned via verified registrar workflows.
3. **No Hardcoded Secrets or Passwords:** Form inputs are handled through controlled state, with zero hardcoded API keys or plaintext credentials exposed.
4. **Input Validation:** Strict client-side validation enforces character lengths, email formatting, phone numbers, password complexity, and confirmation checks.

---

## 💻 How to Run the Website Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm or yarn

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open your browser and navigate to:
```
http://localhost:3000
```

### 3. Build for Production
```bash
npm run build
```

### 4. Preview the Production Build
```bash
npm run preview
```
