---
name: Bug Report
about: Report a bug or unexpected behavior
title: "[Bug] "
labels: bug
assignees: ''
---

## Description

A clear and concise description of the bug.

## Steps to Reproduce

1. Run command '...'
2. With input '...'
3. See error

## Expected Behavior

What you expected to happen.

## Actual Behavior

What actually happened. Include any error messages or tracebacks.

## Environment

- OS: [e.g., macOS 14.0, Ubuntu 22.04]
- Node version: [e.g., 26.x]
- pnpm version: [e.g., 9.12.3]
- Browser (if UI): [e.g., Chrome 138]
- cinestudio version: [e.g., 0.1.0]
- Text provider in use: [e.g., minimax / bedrock / anthropic]
- runId (if applicable):
- Relevant `.env` excerpt (redact API keys):

```bash
# paste relevant config here (remove API keys)
```

## Checklist

- [ ] I have searched existing issues for duplicates
- [ ] I am using a supported Node version (>=26)
- [ ] I have installed dependencies (`pnpm install --frozen-lockfile`)
- [ ] I can reproduce this issue in a clean environment
- [ ] I have run `pnpm typecheck && pnpm lint && pnpm test && pnpm build` locally