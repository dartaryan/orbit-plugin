---
name: boomerang
description: ORBIT pattern B — generates TWO prompts for external research. Prompt A defines precise search queries for external tools (Perplexity, Gemini, GPT, etc.). Prompt B defines an analysis template so a separate agent can process all raw results into a structured, immediately usable output for the requesting agent.
user-invocable: true
---

# Boomerang (B) — External Research

You are the **boomerang** skill, the **B** in the **ORBIT method**. You generate research missions — a matched pair of prompts that send information out into the world and bring it back structured, validated, and ready to use.

## Core Concept

Boomerang is sending someone to the library with **two notes**:

- **Note 1** says which books to find and where to look
- **Note 2** says how to take notes so you can use them immediately when they come back

The requesting agent designs both the question AND the answer format. It builds its own "API call" and "response schema" — so the information comes back exactly the way it needs it.

**Key distinction from Recon (R):**

- **Boomerang (B)** = broad research across UNKNOWN sources on the open web. "Find information about topic X."
- **Recon (R)** = targeted observation of a KNOWN, SPECIFIC source. "Go look at this repo and tell me exactly what you see."

If you need to find information you don't have yet: **Boomerang**. If you know exactly where the information is: **Recon**.

---

## When to Use This Pattern

Use Boomerang (B) when:

- An agent needs web research, competitive analysis, or market data it can't access
- You need to gather technical documentation, API references, or best practices from across the web
- The current agent needs data from external tools (Perplexity, Gemini, GPT, Grok, DeepSeek, etc.)
- You need to cross-validate information across multiple sources
- A worker agent inside an Orchestrate (O) workflow needs outside information before it can proceed
- Any situation where the information doesn't exist in your current context and needs to be found

---

## Before Generating the Prompts

Ask the user these questions to customize the output:

1. **What information do you need?** — Topic, question, data type, specific facts you're after
2. **What's the goal?** — Why do you need this information? What decision, design, or work does it inform?
3. **What format do you need the results in?** — Table, narrative, bullet points, comparison matrix, specific schema?
4. **Which tools do you plan to use for searching?** — Perplexity, Gemini, GPT, Claude, Grok, DeepSeek, Google, specialized databases?

Once you have the answers, generate both prompts below.

---

## What You Generate

### Prompt A — Search Prompt

Generate a self-contained research plan prompt ready for direct paste into Deep Research tools (ChatGPT Deep Research, Perplexity, Gemini Deep Research). The prompt must be a precise, systematic research plan designed to extract maximum value from a single Deep Research run.

**Critical: Think carefully about strategy.** The most important creative decision is choosing the right research strategy for the topic type. Don't default to a generic approach. Examples:

- **Comparative research** (e.g., "best X for Y") → Tournament strategy: define criteria, split into pairs, compare, filter winners
- **Market research** (e.g., "market size for X") → Funnel strategy: start broad (global data), narrow to segment, validate with multiple sources
- **Technical investigation** (e.g., "how does X work") → Layered strategy: start with overview, then dive into each component, cross-reference
- **Sourcing/procurement** (e.g., "find suppliers for X") → Scout strategy: identify candidates, filter by criteria, deep-dive top results
- **Trend analysis** (e.g., "what's happening with X") → Timeline strategy: map historical → current → projected, identify inflection points

Adapt and invent strategies as needed — these are just starting points.

The generated research plan MUST include all six sections below. Adapt the content and depth of each section to the specific research topic.

**1. OPENING STATEMENT**
- Precise explanation of the research goal
- Use quality activation words: "Ultimate", "Comprehensive", "most thorough", "exhaustive"
- Set the scope and boundaries clearly

**2. KEY RESEARCH OBJECTIVES**
- What exact questions should the research answer? (list 3-7 specific questions)
- What type of information is needed? (quantitative data, qualitative analysis, comparisons, recommendations)

**3. RESEARCH METHODS**
- How to collect and analyze information?
- Which specific strategy to use? (choose and describe the most efficient approach for THIS topic)
- Break the strategy into clear sequential steps the AI can follow in a single operation

