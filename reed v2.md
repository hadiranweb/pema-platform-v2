بسیار خب. من هر دو مدل را بررسی کردم. مدل اول جامع‌تر و برای مخاطبان عمومی (سرمایه‌گذار، توسعه‌دهنده) مناسب‌تر است، در حالی که مدل دوم فشرده‌تر و عملیاتی‌تر است. من یک **نسخه بهینه** ایجاد می‌کنم که بهترین جنبه‌های هر دو را ترکیب کرده و برای هدف شما (یک ریپازیتوری حرفه‌ای، جامع اما مختصر) کاملاً مناسب باشد.

---

## **فایل بهینه: `README.md`**

```markdown
# PEMA Ecosystem

**Building a Living, Symbiotic Ecosystem for Knowledge-Based Production & Web3 Collaboration**

[![License: Proprietary](https://img.shields.io/badge/License-Proprietary-red.svg)](LICENSE-PROPRIETARY.md)
[![Platform](https://img.shields.io/badge/Platform-Rust%20%2B%20Remix-blue.svg)](#tech-stack)

---

## 🌍 Vision

The **PEMA Ecosystem** pioneers a new model at the intersection of **traditional craftsmanship**, **knowledge-based manufacturing**, and **Web3 technology**. We create a self-evolving network where:

- 🏭 **Physical innovation** (proprietary silver clay, advanced mold-making) fuels **digital platforms** (education, marketplace)
- 💎 **Customers become co-owners** through a revolutionary customer-centric equity model
- 🤝 **Social impact** is embedded in the core, empowering marginalized artisans
- 📚 **Open knowledge-sharing** drives continuous innovation

This repository is the **Single Source of Truth** for the entire ecosystem: business strategy, technical architecture, product IP, and organizational knowledge.

---

## 📂 What's Inside?

This **monorepo** integrates both **physical operations** (PEMA brand: silver clay production, R&D) and **digital infrastructure** (Super Platform: education, marketplace, tokenomics).

### Structure Overview

```
/pema-ecosystem
├── wiki/                   # 📚 Core Knowledge Base (START HERE)
│   ├── 00_PEMA_KNOWLEDGE_BASE.yml
│   ├── 01_BUSINESS_CORE.md
│   ├── 02_DIGITAL_ECOSYSTEM.md
│   └── 05_WORKFLOWS/
├── apps/                   # 🚀 Deployable Apps (API Gateway, Frontend)
├── platform/               # 🏛️ Core Microservices (Rust: IAM, Token, Marketplace, Education)
├── services/               # 🏢 Business Services (Rust: Finance, Operations)
├── packages/               # 📦 Shared Libraries (Rust + TypeScript)
├── assets/physical/        # 🏭 Product Specs & Proprietary IP
├── infra/                  # ☁️ IaC (Docker, K8s, Terraform)
└── tools/                  # 🛠️ Scripts & Utilities
```

---

## 🎯 Core Concepts

### 1. **PEMA Brand (Physical)**
- **Product**: Proprietary silver clay democratizing jewelry-making
- **IP**: Advanced formulation + laser-based mold-making (0.002mm precision)
- **Innovation**: Smart Coin project (hollow, NFC-enabled)

### 2. **Super Platform (Digital)**
- **Education**: Courses on PEMA products → global creator marketplace
- **Marketplace**: Web3-enabled (NFT certificates of authenticity)
- **Customer Equity**: Profit → Shares → NFTs
- **Internal Currency**: Platform token backed by silver/revenue

### 3. **Meta-Strategy**
- **Neuronal Architecture**: "Islands" (specialized services) + "Interaction Hub"
- **AI-Augmented**: Used across design, content, and strategy
- **Living Wiki**: This repository evolves with the business

---

## 🚀 Quick Start

### Prerequisites
- Rust 1.75+, Node.js 20+, pnpm 8+, Docker

### Setup
```bash
git clone https://github.com/pema-ecosystem/pema.git && cd pema
cp .env.example .env
docker-compose -f infra/docker/docker-compose.yml up -d
cargo build --workspace && cargo run -p api-gateway
# In new terminal:
cd apps/frontend-main && pnpm install && pnpm dev
```
→ Visit `http://localhost:3000`

---

## 📖 Documentation

All docs live in `/wiki`. **Start with:**

