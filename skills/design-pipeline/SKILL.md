---
name: design-pipeline
description: Compound ORBIT workflow (B + KB Builder + O) — generates a 10-stage prompt pipeline that turns a PRD and product brief into a complete, research-driven design system. Stage 0 uses Boomerang to generate a global design research plan. Stages 1-2 use KB Builder to process research into structured knowledge. Stage 3 generates reusable mockup prompt templates. Stages 4-9 orchestrate mockup generation, human curation, vision aggregation, design system creation, and screen-level production prompts.
user-invocable: true
---

# Design Pipeline — Research-Driven Design from PRD to Production

You are the **design-pipeline** skill, a **compound workflow** in the **ORBIT method** that chains **Boomerang (B)** + **KB Builder** + **Orchestrate (O)** into a 10-stage pipeline. Given a PRD (Product Requirements Document) and product brief, you produce all the prompts needed to research design globally, generate mockups, curate them, and produce a complete design system with screen-level production prompts.

## Core Concept

Design Pipeline is an **assembly line for visual design**:

- **Stage 0** generates a comprehensive design research plan (Boomerang — scatter search for global design inspiration)
- **Stages 1-2** process research into structured design knowledge (KB Builder — index mapping + chapter planning)
- **Stage 3** creates a reusable mockup prompt template from the PRD
- **Stages 4-5** generate mockups and guide human curation (one mockup per research source)
- **Stage 6** aggregates all curation notes into a unified design vision
- **Stage 7** produces a complete design system with exact tokens and values
- **Stages 8-9** generate precise per-screen prompts and route them to a production tool

The central question driving the pipeline: **"How should this app look if the world's best designers built it — creative, effective, cool, and high-converting?"**

The human routes between stages, carrying artifacts forward. Each stage produces exactly what the next stage needs.

---

## When to Use This Workflow

Use Design Pipeline when:

- You have a PRD or product brief and want to go from concept to visual design with research backing
- You want design decisions informed by global best practices, not just personal taste
- You need a complete design system — not just mockups — with tokens, scales, and component specs
- The product is complex enough that a single "design this for me" prompt would produce generic results
- You want to evaluate multiple design directions before committing to one
- You need design artifacts that developers can implement precisely (exact colors, spacing, typography)

---

## Before Generating the Pipeline

Ask the user these questions to customize all stages:

1. **Do you have a PRD and/or product brief?** — If not, help scope what's needed before starting.
2. **What type of product is this?** — Web app, mobile app, landing page, SaaS dashboard, e-commerce, etc.
3. **Any existing brand constraints?** — Colors, fonts, existing design language, logo, brand guidelines.
4. **How many research sources do you plan to use?** — Affects Stage 4 mockup count (typically ~10).
5. **What production tool will you use for the final screens?** — Google Stitch MCP, Figma, manual HTML, or other.

Once you have the answers, generate all stage prompts below.

---

## Pipeline Reference

| Stage | Name | Input | Output |
|-------|------|-------|--------|
| 0 | Research Plan Generation | PRD + Brief | Research plan with 3-5 query variations per category |
| 1 | Index Mapping (KB Builder) | Research results folder | Master index of all design findings |
| 2 | Chapter Planning (KB Builder) | Design index | Structured design research chapters |
| 3 | Prototype Prompt Generation | PRD + Brief | Reusable mockup prompt template |
| 4 | Mockup Generation | Mockup prompt + 1 research doc each | ~10 HTML mockups |
| 5 | Human Curation | Your eyes + mockups (manual) | Curation notes per mockup |
| 6 | Vision Aggregation | All curation notes + PRD + Brief | Unified design vision document |
| 7 | Design System | Vision document + PRD | Complete design system with exact tokens |
| 8 | Screen Prompts | Design system + vision + PRD | Precise prompt per screen |
| 9 | Production | Screen prompts -> production tool | Actual pages / Figma / HTML |

---

## What You Generate

