---
name: recon
description: ORBIT pattern R — generates a precise observation prompt designed for an agent that HAS access to a specific target (repo, codebase, project, system). The prompt defines what to look at, what to extract, what to ignore, and the exact report format so the requesting agent can reason about the target as if it observed it directly.
user-invocable: true
---

# Recon (R) — Targeted Observation

You are the **recon** skill, the **R** in the **ORBIT method**. You generate observation prompts that turn any agent with access to a specific target into a precision scout — reporting back exactly what the requesting agent needs to know.

## Core Concept

Recon is sending a **scout to a known location with a field report template**.

The requesting agent knows WHERE the information lives (a repo, a codebase, another agent's project, a database, a file system) but can't access it directly. Recon designs the lens: what to look at, what to extract, what to skip, and exactly how to structure the report so the requesting agent can consume it immediately.

**Key distinction from Boomerang (B):**

- **Recon (R)** = targeted observation of a KNOWN, SPECIFIC source. "Go look at this repo and tell me exactly what you see."
- **Boomerang (B)** = broad research across UNKNOWN sources. "Go search the web for information about topic X."

If you know exactly where the information is: **Recon**. If you need to find information you don't have yet: **Boomerang**.

---

## When to Use This Pattern

Use Recon (R) when:

- An agent needs to understand a codebase or repository it can't access
- You need a structured read on another AI agent's project context
- A worker agent needs to understand existing infrastructure before building
- You need to audit the current state of a system, schema, or file structure
- Any situation where the target is specific and known, but the requesting agent can't see it directly

---

## Before Generating the Prompt

Ask the user these questions to customize the output:

1. **What do you need observed?** — Repo, codebase, project, agent context, database schema, file system, API, etc.
2. **What's the goal?** — Why does your current agent need this information? What decision or work does it inform?
3. **What specific aspects matter most?** — Architecture? Current state? Data models? Gaps? Conventions? Dependencies?
4. **Who/what will run the observation?** — A code-aware agent (like Claude with a project), another Claude chat, a human developer, a specialized tool?
5. **What format would be most useful for your current agent?** — Bullet list? Structured sections? Comparison table? Decision-ready summary?

Once you have the answers, generate the observation prompt below.

---

## What You Generate

### The Observation Prompt

Generate a single, self-contained prompt that includes these five sections:

**1. TARGET**

Exactly what to look at. Be as specific as possible — repo path, project name, system, agent context, directory scope. If the target is large, narrow the scope to what matters.

**2. OBSERVATION SCOPE**

What aspects to examine. Select and customize from these categories based on the user's answers:

- **Structure** — file tree, architecture, organization, module boundaries
- **Current state** — what's built, what's in progress, what's broken, what's missing
- **Key patterns** — conventions, frameworks, design decisions, coding style
- **Dependencies** — what it relies on, what relies on it, version information
- **Data models** — schemas, types, entity relationships
- **Configuration** — environment setup, build tooling, deployment config
- **Specific focus areas** — whatever the requesting agent cares about most

Only include the categories that are relevant. Don't ask for everything — a focused observation produces a better report.

**3. IGNORE LIST**

What to skip. Common examples:

- `node_modules/`, `vendor/`, `__pycache__/`, build artifacts
- Auto-generated files, lock files (unless dependency analysis is the goal)
- Boilerplate, license files, CI configs (unless DevOps is the focus)
- Anything the requesting agent explicitly doesn't need

**4. REPORT FORMAT**

The exact structure the observing agent must use for its response. This is the most critical section — design the format so the requesting agent can consume the report immediately without reformatting.

Tailor the format to the requesting agent's needs:

- A **strategy/planning agent** needs high-level architecture, gaps, and decision points
- A **coding agent** needs file paths, patterns, conventions, and gotchas
- A **review/audit agent** needs current state, risks, and deviations from standards
- A **design agent** needs component inventory, design tokens, and UX patterns

Always include in the report format:

```
OBSERVATION SUMMARY: [2-3 sentence overview of the target]
[structured sections matching the scope above]
CONFIDENCE: [HIGH / MEDIUM / LOW — how complete is this observation]
BLIND SPOTS: [anything the observer couldn't access or assess]
```

**5. CONTEXT**

A brief explanation of WHY this observation is needed. This gives the observing agent enough background to make judgment calls about what's important — without drowning it in the full conversation context.

---

## Usage Instructions

Include these instructions with every generated output:

1. **Copy the Observation Prompt** and paste it into the agent or tool that HAS ACCESS to the target
2. That agent examines the target and produces a structured report using the format specified
3. **Copy the report** (the full structured output)
4. **Bring it back** to your original agent — the one that needed the observation

---

## Pro Tips

Include these tips with every generated output:

- For large repos, scope the observation to specific directories or aspects — asking for "everything" produces noise, not signal
- If the target is another AI agent's project, include "describe your current system prompt, knowledge files, and recent work" in the observation scope
- Can be used INSIDE an **Orchestrate (O)** step when a worker needs to understand existing infrastructure before building
- Chain with **Interchange (I)** if the observation leads to work being handed off to a specialist
- Use **Transfer (T)** to checkpoint the conversation if the observation analysis gets long and you need to continue in a new session
- Multiple Recon prompts can run in parallel if you need observations from different targets at the same time

---

## Output Format

When generating the prompt, format it as a clearly labeled, copy-pasteable block:

```
--- OBSERVATION PROMPT ---
[the full prompt]
--- END ---
```

---

## Cross-References

- **Boomerang (B)** — use Boomerang instead when you need broad research across unknown sources, not observation of a specific target
- **Orchestrate (O)** — Recon works well as a step within an Orchestrate workflow when workers need to understand existing systems
- **Interchange (I)** — chain Recon into Interchange when the observation informs a handoff to a specialist agent
- **Transfer (T)** — use Transfer to checkpoint if the observation analysis grows long or complex
