# 🏎️ Formula 1 Dashboard

A modern Formula 1 dashboard built with **Angular 22**, powered by the **OpenF1 API**, and packaged as a lightweight desktop application using **Tauri 2 + Rust**.

The project started as a web-based Angular application and was extended into a desktop application using Tauri.

---

## ✨ Features

### 🏁 Formula 1 Dashboard

- Formula 1 race information
- Driver information
- Team information
- Race and session data
- Live / near-real-time Formula 1 data through OpenF1
- Responsive Angular UI
- Modular Angular application structure
- TypeScript-based frontend

### 🖥️ Desktop Application

The Angular application is packaged as a desktop application using **Tauri 2**.

The desktop version provides:

- Lightweight native desktop application
- Existing Angular frontend running inside Tauri
- Windows desktop support
- Rust-based native backend
- Access to native desktop capabilities through Tauri
- Reuse of the same Angular codebase

---

# 🛠️ Technology Stack

## Frontend

- Angular 22
- TypeScript
- RxJS
- HTML
- CSS

## Formula 1 Data

- OpenF1 API

OpenF1 provides access to Formula 1 session data, timing information, drivers, teams, and race-related information.

## Desktop

- Tauri 2
- Rust
- WebView

## Runtime / Development

- Node.js
- npm
- Angular CLI

---

# 🏗️ Architecture

The project consists of two main parts.

### Web Application

```text
                    Formula 1 Dashboard
                            │
                            ▼
                    ┌───────────────┐
                    │   Angular 22  │
                    │   Frontend    │
                    └───────┬───────┘
                            │
                            │ HTTP
                            ▼
                    ┌───────────────┐
                    │   OpenF1 API  │
                    │               │
                    │ Session Data  │
                    │ Driver Data   │
                    │ Timing Data   │
                    │ Race Data     │
                    └───────────────┘
```

### Desktop Application

```text
                    ┌──────────────────────┐
                    │  Formula 1 Dashboard │
                    │                      │
                    │      Angular 22      │
                    └──────────┬───────────┘
                               │
                               │ WebView
                               ▼
                    ┌──────────────────────┐
                    │       Tauri 2        │
                    │                      │
                    │        Rust          │
                    └──────────┬───────────┘
                               │
                               ▼
                    Native Desktop Window
```

The Angular application remains responsible for the user interface and web application logic, while Tauri provides the native desktop application environment and Rust backend.

---

# 🚀 Getting Started

## Prerequisites

Before running the project, make sure the following are installed:

- Node.js
- npm
- Angular CLI
- Rust
- Cargo
- Microsoft C++ Build Tools (Windows)
- WebView2 (Windows)

Tauri requires Rust and the appropriate platform development tools to build the native application.

For complete Tauri prerequisites, see:

https://v2.tauri.app/start/prerequisites/

---

# 1️⃣ Angular Application Setup

The project was initially created as an Angular application.

Install Angular CLI:

```bash
npm install -g @angular/cli
```

Create a new Angular application:

```bash
ng new formula-1-dashboard
```

Navigate into the project:

```bash
cd formula-1-dashboard
```

Install the project dependencies:

```bash
npm install
```

Run the Angular application:

```bash
npm start
```

The application will be available at:

```text
http://localhost:4200
```

At this stage the application runs as a normal Angular web application.

---

# 2️⃣ Configure the Formula 1 Dashboard

The application consumes Formula 1 data from the OpenF1 API.

OpenF1 provides endpoints for information such as:

- Drivers
- Teams
- Sessions
- Meetings
- Laps
- Position
- Timing
- Race information

The Angular application consumes these APIs through Angular services and displays the information through Angular components.

---

# 3️⃣ Add Tauri to the Existing Angular Application

Once the Angular application was working correctly in the browser, Tauri was added to the existing project.

Tauri supports adding Tauri to an existing frontend project, so the Angular application did not need to be recreated.

Install the Tauri CLI:

```bash
npm install -D @tauri-apps/cli@latest
```

Initialize Tauri:

```bash
npx tauri init
```

During initialization, configure the project using the Angular development server.

Example:

```text
Window title:
Formula1-dashboard

Dev server URL:
http://localhost:4200

Frontend development command:
npm run dev

Frontend build command:
npm run build
```

This creates the following directory:

```text
src-tauri/
```

---

# 4️⃣ Tauri Project Structure

After adding Tauri, the project contains both Angular and Tauri code:

```text
formula-1-dashboard/
│
├── public/
│
├── src/
│   └── ...
│
├── src-tauri/
│   ├── capabilities/
│   ├── icons/
│   ├── src/
│   │   └── main.rs
│   ├── .gitignore
│   ├── build.rs
│   ├── Cargo.toml
│   ├── Cargo.lock
│   └── tauri.conf.json
│
├── angular.json
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

### Important directories

| Directory | Description |
|---|---|
| `src/` | Angular frontend application |
| `src-tauri/` | Tauri/Rust desktop application |
| `src-tauri/src/` | Rust application code |
| `src-tauri/capabilities/` | Tauri permissions/capabilities |
| `src-tauri/icons/` | Desktop application icons |

The Angular application acts as the frontend/renderer, while Tauri provides the native desktop application layer.

---

# 5️⃣ Configure npm Scripts

The Tauri CLI is exposed through an npm script in `package.json`.

The relevant scripts are:

```json
{
  "scripts": {
    "start": "ng serve",
    "dev": "ng serve",
    "build": "ng build",
    "tauri": "tauri"
  }
}
```

### Angular development

```bash
npm start
```

or:

```bash
npm run dev
```

### Tauri development

```bash
npm run tauri dev
```

---

# 6️⃣ Run the Angular Application in the Browser

To run only the Angular application:

```bash
npm start
```

or:

```bash
npm run dev
```

The application will run at:

```text
http://localhost:4200
```

This is useful when developing the Angular frontend without starting Tauri.

---

# 7️⃣ Run the Desktop Application

To run the application through Tauri:

```bash
npm run tauri dev
```

Tauri will:

1. Start the Angular development server
2. Compile the Rust/Tauri application
3. Create the native desktop window
4. Load the Angular application inside the Tauri WebView
5. Enable development/hot reload

The result is a native desktop window running the existing Angular Formula 1 Dashboard.

---

# 8️⃣ Development Architecture

During development, the application works like this:

```text
                 npm run tauri dev
                         │
                         ▼
                 ┌───────────────┐
                 │     Tauri     │
                 └───────┬───────┘
                         │
                         │ starts
                         ▼
                 ┌───────────────┐
                 │ Angular Dev   │
                 │ Server        │
                 │ :4200         │
                 └───────┬───────┘
                         │
                         ▼
                 ┌───────────────┐
                 │ Angular 22 UI │
                 └───────┬───────┘
                         │
                         │ HTTP
                         ▼
                 ┌───────────────┐
                 │   OpenF1 API  │
                 └───────────────┘
```

---

# 9️⃣ Build the Angular Application

To build the Angular application:

```bash
npm run build
```

Angular generates the production build inside the `dist/` directory.

The generated files are then used by Tauri when creating the desktop application.

---

# 🔟 Build the Tauri Desktop Application

To create a production desktop build:

```bash
npm run tauri build
```

Tauri will:

1. Build the Angular frontend
2. Compile the Rust application
3. Package the frontend and Tauri runtime
4. Generate a desktop application bundle

On Windows, the generated installers can be found under:

```text
src-tauri/target/release/bundle/
```

For example:

```text
src-tauri/
└── target/
    └── release/
        └── bundle/
            ├── nsis/
            └── msi/
```

The `target/` directory contains generated Rust build artifacts and should not be committed to Git.

---

# 📁 Git / Repository

The following files and directories should be committed to Git:

```text
src/
public/
src-tauri/
angular.json
package.json
package-lock.json
tsconfig.json
README.md
```

The following generated directories should NOT be committed:

```text
node_modules/
.angular/
dist/
src-tauri/target/
```

The Tauri project itself should be committed, including:

```text
src-tauri/Cargo.toml
src-tauri/Cargo.lock
src-tauri/tauri.conf.json
src-tauri/build.rs
src-tauri/src/
src-tauri/capabilities/
src-tauri/icons/
```

---

# 🔄 Development Workflow

A typical development workflow is:

### Install dependencies

```bash
npm install
```

### Angular development

```bash
npm run dev
```

### Tauri development

```bash
npm run tauri dev
```

### Production Angular build

```bash
npm run build
```

### Production desktop build

```bash
npm run tauri build
```

---

# 🧩 Project Structure

```text
formula-1-dashboard/
│
├── public/
│
├── src/
│   ├── app/
│   │   ├── ...
│   │   ├── components/
│   │   ├── services/
│   │   └── models/
│   │
│   └── ...
│
├── src-tauri/
│   ├── capabilities/
│   ├── icons/
│   ├── src/
│   │   └── main.rs
│   ├── build.rs
│   ├── Cargo.toml
│   ├── Cargo.lock
│   └── tauri.conf.json
│
├── angular.json
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

---

# 📚 References

### Angular

https://angular.dev/

### OpenF1

https://openf1.org/

### Tauri

https://tauri.app/

### Tauri Documentation

https://v2.tauri.app/

### Tauri Prerequisites

https://v2.tauri.app/start/prerequisites/

### Angular + Tauri Reference Project

https://github.com/belnadris/angular-tauri

---

# 👨‍💻 Author

**Ahitagni Saha**

Built as a personal Formula 1 dashboard project while learning and experimenting with:

- Angular
- TypeScript
- OpenF1 API
- WebSockets
- Tauri
- Rust
- Desktop application development