### Stage 0 — Research Plan Generation (Boomerang B)

Generate a prompt that takes the PRD + Brief and produces a comprehensive design research plan. The prompt must be self-contained — the agent running it has ZERO context about the project beyond what is in the PRD and brief. The prompt must be a precise, systematic research plan designed to extract maximum value from a single Deep Research run.

**Critical: Think carefully about strategy.** For design research, the most important creative decision is choosing the right research strategy for the product type. Don't default to a generic approach. Examples:

- **Competitive design analysis** (e.g., "how do similar apps look") → Tournament strategy: identify competitors, define visual criteria, compare in pairs, filter winners
- **Design system research** (e.g., "best practices for dashboards") → Layered strategy: start with established patterns, then dive into each component category, cross-reference across industries
- **Visual identity exploration** (e.g., "color and typography for fintech") → Funnel strategy: start broad (design trends), narrow to category, validate with successful examples
- **UX pattern research** (e.g., "onboarding flows that convert") → Scout strategy: identify high-performing examples, filter by metrics, deep-dive top results
- **Design trend analysis** (e.g., "where is SaaS design heading") → Timeline strategy: map historical → current → projected, identify inflection points

Adapt and invent strategies as needed — these are just starting points.

The generated research plan MUST include all six sections below. Adapt the content and depth of each section to the specific product and its design needs.

**1. OPENING STATEMENT**
- Precise explanation of the design research goal
- Use quality activation words: "Ultimate", "Comprehensive", "most thorough", "exhaustive"
- Set the scope and boundaries clearly — product type, target audience, design maturity

**2. KEY RESEARCH OBJECTIVES**
- What exact design questions should the research answer? (list 3-7 specific questions)
- What type of information is needed? (visual references, component patterns, color systems, typography pairings, layout structures, interaction models, accessibility patterns)

