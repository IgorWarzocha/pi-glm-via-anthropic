import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";

const DEFAULT_BASE_URL = "https://api.z.ai/api/anthropic";

/**
 * Z.ai GLM Coding Plan models over the Anthropic-compatible endpoint.
 *
 * Notes:
 * - Provider name is intentionally "zai" so pi will reuse the existing
 *   ~/.pi/agent/auth.json credential at key "zai".
 * - Model set follows Z.ai's current Coding Plan docs for the Anthropic flow.
 */
export const MODELS = [
	{
		id: "glm-5.1",
		name: "GLM-5.1",
		reasoning: true,
		input: ["text"] as const,
		cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
		contextWindow: 204800,
		maxTokens: 131072,
	},
	{
		id: "glm-5-turbo",
		name: "GLM-5-Turbo",
		reasoning: true,
		input: ["text"] as const,
		cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
		contextWindow: 200000,
		maxTokens: 131072,
	},
	{
		id: "glm-4.7",
		name: "GLM-4.7",
		reasoning: true,
		input: ["text"] as const,
		cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
		contextWindow: 204800,
		maxTokens: 131072,
	},
	{
		id: "glm-4.5-air",
		name: "GLM-4.5-Air",
		reasoning: true,
		input: ["text"] as const,
		cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
		contextWindow: 131072,
		maxTokens: 98304,
	},
];

export default function (pi: ExtensionAPI) {
	pi.registerProvider("zai", {
		baseUrl: process.env.ZAI_ANTHROPIC_BASE_URL || DEFAULT_BASE_URL,
		apiKey: "ZAI_API_KEY",
		api: "anthropic-messages",
		models: MODELS.map((model) => ({ ...model })),
	});
}