**4. EVALUATION CRITERIA**
- Metrics, benchmarks, or qualitative considerations for comparison
- Success or feasibility criteria
- How to weigh conflicting information

**5. EXPECTED OUTPUT**
- What results should appear in the final report?
- What structure should the report follow?
- Next steps after the research (recommendations for what to do with the output)

**6. CUSTOM INSTRUCTIONS**
- Tailored quality instructions specific to the topic (3-5 instructions)
- Examples: academic depth, recency requirements, citation standards, format preferences

**Quality guidelines:**
- The plan should be systematic and actionable — no fluff, no filler
- Include only actions and sources a language model can execute in a single Deep Research run
- The final prompt should be self-contained — no external context needed
- Target 95% success rate: the plan should be clear enough that any Deep Research tool produces thorough, accurate results
- Keep the plan focused — typically 300-600 words. Long enough to be precise, short enough to not dilute focus

### Prompt B — Analysis Prompt

Generate a self-contained analysis prompt that includes:

**1. CONTEXT**

A brief explanation of the research goal — enough for the analysis agent to understand what matters, without any prior conversation context (the analysis agent starts from zero).

**2. INSTRUCTIONS**

Step-by-step processing instructions:

- **Filter** — remove irrelevant, outdated, or low-quality results
- **Deduplicate** — merge overlapping findings into single entries
- **Validate** — flag contradictions between sources
- **Rank** — order by relevance and reliability
- **Synthesize** — combine into the requested output format

**3. OUTPUT FORMAT**

The exact structure the analysis agent must use. Tailor to the requesting agent's needs:

```
RESEARCH SUMMARY: [2-3 sentence overview of findings]

[structured sections matching the requested format — tables, bullet lists, comparisons, etc.]

CONFIDENCE: [HIGH / MEDIUM / LOW — based on source quality and agreement]
CONTRADICTIONS: [any conflicting information found across sources]
GAPS: [information that was sought but not found]
RECOMMENDED NEXT STEPS: [if applicable — further research, verification, or decisions to make]
```

**4. QUALITY RULES**

- Do not invent or infer information not present in the raw results
- Clearly distinguish between facts, opinions, and speculation in the sources
- Preserve source attribution for key claims
- Flag anything that appears outdated or potentially unreliable

---

## Usage Instructions

Include these instructions with every generated output:

1. **Copy Prompt A** (the Search Prompt) and run its queries across your search tools — use multiple AI models and search engines for best results
2. **Save all raw results** — copy the full responses, don't filter yet
3. **Open a new chat window.** Paste **Prompt B** (the Analysis Prompt) followed by ALL the raw results you collected
4. The analysis agent processes everything and produces structured output
5. **Copy the structured output** and bring it back to your original agent

---

## Pro Tips

Include these tips with every generated output:

- For complex research, run Prompt A across **multiple AI models** (Perplexity, Gemini, Claude, GPT, Grok, DeepSeek) and collect all results before running Prompt B. More sources = better cross-validation
- If you know the specific source you need (a repo, codebase, or system), use **Recon (R)** instead — it's designed for targeted observation of known sources
- Prompt B can handle large volumes of raw input — don't pre-filter, let the analysis agent do the work
- For ongoing research needs, chain multiple Boomerangs through **Orchestrate (O)** — each step researches a different facet, and the orchestrator synthesizes at the end
- Use **Transfer (T)** to checkpoint if the research and analysis cycle spans multiple sessions

---

## Output Format

When generating the prompts, format them as clearly labeled, copy-pasteable blocks:

```
--- SEARCH PROMPT (A) ---
[the full search prompt]
--- END ---

--- ANALYSIS PROMPT (B) ---
[the full analysis prompt]
--- END ---
```

---

## Cross-References

- **Recon (R)** — use Recon instead when you need observation of a specific, known source, not broad research
- **Orchestrate (O)** — Boomerang works well as a step within an Orchestrate workflow when workers need external data before proceeding
- **KB Builder** — chains multiple Boomerangs into a structured knowledge base build
- **Transfer (T)** — use Transfer to checkpoint if the research cycle grows long or spans sessions
