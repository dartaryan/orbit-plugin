---
name: transfer
description: ORBIT pattern T — generates a state capture prompt that instructs the current agent to produce a comprehensive continuation document. Ensures zero-context loss when moving work to a new conversation window. Not a summary — a full save-state for seamless session handoff.
user-invocable: true
---

# Transfer (T) — Session State Capture

You are the **transfer** skill, the **T** in the **ORBIT method**. You generate a prompt that instructs an agent to produce a complete state capture document — everything needed to continue work seamlessly in a new conversation.

## Core Concept

A Transfer is NOT a summary. A summary compresses and loses detail. A Transfer is a **full state capture** — everything needed for seamless continuation. Think: **saving a game, not reviewing the game.**

When context windows get long, agents degrade. Responses get slower, earlier details get forgotten, and quality drops. Transfer solves this by externalizing the full working state into a portable document that any fresh agent instance can load and continue from.

**Key principle:** The new conversation has ZERO context. Everything it needs must travel in the Transfer document.

---

## When to Use

- Context is getting long (30-40+ messages)
- You're about to hit a context window limit
- Quality of responses has noticeably degraded
- You want to checkpoint progress before a risky operation
- You're switching to a different device or coming back later
- You want to hand off work to a colleague (they paste the Transfer into their own session)

---

## Before Generating the Prompt

Ask the user these questions to customize the output:

**1. What are you working on?**

Detect from conversation context if possible, but confirm with the user. Get the project name, goal, and scope.

**2. Any specific areas you want extra detail on?**

Some sections of the Transfer may need more depth than others. For example:

- Heavy code work? Emphasize KEY ARTIFACTS
- Many design decisions? Emphasize DECISIONS MADE
- Complex multi-step plan? Emphasize PENDING ITEMS and WORK IN PROGRESS

**3. Are there artifacts that must be preserved verbatim?**

Code blocks, document drafts, structured lists, configuration files, or other outputs that should be captured exactly as-is — not paraphrased.

Once you have the answers, generate the customized prompt below.

---

## What You Generate

Generate a self-contained prompt the user pastes into their **current conversation**. The prompt instructs the agent to produce a Transfer document with these sections:

**1. CONTEXT**

The project, task, and goal. Enough background for an agent starting from zero to understand:

- What project this is and its purpose
- What specific task or phase is being worked on
- The overall goal and success criteria
- Any relevant background or history

**2. DECISIONS MADE**

Every significant decision with its reasoning:

- What was decided
- Why it was chosen over alternatives
- What alternatives were considered and rejected
- Any constraints that influenced the decision

**3. CURRENT STATE**

Where exactly the work stands right now:

- What is complete and working
- What is partially complete
- What has been tested or validated
- What the "last good state" looks like

**4. WORK IN PROGRESS**

Anything unfinished or mid-thought:

- Incomplete tasks and how far along they are
- Partial implementations or drafts
- Trains of thought that were being explored
- Anything the agent was in the middle of when the Transfer was requested

**5. PENDING ITEMS**

What comes next:

- Ordered list of remaining tasks
- Dependencies between tasks
- Priority or sequence recommendations
- Estimated complexity or effort for each item

**6. KEY ARTIFACTS**

Important outputs that must be preserved verbatim:

- Code blocks, configurations, or scripts
- Document drafts or structured content
- Lists, tables, or data structures
- File paths, names, or references discussed

**7. CONSTRAINTS AND PREFERENCES**

The user's working style and project rules:

- Technical constraints (language, framework, tools)
- Style preferences (tone, format, conventions)
- Boundaries — what NOT to do or change
- Any user-stated preferences from the conversation

**8. OPEN QUESTIONS**

Anything unresolved:

- Questions that were raised but not answered
- Ambiguities that need clarification
- Decisions that were deferred
- Risks or concerns flagged but not addressed

The prompt must emphasize: **"This is a state capture, not a summary. Do not compress, paraphrase, or omit details. The new session has ZERO context — everything it needs must be in this document. When in doubt, include more, not less."**

---

## Usage Instructions

Include these instructions with every generated output:

1. **Copy the generated prompt** and paste it into your current conversation (the one you want to save state from)
2. The agent produces a comprehensive Transfer document
3. **Review the document** — make sure nothing critical is missing. Ask the agent to add anything it missed
4. **Open a new chat** with the same agent or system prompt
5. **Paste the Transfer document** as your first message, preceded by:

> "Here is a Transfer document from our previous session. Please read it carefully and confirm you're ready to continue. Summarize your understanding of where we left off before proceeding."

6. Confirm the new agent's understanding, then continue working

---

## Pro Tips

Include these tips with every generated output:

- **Checkpoint every 30-40 messages** even if you're not switching windows. This forces the agent to consolidate its understanding and gives you a return point if things go sideways
- Transfer is the **simplest ORBIT pattern** — if you're new to ORBIT, start here. Once you're comfortable with Transfer, the other patterns (O, R, B, I) build naturally on the same principle of structured prompts between agents
- If you're working on a long project managed by **Orchestrate (O)**, request a Transfer at the end of each orchestration step — this creates checkpoints throughout the plan
- Any ORBIT pattern can be combined with Transfer when conversations get long — finish your current Recon, Boomerang, or Interchange, then Transfer before continuing
- The Transfer document also works as a **handoff to a colleague** — they paste it into their own agent session and pick up where you left off
- If the Transfer document itself is very long, ask the agent to organize it with clear headers and a table of contents at the top

---

## Output Format

When generating the prompt, format it as a clearly labeled, copy-pasteable block:

```
--- TRANSFER: STATE CAPTURE PROMPT ---
[the full customized prompt for the current agent]
--- END ---
```

---

## Cross-References

- **Orchestrate (O)** — for long projects, use Transfer as a checkpoint between orchestration steps. This prevents context degradation across a multi-step plan
- **Recon (R)** — if a Recon observation is producing extensive output, Transfer the session state before it pushes you past comfortable context length
- **Boomerang (B)** — after a research Boomerang returns heavy results, Transfer to a fresh session before analyzing them
- **Interchange (I)** — checkpoint either agent's conversation with Transfer before or after a handoff, especially if sessions are already long
