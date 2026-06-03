<div align="center">
  <h1 align="center">Edson Edwin Ninan – Cyber-Minimalist Portfolio</h1>
  <p align="center">
    A high-fidelity, interactive 3D web portfolio demonstrating advanced frontend engineering, physics-based UI, and robust backend integrations.
  </p>
  <p align="center">
    <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Three.js-black?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  </p>
</div>

## ✨ Key Features

* **Physics-Based 3D Hero (`@react-three/fiber` & `rapier`)**
  * Features a fully interactive, physics-driven 3D ID badge (lanyard) that responds to mouse interactions and gravity.
  * Complex mesh line generation and custom dual-texture mapping for photorealistic rendering.
* **Cinematic Scroll Animations (`GSAP` & HTML5 Canvas)**
  * Smooth, high-performance image sequence scrubbing mapped perfectly to scroll progression via GSAP ScrollTrigger.
* **Cyber-Minimalist Aesthetics**
  * Custom `PixelCard` modals with dynamic canvas-based pixel shimmer effects that trigger sequentially on interaction.
  * Glassmorphic navigation, sleek typography, and fluid `framer-motion` layout transitions.
* **Integrated API System**
  * Built-in serverless endpoint (`/api/contact`) for processing project inquiries securely without exposing credentials.

## 🛠 Tech Stack

**Frontend Architecture:**
- [Next.js (App Router)](https://nextjs.org/)
- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

**3D & Animations:**
- [Three.js](https://threejs.org/)
- [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/) & [@react-three/drei](https://github.com/pmndrs/drei)
- [@react-three/rapier](https://github.com/pmndrs/react-three-rapier) (Physics Engine)
- [Framer Motion](https://www.framer.com/motion/)
- [GSAP](https://gsap.com/) (ScrollTrigger)

## 🚀 Getting Started

### Prerequisites
Make sure you have **Node.js 18.17+** installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Edson-Edwin/Portfolio_Edson.git
   cd Portfolio_Edson
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Setup environment variables:
   Create a `.env.local` file in the root directory and add your email configuration for the contact form:
   ```env
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASSWORD=your_app_specific_password
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the portfolio.

## 📁 Project Structure highlights

* `src/components/Lanyard.tsx`: The complex 3D physics badge implementation.
* `src/components/CanvasScroll.tsx`: The high-performance GSAP image sequence scrubber.
* `src/components/PixelCard.tsx`: The canvas-based interactive pixel dispersion effect.
* `src/components/StartProjectModal.tsx`: The beautifully choreographed neon popup form.
* `src/app/api/contact/route.ts`: The secure backend mailer service.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---
<div align="center">
  <i>Designed & Engineered by Edson Edwin Ninan</i>
</div>
