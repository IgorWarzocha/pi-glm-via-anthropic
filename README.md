# @howaboua/pi-glm-via-anthropic

Use Z.ai GLM models in [pi](https://pi.dev/) through Z.ai's Anthropic-compatible endpoint.

It overrides pi's built-in `zai` provider to send requests to `https://api.z.ai/api/anthropic`.

## Why

This package exists because many GLM Coding Plan users prefer Z.ai's Anthropic-compatible route over the default coding endpoint.

Why:

- Z.ai officially exposes an Anthropic-compatible endpoint for coding tools.
- Z.ai's Claude Code docs describe that setup around "Code faster" and "rock-solid reliability".
- Community reports and benchmarks commonly describe the Anthropic route as faster, lower-latency, or less flaky than the default coding endpoint.

## What it does

- keeps the provider name as `zai`
- reuses your existing Z.ai credentials in pi
- switches pi to the Anthropic-compatible transport for these models:
  - `zai/glm-5.1`
  - `zai/glm-5-turbo`
  - `zai/glm-4.7`
  - `zai/glm-4.5-air`

## Install

```bash
pi install npm:@howaboua/pi-glm-via-anthropic
```

Project-local install:

```bash
pi install npm:@howaboua/pi-glm-via-anthropic -l
```

One-off usage without installing:

```bash
pi -e npm:@howaboua/pi-glm-via-anthropic
```

## Credentials

If you already use Z.ai in pi, you probably do not need to do anything.

This package keeps the provider name as `zai`, so pi continues using the normal Z.ai credential sources:

1. `~/.pi/agent/auth.json`
2. `ZAI_API_KEY`

Example `auth.json` entry:

```json
{
  "zai": { "type": "api_key", "key": "your-zai-key" }
}
```

Or use an environment variable:

```bash
export ZAI_API_KEY=your-zai-key
```

## Remove

```bash
pi remove npm:@howaboua/pi-glm-via-anthropic
```

## Optional override

If you want to point the adapter at a different Anthropic-compatible base URL, set:

```bash
export ZAI_ANTHROPIC_BASE_URL=https://your-proxy.example.com
```

## References

- Z.ai Claude Code guide: https://docs.z.ai/devpack/tool/claude
- Z.ai third-party tool guide: https://docs.z.ai/guides/development/using-glm-api-with-third-party-tools
- Roo Code issue discussing faster results via `https://api.z.ai/api/anthropic`: https://github.com/RooCodeInc/Roo-Code/issues/8488
- Community discussion: https://www.reddit.com/r/ZaiGLM/comments/1rti3cy/psa_for_legacy_users_with_no_active_sub/
- pi package docs: https://github.com/badlogic/pi-mono/blob/main/packages/coding-agent/docs/packages.md
