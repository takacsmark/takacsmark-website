---
title: "Simulating AI Agent Behavior: First Experiments with Personality and Adaptation"
description: "My first experiments in AI agent behavior modeling—building multi-agent simulations, testing role-playing abilities in LLMs, and exploring how AI personalities evolve over time."
pubDate: "Feb 24 2025"
slug: "simulating-ai-agent-behavior-baby-daddy-interaction"
---

The key focus of the **Agentic Lab** is **AI agent behavior** — how agents interact, adapt, and evolve over time. I started my lab work by setting up a **multi-agent conversation simulation** focused on **baby-daddy interactions**.

## **Why Do This?**

When I first heard about Artificial Intelligence in 1995, my first thought was:

> _We can use this technology to understand how human beings work._

Most of our **most mysterious traits** — consciousness, personality, fears, traumas, and joy—cannot be observed just by examining the **physical parts** of the body. These are **emergent phenomena**, appearing only when everything interacts at a higher level.

One of the most **fundamental realizations of my life (so far)** is that we, as humans, **judge everything with the unspoken assumption that we know who we are**. We assume our perception of reality is accurate, yet **modern psychology, cognitive science, and behavioral research suggest otherwise**.

Recent research suggests that **childhood experiences shape our personality, decision-making, and even DNA expression**. We are products of our environment; what we experience early in life **determines how we think, react, and grow**.

This raises a fundamental question:

> _Can we use AI to model and explore this development?_

That’s the focus of my research. I want to see whether **agentic simulations can help us understand human development**; how environmental factors shape personality and decision-making over time.

Beyond the human aspect, on a practical level, it’s also critical to understand **how AI agents develop their own personalities over time** and how we can **build collaborative AI partners** that adapt and work with humans effectively.

---

## **What’s Done So Far**

I built a **basic agent-to-agent conversation system** where **two AI agents simulate an interaction**. While my **main research focus is workplace psychological safety and toxic environments**, I started with something more **heartwarming**: a conversation between a **baby and its daddy** exploring different topics about life.

I first built the simulation in **pure Python**, then rebuilt it using **LangGraph/LangChain** for better structure and long-term scalability. The goal was to **set up baseline conversations** and **log interactions in OpenAI format** to create a dedicated dataset.

So far, I have run several rounds of discussions on various topics. The **next phase** will introduce **feedback loops** that allow **agents to change personality over time**, adapting based on the conversations they experience. This is where the real behavior analysis begins.

---

## **Choosing the Right LLM**

I tested multiple **open-source models** for role-playing performance:

I chose `mistral-nemo` for this experiment. I prefer open-source models in my lab work, and I found that **`mistral-nemo` performs really well for role-playing tasks**. It also works great for **generating text-to-image prompts**, where I also use role-playing techniques in my configuration. The agents' roles are defined using system prompts.

I also tested `llama 3.2`, `qwen`, and `deepSEek`, but role-playing **didn’t really take off** with these models. I plan further runs with smaller models like `smollm2` and `tinyllama`.

I've tested `nemotron-mini` in the past, a model claiming to be optimized for role-playing. I didn’t really see this in practice, but I’ll give it another try.

---

## **Takeaways**

- **LLM models vary significantly in their ability to role-play.**  
  AI agents that serve and work with people will eventually need to **adapt to their human partners through personality adaptation**. Role-playing ability will be a major factor in how well AI integrates into human collaboration.

- **System prompts shape attitude, but not deep personality.**  
  While system prompts influence an AI’s behavior, they don’t fundamentally change its personality.

- **Fine-tuning creates true personality shifts.**  
  I fine-tuned `mistral-nemo`, and the personality change was **dramatic**. It makes me think, **humans perceive personality through language**. If you change an AI’s **language patterns**, it feels like you’ve changed its **identity**. I need to research this aspect of human behavior in more detail.

---

## **Next Steps**

The real behavior analysis begins when I **add feedback loops**:

- **First, I’ll experiment with updating system prompts dynamically.**
- **Next, I’ll merge interaction data into models via fine-tuning.**
- **Finally, I’ll evaluate how much the AI’s personality shifts over time.**

This also raises an important research question:

> **How can I benchmark an AI agent’s personality change over time through adaptive feedback?**

Understanding this is crucial for **agent evaluation**. Eventually, this work will serve as a foundation for **more advanced behavioral modeling**. But for now, the focus is on **getting the fundamentals right**.