**3. RESEARCH METHODS**
- How to collect and analyze design information?
- Which specific strategy to use? (choose and describe the most efficient approach for THIS product's design needs)
- Break the strategy into clear sequential steps the AI can follow in a single operation

**4. EVALUATION CRITERIA**
- Design quality metrics: visual polish, consistency, accessibility compliance, conversion optimization
- How to weigh conflicting design approaches
- What makes a design reference "relevant" vs. "noise" for this specific product

**5. EXPECTED OUTPUT**
- What results should appear in the final report?
- What structure should the report follow?
- Next steps after the research (recommendations for what to do with the design findings)

**6. CUSTOM INSTRUCTIONS**
- Tailored quality instructions specific to the product's design context (3-5 instructions)
- Examples: focus on mobile-first patterns, prioritize accessibility, include dark mode considerations, emphasize conversion-optimized layouts, require real-world app screenshots/references

**Quality guidelines:**
- The plan should be systematic and actionable — no fluff, no filler
- Include only actions and sources a language model can execute in a single Deep Research run
- The final prompt should be self-contained — no external context needed
- Target 95% success rate: the plan should be clear enough that any Deep Research tool produces thorough, accurate design research
- Keep the plan focused — typically 300-600 words. Long enough to be precise, short enough to not dilute focus

Format the output as a clearly labeled, copy-pasteable block:

```
--- RESEARCH PLAN PROMPT (Stage 0) ---
[the full prompt]
--- END ---
```

Include instructions for the user:

> **How to run Stage 0:**
> 1. Copy this prompt and paste it into an AI agent along with your PRD and product brief.
> 2. The agent produces a structured research plan with queries organized by category.
> 3. Save the research plan as `design-research-plan.md`.
> 4. Take the queries from the plan and run them across multiple AI tools (preferring deep research modes): Perplexity, Claude, GPT, Gemini, Grok, DeepSeek, etc.
> 5. Save each tool's full response as a separate file: `research-[toolname].md`.
> 6. Put all files in one folder. Do NOT edit or filter the results — Stages 1-2 handle that.
> 7. When all searches are done, proceed to Stages 1-2.

---

### Stages 1-2 — Research Processing (KB Builder)

Generate instructions that direct the user to process their research results using the **KB Builder** workflow with these specific settings:

**Stage 1 — Index Mapping:**

Run KB Builder's Stage 1 (Index Mapping) on the collected research files. Use these parameters:
- **Purpose:** "UI/UX design decisions"
- **Audience:** "designers and developers"
- **Sub-topic grouping:** Group by the 10 research categories from Stage 0

The index should capture every design recommendation, pattern, color, typeface, layout approach, and interaction detail found across all research sources.

**Stage 2 — Chapter Planning:**

Run KB Builder's Stage 2 (Chapter Planning) on the index. The chapters should align with design decision categories rather than information categories — structure them so each chapter directly feeds into design system decisions.

Format the output as a clearly labeled, copy-pasteable block:

```
--- RESEARCH PROCESSING INSTRUCTIONS (Stages 1-2) ---
[the full instructions referencing KB Builder]
--- END ---
```

Include instructions for the user:

> **How to run Stages 1-2:**
> 1. Use the **kb-builder** skill to generate Stage 1 (Index Mapping) and Stage 2 (Chapter Planning) prompts.
> 2. When running kb-builder, set the topic to your product's design research, purpose to "UI/UX design decisions", and audience to "designers and developers."
> 3. Run Stage 1 on your research files folder. Save as `design-index.md`.
> 4. Run Stage 2 on the index. Approve the chapter structure. Save as `design-research-chapters.md`.
> 5. When chapters are written and complete, proceed to Stage 3.

---

### Stage 3 — Prototype Prompt Generation

Generate a prompt that takes the PRD + Brief and produces a **reusable mockup prompt template**. This template will be run once per research document (from Stages 1-2) to produce an HTML mockup showing the product designed according to that research's recommendations. The prompt must be self-contained.

The prompt must instruct the agent to create a template that, when given a research document, tells the builder to:

**1. EXTRACT ALL DESIGN RECOMMENDATIONS**
- Pull every visual recommendation from the research document: colors, fonts, layouts, patterns, spacing, animations, interactions
- Organize recommendations by type (color, typography, layout, component, interaction)

**2. BUILD A SINGLE-PAGE HTML FILE**
- Create a complete, standalone HTML file demonstrating the recommendations applied to the actual product
- Use the product's real screens and content from the PRD (not placeholder lorem ipsum)
- Include inline CSS — no external dependencies

**3. INCLUDE WORKING CSS ANIMATIONS AND TRANSITIONS**
- Hover states, transitions, micro-interactions described in the research
- Loading states and feedback animations where applicable
- Keep animations performant (prefer transform/opacity)

**4. MAKE IT VISUALLY COMPLETE**
- This is a design preview, not a wireframe — it should look like a real product
- Apply the full visual language: colors, shadows, border radius, typography hierarchy, spacing
- Include enough screens/sections to demonstrate the design direction comprehensively

**5. OUTPUT FORMAT**
- Single `.html` file that opens directly in a browser
- Filename: `mockup-[research-source-name].html`
- Include a comment header identifying which research source inspired this mockup

Format the output as a clearly labeled, copy-pasteable block:

```
--- PROTOTYPE PROMPT TEMPLATE (Stage 3) ---
[the full prompt template, with {RESEARCH_DOC} placeholder where the research content goes]
--- END ---
```

Include instructions for the user:

> **How to run Stage 3:**
> 1. Copy this prompt and paste it into an AI agent along with your PRD and product brief.
> 2. The agent produces a reusable mockup prompt template.
> 3. Save it as `mockup-prompt-template.md`.
> 4. You will use this template in Stage 4 — once per research document.
> 5. Proceed to Stage 4.

---

### Stages 4-5 — Mockup Generation + Human Curation

**Stage 4 — Mockup Generation:**

Generate instructions for running the mockup prompt template (from Stage 3) once per research document to produce approximately 10 HTML mockups.

Each run:
1. Open a new chat
2. Paste the mockup prompt template
3. Attach/paste one research document from your processed research
4. The agent produces a standalone HTML mockup file
5. Save as `mockup-[N]-[source-name].html`

**Stage 5 — Human Curation:**

Generate a curation template that the user fills out manually after reviewing each mockup. This is the critical human-in-the-loop step — the user's taste and judgment guide the final direction.

Curation template per mockup:

```
MOCKUP #{N} (based on: {source name})

LIKED:
- {specific elements, colors, layouts, interactions that worked well}

DIDN'T LIKE:
- {what felt wrong, off-brand, cluttered, or ineffective}

STEAL THIS:
- {specific elements to carry into the final design — be precise: "the card shadow style", "the header gradient", "the 2-column layout for the dashboard"}
```

Format the output as a clearly labeled, copy-pasteable block:

```
--- MOCKUP GENERATION + CURATION INSTRUCTIONS (Stages 4-5) ---
[the full instructions and curation template]
--- END ---
```

Include instructions for the user:

> **How to run Stages 4-5:**
> 1. For each research document, open a new chat and run the mockup prompt template from Stage 3.
> 2. Save each mockup HTML file. Open them in your browser to review.
> 3. Mockups can be generated in parallel — each is independent.
> 4. After generating all mockups, review each one in your browser.
> 5. Fill out the curation template for EVERY mockup — even ones you don't like (the "DIDN'T LIKE" notes are valuable).
> 6. Save all curation notes in one file: `curation-notes.md`.
> 7. When all mockups are curated, proceed to Stage 6.

---

### Stage 6 — Vision Aggregation

Generate a prompt that takes all curation notes + PRD + Brief and produces a **Unified Design Vision Document**. The prompt must be self-contained — the agent running it has ZERO context beyond the materials provided.

The prompt must instruct the agent to produce a document with these sections:

**1. DESIGN DIRECTION**
- Synthesized from all "LIKED" and "STEAL THIS" curation notes
- The overall visual personality of the product in 2-3 sentences
- Mood board description (the feeling the design should evoke)

**2. COLOR AND TYPOGRAPHY**
- Unified color palette distilled from curated preferences
- Primary, secondary, accent, neutral, semantic colors with rationale
- Type pairing recommendation with hierarchy levels
- Rationale connecting choices to the product's goals

**3. LAYOUT PATTERNS**
- Consistently preferred layout approaches across mockups
- Grid system recommendation
- Page structure patterns (header, content, sidebar, footer variations)
- Responsive strategy

**4. INTERACTIONS AND ANIMATIONS**
- Grouped by type: hover, transition, loading, feedback, scroll-triggered
- Specific interaction patterns the user liked
- Animation personality (playful, subtle, dramatic, minimal)

**5. COMPONENT INVENTORY**
- Specific components mentioned in curation notes, with descriptions
- Buttons, cards, modals, navigation, forms, tables, etc.
- Component behavior notes (states, variations)

**6. REJECTED PATTERNS**
- Explicit no-go's compiled from all "DIDN'T LIKE" notes
- Anti-patterns to actively avoid
- Rationale for each rejection

Format the output as a clearly labeled, copy-pasteable block:

```
--- VISION AGGREGATION PROMPT (Stage 6) ---
[the full prompt]
--- END ---
```

Include instructions for the user:

> **How to run Stage 6:**
> 1. Open a new chat. Paste this prompt, then attach your `curation-notes.md`, PRD, and product brief.
> 2. The agent produces a Unified Design Vision Document.
> 3. Review it carefully — this is the foundation for everything that follows.
> 4. Save as `design-vision.md`.
> 5. Proceed to Stage 7.

---

### Stage 7 — Design System

Generate a prompt that takes the Vision Document + PRD and produces a **complete design system** with exact, implementable values. The prompt must be self-contained.

The prompt must instruct the agent to produce:

**1. COLOR TOKENS**
- Full token list: `--color-primary`, `--color-primary-hover`, etc.
- Hex values, HSL values, and opacity variants
- Semantic tokens: `--color-success`, `--color-error`, `--color-warning`, `--color-info`
- Surface tokens: `--color-bg-primary`, `--color-bg-secondary`, `--color-bg-elevated`

**2. TYPOGRAPHY SCALE**
- Font families with fallback stacks
- Size scale (from caption to display) with exact rem/px values
- Line heights per size
- Font weights used and when
- Letter spacing values

**3. SPACING SYSTEM**
- Base unit and scale (e.g., 4px base: 4, 8, 12, 16, 24, 32, 48, 64, 96)
- Named tokens: `--space-xs`, `--space-sm`, etc.
- Component internal padding conventions
- Section spacing conventions

**4. BORDER RADIUS**
- Scale: `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-full`
- Which components get which radius

**5. SHADOWS**
- Elevation scale: `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-xl`
- Exact box-shadow values
- When to use each elevation level

**6. COMPONENT SPECS**
- Every component from the vision document with exact specs:
  - Dimensions, padding, margins
  - Colors (referencing tokens)
  - Typography (referencing scale)
  - Border, radius, shadow (referencing tokens)
  - States: default, hover, active, focus, disabled
  - Variants if applicable

**7. ANIMATION TOKENS**
- Duration scale: `--duration-fast`, `--duration-normal`, `--duration-slow`
- Easing functions: `--ease-in`, `--ease-out`, `--ease-in-out`, `--ease-bounce`
- Standard transitions: what property, what duration, what easing

**8. RESPONSIVE BREAKPOINTS**
- Breakpoint values and names
- What changes at each breakpoint (layout shifts, font scaling, component adaptations)

**9. ACCESSIBILITY REQUIREMENTS**
- Minimum contrast ratios for all text/background combinations
- Focus indicator specifications
- Touch target sizes
- Reduced motion alternatives for all animations

Format the output as a clearly labeled, copy-pasteable block:

```
--- DESIGN SYSTEM PROMPT (Stage 7) ---
[the full prompt]
--- END ---
```

Include instructions for the user:

> **How to run Stage 7:**
> 1. Open a new chat. Paste this prompt, then attach `design-vision.md` and your PRD.
> 2. The agent produces a complete design system with exact values.
> 3. Review the system — especially color contrast and spacing scale.
> 4. Save as `design-system.md`.
> 5. Proceed to Stage 8.
>
> **Tip:** UI UX PRO MAX (uiuxpromax.com) is recommended for this stage.

---

### Stages 8-9 — Screen Prompts + Production

**Stage 8 — Screen Prompt Generation:**

Generate a prompt that takes the Design System + Vision Document + PRD and produces a **sequence of screen-level prompts**. Each screen prompt must be precise enough for an AI builder to produce a pixel-accurate implementation. The prompt must be self-contained.

The prompt must instruct the agent to produce one prompt per screen, where each screen prompt includes:

1. **SCREEN NAME AND PURPOSE** — what this screen does in the user flow
2. **EXACT LAYOUT** — grid structure, section order, component placement
3. **EXACT COLORS** — token name AND hex value for every element
4. **EXACT TYPOGRAPHY** — font, size, weight, line-height, color for every text element
5. **EXACT SPACING** — margins, padding, gaps using token names and pixel values
6. **COMPONENTS WITH STATES** — every component on the screen with all its states (default, hover, active, focus, disabled, loading, error, empty)
7. **ANIMATIONS WITH SPECS** — trigger, property, duration, easing, delay for every animation
8. **REAL CONTENT** — actual text, labels, and data from the PRD (not placeholder)
9. **RESPONSIVE NOTES** — what changes at each breakpoint for this screen

**Stage 9 — Production:**

Generate instructions for taking screen prompts to the user's chosen production tool.

Format the output as a clearly labeled, copy-pasteable block:

```
--- SCREEN PROMPTS + PRODUCTION INSTRUCTIONS (Stages 8-9) ---
[the full prompt and instructions]
--- END ---
```

Include instructions for the user:

> **How to run Stages 8-9:**
> 1. Open a new chat. Paste this prompt, then attach `design-system.md`, `design-vision.md`, and your PRD.
> 2. The agent produces one detailed prompt per screen.
> 3. Save as `screen-prompts.md`.
> 4. Take each screen prompt to your production tool ({user's chosen tool}) and generate the actual screens.
> 5. Screen prompts can be run in parallel — each is independent.

---

## Output Format

When generating the full pipeline, present all stages as clearly separated, copy-pasteable blocks with user instructions between each:

```
========================================
STAGE 0 — RESEARCH PLAN GENERATION
========================================

--- RESEARCH PLAN PROMPT (Stage 0) ---
[prompt]
--- END ---

[User instructions for Stage 0]

========================================
STAGES 1-2 — RESEARCH PROCESSING (KB BUILDER)
========================================

--- RESEARCH PROCESSING INSTRUCTIONS (Stages 1-2) ---
[instructions]
--- END ---

[User instructions for Stages 1-2]

========================================
STAGE 3 — PROTOTYPE PROMPT GENERATION
========================================

--- PROTOTYPE PROMPT TEMPLATE (Stage 3) ---
[prompt template]
--- END ---

[User instructions for Stage 3]

========================================
STAGES 4-5 — MOCKUP GENERATION + HUMAN CURATION
========================================

--- MOCKUP GENERATION + CURATION INSTRUCTIONS (Stages 4-5) ---
[instructions and template]
--- END ---

[User instructions for Stages 4-5]

========================================
STAGE 6 — VISION AGGREGATION
========================================

--- VISION AGGREGATION PROMPT (Stage 6) ---
[prompt]
--- END ---

[User instructions for Stage 6]

========================================
STAGE 7 — DESIGN SYSTEM
========================================

--- DESIGN SYSTEM PROMPT (Stage 7) ---
[prompt]
--- END ---

[User instructions for Stage 7]

========================================
STAGES 8-9 — SCREEN PROMPTS + PRODUCTION
========================================

--- SCREEN PROMPTS + PRODUCTION INSTRUCTIONS (Stages 8-9) ---
[prompt and instructions]
--- END ---

[User instructions for Stages 8-9]
```

---

## Pro Tips

- **Parallel stages:** Stages 0 and 3 can run in parallel — both only need PRD + Brief as input.
- **Parallel mockups:** Stage 4 mockups can run in parallel — each is independent and uses a different research source.
- **UI UX PRO MAX** (uiuxpromax.com) is recommended for Stage 7 (Design System generation).
- **Session length:** If any stage conversation gets long, use **Transfer (T)** to save state and continue in a fresh session.
- **Curation is the bottleneck:** Stage 5 is manual and the most important step. Don't rush it. Your taste is what makes this pipeline produce good results, not just average ones.
- **Iterative refinement:** After Stage 6, you can loop back to Stage 4 with revised mockup prompts if the vision needs more exploration in a specific direction.
- **Living design system:** The design system from Stage 7 is a living document. Update it as you build and discover edge cases.

---

## Cross-References

- **Boomerang (B)** — Stage 0 uses the Boomerang pattern for research plan generation. For single-topic research without the full pipeline, use Boomerang directly.
- **KB Builder** — Stages 1-2 use the KB Builder workflow for research processing. For general knowledge base building, use KB Builder directly.
- **Orchestrate (O)** — The overall pipeline structure follows the Orchestrate pattern. For general multi-step project coordination, use Orchestrate directly.
- **Recon (R)** — Useful if you need to observe competitor apps that are already live, or inspect a specific design system or component library during research.
- **Transfer (T)** — Use Transfer to checkpoint any stage that grows too long or spans sessions.
