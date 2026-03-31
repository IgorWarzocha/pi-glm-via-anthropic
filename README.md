# @howaboua/pi-glm-via-anthropic

Use Z.ai GLM models in [pi](https://pi.dev/) through Z.ai's Anthropic-compatible endpoint.

This package overrides pi's built-in `zai` provider so pi sends requests to:

- `https://api.z.ai/api/anthropic`

instead of the default Z.ai coding endpoint.

## Why use this?

Z.ai documents an Anthropic-compatible endpoint for tools such as Claude Code and Goose. Z.ai also positions its coding agent stack around faster and more reliable responses. In practice, some users report that the Anthropic-compatible path feels snappier and less flaky than the default coding endpoint for GLM models.

That last part is anecdotal, not a guarantee. This package exists for people who want that route in pi.

## What this package changes

- keeps the provider name as `zai`
- keeps using your existing `zai` credentials in pi
- switches the transport to pi's `anthropic-messages` API
- points requests at `https://api.z.ai/api/anthropic`

## Included models

- `zai/glm-5.1`
- `zai/glm-5-turbo`
- `zai/glm-4.7`
- `zai/glm-4.5-air`

Model availability can vary by account, quota, and plan.

## Install

Global install:

```bash
pi install npm:@howaboua/pi-glm-via-anthropic
```

Project-local install:

```bash
pi install npm:@howaboua/pi-glm-via-anthropic -l
```

Try it for one run without installing:

```bash
pi -e npm:@howaboua/pi-glm-via-anthropic
```

## Credentials

If you already use Z.ai in pi, you probably do not need to do anything.

This package intentionally keeps the provider name as `zai`, so pi will keep reading the normal Z.ai credential sources:

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

## Use

Start pi normally after installing the package:

```bash
pi
```

Then select a model if needed:

```text
/model
```

You can also launch pi directly with a model:

```bash
pi --model zai/glm-4.7
pi --model zai/glm-5.1
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

- Z.ai coding agent overview: https://docs.z.ai/guides/coding-agent/overview
- Z.ai Claude Code setup: https://docs.z.ai/guides/coding-agent/claude-code
- Z.ai third-party tool guide: https://docs.z.ai/guides/development/using-glm-api-with-third-party-tools
- pi package docs: https://github.com/badlogic/pi-mono/blob/main/packages/coding-agent/docs/packages.md
