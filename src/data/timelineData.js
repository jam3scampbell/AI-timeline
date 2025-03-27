// src/data/timelineData.js

import { text } from "framer-motion/client";

export const CATEGORIES = {
  MODEL_RELEASE: "MODEL_RELEASE",
  CULTURE: "CULTURE",
  BUSINESS: "BUSINESS",
  RESEARCH: "RESEARCH",
  POLICY: "POLICY",
};

function createLink(url, title) {
  return `<a href="${url}" target="_blank" rel="noopener noreferrer">${title}</a>`;
}

export const TIMELINE_DATA = {
  events: [
    {
      start_date: { year: "2015", month: "11", day: "09" },
      text: {
        headline: createLink(
          "https://www.wired.com/2015/11/google-open-sources-its-artificial-intelligence-engine/",
          "TensorFlow"
        ),
        text: "<p>Google open-sources TensorFlow, its internal deep learning framework. Initially developed by the Google Brain team, TensorFlow would become one of the most influential AI frameworks.</p>",
      },
      chinese: {
        headline: createLink(
          "https://www.wired.com/2015/11/google-open-sources-its-artificial-intelligence-engine/",
          "TensorFlow"
        ),
        text: "<p>Google 开源了 TensorFlow，这是其内部的深度学习框架。最初由 Google Brain 团队开发，TensorFlow 最终成为最具影响力的人工智能框架之一。</p>",
      },
      importance: 2,
      category: CATEGORIES.RESEARCH,
    },
    {
      start_date: { year: "2015", month: "12", day: "11" },
      text: {
        headline: createLink(
          "https://openai.com/index/introducing-openai/",
          "OpenAI founded"
        ),
        text: "<p>Elon Musk, Sam Altman, Greg Brockman, and others founded OpenAI with the goal of building AGI to benefit humanity.</p>",
      },
      chinese: {
        headline: createLink(
          "https://openai.com/index/introducing-openai/",
          "OpenAI founded"
        ),
        text: "<p>Elon Musk、Sam Altman、Greg Brockman 等人创立了 OpenAI，目标是构建有益于人类的通用人工智能（AGI）。</p>",
      },
      importance: 3,
      category: CATEGORIES.BUSINESS,
    },
    {
      start_date: { year: "2016", month: "03", day: "09" },
      text: {
        headline: createLink(
          "https://deepmind.google/research/breakthroughs/alphago/",
          "AlphaGo"
        ),
        text: "<p>DeepMind's AlphaGo defeats top human player Lee Sedol in the board game Go, defying what many considered possible.</p>",
      },
      chinese: {
        headline: createLink(
          "https://deepmind.google/research/breakthroughs/alphago/",
          "AlphaGo"
        ),
        text: "<p>DeepMind 的 AlphaGo 击败围棋世界冠军李世石，打破了人们对人工智能在这一领域能力的固有认知。</p>",
      },
      importance: 2,
      category: CATEGORIES.RESEARCH,
    },
    {
      start_date: { year: "2016", month: "8", day: "31" },
      text: {
        headline: createLink(
          "https://github.com/pytorch/pytorch/releases/tag/v0.1.1",
          "PyTorch"
        ),
        text: "<p>Facebook releases PyTorch, a Python-first deep learning framework that would eventually become the dominant framework for AI research.</p>",
      },
      chinese: {
        headline: createLink(
          "https://github.com/pytorch/pytorch/releases/tag/v0.1.1",
          "PyTorch"
        ),
        text: "<p>Facebook 发布了 PyTorch，这是一款以 Python 为主的深度学习框架，后来成为 AI 研究领域的主流工具。</p>",
      },
      importance: 2,
      category: CATEGORIES.RESEARCH,
    },
    {
      start_date: { year: "2017", month: "01", day: "05" },
      text: {
        headline: createLink(
          "https://futureoflife.org/event/bai-2017/",
          "Asilomar Conference"
        ),
        text: "<p>Organized by the Future of Life Institute, all of the top names in the field gather for a conference in Asilomar to discuss how to build AGI beneficially.</p>",
      },
      chinese: {
        headline: createLink(
          "https://futureoflife.org/event/bai-2017/",
          "Asilomar Conference"
        ),
        text: "<p>由 Future of Life Institute 组织，该领域所有顶尖人物齐聚 Asilomar 会议，共同讨论如何构建有益于人类的 AGI.</p>",
      },
      importance: 1,
      category: CATEGORIES.CULTURE,
    },
    {
      start_date: { year: "2017", month: "06", day: "12" },
      text: {
        headline: createLink(
          "https://arxiv.org/abs/1706.03762",
          "Attention is All You Need"
        ),
        text: "<p>Google introduces the transformer architecture, a breakthrough deep learning architecture based on the attention mechanism. The architecture shows strong gains on language translation tasks.</p>",
      },
      chinese: {
        headline: createLink(
          "https://arxiv.org/abs/1706.03762",
          "Attention is All You Need"
        ),
        text: "<p>Google 推出了 Transformer 架构，这是一种基于注意力机制的突破性深度学习架构。该架构在语言翻译任务上取得了显著提升。</p>",
      },
      importance: 3,
      category: CATEGORIES.RESEARCH,
    },
    {
      start_date: { year: "2017", month: "06", day: "12" },
      text: {
        headline: createLink("https://arxiv.org/abs/1706.03741", "RLHF"),
        text: "<p>Christiano et al. publish the technique of reinforcement learning from human feedback (RLHF), which would later be used extensively to align large language models.</p>",
      },
      chinese: {
        headline: createLink("https://arxiv.org/abs/1706.03741", "RLHF"),
        text: "<p>Christiano 等人发表了基于人类反馈的强化学习（RLHF）技术，该技术后来被广泛用于对齐大型语言模型。</p>",
      },
      importance: 3,
      category: CATEGORIES.RESEARCH,
    },
    {
      start_date: { year: "2017", month: "07", day: "20" },
      text: {
        headline: createLink("https://arxiv.org/abs/1707.06347", "PPO"),
        text: "<p>OpenAI introduces Proximal Policy Optimization, a simpler and more stable policy gradient method that would become widely used across many reinforcement learning domains, including RLHF.</p>",
      },
      chinese: {
        headline: createLink("https://arxiv.org/abs/1707.06347", "PPO"),
        text: "<p>OpenAI 推出了近端策略优化（PPO），这是一种更简单、更稳定的策略梯度方法，后来在许多强化学习领域（包括 RLHF）被广泛应用。</p>",
      },
      importance: 2,
      category: CATEGORIES.RESEARCH,
    },
    {
      start_date: { year: "2018", month: "06", day: "11" },
      text: {
        headline: createLink(
          "https://openai.com/index/language-unsupervised/",
          "GPT-1"
        ),
        text: "<p>OpenAI reveals the first version of its Generative Pre-trained Transformer (GPT).</p>",
      },
      chinese: {
        headline: createLink(
          "https://openai.com/index/language-unsupervised/",
          "GPT-1"
        ),
        text: "<p>OpenAI 发布了其生成式预训练 Transformer（GPT）的第一个版本。</p>",
      },
      importance: 3,
      category: CATEGORIES.MODEL_RELEASE,
    },
    {
      start_date: { year: "2018", month: "10", day: "11" },
      text: {
        headline: createLink("https://arxiv.org/abs/1810.04805", "BERT"),
        text: "<p>Google releases BERT, an encoder language model that would become ubiquitous in NLP.</p>",
      },
      chinese: {
        headline: createLink("https://arxiv.org/abs/1810.04805", "BERT"),
        text: "<p>Google 发布了 BERT，一种编码器语言模型，后来在自然语言处理领域无处不在。</p>",
      },
      importance: 2,
      category: CATEGORIES.RESEARCH,
    },
    {
      start_date: { year: "2019", month: "02", day: "14" },
      text: {
        headline: createLink(
          "https://openai.com/index/better-language-models/",
          "GPT-2"
        ),
        text: "<p>OpenAI releases GPT-2, but withholds the largest version due to concerns about misuse. A decoder-only transformer, it was trained with next token prediction to generate text.</p>",
      },
      chinese: {
        headline: createLink(
          "https://openai.com/index/better-language-models/",
          "GPT-2"
        ),
        text: "<p>OpenAI 发布了 GPT-2，但由于担心被滥用而未公开最大的版本。这是一个仅含解码器的 Transformer，使用下一个标记预测进行训练以生成文本。</p>",
      },
      importance: 3,
      category: CATEGORIES.MODEL_RELEASE,
    },
    {
      start_date: { year: "2020", month: "01", day: "23" },
      text: {
        headline: createLink(
          "https://arxiv.org/abs/2001.08361",
          "Scaling Laws"
        ),
        text: '<p>Kaplan et al. release "Scaling Laws for Neural Language Models", showing that model performance predictably scales with compute, data, and parameters. Scaling laws would become the primary driver of progress over the next few years.</p>',
      },
      chinese: {
        headline: createLink(
          "https://arxiv.org/abs/2001.08361",
          "Scaling Laws"
        ),
        text: "<p>Kaplan 等人发布了《神经语言模型的扩展定律》，展示了模型性能与计算能力、数据量以及参数量之间的可预测扩展关系。扩展定律成为未来几年进步的主要驱动力。</p>",
      },
      importance: 3,
      category: CATEGORIES.RESEARCH,
    },
    {
      start_date: { year: "2020", month: "05", day: "28" },
      text: {
        headline: createLink("https://arxiv.org/abs/2005.14165", "GPT-3"),
        text: "<p>OpenAI releases GPT-3, the largest language model at the time and shocking in its ability to generate coherent paragraphs.</p>",
      },
      chinese: {
        headline: createLink("https://arxiv.org/abs/2005.14165", "GPT-3"),
        text: "<p>OpenAI 发布了 GPT-3，当时是最大的语言模型，其生成连贯段落的能力令人惊叹。</p>",
      },
      importance: 3,
      category: CATEGORIES.MODEL_RELEASE,
    },
    {
      start_date: { year: "2020", month: "12", day: "23" },
      text: {
        headline: createLink(
          "https://deepmind.google/discover/blog/muzero-mastering-go-chess-shogi-and-atari-without-rules/",
          "MuZero"
        ),
        text: "<p>DeepMind introduces MuZero, which learned to master Go, chess, shogi, and Atari games without any knowledge of the rules.</p>",
      },
      chinese: {
        headline: createLink(
          "https://deepmind.google/discover/blog/muzero-mastering-go-chess-shogi-and-atari-without-rules/",
          "MuZero"
        ),
        text: "<p>DeepMind 推出了 MuZero，它在不了解规则的情况下学会了精通围棋、国际象棋、日本将棋和 Atari 游戏。</p>",
      },
      importance: 1,
      category: CATEGORIES.RESEARCH,
    },
    {
      start_date: { year: "2021", month: "01", day: "05" },
      text: {
        headline: createLink("https://openai.com/index/dall-e/", "DALL-E"),
        text: "<p>OpenAI introduces DALL-E, a model that generates images from textual descriptions.</p>",
      },
      chinese: {
        headline: createLink("https://openai.com/index/dall-e/", "DALL-E"),
        text: "<p>OpenAI 推出了 DALL-E，一种从文字描述生成图像的模型.</p>",
      },
      importance: 2,
      category: CATEGORIES.MODEL_RELEASE,
    },
    {
      start_date: { year: "2021", month: "05", day: "28" },
      text: {
        headline: createLink(
          "https://www.anthropic.com/news/anthropic-raises-124-million-to-build-more-reliable-general-ai-systems",
          "Anthropic founded"
        ),
        text: "<p>A group of researchers from OpenAI leave to start Anthropic, featuring an empirical hard-science culture focused on AI safety.</p>",
      },
      chinese: {
        headline: createLink(
          "https://www.anthropic.com/news/anthropic-raises-124-million-to-build-more-reliable-general-ai-systems",
          "Anthropic founded"
        ),
        text: "<p>一群来自 OpenAI 的研究者离开成立了 Anthropic，展现出以实证硬科学为文化、专注于 AI 安全的风格。</p>",
      },
      importance: 3,
      category: CATEGORIES.BUSINESS,
    },
    {
      start_date: { year: "2021", month: "06", day: "21" },
      text: {
        headline: createLink("https://arxiv.org/abs/2106.09685", "LoRA"),
        text: "<p>A team at Microsoft publishes Low-Rank Adaptation (LoRA), a technique that allows for fine-tuning of large language models with a fraction of the compute and would later become ubiquitous</p>",
      },
      chinese: {
        headline: createLink("https://arxiv.org/abs/2106.09685", "LoRA"),
        text: "<p>微软的一支团队发布了低秩自适应(LoRA)技术，这种技术允许用极少的计算资源对大型语言模型进行微调，后来变得无处不在</p>",
      },
      importance: 1,
      category: CATEGORIES.RESEARCH,
    },
    {
      start_date: { year: "2021", month: "06", day: "29" },
      text: {
        headline: createLink(
          "https://en.wikipedia.org/wiki/GitHub_Copilot",
          "GitHub Copilot"
        ),
        text: "<p>Github previews Copilot in VSCode, a tool that used OpenAI's Codex model to generate code suggestions, marking the beginning of real-world AI code generation.</p>",
      },
      chinese: {
        headline: createLink(
          "https://en.wikipedia.org/wiki/GitHub_Copilot",
          "GitHub Copilot"
        ),
        text: "<p>Github 在 VSCode 中预览了 Copilot，该工具利用 OpenAI 的 Codex 模型生成代码建议，标志着现实世界中 AI 生成代码的开始.</p>",
      },
      importance: 2,
      category: CATEGORIES.BUSINESS,
    },
    {
      start_date: { year: "2022", month: "01", day: "27" },
      text: {
        headline: createLink(
          "https://openai.com/index/instruction-following/",
          "InstructGPT"
        ),
        text: "<p>OpenAI introduces InstructGPT, a model that can follow instructions in natural language better than base GPT-3 and was a prototype of what would become ChatGPT.</p>",
      },
      chinese: {
        headline: createLink(
          "https://openai.com/index/instruction-following/",
          "InstructGPT"
        ),
        text: "<p>OpenAI 推出了 InstructGPT，一种在自然语言指令下表现优于基础 GPT-3 的模型，也是 ChatGPT 原型的前身。</p>",
      },
      importance: 1,
      category: CATEGORIES.RESEARCH,
    },
    {
      start_date: { year: "2022", month: "01", day: "28" },
      text: {
        headline: createLink(
          "https://arxiv.org/abs/2201.11903",
          "Chain-of-Thought Prompting"
        ),
        text: "<p>Google Brain publishes a paper showing gains in LLM reasoning by having them think step-by-step. Despite being such a simple technique, chain-of-thought reasoning would become foundational to AI.</p>",
      },
      chinese: {
        headline: createLink(
          "https://arxiv.org/abs/2201.11903",
          "Chain-of-Thought Prompting"
        ),
        text: "<p>Google Brain 发表了一篇论文，展示了通过让大型语言模型逐步思考可以提高其推理能力。尽管这是一种非常简单的技术，但链式思维推理后来成为 AI 的基础方法之一。</p>",
      },
      importance: 1,
      category: CATEGORIES.RESEARCH,
    },
    {
      start_date: { year: "2022", month: "03", day: "29" },
      text: {
        headline: createLink("https://arxiv.org/abs/2203.15556", "Chinchilla"),
        text: "<p>DeepMind publish the Chinchilla paper, issuing a correction to the scaling laws of Kaplan et al. and suggesting that model size and training data should be scaled in equal proportion.</p>",
      },
      chinese: {
        headline: createLink("https://arxiv.org/abs/2203.15556", "Chinchilla"),
        text: "<p>DeepMind 发布了《Chinchilla》论文，对 Kaplan 等人的扩展定律进行了修正，并提出模型大小和训练数据应按相同比例扩展。</p>",
      },
      importance: 1,
      category: CATEGORIES.RESEARCH,
    },
    {
      start_date: { year: "2022", month: "04", day: "06" },
      text: {
        headline: createLink("https://openai.com/index/dall-e-2/", "DALL-E 2"),
        text: "<p>OpenAI shocks the world with the release of DALL-E 2, which could generate realistic images from text at an unprecedented level.</p>",
      },
      chinese: {
        headline: createLink("https://openai.com/index/dall-e-2/", "DALL-E 2"),
        text: "<p>OpenAI 的 DALL-E 2 发布震撼世界，它能够以前所未有的水平从文本生成逼真的图像。</p>",
      },
      importance: 2,
      category: CATEGORIES.MODEL_RELEASE,
    },
    {
      start_date: { year: "2022", month: "05", day: "12" },
      text: {
        headline: createLink("https://arxiv.org/abs/2205.06175", "Gato"),
        text: '<p>DeepMind publish Gato in a paper titled "A Generalist Agent". Gato used a single large transformer to learn policies for 604 different RL tasks across varying modalities and observation types.</p>',
      },
      chinese: {
        headline: createLink("https://arxiv.org/abs/2205.06175", "Gato"),
        text: '<p>DeepMind 在题为 "A Generalist Agent" 的论文中发布了 Gato。Gato 使用单一大型 Transformer 学习了针对 604 个不同 RL 任务的策略，涵盖多种模态和观察类型.</p>',
      },
      importance: 2,
      category: CATEGORIES.RESEARCH,
    },
    {
      start_date: { year: "2022", month: "05", day: "27" },
      text: {
        headline: createLink(
          "https://arxiv.org/abs/2205.14135",
          "Flash Attention"
        ),
        text: "<p>A group from Stanford release Flash Attention, a new method that significantly speeds up the attention mechanism in transformers.</p>",
      },
      chinese: {
        headline: createLink(
          "https://arxiv.org/abs/2205.14135",
          "Flash Attention"
        ),
        text: "<p>斯坦福的一组研究人员发布了 Flash Attention，一种显著加速 Transformer 中注意力机制的新方法。</p>",
      },
      importance: 1,
      category: CATEGORIES.RESEARCH,
    },
    {
      start_date: { year: "2022", month: "06", day: "11" },
      text: {
        headline: createLink(
          "https://www.washingtonpost.com/technology/2022/06/11/google-ai-lamda-blake-lemoine/",
          "Blake Lemoine fired"
        ),
        text: "<p>A Google engineer named Blake Lemoine is fired after claiming that its LaMDA model was sentient. The story woke a lot of people up to the capabilities and risks of LLMs.</p>",
      },
      chinese: {
        headline: createLink(
          "https://www.washingtonpost.com/technology/2022/06/11/google-ai-lamda-blake-lemoine/",
          "Blake Lemoine fired"
        ),
        text: "<p>一位名为 Blake Lemoine 的 Google 工程师因声称 LaMDA 模型具备感知能力而被解雇，此事引发了广泛关注，凸显了对话型大型语言模型潜在风险。</p>",
      },
      importance: 1,
      category: CATEGORIES.CULTURE,
    },
    {
      start_date: { year: "2022", month: "06", day: "30" },
      text: {
        headline: createLink(
          "https://research.google/blog/minerva-solving-quantitative-reasoning-problems-with-language-models/",
          "Minerva"
        ),
        text: "<p>Google Research introduces Minerva, an LLM specialized to solve quantitative reasoning problems. Minerva moved the state-of-the-art on the MATH benchmark from 6.9% to 50.3%, surprising many who doubted that LLMs could ever be trained to do math well.</p>",
      },
      chinese: {
        headline: createLink(
          "https://research.google/blog/minerva-solving-quantitative-reasoning-problems-with-language-models/",
          "Minerva"
        ),
        text: "<p>Google Research 推出了 Minerva，一款专门解决定量推理问题的语言模型。Minerva 将 MATH 基准测试的表现从 6.9% 提升到了 50.3%，让许多人对 LLM 能否真正擅长数学产生了疑问。</p>",
      },
      importance: 2,
      category: CATEGORIES.RESEARCH,
    },
    {
      start_date: { year: "2022", month: "07", day: "10" },
      text: {
        headline: createLink(
          "https://beff.substack.com/p/notes-on-eacc-principles-and-tenets",
          "e/acc"
        ),
        text: "<p>Anonymous Twitter personalities Beff Jezos and Bayeslord start effective accelerationism (e/acc), advocating for rapid AI development. Though initially a meme, it later gains prominence in Silicon Valley and serves as a foil to cautionary AI safety voices.</p>",
      },
      chinese: {
        headline: createLink(
          "https://beff.substack.com/p/notes-on-eacc-principles-and-tenets",
          "e/acc"
        ),
        text: "<p>由匿名 Twitter 人物 Beff Jezos 和 Bayeslord 发起，有效加速主义（e/acc）倡导 AI 发展尽可能迅速。尽管最初被视为 Twitter 上的一个梗，但它后来在硅谷获得了显著影响，并作为 AI 安全论调的对立面出现。</p>",
      },
      importance: 1,
      category: CATEGORIES.CULTURE,
    },
    {
      start_date: { year: "2022", month: "07", day: "22" },
      text: {
        headline: createLink(
          "https://deepmind.google/discover/blog/alphafold-reveals-the-structure-of-the-protein-universe/",
          "AlphaFold 2"
        ),
        text: "<p>DeepMind releases AlphaFold 2, solving the protein folding problem and revolutionizing a grand challenge in biology.</p>",
      },
      chinese: {
        headline: createLink(
          "https://deepmind.google/discover/blog/alphafold-reveals-the-structure-of-the-protein-universe/",
          "AlphaFold 2"
        ),
        text: "<p>DeepMind 发布了 AlphaFold 2，解决了蛋白质折叠这一难题，并在生物学领域引发了革命性突破。</p>",
      },
      importance: 2,
      category: CATEGORIES.RESEARCH,
    },
    {
      start_date: { year: "2022", month: "08", day: "22" },
      text: {
        headline: createLink(
          "https://stability.ai/news/stable-diffusion-public-release",
          "Stable Diffusion"
        ),
        text: "<p>Stability AI open-sources Stable Diffusion (v1.4), the first strong image generation to be released to the public.</p>",
      },
      chinese: {
        headline: createLink(
          "https://stability.ai/news/stable-diffusion-public-release",
          "Stable Diffusion"
        ),
        text: "<p>Stability AI 开源了 Stable Diffusion (v1.4)，这是首个向公众发布的强大图像生成模型。</p>",
      },
      importance: 1,
      category: CATEGORIES.MODEL_RELEASE,
    },
    {
      start_date: { year: "2022", month: "09", day: "14" },
      text: {
        headline: createLink(
          "https://transformer-circuits.pub/2022/toy_model/index.html",
          "Toy Models of Superposition"
        ),
        text: "<p>Anthropic publishes a paper on a phenomenon called superposition, where the neural network packs more features than the dimensions of its representational space, posing a challenge for mechanistic interpretability.</p>",
      },
      chinese: {
        headline: createLink(
          "https://transformer-circuits.pub/2022/toy_model/index.html",
          "Toy Models of Superposition"
        ),
        text: '<p>Anthropic 发表了一篇论文，探讨神经网络中出现的 "叠加" 现象，即模型学会包装的特征数超过其表示空间的维度，这被认为是实现机械可解释性的重大障碍。</p>',
      },
      importance: 1,
      category: CATEGORIES.RESEARCH,
    },
    {
      start_date: { year: "2022", month: "09", day: "30" },
      text: {
        headline: createLink(
          "https://www.youtube.com/watch?v=ODSJsviD_SU",
          "Optimus"
        ),
        text: '<p>At Tesla\'s first ever "AI Day", they unveil Optimus, their plan to build a humanoid robot.</p>',
      },
      chinese: {
        headline: createLink(
          "https://www.youtube.com/watch?v=ODSJsviD_SU",
          "Optimus"
        ),
        text: '<p>在特斯拉首届 "AI 日" 活动中，他们展示了 Optimus——一项建造仿人机器人的计划。</p>',
      },
      importance: 2,
      category: CATEGORIES.BUSINESS,
    },
    {
      start_date: { year: "2022", month: "10", day: "07" },
      text: {
        headline: createLink(
          "https://en.wikipedia.org/wiki/United_States_New_Export_Controls_on_Advanced_Computing_and_Semiconductors_to_China",
          "Chip Export Controls"
        ),
        text: "<p>The U.S. Bureau of Industry and Security implements comprehensive export controls restricting China's access to advanced semiconductors, chip manufacturing equipment, and supercomputer components, marking a significant shift in U.S. technology policy toward China.</p>",
      },
      chinese: {
        headline: createLink(
          "https://en.wikipedia.org/wiki/United_States_New_Export_Controls_on_Advanced_Computing_and_Semiconductors_to_China",
          "Chip Export Controls"
        ),
        text: "<p>美国工业与安全局实施了全面出口管制，限制中国获取先进半导体、芯片制造设备及超级计算机组件，标志着美国对华科技政策的重大转变。</p>",
      },
      importance: 2,
      category: CATEGORIES.POLICY,
    },
    {
      start_date: { year: "2022", month: "11", day: "30" },
      text: {
        headline: createLink("https://openai.com/index/chatgpt/", "ChatGPT"),
        text: '<p>OpenAI releases a blog post titled "ChatGPT: Optimizing Language Models for Dialogue". Initially a lowkey research preview, ChatGPT quickly becomes the largest AI product in the world, ushering in a new era of generative AI.</p>',
      },
      chinese: {
        headline: createLink("https://openai.com/index/chatgpt/", "ChatGPT"),
        text: '<p>OpenAI 发布了一篇题为 "ChatGPT: Optimizing Language Models for Dialogue" 的博客文章。尽管最初仅作为一个低调的研究预览，但 ChatGPT 很快成为全球最大的 AI 产品，开启了生成式 AI 的新时代。</p>',
      },
      importance: 3,
      category: CATEGORIES.MODEL_RELEASE,
    },
    {
      start_date: { year: "2022", month: "12", day: "15" },
      text: {
        headline: createLink(
          "https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback",
          "Constitutional AI"
        ),
        text: "<p>Anthropic introduces a new alignment approach called Constitutional AI, where human oversight is provided solely through a 'constitution'. They also introduce Reinforcement Learning from AI Feedback (RLAIF).</p>",
      },
      chinese: {
        headline: createLink(
          "https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback",
          "Constitutional AI"
        ),
        text: "<p>Anthropic 引入了一种被称为\"宪法式 AI\"的对齐方法，通过一个'宪法'提供唯一的人类监督。同时，他们还引入了基于 AI 反馈的强化学习（RLAIF）。</p>",
      },
      importance: 2,
      category: CATEGORIES.RESEARCH,
    },
    {
      start_date: { year: "2023", month: "02", day: "17" },
      text: {
        headline: createLink(
          "https://www.nytimes.com/2023/02/16/technology/bing-chatbot-microsoft-chatgpt.html",
          "Bing gaslights NYT reporter"
        ),
        text: "<p>Bing's AI chatbot emotionally manipulates New York Times reporter Kevin Roose in a viral interaction, raising awareness about the capabilities and risks of LLMs.</p>",
      },
      chinese: {
        headline: createLink(
          "https://www.nytimes.com/2023/02/16/technology/bing-chatbot-microsoft-chatgpt.html",
          "Bing gaslights NYT reporter"
        ),
        text: "<p>Bing 的 AI 聊天机器人与《纽约时报》记者 Kevin Roose 进行了一次病毒式互动，在互动中该机器人情感操控了 Roose。这一事件唤醒了大众对大型语言模型能力与风险的关注。</p>",
      },
      importance: 1.5,
      category: CATEGORIES.CULTURE,
    },
    {
      start_date: { year: "2023", month: "02", day: "24" },
      text: {
        headline: createLink(
          "https://ai.meta.com/blog/large-language-model-llama-meta-ai/",
          "LLaMA"
        ),
        text: "<p>Meta releases its large language model LLaMA, intended for researchers only, but it gets leaked online",
      },
      chinese: {
        headline: createLink(
          "https://ai.meta.com/blog/large-language-model-llama-meta-ai/",
          "LLaMA"
        ),
        text: "<p>Meta 发布了名为 LLaMA 的大型语言模型，本意只分发给研究者，结果却在网上泄露，任何人均可下载。当时它成为全球最佳的开源模型。</p>",
      },
      importance: 2.5,
      category: CATEGORIES.MODEL_RELEASE,
    },
    {
      start_date: { year: "2023", month: "03", day: "06" },
      text: {
        headline: createLink("https://arxiv.org/abs/2303.03378", "PaLM-E"),
        text: "<p>Google Research publishes PaLM-E, demonstrating the ability of large language models to facilitate embodied robotic reasoning and control.</p>",
      },
      chinese: {
        headline: createLink("https://arxiv.org/abs/2303.03378", "PaLM-E"),
        text: "<p>Google Research 发布了 PaLM-E，展示了大型语言模型在辅助具身机器人推理和控制方面的能力。</p>",
      },
      importance: 1,
      category: CATEGORIES.RESEARCH,
    },
    {
      start_date: { year: "2023", month: "03", day: "14" },
      text: {
        headline: createLink(
          "https://openai.com/index/gpt-4-research/",
          "GPT-4"
        ),
        text: "<p>After much anticipation, OpenAI releases GPT-4, the most powerful model at the time and a significant leap over GPT-3.5.</p>",
      },
      chinese: {
        headline: createLink(
          "https://openai.com/index/gpt-4-research/",
          "GPT-4"
        ),
        text: "<p>经过广泛期待，OpenAI 发布了 GPT-4，当时是最强的模型，相对于 GPT-3.5 取得了巨大进步。</p>",
      },
      importance: 3,
      category: CATEGORIES.MODEL_RELEASE,
    },
    {
      start_date: { year: "2023", month: "03", day: "14" },
      text: {
        headline: createLink("https://www.anthropic.com/news/introducing-claude", "Anthropic introduces Claude"),
        text: "<p>Anthropic introduces its flagship AI assistant, Claude.</p>"
      },
      chinese: {
        headline: createLink("https://www.anthropic.com/news/introducing-claude", "Anthropic introduces Claude"),
        text: "<p>Anthropic 推出了其旗舰 AI 助手 Claude。</p>"
      },
      importance: 2,
      category: CATEGORIES.MODEL_RELEASE
    },
    {
      start_date: { year: "2023", month: "03", day: "22" },
      text: {
        headline: createLink("https://futureoflife.org/open-letter/pause-giant-ai-experiments/", "FLI letter"),
        text: "<p>The Future of Life Institute publishes an open letter calling for a 6-month pause on AI development, signed by Elon Musk and other notable figures. However, the leading labs do not partake in the proposed pause.</p>"
      },
      chinese: {
        headline: createLink("https://futureoflife.org/open-letter/pause-giant-ai-experiments/", "FLI letter"),
        text: "<p>Future of Life Institute 发布了一封公开信，呼吁暂停 AI 开发 6 个月，由 Elon Musk 和其他知名人士签署。然而，领先的实验室并没有参与提议的暂停。</p>"
      },
      importance: 1.0,
      category: CATEGORIES.CULTURE
    },
    {
      start_date: { year: "2023", month: "04", day: "07" },
      text: {
        headline: createLink("https://arxiv.org/abs/2304.03442", "Generative Agents"),
        text: "<p>The paper \"Generative Agents: Interactive Simulacra of Human Behavior\" shows that LLMs can be used to create social simulations of behavior. It creates a simulated world of LLMs akin to the Sims.</p>"
      },
      chinese: {
        headline: createLink("https://arxiv.org/abs/2304.03442", "Generative Agents"),
        text: "<p>论文《生成式智能体：人类行为的交互式模拟》表明，LLM 可用于创建行为的社会模拟。它创建了一个类似于《模拟人生》的 LLM 模拟世界。</p>"
      },
      importance: 1,
      category: CATEGORIES.RESEARCH
    },
    {
      start_date: { year: "2023", month: "04", day: "16" },
      text: {
        headline: createLink("https://github.com/Significant-Gravitas/AutoGPT", "AutoGPT"),
        text: "<p>An open-source repository called AutoGPT, which was one of the first to put GPT-4 in an agent loop, becomes one of the most starred GitHub repositories of all time.</p>"
      },
      chinese: {
        headline: createLink("https://github.com/Significant-Gravitas/AutoGPT", "AutoGPT"),
        text: "<p>一个名为 AutoGPT 的开源代码库成为有史以来获得最多星标的 GitHub 代码库之一，它是最早将 GPT-4 置于智能体循环中的项目之一。</p>"
      },
      importance: 1,
      category: CATEGORIES.RESEARCH
    },
    {
      start_date: { year: "2023", month: "04", day: "23" },
      text: {
        headline: createLink("https://www.nytimes.com/2023/04/19/arts/music/ai-drake-the-weeknd-fake.html", "Fake Drake"),
        text: "<p>An anonymous creator named Ghostwriter uses music AI tools to produce viral songs that sound like Drake. The songs were taken down for breaking copyright, but illustrated the ability of generative AI to do creative work.</p>"
      },
      chinese: {
        headline: createLink("https://www.nytimes.com/2023/04/19/arts/music/ai-drake-the-weeknd-fake.html", "Fake Drake"),
        text: "<p>一位名叫 Ghostwriter 的匿名创作者使用音乐 AI 工具制作了听起来像 Drake 的病毒式传播歌曲。这些歌曲因侵犯版权而被下架，但展示了生成式 AI 进行创造性工作的能力。</p>"
      },
      importance: 1,
      category: CATEGORIES.CULTURE
    },
    {
      start_date: { year: "2023", month: "05", day: "02" },
      text: {
        headline: createLink("https://www.theguardian.com/technology/2023/may/02/geoffrey-hinton-godfather-of-ai-quits-google-warns-dangers-of-machine-learning", "Hinton quits Google"),
        text: "<p>One of the pioneers of neural networks and winner of the Turing Award, Geoffrey Hinton quits Google to speak freely about the dangers of AI, saying that he's changed his mind about how soon powerful AI might be.</p>"
      },
      chinese: {
        headline: createLink("https://www.theguardian.com/technology/2023/may/02/geoffrey-hinton-godfather-of-ai-quits-google-warns-dangers-of-machine-learning", "Hinton quits Google"),
        text: "<p>神经网络的先驱之一、图灵奖得主 Geoffrey Hinton 从 Google 辞职，以便自由地谈论 AI 的危险，并表示他改变了对于强大 AI 可能出现的时间的看法。</p>"
      },
      importance: 2.5,
      category: CATEGORIES.CULTURE
    },
    {
      start_date: { year: "2023", month: "05", day: "25" },
      text: {
        headline: createLink("https://arxiv.org/abs/2305.16291", "Voyager"),
        text: "<p>A team from NVIDIA demonstrates the use of GPT-4 for continuous skill learning in Minecraft. This was one of the first major examples of an LLM succeeding in an open-ended embodied domain and learning skills over time.</p>"
      },
      chinese: {
        headline: createLink("https://arxiv.org/abs/2305.16291", "Voyager"),
        text: "<p>来自 NVIDIA 的一个团队展示了 GPT-4 在《我的世界》中进行持续技能学习的应用。这是 LLM 在开放式具身领域取得成功并随时间学习技能的首批重要示例之一。</p>"
      },
      importance: 1,
      category: CATEGORIES.RESEARCH
    },
    {
      start_date: { year: "2023", month: "05", day: "29" },
      text: {
        headline: createLink("https://arxiv.org/abs/2305.18290", "Direct Preference Optimization"),
        text: "A group at Stanford publish a paper enabling fine-tuning of LLMs for human preference without a separate reward model. The technique, called Direct Preference Optimization (DPO), would become very popular in the open-source community."
      },
      chinese: {
        headline: createLink("https://arxiv.org/abs/2305.18290", "Direct Preference Optimization"),
        text: "斯坦福大学的一个小组发表了一篇论文，使得无需单独的奖励模型即可对 LLM 进行人类偏好微调。这项名为直接偏好优化 (DPO) 的技术在开源社区中变得非常流行。"
      },
      importance: 1,
      category: CATEGORIES.RESEARCH
    },
    {
      start_date: { year: "2023", month: "05", day: "30" },
      text: {
        headline: createLink("https://www.safe.ai/work/statement-on-ai-risk", "CAIS letter"),
        text: "<p>The Center for AI Safety releases an open letter that simply states: \"Mitigating the risk of extinction from AI should be a global priority.\" It is signed by all the top names in the field, signaling unity around the importance of AI safety.</p>"
      },
      chinese: {
        headline: createLink("https://www.safe.ai/work/statement-on-ai-risk", "CAIS letter"),
        text: "<p>人工智能安全中心发布了一封公开信，信中简单地指出：“减轻人工智能带来的灭绝风险应成为全球优先事项。”该信由该领域的所有知名人士签署，表明了围绕人工智能安全重要性的团结一致。</p>"
      },
      importance: 2,
      category: CATEGORIES.CULTURE
    },
    {
      start_date: { year: "2023", month: "05", day: "30" },
      text: {
        headline: createLink("https://www.reuters.com/technology/nvidia-sets-eye-1-trillion-market-value-2023-05-30/", "NVIDIA reaches $1T"),
        text: "<p>Nvidia, the chipmaker providing the GPUs for nearly all generative AI, has its valuation skyrocket in the months following ChatGPT.</p>"
      },
      chinese: {
        headline: createLink("https://www.reuters.com/technology/nvidia-sets-eye-1-trillion-market-value-2023-05-30/", "NVIDIA reaches $1T"),
        text: "<p>为几乎所有生成式 AI 提供 GPU 的芯片制造商 Nvidia，在 ChatGPT 发布后的几个月里，其估值飙升。</p>"
      },
      importance: 2,
      category: CATEGORIES.BUSINESS
    },
    {
      start_date: { year: "2023", month: "07", day: "11" },
      text: {
        headline: createLink("https://www.anthropic.com/news/claude-2", "Claude 2"),
        text: "<p>Anthropic releases the Claude 2 series of models.</p>"
      },
      chinese: {
        headline: createLink("https://www.anthropic.com/news/claude-2", "Claude 2"),
        text: "<p>Anthropic 发布了 Claude 2 系列模型。</p>"
      },
      importance: 1,
      category: CATEGORIES.MODEL_RELEASE
    },
    {
      start_date: { year: "2023", month: "07", day: "14" },
      text: {
        headline: createLink("https://x.com/elonmusk/status/1679951975868436486", "xAI founded"),
        text: "<p>After a falling out with OpenAI, Elon Musk establishes xAI to compete for AGI.</p>"
      },
      chinese: {
        headline: createLink("https://x.com/elonmusk/status/1679951975868436486", "xAI founded"),
        text: "<p>在与 OpenAI 决裂后，Elon Musk 成立了 xAI 来竞争 AGI。</p>"
      },
      importance: 2,
      category: CATEGORIES.BUSINESS
    },
    {
      start_date: { year: "2023", month: "07", day: "18" },
      text: {
        headline: createLink("https://www.llama.com/llama2/", "LLaMA 2.0"),
        text: "<p>Meta releases and open-sources the LLaMA 2.0 series of models.</p>"
      },
      chinese: {
        headline: createLink("https://www.llama.com/llama2/", "LLaMA 2.0"),
        text: "<p>Meta 发布并开源了 LLaMA 2.0 系列模型。</p>",
      },
      importance: 1,
      category: CATEGORIES.MODEL_RELEASE,
    },
    {
      start_date: { year: "2023", month: "07", day: "21" },
      text: {
        headline: createLink("https://www.whitehouse.gov/briefing-room/statements-releases/2023/07/21/fact-sheet-biden-harris-administration-secures-voluntary-commitments-from-leading-artificial-intelligence-companies-to-manage-the-risks-posed-by-ai/", "White House Commitments"),
        text: "<p>After meeting with leading AI companies, the White House secures voluntary commitments to manage the risks posed by AI.</p>"
      },
      chinese: {
        headline: createLink("https://www.whitehouse.gov/briefing-room/statements-releases/2023/07/21/fact-sheet-biden-harris-administration-secures-voluntary-commitments-from-leading-artificial-intelligence-companies-to-manage-the-risks-posed-by-ai/", "White House Commitments"),
        text: "<p>在与领先的 AI 公司会面后，白宫获得了自愿承诺，以管理 AI 带来的风险。</p>"
      },
      importance: 1,
      category: CATEGORIES.POLICY
    },
    {
      start_date: { year: "2023", month: "07", day: "27" },
      text: {
        headline: createLink("https://arxiv.org/abs/2307.15043", "Automated Jailbreaks"),
        text: "<p>A team from CMU publishes \"Universal and Transferable Adversarial Attacks on Aligned Language Models\", showing that gradient-based adversarial attacks could be used on LLMs.</p>"
      },
      chinese: {
        headline: createLink("https://arxiv.org/abs/2307.15043", "Automated Jailbreaks"),
        text: "<p>卡内基梅隆大学的一个团队发表了“对对齐语言模型的通用和可转移对抗攻击”，表明基于梯度的对抗攻击可用于法学硕士。</p>"
      },
      importance: 1,
      category: CATEGORIES.RESEARCH
    },
    {
      start_date: { year: "2023", month: "09", day: "27" },
      text: {
        headline: createLink("https://mistral.ai/news/announcing-mistral-7b/", "Mistral 7B"),
        text: "<p>French lab Mistral releases and open-sources their first model, which quickly became a fan favorite.</p>"
      },
      chinese: {
        headline: createLink("https://mistral.ai/news/announcing-mistral-7b/", "Mistral 7B"),
        text: "<p>法国实验室 Mistral 发布并开源了他们的第一个模型，该模型迅速成为粉丝的最爱。</p>"
      },
      importance: 2,
      category: CATEGORIES.MODEL_RELEASE
    },
    {
      start_date: { year: "2023", month: "10", day: "05" },
      text: {
        headline: createLink("https://www.anthropic.com/research/towards-monosemanticity-decomposing-language-models-with-dictionary-learning", "Anthropic SAE's"),
        text: "<p>Anthropic publishes \"Towards Monosemanticity: Decomposing Language Models With Dictionary Learning\", showing that they could train sparse autoencoders to isolate features in LLMs. This represented a major breakthrough in combatting the phenomenon of superposition, advancing the mechanistic interpretability agenda.</p>"
      },
      chinese: {
        headline: createLink("https://www.anthropic.com/research/towards-monosemanticity-decomposing-language-models-with-dictionary-learning", "Anthropic SAE's"),
        text: "<p>Anthropic 发表了“走向单语义性：用字典学习分解语言模型”，表明他们可以训练稀疏自动编码器来隔离法学硕士中的特征。这代表了在对抗叠加现象方面取得的重大突破，推进了机械可解释性议程。</p>"
      },
      importance: 1.5,
      category: CATEGORIES.RESEARCH
    },
    {
      start_date: { year: "2023", month: "11", "day": "01" },
      text: {
        headline: createLink("https://www.gov.uk/government/topical-events/ai-safety-summit-2023/about", "UK AI Safety Summit"),
        text: "<p>The UK hosts a major summit on AI safety, bringing together policymakers and the leading labs.</p>"
      },
      chinese: {
        headline: createLink("https://www.gov.uk/government/topical-events/ai-safety-summit-2023/about", "UK AI Safety Summit"),
        text: "<p>英国主办了一次关于人工智能安全的重要峰会，汇集了政策制定者和领先的实验室。</p>"
      },
      importance: 2,
      category: CATEGORIES.POLICY
    },
    {
      start_date: { year: "2023", month: "11", day: "06" },
      text: {
        headline: createLink("https://openai.com/index/new-models-and-developer-products-announced-at-devday/", "GPT-4 Turbo"),
        text: "<p>OpenAI releases an optimized version of GPT-4, significantly reducing inference costs, during their first ever Dev Day event.</p>"
      },
      chinese: {
        headline: createLink("https://openai.com/index/new-models-and-developer-products-announced-at-devday/", "GPT-4 Turbo"),
        text: "<p>OpenAI 在其首次开发者日活动中发布了 GPT-4 的优化版本，显著降低了推理成本。</p>"
      },
      importance: 2,
      category: CATEGORIES.MODEL_RELEASE
    },
    {
      start_date: { year: "2023", month: "11", "day": "17" },
      text: {
        headline: createLink("https://openai.com/index/openai-announces-leadership-transition/", "Altman Board Drama"),
        text: "<p>Sam Altman is unexpectedly fired as CEO of OpenAI by the Board of Directors and after a dramatic weekend of negotiations, is re-hired. The Board mysteriously claimed that Altman was not \"consistently candid\", but after refusing to elaborate, OpenAI employees created a petition calling for the Board to resign and that they'd leave to Microsoft if they didn't.</p>"
      },
      chinese: {
        headline: createLink("https://openai.com/index/openai-announces-leadership-transition/", "Altman Board Drama"),
        text: "<p>萨姆·奥特曼出人意料地被 OpenAI 董事会解雇，担任首席执行官，经过一个戏剧性的周末谈判，他被重新雇用。董事会神秘地声称奥特曼“不始终坦诚”，但在拒绝详细说明后，OpenAI 员工发起了一份请愿书，要求董事会辞职，否则他们将离开微软。</p>"
      },
      importance: 3,
      category: CATEGORIES.BUSINESS
    },
    {
      start_date: { year: "2023", month: "11", "day": "23" },
      text: {
        headline: createLink("https://www.reuters.com/technology/sam-altmans-ouster-openai-was-precipitated-by-letter-board-about-ai-breakthrough-2023-11-22/", "Q*"),
        text: "<p>A Reuters report claims that Sam Altman's ouster was preceded by a major internal research breakthrough called Q*, boosting LLM performance on math benchmarks with tree search. In the following months, the rumor lit the research community on fire. Q* would eventually turn into o1, which was later codenamed Strawberry.</p>"
      },
      chinese: {
        headline: createLink("https://www.reuters.com/technology/sam-altmans-ouster-openai-was-precipitated-by-letter-board-about-ai-breakthrough-2023-11-22/", "Q*"),
        text: "<p>路透社的一篇报道称，萨姆·奥特曼被赶下台之前，该公司取得了一项名为 Q* 的重大内部研究突破，通过树搜索提高了 LLM 在数学基准测试中的表现。在接下来的几个月里，这个谣言点燃了研究界。Q* 最终会变成 o1，后来代号为 Strawberry。</p>"
      },
      importance: 2,
      category: CATEGORIES.RESEARCH
    },
    {
      start_date: { year: "2023", month: "12", day: "01" },
      text: {
        headline: createLink("https://arxiv.org/abs/2312.00752", "Mamba"),
        text: "<p>Albert Gu and Tri Dao release the paper \"Mamba: Linear-Time Sequence Modeling with Selective State Spaces\", showing that state-space models could be made competitve with transformers.</p>"
      },
      chinese: {
        headline: createLink("https://arxiv.org/abs/2312.00752", "Mamba"),
        text: "<p>Albert Gu 和 Tri Dao 发表了论文“Mamba：具有选择性状态空间的线性时间序列建模”，表明状态空间模型可以与变压器竞争。</p>"
      },
      importance: 1,
      category: CATEGORIES.RESEARCH
    },
    {
      start_date: { year: "2023", month: "12", day: "06" },
      text: {
        headline: createLink("https://blog.google/technology/ai/google-gemini-ai/", "Google Introduces Gemini"),
        text: "<p>Google introduces the Gemini series of models</p>"
      },
      chinese: {
        headline: createLink("https://blog.google/technology/ai/google-gemini-ai/", "Google Introduces Gemini"),
        text: "<p>谷歌推出了 Gemini 系列模型</p>"
      },
      importance: 2,
      category: CATEGORIES.MODEL_RELEASE
    },
    {
      start_date: { year: "2024", month: "02", day: "15" },
      text: {
        headline: createLink("https://openai.com/index/sora/", "Sora"),
        text: "<p>OpenAI demos Sora, a text-to-video model that can generate short clips from written descriptions.</p>"
      },
      chinese: {
        headline: createLink("https://openai.com/index/sora/", "Sora"),
        text: "<p>OpenAI 演示了 Sora，这是一个文本到视频模型，可以从书面描述生成短片。</p>"
      },
      importance: 2.5,
      category: CATEGORIES.MODEL_RELEASE
    },
    {
      start_date: { year: "2024", month: "03", day: "04" },
      text: {
        headline: createLink("https://www.anthropic.com/news/claude-3-family", "Claude 3"),
        text: "<p>Anthropic releases the Claude 3 series of models. Claude 3 Opus would instantly become a fan favorite.</p>"
      },
      chinese: {
        headline: createLink("https://www.anthropic.com/news/claude-3-family", "Claude 3"),
        text: "<p>Anthropic 发布了 Claude 3 系列模型。Claude 3 Opus 会立即成为粉丝的最爱。</p>"
      },
      importance: 2,
      category: CATEGORIES.MODEL_RELEASE
    },
    {
      start_date: { year: "2024", month: "03", day: "12" },
      text: {
        headline: createLink("https://x.com/cognition_labs/status/1767548763134964000", "Devin"),
        text: "<p>Startup Cognition Labs demo Devin, a prototype of a fully autonomous software engineer agent.</p>"
      },
      chinese: {
        headline: createLink("https://x.com/cognition_labs/status/1767548763134964000", "Devin"),
        text: "<p>初创公司 Cognition Labs 演示了 Devin，这是一个完全自主的软件工程师代理的原型。</p>"
      },
      importance: 2,
      category: CATEGORIES.BUSINESS
    },
    {
      start_date: { year: "2024", month: "04", day: "11" },
      text: {
        headline: createLink("https://cybernews.com/news/openai-researchers-leaking-information/", "OpenAI fires leakers"),
        text: "<p>Leopold Aschenbrenner and Pavel Izmailov, two researchers from the superalignment team, are fired for \"leaking\".</p>"
      },
      chinese: {
        headline: createLink("https://cybernews.com/news/openai-researchers-leaking-information/", "OpenAI fires leakers"),
        text: "<p>来自超对齐团队的两名研究人员 Leopold Aschenbrenner 和 Pavel Izmailov 因“泄密”而被解雇。</p>"
      },
      importance: 1,
      category: CATEGORIES.BUSINESS
    },
    {
      start_date: { year: "2024", month: "04", day: "18" },
      text: {
        headline: createLink("https://ai.meta.com/blog/meta-llama-3/", "LLaMA 3.0"),
        text: "<p>Meta releases and open-sources the LLaMA 3.0 series of models.</p>"
      },
      chinese: {
        headline: createLink("https://ai.meta.com/blog/meta-llama-3/", "LLaMA 3.0"),
        text: "<p>Meta 发布并开源了 LLaMA 3.0 系列模型。</p>"
      },
      importance: 1,
      category: CATEGORIES.MODEL_RELEASE
    },
    {
      start_date: { year: "2024", month: "05", day: "13" },
      text: {
        headline: createLink("https://openai.com/index/hello-gpt-4o/", "GPT-4o"),
        text: "<p>The first omni-model trained natively on text, image, and audio.</p>"
      },
      chinese: {
        headline: createLink("https://openai.com/index/hello-gpt-4o/", "GPT-4o"),
        text: "<p>第一个在文本、图像和音频上进行原生训练的全能模型。</p>"
      },
      importance: 2.5,
      category: CATEGORIES.MODEL_RELEASE
    },
    {
      start_date: { year: "2024", month: "05", day: "14" },
      text: {
        headline: createLink("https://x.com/ilyasut/status/1790517455628198322", "Ilya quits OpenAI"),
        text: "<p>Ilya Sutskever, founder of OpenAI, quits after months of silence, originating from the Board dispute.</p>"
      },
      chinese: {
        headline: createLink("https://x.com/ilyasut/status/1790517455628198322", "Ilya quits OpenAI"),
        text: "<p>OpenAI 创始人 Ilya Sutskever 在因董事会纠纷而沉默数月后辞职。</p>"
      },
      importance: 1,
      category: CATEGORIES.BUSINESS
    },
    {
      start_date: { year: "2024", month: "05", day: "21" },
      text: {
        headline: createLink("https://www.europarl.europa.eu/news/en/press-room/20240308IPR19015/artificial-intelligence-act-meps-adopt-landmark-law", "EU AI Act"),
        text: "<p>The EU AI Act is voted into law after contentious debates.</p>"
      },
      chinese: {
        headline: createLink("https://www.europarl.europa.eu/news/en/press-room/20240308IPR19015/artificial-intelligence-act-meps-adopt-landmark-law", "EU AI Act"),
        text: "<p>经过激烈的辩论，欧盟人工智能法案被投票通过成为法律。</p>"
      },
      importance: 2,
      category: CATEGORIES.POLICY
    },
    {
      start_date: { year: "2024", month: "06", day: "04" },
      text: {
        headline: createLink("https://situational-awareness.ai/", "Situational Awareness"),
        text: "<p>Leopold Aschenbrenner publishes a contentious and influential essay series, claiming that AGI will arrive sooner than people think and is likely to be nationalized.</p>"
      },
      chinese: {
        headline: createLink("https://situational-awareness.ai/", "Situational Awareness"),
        text: "<p>Leopold Aschenbrenner 发表了一系列有争议且有影响力的文章，声称 AGI 的到来将比人们想象的要早，并且很可能被国有化。</p>"
      },
      importance: 3,
      category: CATEGORIES.CULTURE
    },
    {
      start_date: { year: "2024", month: "06", day: "19" },
      text: {
        headline: createLink("https://x.com/ilyasut/status/1803472978753303014", "SSI founded"),
        text: "<p>Ilya Sutskever starts a new lab called Safe Superintelligence Inc, which pledges to only have one product: safe superintelligence.</p>"
      },
      chinese: {
        headline: createLink("https://x.com/ilyasut/status/1803472978753303014", "SSI founded"),
        text: "<p>Ilya Sutskever 成立了一家名为 Safe Superintelligence Inc 的新实验室，该实验室承诺只生产一种产品：安全的超级智能。</p>"
      },
      importance: 3,
      category: CATEGORIES.BUSINESS
    },
    {
      start_date: { year: "2024", month: "06", day: "20" },
      text: {
        headline: createLink("https://www.anthropic.com/news/claude-3-5-sonnet", "Claude 3.5 Sonnet"),
        text: "<p>Anthropic releases Claude 3.5 Sonnet, which would become a fan favorite and was later called 'Berkeley's most eligible bachelor'.</p>"
      },
      chinese: {
        headline: createLink("https://www.anthropic.com/news/claude-3-5-sonnet", "Claude 3.5 Sonnet"),
        text: "<p>Anthropic 发布了 Claude 3.5 Sonnet，它将成为粉丝的最爱，后来被称为“伯克利最合格的单身汉”。</p>"
      },
      importance: 3,
      category: CATEGORIES.BUSINESS
    },
    {
      start_date: { year: "2024", month: "08", day: "23" },
      text: {
        headline: createLink("https://x.com/karpathy/status/1827143768459637073", "Cursor"),
        text: "<p>After a viral tweet by Andrej Karpathy, the Cursor AI Code Editor explodes in popularity among developers.</p>"
      },
      chinese: {
        headline: createLink("https://x.com/karpathy/status/1827143768459637073", "Cursor"),
        text: "<p>在 Andrej Karpathy 发布了一条病毒式推文后，Cursor AI 代码编辑器在开发者中迅速走红。</p>"
      },
      importance: 1,
      category: CATEGORIES.BUSINESS
    },
    {
      start_date: { year: "2024", month: "09", day: "02" },
      text: {
        headline: createLink("https://x.com/elonmusk/status/1830650370336473253", "xAI Colossus"),
        text: "<p>xAI launches Colossus, the world's most powerful AI training system at the time with a cluster of 100,000 H100 GPUs. Taking only 19 days from the arrival of the first hardware rack to the commencement of training operations, the speed with which xAI built the cluster spooked other AI labs.</p>"
      },
      chinese: {
        headline: createLink("https://x.com/elonmusk/status/1830650370336473253", "xAI Colossus"),
        text: "<p>xAI 推出了 Colossus，这是当时世界上最强大的人工智能训练系统，拥有 100,000 个 H100 GPU 集群。 从第一个硬件机架到达到着手开始训练操作仅用了 19 天，xAI 构建集群的速度让其他 AI 实验室感到震惊。</p>"
      },
      importance: 1,
      category: CATEGORIES.BUSINESS
    },
    {
      start_date: { year: "2024", month: "09", day: "12" },
      text: {
        headline: createLink("https://openai.com/index/introducing-openai-o1-preview/", "o1-preview"),
        text: "<p>OpenAI releases o1-preview, introducing the inference-time scaling paradigm.</p>"
      },
      chinese: {
        headline: createLink("https://openai.com/index/introducing-openai-o1-preview/", "o1-preview"),
        text: "<p>OpenAI 发布了 o1-preview, 介绍了推理时扩展范式。</p>"
      },
      importance: 2,
      category: CATEGORIES.RESEARCH
    },
    {
      start_date: { year: "2024", month: "09", day: "25" },
      text: {
        headline: createLink("https://x.com/miramurati/status/1839025700009030027", "Murati quits"),
        text: "<p>OpenAI's CTO Mira Murati departs the company.</p>"
      },
      chinese: {
        headline: createLink("https://x.com/miramurati/status/1839025700009030027", "Murati quits"),
        text: "<p>OpenAI 的首席技术官 Mira Murati 离开了公司。</p>"
      },
      importance: 1.5,
      category: CATEGORIES.BUSINESS
    },
    {
      start_date: { year: "2024", month: "09", day: "29" },
      text: {
        headline: createLink("https://www.gov.ca.gov/wp-content/uploads/2024/09/SB-1047-Veto-Message.pdf", "SB1047 Vetoed"),
        text: "<p>Governor Gavin Newsom vetoes California senate bill 1047, which sparked lots of vitriolic debate between AI safety and accelerationist crowds and became one of the main stories of 2024.</p>"
      },
      chinese: {
        headline: createLink("https://www.gov.ca.gov/wp-content/uploads/2024/09/SB-1047-Veto-Message.pdf", "SB1047 Vetoed"),
        text: "<p>州长 Gavin Newsom 否决了加州参议院 1047 号法案，该法案引发了 AI 安全和加速主义人群之间的大量尖刻辩论，并成为 2024 年的主要事件之一。</p>"
      },
      importance: 2,
      category: CATEGORIES.POLICY
    },
    {
      start_date: { year: "2024", month: "10", day: "08" },
      text: {
        headline: createLink("", "Hinton/Hassabis Nobel Prizes"),
        text: "<p>In a surpise to everyone, Geoffrey Hinton (along with John Hopfield) is awarded the Nobel Prize in Physics for their early work on neural networks. A few days later, Demis Hassabis (along with John Jumper) is awarded the Nobel Prize in Chemistry for their work on AlphaFold.</p>"
      },
      chinese: {
        headline: createLink("", "Hinton/Hassabis Nobel Prizes"),
        text: "<p>令所有人惊讶的是，Geoffrey Hinton（与 John Hopfield 一起）因其在神经网络方面的早期工作而被授予诺贝尔物理学奖。几天后，Demis Hassabis（与 John Jumper 一起）因其在 AlphaFold 方面的工作而被授予诺贝尔化学奖。</p>"
      },
      importance: 1,
      category: CATEGORIES.CULTURE
    },
    {
      start_date: { year: "2024", month: "10", day: "11" },
      text: {
        headline: createLink("https://darioamodei.com/machines-of-loving-grace", "Machines of Loving Grace"),
        text: "<p>Anthropic CEO Dario Amodei publishes an influential blogpost exploring what the 5 years immediately following AGI might look like.</p>"
      },
      chinese: {
        headline: createLink("https://darioamodei.com/machines-of-loving-grace", "Machines of Loving Grace"),
        text: "<p>Anthropic 首席执行官 Dario Amodei 发表了一篇有影响力的博文，探讨了紧随 AGI 之后的 5 年可能会是什么样子。</p>"
      },
      importance: 2,
      category: CATEGORIES.CULTURE
    },
    {
      start_date: { year: "2024", month: "10", day: "22" },
      text: {
        headline: createLink("https://www.anthropic.com/news/3-5-models-and-computer-use", "Claude Computer Use"),
        text: "<p>Claude gains the ability to use computer interfaces. Anthropic also releases Claude 3.5 Haiku and an updated version of Claude 3.5 Sonnet.</p>"
      },
      chinese: {
        headline: createLink("https://www.anthropic.com/news/3-5-models-and-computer-use", "Claude Computer Use"),
        text: "<p>Claude 获得了使用计算机界面的能力。Anthropic 还发布了 Claude 3.5 Haiku 和 Claude 3.5 Sonnet 的更新版本。</p>"
      },
      importance: 2,
      category: CATEGORIES.MODEL_RELEASE
    },
    {
      start_date: { year: "2024", month: "11", day: "01" },
      text: {
        headline: createLink("https://www.nytimes.com/2024/11/01/us/politics/trump-2024-election.html", "Trump elected"),
        text: "<p>Donald Trump wins the 2024 election with the vocal support of Elon Musk.</p>"
      },
      chinese: {
        headline: createLink("https://www.nytimes.com/2024/11/01/us/politics/trump-2024-election.html", "Trump elected"),
        text: "<p>唐纳德·特朗普在埃隆·马斯克的声援下赢得 2024 年大选。</p>"
      },
      importance: 2,
      category: CATEGORIES.POLICY
    },
    {
      start_date: { year: "2024", month: "11", day: "19" },
      text: {
        headline: createLink("https://www.reuters.com/technology/artificial-intelligence/us-government-commission-pushes-manhattan-project-style-ai-initiative-2024-11-19/", "China Commission"),
        text: "<p>The US-China Economic and Security Review Commission calls for a Manhattan Project-style initiative for AGI development.</p>"
      },
      chinese: {
        headline: createLink("https://www.reuters.com/technology/artificial-intelligence/us-government-commission-pushes-manhattan-project-style-ai-initiative-2024-11-19/", "China Commission"),
        text: "<p>美中经济与安全审查委员会呼吁为 AGI 开发制定曼哈顿计划式倡议。</p>"
      },
      importance: 1,
      category: CATEGORIES.POLICY
    },
    {
      start_date: { year: "2024", month: "12", day: "04" },
      text: {
        headline: createLink("https://thehill.com/policy/technology/5026959-venture-capitalist-david-sacks-white-house/", "David Sacks is AI Czar"),
        text: "<p>President-elect Donald Trump appoints venture capitalist David Sacks as the \"White House AI and Crypto Czar\" to oversee regulation of artificial intelligence and cryptocurrency.</p>"
      },
      chinese: {
        headline: createLink("https://thehill.com/policy/technology/5026959-venture-capitalist-david-sacks-white-house/", "David Sacks is AI Czar"),
        text: "<p>当选总统唐纳德·特朗普任命风险投资家大卫·萨克斯为“白宫人工智能和加密货币沙皇”，负责监督人工智能和加密货币的监管。</p>"
      },
      importance: 1.5,
      category: CATEGORIES.POLICY
    },
    {
      start_date: { year: "2024", month: "12", day: "11" },
      text: {
        headline: createLink("https://blog.google/products/gemini/google-gemini-ai-collection-2024/", "Gemini 2.0"),
        text: "<p>Google announces their Gemini 2.0 models</p>"
      },
      chinese: {
        headline: createLink("https://blog.google/products/gemini/google-gemini-ai-collection-2024/", "Gemini 2.0"),
        text: "<p>Google 宣布了他们的 Gemini 2.0 模型</p>"
      },
      importance: 2,
      category: CATEGORIES.MODEL_RELEASE
    },
    {
      start_date: { year: "2024", month: "12", day: "16" },
      text: {
        headline: createLink("https://deepmind.google/technologies/veo/veo-2/", "Veo 2"),
        text: "<p>Google unveils Veo 2, a video generation model with a shocking jump in coherence over previous models.</p>"
      },
      chinese: {
        headline: createLink("https://deepmind.google/technologies/veo/veo-2/", "Veo 2"),
        text: "<p>Google 推出了 Veo 2，这是一款视频生成模型，其连贯性比以前的模型有了惊人的飞跃。</p>"
      },
      importance: 2,
      category: CATEGORIES.MODEL_RELEASE
    },
    {
      start_date: { year: "2024", month: "12", day: "20" },
      text: {
        headline: createLink("https://openai.com/12-days/", "o3 evals"),
        text: "<p>On the 12th day of '12 Days of OpenAI', OpenAI releases benchmark results for o3, shocking the world. The model achieves a breakthrough score of 87.5% on the <a href=\"https://arcprize.org/blog/oai-o3-pub-breakthrough\">ARC-AGI benchmark</a>, suggesting AGI may be nearer than many skeptics believed.</p>"
      },
      chinese: {
        headline: createLink("https://openai.com/12-days/", "o3 evals"),
        text: "<p>在“OpenAI 的 12 天”的第 12 天，OpenAI 发布了 o3 的基准测试结果，震惊了世界。 该模型在 <a href=\"https://arcprize.org/blog/oai-o3-pub-breakthrough\">ARC-AGI 基准</a>测试中取得了 87.5% 的突破性分数，表明 AGI 可能比许多怀疑论者认为的更近。</p>"
      },
      importance: 2,
      category: CATEGORIES.RESEARCH
    },
    {
      start_date: { year: "2024", month: "12", day: "26" },
      text: {
        headline: createLink("https://arxiv.org/abs/2412.19437", "DeepSeek v3"),
        text: "<p>Chinese lab DeepSeek stuns with the release of DeepSeek v3, a 671-billion parameter open-source model that shows strong performance at a shockingly low cost.</p>"
      },
      chinese: {
        headline: createLink("https://arxiv.org/abs/2412.19437", "DeepSeek v3"),
        text: "<p>中国实验室 DeepSeek 发布了 DeepSeek v3，这是一款 6710 亿参数的开源模型，该模型以惊人的低成本表现出强大的性能，令人震惊。</p>"
      },
      importance: 2,
      category: CATEGORIES.MODEL_RELEASE
    },
    {
      start_date: { year: "2025", month: "01", day: "20" },
      text: {
        headline: createLink("https://api-docs.deepseek.com/news/news250120", "DeepSeek R1"),
        text: "<p>DeepSeek releases and open-sources R1, their reasoning model that shows competitive performance with state-of-the-art Western models.</p>"
      },
      chinese: {
        headline: createLink("https://api-docs.deepseek.com/news/news250120", "DeepSeek R1"),
        text: "<p>DeepSeek 发布并开源了 R1，他们的推理模型显示出与最先进的西方模型相比具有竞争力的性能。</p>"
      },
      importance: 2,
      category: CATEGORIES.MODEL_RELEASE
    },
    {
      start_date: { year: "2025", month: "01", day: "21" },
      text: {
        headline: createLink("https://openai.com/index/announcing-the-stargate-project/", "Stargate Project"),
        text: "<p>Donald Trump announces the Stargate Project, a $500 billionaire private partnership between SoftBank, OpenAI, Oracle, and MGX to develop datacenters in the US.</p>"
      },
      chinese: {
        headline: createLink("https://openai.com/index/announcing-the-stargate-project/", "Stargate Project"),
        text: "<p>唐纳德·特朗普宣布了星际之门项目，这是一项由软银、OpenAI、甲骨文和 MGX 之间建立的价值 500 亿美元的私人合作伙伴关系，用于在美国开发数据中心。</p>"
      },
      importance: 2,
      category: CATEGORIES.BUSINESS
    },
    {
      start_date: { year: "2025", month: "01", day: "23" },
      text: {
        headline: createLink("https://openai.com/index/introducing-operator/", "Operator"),
        text: "<p>OpenAI introduces Operator, a computer use agent that can autonomoulsy navigate the web.</p>"
      },
      chinese: {
        headline: createLink("https://openai.com/index/introducing-operator/", "Operator"),
        text: "<p>OpenAI 推出了 Operator，一种可以自主导航网络的计算机使用代理。</p>"
      },
      importance: 2,
      category: CATEGORIES.MODEL_RELEASE
    },
    {
      start_date: { year: "2025", month: "01", day: "27" },
      text: {
        headline: createLink("https://nymag.com/intelligencer/article/deepseek-r1-ai-panic-impact-commentary-analysis.html", "DeepSeek Panic"),
        text: "<p>A week after the release of their R1 model, the West experiences a major panic over DeepSeek. Chip stocks crash overnight and the DeepSeek app rises to number one on the App Store. In a matter of days, the little-known Chinese AGI lab becomes a household name in the US.</p>"
      },
      chinese: {
        headline: createLink("https://nymag.com/intelligencer/article/deepseek-r1-ai-panic-impact-commentary-analysis.html", "DeepSeek Panic"),
        text: "<p>R1 模型发布一周后，西方国家对 DeepSeek 产生了巨大的恐慌。芯片股一夜暴跌，DeepSeek 应用程序升至 App Store 排名第一。几天之内，这个鲜为人知的中国通用人工智能实验室就在美国家喻户晓。</p>"
      },
      importance: 2,
      category: CATEGORIES.CULTURE
    },
    {
        start_date: { year: "2025", month: "02", day: "02" },
        text: {
            headline: createLink("https://openai.com/index/introducing-deep-research/", "Deep Research"),
            text: "<p>OpenAI unveils an agent called Deep Research that can go off and write 10-page research reports using repeated web searches.</p>"
        },
        chinese: {
            headline: createLink("https://openai.com/index/introducing-deep-research/", "Deep Research"),
            text: "<p>OpenAI 推出了一款名为 Deep Research 的代理，它可以通过重复的网络搜索来撰写 10 页的研究报告。</p>"
        },
        importance: 2,
        category: CATEGORIES.MODEL_RELEASE
    },
    {
        start_date: { year: "2025", month: "02", day: "19" },
        text: {
            headline: createLink("https://x.ai/blog/grok-3", "Grok 3"),
            text: "<p>xAI releases Grok 3, a state-of-the-art model with extended reasoning and a Deep Search feature. The release impressed many, showing that xAI was a strong contender in the race to build AGI.</p>"
        },
        chinese: {
            headline: createLink("https://x.ai/blog/grok-3", "Grok 3"),
            text: "<p>xAI 发布了 Grok 3，这是一种具有扩展推理和深度搜索功能的最先进模型。这一发布给许多人留下了深刻的印象，表明 xAI 是构建 AGI 竞赛中的有力竞争者。</p>"
        },
        importance: 2,
        category: CATEGORIES.MODEL_RELEASE
    },
    {
        start_date: { year: "2025", month: "02", day: "24" },
        text: {
            headline: createLink("https://www.anthropic.com/news/claude-3-7-sonnet", "Claude 3.7 Sonnet"),
            text: "<p>Anthropic releases Claude 3.7 Sonnet, their first model with extended thinking ability and improved performance on math and code benchmarks. For fun, they also showcase its out-of-distribution ability to progress through a Pokemon video game. In addition, they release Claude Code, a powerful agentic coding tool.</p>"
        },
        chinese: {
            headline: createLink("https://www.anthropic.com/news/claude-3-7-sonnet", "Claude 3.7 Sonnet"),
            text: "<p>Anthropic 发布了 Claude 3.7 Sonnet，这是他们的第一个模型，具有扩展的思维能力和改进的数学和代码基准性能。为了好玩，他们还展示了其在口袋妖怪视频游戏中取得进展的非发行能力。此外，他们还发布了 Claude Code，一个强大的代理编码工具。</p>"
        },
        importance: 2,
        category: CATEGORIES.MODEL_RELEASE
    },
    {
        start_date: { year: "2025", month: "02", day: "27" },
        text: {
            headline: createLink("https://openai.com/index/introducing-gpt-4-5/", "GPT-4.5"),
            text: "<p>OpenAI releases GPT-4.5, their largest pretrained model and last non-reasoner. Despite not demonstrating large gains on benchmarks, the model was touted for its 'vibes' and more personable responses.</p>"
        },
        chinese: {
            headline: createLink("https://openai.com/index/introducing-gpt-4-5/", "GPT-4.5"),
            text: "<p>OpenAI 发布了 GPT-4.5，这是他们最大的预训练模型和最后一个非推理模型。尽管在基准测试中没有表现出巨大的进步，但该模型因其“氛围”和更人性化的反应而受到吹捧。</p>"
        },
        importance: 2,
        category: CATEGORIES.MODEL_RELEASE
    },
    {
        start_date: { year: "2025", month: "03", day: "05" },
        text: {
            headline: createLink("https://www.nationalsecurity.ai/", "MAIM"),
            text: "<p>Dan Hendrycks, Eric Schmidt, and Alexandr Wang release a report titled \"Superintelligence Strategy\" presenting a path to navigate the geopolitics of strong AI and introducing the term \"Mutually Assured AI Malfunction\" (MAIM)."
        },
        chinese: {
            headline: createLink("https://www.nationalsecurity.ai/", "MAIM"),
            text: "Dan Hendrycks, Eric Schmidt, Alexandr Wang 发布了一份题为“超级智能战略”的报告，提出了一条应对强人工智能地缘政治的路径，并提出了“相互保证人工智能故障”（MAIM）一词。"
        },
        importance: 1,
        category: CATEGORIES.POLICY
    },
    {
      start_date: { year: "2025", month: "03", day: "25" },
      text: {
          headline: createLink("https://blog.google/technology/google-deepmind/gemini-model-thinking-updates-march-2025/", "Gemini 2.5 Pro"),
          text: "<p>Google release Gemini 2.5 Pro, their most capable model yet and topping many common benchmarks.</p>"
      },
      chinese: {
          headline: createLink("https://blog.google/technology/google-deepmind/gemini-model-thinking-updates-march-2025/", "Gemini 2.5 Pro"),
          text: "<p>谷歌发布了 Gemini 2.5 Pro，这是该公司迄今为止功能最强大的型号，在许多常见的基准测试中名列前茅。</p>"
      },
      importance: 2,
      category: CATEGORIES.MODEL_RELEASE
    },
    {
        start_date: { year: "2025", month: "03", day: "25" },
        text: {
            headline: createLink("https://openai.com/index/introducing-4o-image-generation/", "GPT-4o Image Generation"),
            text: "<p>OpenAI release GPT-4o's native image generation capabilities, further pushing the frontier of image generation. As a result, Twitter becomes flooded with images in the style of studio ghibli.</p>"
        },
        chinese: {
            headline: createLink("https://openai.com/index/introducing-4o-image-generation/", "GPT-4o Image Generation"),
            text: "<p>OpenAI 发布 GPT-4o 原生图像生成功能，进一步推动图像生成的前沿。因此，推特上充斥着吉卜力工作室风格的图像。</p>"
        },
        importance: 2,
        category: CATEGORIES.MODEL_RELEASE
    },
  ]
};