- [Knowledge Base](wiki/00_PEMA_KNOWLEDGE_BASE.yml) - Ontological foundation
- [Business Core](wiki/01_BUSINESS_CORE.md) - Products, IP, operations
- [Digital Strategy](wiki/02_DIGITAL_ECOSYSTEM.md) - Platform vision & roadmap
- [Workflows](wiki/05_WORKFLOWS/) - End-to-end user journeys

---

## 🤝 Contributing

**Status**: Private (PEMA core team only)  
**Future**: Exploring open-source for select platform components

If you're a team member or invited collaborator:
1. Read [Contribution Guidelines](CONTRIBUTING.md)
2. All code must pass CI (linting, tests)
3. Document changes in `/wiki`

---

## 📜 License

**Dual-license model:**

- **Physical IP & Business**: Proprietary ([LICENSE-PROPRIETARY.md](LICENSE-PROPRIETARY.md))
- **Digital Platform & Content**: CC BY-NC-SA 4.0 ([LICENSE-CC-BY-NC-SA.md](LICENSE-CC-BY-NC-SA.md))

---

## 🌟 Why This Matters

PEMA is architecting a **new value creation model**:

✓ Customers = Stakeholders  
✓ Knowledge = Shared  
✓ Technology = Empowers Craft  
✓ Social Impact = Core Metric  

This repository is the blueprint.

---

## 📬 Contact

**Founder**: [contact@pema-ecosystem.com]  
**Wiki**: [GitHub Wiki](../../wiki)  
**Version**: 1.0.0 | **Updated**: 2024-10-30
```

---

## **فایل بهینه: `LICENSE`**

```text
PEMA ECOSYSTEM - DUAL LICENSE NOTICE
Copyright © 2024 PEMA. All Rights Reserved.

================================================================================
OVERVIEW
================================================================================

This repository contains TWO types of intellectual property, each governed
by a separate license:

1. PROPRIETARY ASSETS (Physical IP, Business Strategy)
   → See LICENSE-PROPRIETARY.md

2. OPEN-LICENSED ASSETS (Digital Platform Code, Educational Content)
   → See LICENSE-CC-BY-NC-SA.md

Please refer to the specific license files for detailed terms.

================================================================================
QUICK REFERENCE
================================================================================

┌─────────────────────────────────────┬────────────────────────────────────┐
│ PROPRIETARY (All Rights Reserved)   │ OPEN (CC BY-NC-SA 4.0)             │
├─────────────────────────────────────┼────────────────────────────────────┤
│ /assets/physical/ip/                │ /apps/                             │
│ /wiki/*_CONFIDENTIAL.md             │ /platform/                         │
│ Silver clay formulation             │ /services/                         │
│ Mold-making techniques              │ /packages/                         │
│ Smart coin technical specs          │ /wiki/ (except _CONFIDENTIAL)      │
│ Business strategy (marked)          │ Educational course materials       │
└─────────────────────────────────────┴────────────────────────────────────┘

================================================================================
PERMITTED USE (Internal Team)
================================================================================

- Members of the PEMA team: Full access for development and operations
- AI Companions: Read/process access under implied NDA for strategic support
- Invited Collaborators: As per individual agreements

================================================================================
PROHIBITED USE (Without Explicit Permission)
================================================================================

✗ Redistribution of proprietary materials
✗ Commercial use of open-licensed materials
✗ Public disclosure of confidential business information
✗ Creating competing products using our IP

================================================================================
FUTURE INTENTIONS
================================================================================

Select platform components may transition to permissive open-source licenses
(e.g., MIT) at the founders' discretion. Such components will be clearly marked.

================================================================================
CONTACT
================================================================================

Licensing inquiries: legal@pema-ecosystem.com
Commercial licensing: partnerships@pema-ecosystem.com

================================================================================
DISCLAIMER
================================================================================

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.
```

---

### **فایل کمکی: `LICENSE-PROPRIETARY.md`** (همان نسخه قبلی، بدون تغییر)

### **فایل کمکی: `LICENSE-CC-BY-NC-SA.md`** (همان نسخه قبلی، بدون تغییر)

---

این نسخه بهینه:
- ✅ **جامع** اما **مختصر**
- ✅ **حرفه‌ای** و **جذاب بصری** (با استفاده از emojis و جداول)
- ✅ **شفاف** از نظر لایسنس‌بندی
- ✅ **آماده برای سرمایه‌گذاران، توسعه‌دهندگان و مدل‌های AI**
