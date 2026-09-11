# cinestudio — Multi-agent AI film rendering platform

[![CI](https://img.shields.io/github/actions/workflow/status/sachncs/cinestudio/ci.yml?branch=master&label=ci)](https://github.com/sachncs/cinestudio/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-0.1.0-black)](CHANGELOG.md)
[![Node](https://img.shields.io/badge/node-%E2%89%A526-339933)](https://nodejs.org)

Generate a 30-second to 20-minute film from a single prompt — brief, script, storyboard, render, score, color, distribution — coordinated by a 20-agent production crew.

**Default backend:** MiniMax (text, video, image, speech, music in one key). See [docs/CONFIGURATION.md](docs/CONFIGURATION.md) for the full provider catalogue.

## Production-first

Every story is a **Production** — the central object. Characters, Wardrobe, Locations, Scenes, Shots, Transitions, Continuity, Knowledge, Assets, Comments, Versions, Runs, Copilot threads all live inside one production. Runs become execution traces, not the unit of truth.

## Quick start

```bash
pnpm install
pnpm db:migrate    # applies the base schema (productions, characters, locations, scenes, shots, transitions, continuity_log, knowledge, knowledge_fts, assets, asset_tags, asset_collections, asset_collection_items, comments, versions, copilot_threads, copilot_messages, team_members, invites, acl) via SCHEMA_DDL; the numbered migration list is reserved for post-v0.1.0 forward changes
pnpm dev           # http://localhost:3000
```

Create a production at `/dashboard/productions/new`. Pick a template at `/dashboard/templates`. Use the **Copilot** (left rail in any production) to ask for help.

## Architecture

- **Graph** — deterministic creative DAG with branching, conditions, checks, and loops (`src/graph/cinestudio.ts`).
- **Swarm** — Story ↔ Character ↔ Costume ↔ Environment convergence (`src/workflow/swarm.ts`).
- **Workflow** — per-shot production pipeline: re-render / re-color / re-voice, deterministic + resumable (`src/workflow/strands-workflow.ts`).

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for the topology, [docs/PRODUCTION_MODEL.md](docs/PRODUCTION_MODEL.md) for the entity model, [docs/AGENTS.md](docs/AGENTS.md) for every agent's role, and [docs/CONTINUITY.md](docs/CONTINUITY.md) for how the supervisor detects gaps.

## Visual design

Deep editorial noir: ink/bone palette, gold/amber accents, serif display + sans body + mono, subtle grain, warm shadows. See `src/lib/design/tokens.ts`.

## Verification

```bash
pnpm typecheck
pnpm lint
pnpm test
pnpm build
```