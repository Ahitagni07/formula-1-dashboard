# 🏎️ Formula 1 Dashboard

A modern Formula 1 dashboard built with **Angular 22** and powered by the **OpenF1 API**.

The project is designed to provide an interactive view of Formula 1 data, including race information, drivers, teams, and live/near-real-time session data.

🚧 **The project is currently under active development.**

A **Tauri desktop application** version is also currently being developed to bring the dashboard from the browser to a native desktop experience.

---

## ✨ Features

### 🏁 Formula 1 Dashboard

- Formula 1 race information
- Driver information
- Team information
- Race/session data
- Live/near-real-time Formula 1 data through OpenF1
- Responsive Angular UI
- Modular Angular application structure

### 🖥️ Desktop Application

The web application is currently being integrated with **Tauri** to create a lightweight native desktop application.

The goal is to provide:

- Native desktop application
- Lightweight application footprint
- Windows desktop support
- Reuse of the existing Angular frontend
- Native capabilities through Tauri/Rust

> 🚧 Tauri integration is currently a work in progress.

---

## 🛠️ Technology Stack

### Frontend

- [Angular](https://angular.dev/)
- TypeScript
- RxJS
- HTML / CSS

### Data

- [OpenF1 API](https://openf1.org/)

OpenF1 provides free access to Formula 1 session data and timing information.

### Desktop

- [Tauri](https://tauri.app/)
- Rust

### Runtime / Server

- Node.js
- Express
- Angular SSR

---

## 🏗️ Architecture

The project currently follows an Angular-based frontend architecture.

```text
                    ┌─────────────────────┐
                    │     Formula 1       │
                    │      Dashboard      │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │      Angular 22     │
                    │     Frontend        │
                    └──────────┬──────────┘
                               │
                               │ HTTP
                               ▼
                    ┌─────────────────────┐
                    │      OpenF1 API     │
                    │                     │
                    │  F1 Session Data    │
                    │  Driver Data        │
                    │  Timing Data        │
                    │  Race Data          │
                    └─────────────────────┘


🖥️ Tauri Desktop Application

The Tauri version of the application is currently under development.

The objective is to package the existing Angular dashboard as a lightweight desktop application using:

Angular
   +
Tauri
   +
Rust