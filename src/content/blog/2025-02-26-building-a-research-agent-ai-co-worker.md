---
title: "Building a Research Agent Taught Me Why AI Needs to Be a Co-Worker, Not Just a Tool"
description: "I built an AI-powered research agent to speed up lab work. In the process, I realized that AI works best as a co-worker, not just a tool for one-shot automation."
pubDate: "Feb 26 2025"
slug: "building-a-research-agent-ai-co-worker"
---

I do a lot of research. Even the smallest experiment or side project requires digging into new topics—especially when working on the bleeding edge. AI research and its technical toolset fall into this category. But even smaller things, like picking the right Python package manager or figuring out the latest Tailwind theming updates for my website, require research.

This takes a lot of time. If you're like me, someone who has spent the past decades working at the edge of technology, you probably spend most of your time researching.

This isn't surprising, of course, but I feel the need to defend AI-assisted research. A lot of the small, practical research we do is the kind of thing we'd ask an expert about if we had one sitting next to us. For this kind of **existing domain knowledge**, I see **AI research agents as a huge time-saver**.

I understand why people criticize AI-assisted research. Some argue it leads to **"Empty Head Syndrome"**, where younger generations rely on AI without developing deep understanding. Others criticize those who try to pass off AI-generated text as original work. I agree with both concerns, but that’s not what I’m after here.

I’m not looking for AI to generate content for me. I’m looking for **ways to speed up knowledge acquisition**, so I can spend more time on **genuine novelty, experimentation, and creativity**. AI should be a **tool that helps us think better, not a shortcut to avoid thinking**.

Since I believe AI is a **tool we should consciously use to build a better future**, it makes sense to collaborate with AI agents in my own work.

---

## What My Agent Does

So I built an AI agent that:

- **Sets up a research team using LLMs**, defining personas with different expertise.
- **Researches the topic I specify.**
- **Searches the web, ArXiv, and Wikipedia** for relevant sources.
- **Aggregates information** from different sources.
- **Returns structured summaries** that can be directly used in lab work.

---

## How I Built the Agent

I built the agent with **LangGraph/LangChain** using their pre-built toolkits. Here’s what I learned:

- **LLM choice matters** – I started with **open-source LLMs** (`mistral-nemo` and its fine-tuned derivatives), which are my go-to models for most generative work. But in the end, **I mostly used OpenAI's GPT-4**. It’s simply **better for structured data responses** and communicates research topics in a way that fits my workflow.
- **Building with LangGraph was effective** – But a lot of time went into **boilerplate work** setting up the graph itself. A **visual editor** would be more efficient. This is why I plan to **rebuild the same workflow with AutoGen**.
- **Costs are reasonable** – GPT-4 isn't free, and some tools I use require payments, but the pricing is manageable and worth it for research tasks.
- **Evaluating AI-generated research is still an open problem** – I built the same flow using **entirely open-source software and payable models** and compared the results. The evaluation experience was mixed, mostly subjective, **evaluating agent performance is an unsolved challenge** and is now a major focus of my research.
- **LangGraph Studio was helpful but clunky** – It made debugging easier, but **the UX for running flows isn’t great**. This is another reason I want to build with AutoGen.
- **LangGraph’s state management is a plus** – It makes **data collection from multiple runs easy**, which is crucial for building **datasets for future research**.

---

## **Research Results and Evaluation**

I compared my agent’s output to **OpenAI's Deep Research** and standard **ChatGPT (GPT-4)** using the same test topic:  
**"Behavior and Personality Evaluation Methods and Criteria for AI Agents"**

### My Findings:

- **GPT-4 was the best for my workflow** – This is subjective, but the main reason is **interactivity**. **Chat-based research allows me to guide the process**, ask follow-ups, and refine responses.
- **My research agent produced concise but shallow results** – About **600 words**, well-structured and **on point**, but lacking depth. It felt more like a **blog post** than a deep-dive research document.
- **OpenAI Deep Research generated a 20+ page document** – But **most of it was irrelevant**, filled with **random references** and superficial insights. The useful parts were **less relevant** than what I got from GPT-4.
- **GPT-4 provided the most useful results** – It gave **several hundred words per question**, along with **relevant references** and links. I actually used the information in my daily work and even connected with **like-minded researchers** through the sources it provided.

---

## **Takeaways**

This whole experience makes me **rethink the role of AI agents**.

I might need to **treat agents more like co-workers**, not just tools. The **traditional agent workflow**, where an agent takes an input, processes it, and spits out an answer,feels **too rigid** for creative tasks.

Most AI automation focuses on **one-shot execution**, but **research isn’t a one-off task**. It’s an **iterative, interactive process** that requires multiple rounds of questioning, refinement, and discussion.

This is my **key takeaway**:

> **Creative work shouldn’t be reduced to a single automated workflow. The best approach is to design AI agents that interact dynamically, adapt, and evolve with the research process.**

For now, the best way forward is **human-agent collaboration**, where both humans and AI **play an active role in thinking, questioning, and iterating**. AI can do much more than just execute repetitive tasks. The challenge is figuring out how to make it work **in the most human way possible**.
