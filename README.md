# @howaboua/pi-glm-via-anthropic

Use Z.ai GLM models in [pi](https://pi.dev/) through Z.ai's Anthropic-compatible endpoint.

It overrides pi's built-in `zai` provider to send requests to `https://api.z.ai/api/anthropic`.

## Why

Some pi users prefer Z.ai's Anthropic-compatible endpoint because it often feels faster, lower-latency, and less buggy than the default Z.ai coding endpoint.

This is based on user experience, not a guarantee.

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

- Z.ai third-party tool guide: https://docs.z.ai/guides/development/using-glm-api-with-third-party-tools
- pi package docs: https://github.com/badlogic/pi-mono/blob/main/packages/coding-agent/docs/packages.md
