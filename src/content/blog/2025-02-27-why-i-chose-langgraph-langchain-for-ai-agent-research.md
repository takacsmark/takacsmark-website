---
title: "Why I Chose LangGraph and LangChain Over Other AI Agent Frameworks for Lab Work?"
description: "A breakdown of the frameworks I evaluated for our multi-agent AI work and why LangGraph and LangChain fit best for my research."
pubDate: "Feb 27 2025"
slug: "why-i-chose-langgraph-langchain-for-ai-agent-research"
---

When setting up our **Agentic Lab**, one of the first things I had to decide was **which framework to use for building AI agents**. There were a couple of options, but in the end, it boiled down to **LangGraph for research and AutoGen for user-facing workflows**.

## **TL;DR**

After testing multiple frameworks, I chose **LangGraph and LangChain** for **building and researching AI agents**, while I plan to use **AutoGen for agentic workflows where I’m the user**.

- **LangGraph is the right level for building agent logic.**
- **It allows deep customization of agent behavior.**
- **Great selection of available models.**
- **Plenty of pre-built tools for common workflows.**
- **Custom tool development is straightforward.**
- **LangGraph Studio and LangSmith provide useful debugging and tracking tools.**
- **AutoGen is a strong option for agentic workflows where I’m interacting with the agents rather than building them.**

LangChain has the most stars on GitHub (at least for now), while **AutoGen Studio** looks promising for cases where I need a **more user-friendly approach**. I’ll definitely experiment with it in the future.

---

## **What I Tested and Why They Didn’t Fit**

I evaluated several frameworks, making my **shortlist with ChatGPT** before running actual experiments.

- **[LangGraph](https://python.langchain.com/docs/langgraph/)** – Probably the most widely used **structured AI workflow framework**. Built on top of LangChain, it allows for **fine control over agent interactions**, supports **graph-based execution**, and comes with **LangGraph Studio**, which makes it easy to visually track and debug agent behavior.

- **[CrewAI](https://crewai.com/)** – A simpler orchestration framework for multi-agent setups. It’s **easy to use** and great for quick deployments, but I found it **too opinionated** for my needs. It abstracts away too much, making it harder to tweak agent behaviors or experiment with **non-standard workflows**.

- **[ParlAI](https://ai.meta.com/tools/parlai/)** – A research-oriented framework from Facebook AI that looked **promising in terms of vision**, but it was **archived in 2023**, which made it a no-go.

- **[AutoGen](https://microsoft.github.io/autogen/0.2/)** – Developed by Microsoft, **AutoGen** looks extremely promising. The **no-code builder** is especially tempting, as I’ve been using **ComfyUI** for a long time. However, I didn’t choose it (for now) because:

  - The learning curve **felt steeper** compared to LangGraph.
  - Tooling seems **less pre-built**, requiring more setup.
  - LangGraph’s workflow **fits my thought process better**.  
    That said, I’ll **definitely revisit AutoGen**, especially its **Studio feature**.

- **Custom Python Code** – I considered building **my own framework from scratch**, which would have given me full control. However, I quickly realized this would mean **spending too much time maintaining low-level implementations** instead of focusing on **actual research**.

---

## **Why I Chose LangGraph + LangChain**

After testing, **LangGraph and LangChain** stood out as the best fit for my research work. The key reasons:

- **Flexibility & Customization** – LangGraph allows me to **define complex agent interactions**, making it easy to simulate **multi-agent behavior with structured workflows**.
- **Integrated Debugging & Visualization** – The **Studio feature** in LangGraph is a so practical for tracking agent behavior over time, which is **crucial for studying emergent interactions**.
- **Active Ecosystem & Community Support** – LangChain has **a well-maintained library**, plenty of integrations, and an active user base. This means I can iterate faster rather than reinventing basic components.
- **Pre-built tooling** – LangGraph/LangChain come with **ready-to-use tools**, speeding up development so I can focus on core agent interactions.
- **Engineering feel** – LangGraph feels like it’s **built by engineers for engineers**. The logic aligns with how I think, and building agents feels **natural**. While I like **node-based interfaces** (like ComfyUI), LangGraph is simply the **best tool to get the lab up and running fast**.

---

## **What I’ll Use It For**

This setup will power multiple research directions at the **Agentic Lab**:

- **Multi-Agent Simulations** – My first project is developing **multi-agent conversation simulations** for **behavior modeling**, starting with **baby-daddy interactions**. LangGraph makes it easy to define **personality shifts and feedback loops** over time. It's also **straightforward to run large-scale interaction cycles**, log results in a structured way, and **build datasets** for behavior and personality development research, reports, and visualization.

- **AI Agent Evaluation** – I’m building a framework to **evaluate AI agent traits**, starting with **personality trait evaluation** for **workspace safety simulations**. This involves **structured dialogues, measuring behavioral patterns**, and integrating public datasets. LangGraph makes **data handling and evaluation integration** seamless.

- **Research Automation** – I’ve built a **research agent** to assist with **web and academic research**. LangChain’s integrations make it easy to expand its capabilities, **adding PDF analysis** and refining output control.

---

## **Final Thoughts**

LangGraph and LangChain **offer the right balance** between **structured execution and open-ended experimentation**, making them the best fit for my work. **I didn’t want a black-box system or an overly rigid framework**—I needed something that let me **test, iterate, and refine** without fighting the tools themselves.

After building my first few agents, I realized **LangGraph is the right tool for experiments** where I need **custom logic, data collection, or evaluation tools**.

On the other hand, for workflows where **I am the user, not the builder**, I see **AutoGen Studio** being a better fit. **My research automation agent, for example, might be simpler and more user-friendly in AutoGen Studio.** I’ll likely transition to it in the coming weeks for those use cases.
