# PEMA Ecosystem - Monorepo

![PEMA Logo](https://placehold.co/600x300/1a1a1a/ffffff?text=PEMA+ECOSYSTEM)

This monorepo contains the entire codebase and business knowledge base for the **PEMA Ecosystem**, a hybrid physical-digital super platform.

## 🚀 Core Mission

To democratize craftsmanship by providing tools (silver clay), knowledge (education platform), and a market (marketplace), while making every customer an owner through our **Customer Equity Model**.

## 📂 Repository Structure

This is a comprehensive monorepo containing both code and business documentation.

-   `code/`: Contains all source code for the digital platforms (Rust backend, Remix frontend).
-   `wiki/`: The single source of truth for our business model, product specifications, processes, and strategic decisions. **Start here to understand the project.**
-   `proposals/`: Documents for investors, partners, and grants.
-   `assets/`: Design files, logos, and product media.

## 🛠️ Tech Stack

-   **Backend**: Rust (Actix-Web/Axum, Tokio)
-   **Frontend**: Remix (SSR)
-   **Database**: PostgreSQL, Redis
-   **Blockchain**: Solana (Anchor)
-   **Messaging**: Kafka
-   **Infrastructure**: Docker, Kubernetes, Terraform

## ⚡ Quick Start

1.  **Clone the repo:**
    ```bash
    git clone https://github.com/pema-project/pema-ecosystem.git
    cd pema-ecosystem
    ```

2.  **Review Core Documentation:**
    Start by reading the documents in the `wiki/01-VISION/` and `wiki/02-BUSINESS-MODEL/` directories to understand our core principles.

3.  **Setup Development Environment:**
    Follow the instructions in `wiki/07-PLATFORM-SPECS/DEVELOPMENT/project-instructions.md`.
    ```bash
    # (Simplified)
    cp .env.example .env.local
    docker-compose up -d
    cargo build --workspace
    cd code/platform-rust/frontends/main-portal && pnpm install && pnpm dev
    ```

## 🤝 Contributing

This is currently a closed-source project for the founding team. Contribution guidelines will be published when parts of the project are open-sourced. For now, please refer to the `wiki/10-TEAM/hiring-plan.md` for potential openings.

## 📜 License

The business logic, proprietary knowledge, and core platform code are confidential and proprietary. Certain libraries and tools developed may be released under the MIT License in the future. See the `LICENSE` file for more details.
