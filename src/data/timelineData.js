// src/data/timelineData.js

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
      category: CATEGORIES.MODEL_RELEASE
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
      start_date: { year: "2024", month: "08", day: "24" },
      text: {
        headline: createLink("https://x.ai/news/grok-2", "Grok 2"),
        text: "<p>xAI release Grok 2, the next iteration of their frontier model. While not state-of-the-art, it showcased how fast xAI could move to catch up, despite starting from behind.</p>"
      },
      chinese: {
        headline: createLink("https://x.ai/news/grok-2", "Grok 2"),
        text: "<p>xAI 发布了 Grok 2，这是其前沿模型的下一代。虽然它不是最先进的，但它展示了 xAI 尽管起步较晚，但能够以多快的速度追赶上来。</p>"
      },
      importance: 1,
      category: CATEGORIES.MODEL_RELEASE
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
      category: CATEGORIES.MODEL_RELEASE
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
        start_date: { year: "2025", month: "02", day: "18" },
        text: {
            headline: createLink("https://x.com/thinkymachines/status/1891919141151572094", "Thinking Machines Lab"),
            text: "<p>Key ex-OpenAI figures including Mira Murati and John Schulman found Thinking Machines Lab, a new AI lab focused on human-AI collaboration, personalizability, and open science.</p>"
        },
        chinese: {
            headline: createLink("https://x.com/thinkymachines/status/1891919141151572094", "Thinking Machines Lab"),
            text: "<p>包括 Mira Murati 和 John Schulman 在内的前 OpenAI 关键人物创立了 Thinking Machines Lab，这是一家专注于人机协作、个性化和开放科学的新型人工智能实验室。</p>"
        },
        importance: 3,
        category: CATEGORIES.BUSINESS
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
            text: "<p>Dan Hendrycks, Eric Schmidt, Alexandr Wang 发布了一份题为“超级智能战略”的报告，提出了一条应对强人工智能地缘政治的路径，并提出了“相互保证人工智能故障”（MAIM）一词。</p>"
        },
        importance: 1,
        category: CATEGORIES.POLICY
    },
    {
        start_date: { year: "2025", month: "03", day: "05" },
        text: {
            headline: createLink("https://x.com/ManusAI_HQ/status/1897294098945728752", "Manus"),
            text: "<p>An LLM agent called Manus is launched by a Chinese company and shows SOTA performance on benchmarks like GAIA. It goes viral in the West, in part due to fears over Chinese AI.</p>"
        },
        chinese: {
            headline: createLink("https://x.com/ManusAI_HQ/status/1897294098945728752", "Manus"),
            text: "<p>一家中国公司推出了一款名为 Manus 的 LLM 代理，在 GAIA 等基准测试中表现出 SOTA 性能。这款代理在西方迅速走红，部分原因是人们对中国人工智能的担忧。</p>"
        },
        importance: 1,
        category: CATEGORIES.BUSINESS
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
    {
      start_date: { year: "2025", month: "04", day: "05" },
      text: {
        headline: createLink("https://ai.meta.com/blog/llama-4-multimodal-intelligence/", "Llama 4"),
        text: "<p>Meta releases Llama 4 models, continuing the trend of powerful open-source large language models.</p>",
      },
      chinese: {
        headline: createLink("https://ai.meta.com/blog/llama-4-multimodal-intelligence/", "Llama 4"),
        text: "<p>Meta 发布 Llama 4 模型，延续了强大的开源大型语言模型的趋势。</p>",
      },
      importance: 2,
      category: CATEGORIES.MODEL_RELEASE
    },
    {
        start_date: { year: "2025", month: "05", day: "20" },
        text: {
            headline: createLink("https://mashable.com/article/google-veo-3-ai-video", "Veo 3"),
            text: "<p>As part of Google I/O, Google reveal Veo 3, a state-of-the-art video generator that now includes audio. Veo 3 takes social media by storm when users prompt characters into a situationally aware state.</p>"
        },
        chinese: {
            headline: createLink("https://mashable.com/article/google-veo-3-ai-video", "Veo 3"),
            text: "<p>作为 Google I/O 大会的一部分，谷歌发布了 Veo 3，这是一款先进的视频生成器，现已添加音频功能。当用户引导角色进入情境感知状态时，Veo 3 便会在社交媒体上引起轰动。</p>"
        },
        importance: 2,
        category: CATEGORIES.MODEL_RELEASE
    },
    {
        start_date: { year: "2025", month: "05", day: "22" },
        text: {
            headline: createLink("https://www.anthropic.com/news/claude-4", "Claude 4"),
            text: "<p>Anthropic release Claude Sonnet 4 and Claude Opus 4, which are state-of-the-art. This launched marked Anthropic's first model to achieve achieve ASL-3.</p>"
        },
        chinese: {
            headline: createLink("https://www.anthropic.com/news/claude-4", "Claude 4"),
            text: "<p>Anthropic 发布了 Claude Sonnet 4 和 Claude Opus 4，这两款产品堪称尖端科技。此次发布标志着 Anthropic 首款达到 ASL-3 标准的型号。</p>"
        },
        importance: 3,
        category: CATEGORIES.MODEL_RELEASE
    },
    {
        start_date: { year: "2025", month: "06", day: "12" },
        text: {
            headline: createLink("https://scale.com/blog/scale-ai-announces-next-phase-of-company-evolution", "Meta Superintelligence Labs"),
            text: "<p>Meta invests $14.3 billion for a 49% stake in Scale AI, valuing it at over $29 billion, and founder Alexandr Wang joins to lead the newly formed Meta Superintelligence Labs. The deal ignites an industry-wide war for top AI talent.</p>"
        },
        chinese: {
            headline: createLink("https://scale.com/blog/scale-ai-announces-next-phase-of-company-evolution", "Meta 超级智能实验室"),
            text: "<p>Meta 斥资 143 亿美元收购 Scale AI 49% 的股份，使其估值超过 290 亿美元；创始人 Alexandr Wang 加入 Meta，领导新成立的超级智能实验室（Superintelligence Labs）。此举掀起了全行业争夺顶尖人工智能人才的激烈竞争。</p>"
        },
        importance: 3,
        category: CATEGORIES.BUSINESS
    },
    {
        start_date: { year: "2025", month: "07", day: "09" },
        text: {
            headline: createLink("https://x.ai/news/grok-4", "Grok 4"),
            text: "<p>xAI releases Grok 4 with native tool use and real-time search. Its top-end Grok 4 Heavy variant uses parallel test-time compute and becomes the first model to score 50% on Humanity's Last Exam.</p>"
        },
        chinese: {
            headline: createLink("https://x.ai/news/grok-4", "Grok 4"),
            text: "<p>xAI 发布 Grok 4，具备原生工具调用和实时搜索能力。其顶配版本 Grok 4 Heavy 采用并行测试时计算，成为首个在“人类最后的考试”（Humanity's Last Exam）中得分达到 50% 的模型。</p>"
        },
        importance: 2,
        category: CATEGORIES.MODEL_RELEASE
    },
    {
        start_date: { year: "2025", month: "07", day: "23" },
        text: {
            headline: createLink("https://www.whitehouse.gov/wp-content/uploads/2025/07/Americas-AI-Action-Plan.pdf", "America's AI Action Plan"),
            text: "<p>The Trump administration releases \"Winning the Race: America's AI Action Plan,\" outlining over 90 federal actions across innovation, infrastructure, and international diplomacy, alongside executive orders to speed data center permitting and AI exports.</p>"
        },
        chinese: {
            headline: createLink("https://www.whitehouse.gov/wp-content/uploads/2025/07/Americas-AI-Action-Plan.pdf", "美国人工智能行动计划"),
            text: "<p>特朗普政府发布《赢得竞赛：美国人工智能行动计划》，提出在创新、基础设施和国际外交三大支柱下的 90 多项联邦举措，并签署行政命令以加快数据中心审批和美国人工智能技术出口。</p>"
        },
        importance: 2,
        category: CATEGORIES.POLICY
    },
    {
        start_date: { year: "2025", month: "08", day: "05" },
        text: {
            headline: createLink("https://openai.com/index/introducing-gpt-oss/", "OpenAI gpt-oss"),
            text: "<p>OpenAI releases two state-of-the-art open-weight language models.</p>"
        },
        chinese: {
            headline: createLink("https://openai.com/index/introducing-gpt-oss/", "OpenAI gpt-oss"),
            text: "<p>OpenAI 发布了两个最先进的开源语言模型。</p>"
        },
        importance: 3,
        category: CATEGORIES.MODEL_RELEASE
    },
    {
        start_date: { year: "2025", month: "08", day: "05" },
        text: {
            headline: createLink("https://deepmind.google/discover/blog/genie-3-a-new-frontier-for-world-models/", "Genie 3"),
            text: "<p>Google DeepMind releases Genie 3, a general purpose world model that can generate an unprecedented diversity of interactive environments.</p>"
        },
        chinese: {
            headline: createLink("https://deepmind.google/discover/blog/genie-3-a-new-frontier-for-world-models/", "Genie 3"),
            text: "<p>Google DeepMind 发布了 Genie 3，这是一种通用的世界模型，能够生成前所未有多样化的交互式环境。</p>"
        },
        importance: 3,
        category: CATEGORIES.MODEL_RELEASE
    },
    {
        start_date: { year: "2025", month: "08", day: "07" },
        text: {
            headline: createLink("https://openai.com/index/introducing-gpt-5/", "GPT-5"),
            text: "<p>OpenAI releases GPT-5, its most capable system yet and a unified model that automatically decides when to answer quickly and when to reason for longer. It rolls out to all ChatGPT users, with a GPT-5 Pro tier for extended reasoning.</p>"
        },
        chinese: {
            headline: createLink("https://openai.com/index/introducing-gpt-5/", "GPT-5"),
            text: "<p>OpenAI 发布迄今最强大的系统 GPT-5。这是一个统一模型，能够自动判断何时快速作答、何时进行更长时间的推理。该模型向所有 ChatGPT 用户开放，并提供用于扩展推理的 GPT-5 Pro 版本。</p>"
        },
        importance: 3,
        category: CATEGORIES.MODEL_RELEASE
    },
    {
        start_date: { year: "2025", month: "09", day: "02" },
        text: {
            headline: createLink("https://www.anthropic.com/news/anthropic-raises-series-f-at-usd183b-post-money-valuation", "Anthropic raises $13B"),
            text: "<p>Anthropic closes a $13 billion Series F at a $183 billion post-money valuation, led by ICONIQ, Fidelity, and Lightspeed, nearly tripling its valuation in six months as enterprise and coding revenue surges.</p>"
        },
        chinese: {
            headline: createLink("https://www.anthropic.com/news/anthropic-raises-series-f-at-usd183b-post-money-valuation", "Anthropic 融资 130 亿美元"),
            text: "<p>Anthropic 完成 130 亿美元的 F 轮融资，投后估值达 1830 亿美元，由 ICONIQ、富达和 Lightspeed 领投。在企业和编程收入激增的推动下，其估值在六个月内近乎翻三倍。</p>"
        },
        importance: 2,
        category: CATEGORIES.BUSINESS
    },
    {
        start_date: { year: "2025", month: "10", day: "28" },
        text: {
            headline: createLink("https://openai.com/index/built-to-benefit-everyone/", "OpenAI Restructuring"),
            text: "<p>OpenAI completes its recapitalization: its for-profit arm becomes a public benefit corporation (OpenAI Group PBC) controlled by the nonprofit OpenAI Foundation, alongside a new deal giving Microsoft a roughly 27% stake and extending its IP rights through 2032.</p>"
        },
        chinese: {
            headline: createLink("https://openai.com/index/built-to-benefit-everyone/", "OpenAI 重组"),
            text: "<p>OpenAI 完成资本重组：其营利部门转变为受非营利组织 OpenAI 基金会控制的公益公司（OpenAI Group PBC）；同时与微软达成新协议，微软持有约 27% 的股份，并将其知识产权使用权延长至 2032 年。</p>"
        },
        importance: 2,
        category: CATEGORIES.BUSINESS
    },
    {
        start_date: { year: "2025", month: "11", day: "18" },
        text: {
            headline: createLink("https://blog.google/products-and-platforms/products/gemini/gemini-3/", "Gemini 3"),
            text: "<p>Google releases Gemini 3, its most intelligent model, deployed on day one across Search, the Gemini app, AI Studio, and Vertex AI. It tops the LMArena leaderboard and ships alongside the new Antigravity agentic coding platform.</p>"
        },
        chinese: {
            headline: createLink("https://blog.google/products-and-platforms/products/gemini/gemini-3/", "Gemini 3"),
            text: "<p>谷歌发布其最智能的模型 Gemini 3，并在发布首日即覆盖搜索、Gemini 应用、AI Studio 和 Vertex AI。该模型登顶 LMArena 排行榜，并随附全新的 Antigravity 智能体编程平台。</p>"
        },
        importance: 3,
        category: CATEGORIES.MODEL_RELEASE
    },
    {
        start_date: { year: "2025", month: "11", day: "24" },
        text: {
            headline: createLink("https://www.anthropic.com/news/claude-opus-4-5", "Claude Opus 4.5"),
            text: "<p>Anthropic releases Claude Opus 4.5, calling it the best model in the world for coding, agents, and computer use. It becomes the first model to exceed 80% on SWE-bench Verified and arrives with sharply lower pricing.</p>"
        },
        chinese: {
            headline: createLink("https://www.anthropic.com/news/claude-opus-4-5", "Claude Opus 4.5"),
            text: "<p>Anthropic 发布 Claude Opus 4.5，称其为全球在编程、智能体和计算机操作方面最强的模型。它成为首个在 SWE-bench Verified 上得分超过 80% 的模型，并大幅下调了定价。</p>"
        },
        importance: 2,
        category: CATEGORIES.MODEL_RELEASE
    },
    {
        start_date: { year: "2026", month: "02", day: "02" },
        text: {
            headline: createLink("https://www.cnbc.com/2026/02/03/musk-xai-spacex-biggest-merger-ever.html", "SpaceX acquires xAI"),
            text: "<p>SpaceX acquires Elon Musk's xAI in an all-stock deal valuing the combined company at $1.25 trillion—the largest merger ever—uniting rockets, Starlink, X, and Grok, with a stated goal of building orbital data centers.</p>"
        },
        chinese: {
            headline: createLink("https://www.cnbc.com/2026/02/03/musk-xai-spacex-biggest-merger-ever.html", "SpaceX 收购 xAI"),
            text: "<p>SpaceX 以全股票交易收购埃隆·马斯克旗下的 xAI，合并后公司估值达 1.25 万亿美元，成为史上最大并购案。此举整合了火箭、Starlink、X 和 Grok，并宣称目标是建造轨道数据中心。</p>"
        },
        importance: 3,
        category: CATEGORIES.BUSINESS
    },
    {
        start_date: { year: "2026", month: "03", day: "31" },
        text: {
            headline: createLink("https://openai.com/index/accelerating-the-next-phase-ai/", "OpenAI raises $122B"),
            text: "<p>OpenAI closes the largest private funding round in history—$122 billion of committed capital at an $852 billion post-money valuation—anchored by Amazon, Nvidia, SoftBank, and Microsoft, as the company gears up for a potential IPO.</p>"
        },
        chinese: {
            headline: createLink("https://openai.com/index/accelerating-the-next-phase-ai/", "OpenAI 融资 1220 亿美元"),
            text: "<p>OpenAI 完成史上最大规模的私募融资——1220 亿美元的承诺资本，投后估值达 8520 亿美元，由亚马逊、英伟达、软银和微软领衔。该公司正为可能的首次公开募股做准备。</p>"
        },
        importance: 3,
        category: CATEGORIES.BUSINESS
    },
    {
        start_date: { year: "2026", month: "05", day: "20" },
        text: {
            headline: createLink("https://www.bloomberg.com/graphics/2026-spacex-ipo-stock-market-nasdaq-listings/", "SpaceX files for IPO"),
            text: "<p>SpaceX files to go public on the Nasdaq under the ticker SPCX, targeting a valuation of roughly $1.75 trillion—what would be the largest IPO in history. The offering bundles in Starlink and the newly merged xAI.</p>"
        },
        chinese: {
            headline: createLink("https://www.bloomberg.com/graphics/2026-spacex-ipo-stock-market-nasdaq-listings/", "SpaceX 申请 IPO"),
            text: "<p>SpaceX 提交在纳斯达克上市的申请，股票代码为 SPCX，目标估值约 1.75 万亿美元，有望成为史上最大规模的首次公开募股。此次发行涵盖 Starlink 以及新近合并的 xAI。</p>"
        },
        importance: 3,
        category: CATEGORIES.BUSINESS
    },
    {
        start_date: { year: "2026", month: "05", day: "28" },
        text: {
            headline: createLink("https://www.cnbc.com/2026/05/28/anthropic-open-ai-startup-value.html", "Anthropic raises $65B"),
            text: "<p>Anthropic announces a $65 billion Series H at a $965 billion valuation, nearly tripling its February valuation and surpassing OpenAI to become the world's most valuable AI startup as the leading labs head toward public markets.</p>"
        },
        chinese: {
            headline: createLink("https://www.cnbc.com/2026/05/28/anthropic-open-ai-startup-value.html", "Anthropic 融资 650 亿美元"),
            text: "<p>Anthropic 宣布完成 650 亿美元的 H 轮融资，估值达 9650 亿美元，较 2 月估值近乎翻三倍，超越 OpenAI 成为全球估值最高的人工智能初创公司。与此同时，各大领先实验室纷纷迈向公开市场。</p>"
        },
        importance: 3,
        category: CATEGORIES.BUSINESS
    },
    {
        start_date: { year: "2026", month: "04", day: "06" },
        text: {
            headline: createLink("https://venturebeat.com/technology/anthropic-says-it-hit-a-30-billion-revenue-run-rate-after-crazy-80x-growth", "Anthropic hits $30B ARR"),
            text: "<p>Anthropic discloses its revenue run-rate has surged past $30 billion—up from roughly $9 billion at the end of 2025—pulling ahead of OpenAI's ~$24 billion for the first time, driven largely by demand for its coding tools.</p>"
        },
        chinese: {
            headline: createLink("https://venturebeat.com/technology/anthropic-says-it-hit-a-30-billion-revenue-run-rate-after-crazy-80x-growth", "Anthropic 年化收入达 300 亿美元"),
            text: "<p>Anthropic 披露其年化收入运营率已突破 300 亿美元——较 2025 年底的约 90 亿美元大幅增长——首次超过 OpenAI 约 240 亿美元的水平，增长主要由其编程工具的需求推动。</p>"
        },
        importance: 2,
        category: CATEGORIES.BUSINESS
    },
    {
        start_date: { year: "2026", month: "04", day: "07" },
        text: {
            headline: createLink("https://red.anthropic.com/2026/mythos-preview/", "Claude Mythos Preview"),
            text: "<p>Anthropic reveals Claude Mythos Preview, a model a full tier above Opus that can autonomously find and exploit software zero-days. Rather than ship it broadly, Anthropic restricts it to Project Glasswing partners for cybersecurity defense and publishes a system card for the unreleased model.</p>"
        },
        chinese: {
            headline: createLink("https://red.anthropic.com/2026/mythos-preview/", "Claude Mythos 预览版"),
            text: "<p>Anthropic 公布 Claude Mythos 预览版，这是一款比 Opus 高出整整一个层级的模型，能够自主发现并利用软件零日漏洞。Anthropic 没有将其广泛发布，而是限制为 Project Glasswing 合作伙伴用于网络安全防御，并为这款尚未发布的模型发布了系统卡。</p>"
        },
        importance: 3,
        category: CATEGORIES.MODEL_RELEASE
    },
    {
        start_date: { year: "2026", month: "04", day: "16" },
        text: {
            headline: createLink("https://www.anthropic.com/news/claude-opus-4-7", "Claude Opus 4.7"),
            text: "<p>Anthropic releases Claude Opus 4.7, a notable step up on the hardest software-engineering tasks that lets users hand off their most difficult, long-running coding work with greater confidence.</p>"
        },
        chinese: {
            headline: createLink("https://www.anthropic.com/news/claude-opus-4-7", "Claude Opus 4.7"),
            text: "<p>Anthropic 发布 Claude Opus 4.7，在最具难度的软件工程任务上有显著提升，使用户能够更有信心地将最棘手、耗时最长的编程工作交给它处理。</p>"
        },
        importance: 2,
        category: CATEGORIES.MODEL_RELEASE
    },
    {
        start_date: { year: "2026", month: "04", day: "23" },
        text: {
            headline: createLink("https://openai.com/index/introducing-gpt-5-5/", "GPT-5.5"),
            text: "<p>OpenAI releases GPT-5.5 (codename \"Spud\"), a frontier model for complex agentic coding and knowledge work that the company says outperforms Anthropic's Claude Opus 4.7 and Google's Gemini 3.1 Pro across a wide range of tasks.</p>"
        },
        chinese: {
            headline: createLink("https://openai.com/index/introducing-gpt-5-5/", "GPT-5.5"),
            text: "<p>OpenAI 发布 GPT-5.5（代号“Spud”），这是一款面向复杂智能体编程和知识工作的前沿模型。该公司称其在广泛的任务中超越了 Anthropic 的 Claude Opus 4.7 和谷歌的 Gemini 3.1 Pro。</p>"
        },
        importance: 3,
        category: CATEGORIES.MODEL_RELEASE
    },
    {
        start_date: { year: "2026", month: "05", day: "14" },
        text: {
            headline: createLink("https://www.anthropic.com/research/2028-ai-leadership", "Two Scenarios for AI Leadership"),
            text: "<p>Anthropic publishes \"2028: Two scenarios for global AI leadership,\" arguing that the US and its allies must tighten compute export controls and curb distillation by Chinese labs to avoid a future of authoritarian AI leadership.</p>"
        },
        chinese: {
            headline: createLink("https://www.anthropic.com/research/2028-ai-leadership", "全球人工智能领导力的两种情景"),
            text: "<p>Anthropic 发表《2028：全球人工智能领导力的两种情景》，主张美国及其盟友必须收紧对算力的出口管制，并遏制中国实验室的“蒸馏”行为，以避免出现由威权主义主导人工智能的未来。</p>"
        },
        importance: 2,
        category: CATEGORIES.POLICY
    },
    {
        start_date: { year: "2026", month: "05", day: "28" },
        text: {
            headline: createLink("https://www.anthropic.com/news/claude-opus-4-8", "Claude Opus 4.8"),
            text: "<p>Anthropic upgrades its flagship to Claude Opus 4.8, billed as its most honest model yet—around four times less likely to let a flaw in its own code slip by—with a 3× cheaper fast mode and a new dynamic workflows feature for codebase-scale agentic coding.</p>"
        },
        chinese: {
            headline: createLink("https://www.anthropic.com/news/claude-opus-4-8", "Claude Opus 4.8"),
            text: "<p>Anthropic 将其旗舰模型升级为 Claude Opus 4.8，称其为迄今最诚实的模型——让自身代码中的缺陷被忽略的概率降低约四倍——同时快速模式成本降低至原来的三分之一，并新增了面向代码库级智能体编程的动态工作流功能。</p>"
        },
        importance: 2,
        category: CATEGORIES.MODEL_RELEASE
    },
    {
        start_date: { year: "2026", month: "05", day: "06" },
        text: {
            headline: createLink("https://www.cnbc.com/2026/05/06/anthropic-spacex-data-center-capacity.html", "Anthropic–SpaceXAI compute deal"),
            text: "<p>Anthropic strikes a deal to use all of the compute at SpaceX's Colossus 1 data center—220,000+ GPUs and 300+ MW—paying a reported $1.25 billion per month through 2029. The same day, Musk says xAI will be folded into the merged company, now called SpaceXAI.</p>"
        },
        chinese: {
            headline: createLink("https://www.cnbc.com/2026/05/06/anthropic-spacex-data-center-capacity.html", "Anthropic 与 SpaceXAI 算力协议"),
            text: "<p>Anthropic 达成协议，将使用 SpaceX 旗下 Colossus 1 数据中心的全部算力——超过 22 万块 GPU 和 300 多兆瓦电力——据报道每月支付 12.5 亿美元，直至 2029 年。同一天，马斯克表示 xAI 将并入合并后的公司，即现在的 SpaceXAI。</p>"
        },
        importance: 3,
        category: CATEGORIES.BUSINESS
    },
    {
        start_date: { year: "2026", month: "05", day: "19" },
        text: {
            headline: createLink("https://techcrunch.com/2026/05/19/openai-co-founder-andrej-karpathy-joins-anthropics-pre-training-team/", "Karpathy joins Anthropic"),
            text: "<p>Andrej Karpathy—OpenAI co-founder and former Tesla AI director—joins Anthropic's pre-training team to start a group using Claude to accelerate pre-training research, a marquee hire in the intensifying war for AI talent.</p>"
        },
        chinese: {
            headline: createLink("https://techcrunch.com/2026/05/19/openai-co-founder-andrej-karpathy-joins-anthropics-pre-training-team/", "Karpathy 加入 Anthropic"),
            text: "<p>OpenAI 联合创始人、前特斯拉人工智能总监 Andrej Karpathy 加入 Anthropic 的预训练团队，组建一个利用 Claude 来加速预训练研究的小组。在日益激烈的人工智能人才争夺战中，这是一次重磅招募。</p>"
        },
        importance: 2,
        category: CATEGORIES.BUSINESS
    },
    {
        start_date: { year: "2026", month: "05", day: "20" },
        text: {
            headline: createLink("https://openai.com/index/model-disproves-discrete-geometry-conjecture/", "AI Cracks the Unit Distance Problem"),
            text: "<p>OpenAI announces that an internal general-purpose reasoning model autonomously disproved Erdős's 80-year-old planar unit distance conjecture—the first time AI has solved a prominent open problem central to a field of mathematics. The proof, drawing on algebraic number theory, was checked by leading mathematicians.</p>"
        },
        chinese: {
            headline: createLink("https://openai.com/index/model-disproves-discrete-geometry-conjecture/", "AI 攻克单位距离问题"),
            text: "<p>OpenAI 宣布，一个内部通用推理模型自主推翻了埃尔德什提出、已有 80 年历史的平面单位距离猜想——这是 AI 首次自主解决某一数学领域的著名开放性问题。该证明运用了代数数论的工具，并已由顶尖数学家验证。</p>"
        },
        importance: 3,
        category: CATEGORIES.RESEARCH
    },
    {
        start_date: { year: "2025", month: "05", day: "21" },
        text: {
            headline: createLink("https://openai.com/sam-and-jony/", "OpenAI acquires io"),
            text: "<p>OpenAI acquires io, the device startup co-founded by legendary Apple designer Jony Ive, in a ~$6.5 billion all-stock deal—its largest acquisition—to build a family of AI-native hardware devices.</p>"
        },
        chinese: {
            headline: createLink("https://openai.com/sam-and-jony/", "OpenAI 收购 io"),
            text: "<p>OpenAI 以约 65 亿美元的全股票交易收购由传奇苹果设计师 Jony Ive 联合创立的硬件初创公司 io，这是其规模最大的一笔收购，旨在打造一系列原生人工智能硬件设备。</p>"
        },
        importance: 2,
        category: CATEGORIES.BUSINESS
    },
    {
        start_date: { year: "2026", month: "01", day: "08" },
        text: {
            headline: createLink("https://technode.com/2026/01/08/zhipu-ai-becomes-the-worlds-first-public-company-centered-on-agi-foundation-models-with-hong-kong-listing/", "Z.ai goes public"),
            text: "<p>China's Zhipu AI (Z.ai) lists on the Hong Kong Stock Exchange, becoming the world's first publicly traded large language model company—going public well ahead of still-private OpenAI and Anthropic.</p>"
        },
        chinese: {
            headline: createLink("https://technode.com/2026/01/08/zhipu-ai-becomes-the-worlds-first-public-company-centered-on-agi-foundation-models-with-hong-kong-listing/", "Z.ai 上市"),
            text: "<p>中国的智谱 AI（Z.ai）在香港交易所挂牌上市，成为全球首家公开上市的大语言模型公司——远早于仍处于私有状态的 OpenAI 和 Anthropic。</p>"
        },
        importance: 2,
        category: CATEGORIES.BUSINESS
    },
    {
        start_date: { year: "2026", month: "02", day: "11" },
        text: {
            headline: createLink("https://huggingface.co/blog/mlabonne/glm-5", "GLM-5"),
            text: "<p>Zhipu's Z.ai releases GLM-5, a 744B-parameter open-weight (MIT) model that tops open-model leaderboards—and was trained entirely on Huawei Ascend chips with no Nvidia hardware, a milestone for China's domestic compute stack under US export controls.</p>"
        },
        chinese: {
            headline: createLink("https://huggingface.co/blog/mlabonne/glm-5", "GLM-5"),
            text: "<p>智谱旗下的 Z.ai 发布 GLM-5，这是一款拥有 7440 亿参数的开源权重（MIT 许可）模型，登顶开源模型排行榜；并且完全基于华为昇腾芯片训练，未使用任何英伟达硬件，成为美国出口管制下中国本土算力体系的一个里程碑。</p>"
        },
        importance: 2,
        category: CATEGORIES.MODEL_RELEASE
    },
    {
        start_date: { year: "2026", month: "04", day: "24" },
        text: {
            headline: createLink("https://venturebeat.com/technology/deepseek-v4-arrives-with-near-state-of-the-art-intelligence-at-1-6th-the-cost-of-opus-4-7-gpt-5-5", "DeepSeek V4"),
            text: "<p>DeepSeek releases V4, an open-weight (MIT) Mixture-of-Experts family with a 1M-token context window that nears frontier performance at roughly one-sixth the cost of GPT-5.5 and Claude Opus 4.7—hailed as a 'second DeepSeek moment.'</p>"
        },
        chinese: {
            headline: createLink("https://venturebeat.com/technology/deepseek-v4-arrives-with-near-state-of-the-art-intelligence-at-1-6th-the-cost-of-opus-4-7-gpt-5-5", "DeepSeek V4"),
            text: "<p>DeepSeek 发布 V4，这是一个采用 MIT 许可的开源权重混合专家（MoE）模型家族，拥有 100 万 token 的上下文窗口，性能接近前沿水平，而成本仅约为 GPT-5.5 和 Claude Opus 4.7 的六分之一，被誉为“第二个 DeepSeek 时刻”。</p>"
        },
        importance: 3,
        category: CATEGORIES.MODEL_RELEASE
    },
    {
        start_date: { year: "2026", month: "05", day: "18" },
        text: {
            headline: createLink("https://www.cnbc.com/2026/05/18/musk-altman-openai-trial-verdict.html", "Musk v. Altman verdict"),
            text: "<p>A California jury unanimously rejects Elon Musk's lawsuit against OpenAI, Sam Altman, and Greg Brockman, finding his 'breach of charitable trust' claims fell outside the statute of limitations. Musk calls it a 'calendar technicality' and vows to appeal.</p>"
        },
        chinese: {
            headline: createLink("https://www.cnbc.com/2026/05/18/musk-altman-openai-trial-verdict.html", "马斯克诉奥尔特曼案裁决"),
            text: "<p>加利福尼亚的一个陪审团一致驳回了埃隆·马斯克对 OpenAI、Sam Altman 和 Greg Brockman 的诉讼，认定其“违反慈善信托”的主张已超过诉讼时效。马斯克称这是“日历上的技术性问题”，并誓言上诉。</p>"
        },
        importance: 2,
        category: CATEGORIES.CULTURE
    },
    {
        start_date: { year: "2026", month: "05", day: "19" },
        text: {
            headline: createLink("https://blog.google/innovation-and-ai/sundar-pichai-io-2026/", "Google I/O 2026"),
            text: "<p>At Google I/O, Google ushers in its 'agentic Gemini era,' unveiling Gemini 3.5 Flash, the any-input-to-any-output Gemini Omni model, and Gemini Spark, a 24/7 personal agent—while the Gemini app passes 900 million monthly users.</p>"
        },
        chinese: {
            headline: createLink("https://blog.google/innovation-and-ai/sundar-pichai-io-2026/", "谷歌 I/O 2026"),
            text: "<p>在谷歌 I/O 大会上，谷歌开启“智能体 Gemini 时代”，发布 Gemini 3.5 Flash、可实现任意输入到任意输出的 Gemini Omni 模型，以及全天候个人智能体 Gemini Spark；与此同时，Gemini 应用的月活跃用户突破 9 亿。</p>"
        },
        importance: 2,
        category: CATEGORIES.MODEL_RELEASE
    },
    {
        start_date: { year: "2026", month: "05", day: "04" },
        text: {
            headline: createLink("https://www.anthropic.com/news/enterprise-ai-services-company", "Anthropic Services Firm"),
            text: "<p>Anthropic teams up with Blackstone, Hellman & Friedman, and Goldman Sachs to launch a ~$1.5 billion enterprise AI services firm that embeds engineers inside mid-market and PE-owned companies to deploy Claude in their core operations.</p>"
        },
        chinese: {
            headline: createLink("https://www.anthropic.com/news/enterprise-ai-services-company", "Anthropic 企业 AI 服务公司"),
            text: "<p>Anthropic 联合 Blackstone、Hellman & Friedman 和高盛成立一家约 15 亿美元的企业级人工智能服务公司，将工程师派驻到中型企业和私募股权持有的公司内部，把 Claude 部署到其核心业务流程中。</p>"
        },
        importance: 2,
        category: CATEGORIES.BUSINESS
    },
    {
        start_date: { year: "2026", month: "05", day: "04" },
        text: {
            headline: createLink("https://www.morningstar.com/news/business-wire/20260504231235/long-lake-agrees-to-acquire-american-express-global-business-travel-the-worlds-largest-corporate-travel-platform-for-63-billion-with-support-from-general-catalyst-and-alpha-wave", "Long Lake buys Amex GBT"),
            text: "<p>Long Lake—a two-year-old AI holding company backed by General Catalyst, Thrive, and Alpha Wave—agrees to take American Express Global Business Travel private for $6.3 billion, one of the largest 'AI rollups' yet, planning to run its Nexus AI platform across the world's biggest corporate-travel operation.</p>"
        },
        chinese: {
            headline: createLink("https://www.morningstar.com/news/business-wire/20260504231235/long-lake-agrees-to-acquire-american-express-global-business-travel-the-worlds-largest-corporate-travel-platform-for-63-billion-with-support-from-general-catalyst-and-alpha-wave", "Long Lake 收购 Amex GBT"),
            text: "<p>Long Lake——一家成立两年、由 General Catalyst、Thrive 和 Alpha Wave 支持的人工智能控股公司——同意以 63 亿美元将美国运通全球商务旅行（Amex GBT）私有化，这是迄今最大的“人工智能整合收购（AI rollup）”之一，计划在这家全球最大的商务旅行运营商中部署其 Nexus AI 平台。</p>"
        },
        importance: 2,
        category: CATEGORIES.BUSINESS
    },
    {
        start_date: { year: "2026", month: "05", day: "11" },
        text: {
            headline: createLink("https://openai.com/index/openai-launches-the-deployment-company/", "OpenAI Deployment Company"),
            text: "<p>OpenAI launches the OpenAI Deployment Company (\"DeployCo\"), a majority-owned subsidiary backed by over $4 billion from 19 investors led by TPG, to embed Forward Deployed Engineers in enterprises—and acquires the consultancy Tomoro to seed it with ~150 engineers.</p>"
        },
        chinese: {
            headline: createLink("https://openai.com/index/openai-launches-the-deployment-company/", "OpenAI 部署公司"),
            text: "<p>OpenAI 成立 OpenAI 部署公司（“DeployCo”），这是一家由 TPG 领投、19 家投资方提供逾 40 亿美元支持的控股子公司，向企业派驻“前置部署工程师”（FDE）；同时收购咨询公司 Tomoro，为其注入约 150 名工程师。</p>"
        },
        importance: 2,
        category: CATEGORIES.BUSINESS
    },
    {
        start_date: { year: "2025", month: "03", day: "19" },
        text: {
            headline: createLink("https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/", "METR: AI Task Horizons Double Every 7 Months"),
            text: "<p>METR publishes 'Measuring AI Ability to Complete Long Tasks,' introducing the 'time horizon' metric—the length of task (in human-expert time) an AI can complete with 50% reliability. It finds the horizon has doubled roughly every seven months since 2019, with Claude 3.7 Sonnet at about one hour, and the chart becomes the field's most-cited progress curve.</p>"
        },
        chinese: {
            headline: createLink("https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/", "METR：AI 任务时间跨度每 7 个月翻一番"),
            text: "<p>METR 发表《衡量 AI 完成长任务的能力》，提出“时间跨度”（time horizon）指标——即 AI 能以 50% 可靠性完成的任务时长（以人类专家用时衡量）。研究发现自 2019 年以来该指标约每七个月翻一番，Claude 3.7 Sonnet 约为一小时，这张图表成为业内引用最多的进展曲线。</p>"
        },
        importance: 2,
        category: CATEGORIES.RESEARCH
    },
    {
        start_date: { year: "2026", month: "01", day: "29" },
        text: {
            headline: createLink("https://metr.org/blog/2026-1-29-time-horizon-1-1/", "METR Time Horizon 1.1"),
            text: "<p>METR refreshes its time-horizon benchmark with 228 tasks (up from 170) and new evaluation infrastructure, finding that since 2023 frontier time horizons have doubled roughly every 4.3 months—far faster than the original 7-month trend—with Claude Opus 4.5 leading at about 5 hours.</p>"
        },
        chinese: {
            headline: createLink("https://metr.org/blog/2026-1-29-time-horizon-1-1/", "METR 时间跨度 1.1"),
            text: "<p>METR 更新其时间跨度基准，任务数从 170 增至 228 并启用新的评测基础设施。结果显示自 2023 年以来前沿模型的时间跨度约每 4.3 个月翻一番——远快于最初的 7 个月趋势——其中 Claude Opus 4.5 以约 5 小时领先。</p>"
        },
        importance: 2,
        category: CATEGORIES.RESEARCH
    },
    {
        start_date: { year: "2026", month: "02", day: "05" },
        text: {
            headline: createLink("https://www.anthropic.com/news/claude-opus-4-6", "Claude Opus 4.6"),
            text: "<p>Anthropic releases Claude Opus 4.6 with a 1M-token context window, adaptive thinking, and 'agent teams' in Claude Code. Weeks later METR estimates its 50% time horizon at roughly 14.5 hours—nearly triple the previous leader—while warning that its task suite is close to saturated.</p>"
        },
        chinese: {
            headline: createLink("https://www.anthropic.com/news/claude-opus-4-6", "Claude Opus 4.6"),
            text: "<p>Anthropic 发布 Claude Opus 4.6，具备 100 万 token 上下文窗口、自适应思考，以及 Claude Code 中的“智能体团队”功能。数周后，METR 估计其 50% 时间跨度约为 14.5 小时——接近此前领先者的三倍——同时警告其任务集已接近饱和。</p>"
        },
        importance: 2,
        category: CATEGORIES.MODEL_RELEASE
    },
    {
        start_date: { year: "2026", month: "02", day: "27" },
        text: {
            headline: createLink("https://www.axios.com/2026/02/27/anthropic-pentagon-supply-chain-risk-claude", "Pentagon blacklists Anthropic"),
            text: "<p>After Anthropic refuses to drop its bans on mass domestic surveillance and fully autonomous weapons, President Trump orders all federal agencies to stop using its technology and Defense Secretary Hegseth designates the company a 'supply chain risk'—the first time the U.S. government has blacklisted a frontier AI lab.</p>"
        },
        chinese: {
            headline: createLink("https://www.axios.com/2026/02/27/anthropic-pentagon-supply-chain-risk-claude", "五角大楼将 Anthropic 列入黑名单"),
            text: "<p>在 Anthropic 拒绝取消对大规模国内监控和完全自主武器的使用限制后，特朗普总统下令所有联邦机构停止使用其技术，国防部长赫格塞斯将该公司列为“供应链风险”——这是美国政府首次将一家前沿 AI 实验室列入黑名单。</p>"
        },
        importance: 3,
        category: CATEGORIES.POLICY
    },
    {
        start_date: { year: "2026", month: "03", day: "05" },
        text: {
            headline: createLink("https://openai.com/index/introducing-gpt-5-4/", "GPT-5.4"),
            text: "<p>OpenAI releases GPT-5.4 in Thinking and Pro variants, billed as its most capable and efficient model for professional work, with a 1M-token context window in the API and markedly better token efficiency.</p>"
        },
        chinese: {
            headline: createLink("https://openai.com/index/introducing-gpt-5-4/", "GPT-5.4"),
            text: "<p>OpenAI 发布 GPT-5.4，提供 Thinking 和 Pro 两个版本，号称其面向专业工作最强大且最高效的模型，API 支持 100 万 token 上下文窗口，token 效率显著提升。</p>"
        },
        importance: 1,
        category: CATEGORIES.MODEL_RELEASE
    },
    {
        start_date: { year: "2026", month: "04", day: "08" },
        text: {
            headline: createLink("https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/", "Meta Muse Spark"),
            text: "<p>Meta Superintelligence Labs ships Muse Spark (codename Avocado), its first model since the $14 billion Scale AI deal brought in Alexandr Wang—a fast multimodal model with a 'contemplating' mode that rolls out across Meta AI, WhatsApp, Instagram, and Meta's smart glasses.</p>"
        },
        chinese: {
            headline: createLink("https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/", "Meta Muse Spark"),
            text: "<p>Meta 超级智能实验室推出 Muse Spark（代号 Avocado），这是自 140 亿美元 Scale AI 交易引入 Alexandr Wang 以来的首个模型——一款快速多模态模型，具备“深思”模式，陆续部署至 Meta AI、WhatsApp、Instagram 及 Meta 智能眼镜。</p>"
        },
        importance: 2,
        category: CATEGORIES.MODEL_RELEASE
    },
    {
        start_date: { year: "2026", month: "06", day: "01" },
        text: {
            headline: createLink("https://www.anthropic.com/news/confidential-draft-s1-sec", "Anthropic files for IPO"),
            text: "<p>Anthropic confidentially submits a draft S-1 to the SEC, four days after its $65 billion Series H. Reports point to a Nasdaq listing as early as October led by Goldman Sachs, JPMorgan, and Morgan Stanley, raising upward of $60 billion—the first frontier lab to file.</p>"
        },
        chinese: {
            headline: createLink("https://www.anthropic.com/news/confidential-draft-s1-sec", "Anthropic 申请上市"),
            text: "<p>Anthropic 在完成 650 亿美元 H 轮融资四天后，向美国证券交易委员会秘密提交 S-1 草案。据报道，此次由高盛、摩根大通和摩根士丹利牵头，最早于 10 月在纳斯达克上市，募资规模逾 600 亿美元——成为首家提交上市申请的前沿实验室。</p>"
        },
        importance: 3,
        category: CATEGORIES.BUSINESS
    },
    {
        start_date: { year: "2026", month: "06", day: "02" },
        text: {
            headline: createLink("https://www.whitehouse.gov/presidential-actions/2026/06/promoting-advanced-artificial-intelligence-innovation-and-security/", "Frontier AI Executive Order"),
            text: "<p>President Trump signs Executive Order 14409, 'Promoting Advanced AI Innovation and Security,' creating a 'voluntary' pre-release review framework for frontier models capable of autonomously exploiting software vulnerabilities, plus an AI cybersecurity clearinghouse—what critics call a de facto licensing regime.</p>"
        },
        chinese: {
            headline: createLink("https://www.whitehouse.gov/presidential-actions/2026/06/promoting-advanced-artificial-intelligence-innovation-and-security/", "前沿 AI 行政令"),
            text: "<p>特朗普总统签署第 14409 号行政令《促进先进人工智能创新与安全》，为能够自主利用软件漏洞的前沿模型建立“自愿”发布前审查框架，并设立 AI 网络安全信息交换中心——批评者称之为事实上的许可制度。</p>"
        },
        importance: 2,
        category: CATEGORIES.POLICY
    },
    {
        start_date: { year: "2026", month: "06", day: "08" },
        text: {
            headline: createLink("https://www.cnbc.com/2026/06/08/openai-confidentially-files-for-ipo-prepping-wall-street-for-ai-debut.html", "OpenAI files for IPO"),
            text: "<p>OpenAI confirms it has confidentially filed a draft S-1 with the SEC at an $852 billion valuation, while saying the timing is undecided and 'may be a while.' With SpaceX and Anthropic also in the pipeline, all three leading labs are now headed for public markets.</p>"
        },
        chinese: {
            headline: createLink("https://www.cnbc.com/2026/06/08/openai-confidentially-files-for-ipo-prepping-wall-street-for-ai-debut.html", "OpenAI 申请上市"),
            text: "<p>OpenAI 确认已以 8520 亿美元估值向美国证券交易委员会秘密提交 S-1 草案，但表示上市时间尚未确定，“可能还需要一段时间”。随着 SpaceX 和 Anthropic 也在排队上市，三大领先实验室均已迈向公开市场。</p>"
        },
        importance: 2,
        category: CATEGORIES.BUSINESS
    },
    {
        start_date: { year: "2026", month: "06", day: "09" },
        text: {
            headline: createLink("https://www.anthropic.com/news/claude-fable-5-mythos-5", "Claude Fable 5 & Mythos 5"),
            text: "<p>Anthropic releases Claude Fable 5, its first Mythos-class model open to the public, alongside the restricted Claude Mythos 5. The two share one underlying model; Fable adds classifier safeguards that route cyber, bio/chem, and distillation requests to Opus 4.8. Priced at $10/$50 per million tokens, it is state-of-the-art on nearly every benchmark tested.</p>"
        },
        chinese: {
            headline: createLink("https://www.anthropic.com/news/claude-fable-5-mythos-5", "Claude Fable 5 与 Mythos 5"),
            text: "<p>Anthropic 发布 Claude Fable 5——首个向公众开放的 Mythos 级模型——以及受限的 Claude Mythos 5。两者共享同一底层模型；Fable 增加了分类器安全措施，将网络安全、生化及蒸馏相关请求转交 Opus 4.8 处理。定价为每百万 token 10/50 美元，在几乎所有测试基准上均达到最先进水平。</p>"
        },
        importance: 3,
        category: CATEGORIES.MODEL_RELEASE
    },
    {
        start_date: { year: "2026", month: "06", day: "11" },
        text: {
            headline: createLink("https://techcrunch.com/2026/06/11/jeff-bezoss-prometheus-raises-12b-to-build-an-artificial-general-engineer-for-the-physical-world/", "Prometheus raises $12B"),
            text: "<p>Prometheus, the industrial-AI startup co-led by Jeff Bezos and Vik Bajaj, raises a $12 billion Series B at a $41 billion valuation to build an 'artificial general engineer' for physical design and manufacturing—the largest round yet for a new AI lab.</p>"
        },
        chinese: {
            headline: createLink("https://techcrunch.com/2026/06/11/jeff-bezoss-prometheus-raises-12b-to-build-an-artificial-general-engineer-for-the-physical-world/", "Prometheus 融资 120 亿美元"),
            text: "<p>由 Jeff Bezos 与 Vik Bajaj 共同领导的工业 AI 初创公司 Prometheus 完成 120 亿美元 B 轮融资，估值达 410 亿美元，目标是打造面向实体设计与制造的“通用人工工程师”——这是新兴 AI 实验室迄今最大的一轮融资。</p>"
        },
        importance: 2,
        category: CATEGORIES.BUSINESS
    },
    {
        start_date: { year: "2026", month: "06", day: "12" },
        text: {
            headline: createLink("https://www.cnbc.com/2026/06/12/spacex-ipo-spcx-live-updates.html", "SpaceX goes public"),
            text: "<p>SpaceX—now including xAI and Grok—debuts on the Nasdaq as SPCX, raising roughly $75 billion in the largest IPO in history. Shares close up 19% at $160.95, valuing the company above $2 trillion.</p>"
        },
        chinese: {
            headline: createLink("https://www.cnbc.com/2026/06/12/spacex-ipo-spcx-live-updates.html", "SpaceX 上市"),
            text: "<p>SpaceX——现已包含 xAI 和 Grok——以 SPCX 为代码在纳斯达克挂牌，募资约 750 亿美元，创下史上最大 IPO。股价首日收涨 19% 至 160.95 美元，公司市值超过 2 万亿美元。</p>"
        },
        importance: 3,
        category: CATEGORIES.BUSINESS
    },
    {
        start_date: { year: "2026", month: "06", day: "12" },
        text: {
            headline: createLink("https://www.cnn.com/2026/06/13/business/anthropic-mythos-model-national-security", "U.S. pulls Fable 5 offline"),
            text: "<p>Citing a jailbreak that could turn the models into unrestricted cyber tools, the Commerce Department orders Anthropic to bar all foreign nationals from Fable 5 and Mythos 5. Unable to verify nationality in real time, Anthropic disables both models for everyone within hours. The controls are lifted June 30 after a new classifier is deployed—the first time Washington has forced a frontier model off the market.</p>"
        },
        chinese: {
            headline: createLink("https://www.cnn.com/2026/06/13/business/anthropic-mythos-model-national-security", "美国政府令 Fable 5 下线"),
            text: "<p>美国商务部以一种可能使模型变成不受限网络攻击工具的越狱手段为由，命令 Anthropic 禁止所有外国公民使用 Fable 5 和 Mythos 5。由于无法实时核实用户国籍，Anthropic 在数小时内对所有用户下线了这两款模型。在部署新的分类器后，管制于 6 月 30 日解除——这是华盛顿首次迫使一款前沿模型退出市场。</p>"
        },
        importance: 3,
        category: CATEGORIES.POLICY
    },
    {
        start_date: { year: "2026", month: "06", day: "19" },
        text: {
            headline: createLink("https://www.bloomberg.com/news/articles/2026-06-19/nobel-winner-john-jumper-to-leave-google-deepmind-for-anthropic", "John Jumper joins Anthropic"),
            text: "<p>Nobel laureate John Jumper, co-creator of AlphaFold, leaves Google DeepMind for Anthropic—the most prominent of a summer wave of departures from Google that will also include Jeff Dean, Oriol Vinyals, and Quoc Le.</p>"
        },
        chinese: {
            headline: createLink("https://www.bloomberg.com/news/articles/2026-06-19/nobel-winner-john-jumper-to-leave-google-deepmind-for-anthropic", "John Jumper 加入 Anthropic"),
            text: "<p>诺贝尔奖得主、AlphaFold 的共同创造者 John Jumper 离开 Google DeepMind 加入 Anthropic——这是谷歌夏季离职潮中最引人注目的一例，随后离开的还有 Jeff Dean、Oriol Vinyals 和 Quoc Le。</p>"
        },
        importance: 2,
        category: CATEGORIES.BUSINESS
    },
    {
        start_date: { year: "2026", month: "06", day: "30" },
        text: {
            headline: createLink("https://www.anthropic.com/news/claude-sonnet-5", "Claude Sonnet 5"),
            text: "<p>Anthropic launches Claude Sonnet 5, its most agentic mid-tier model, performing close to Opus 4.8 at a fraction of the cost. It replaces Sonnet 4.6 as the default on Claude.ai and ships with introductory pricing of $2/$10 per million tokens.</p>"
        },
        chinese: {
            headline: createLink("https://www.anthropic.com/news/claude-sonnet-5", "Claude Sonnet 5"),
            text: "<p>Anthropic 推出 Claude Sonnet 5，这是其智能体能力最强的中端模型，性能接近 Opus 4.8 而成本仅为其一小部分。它取代 Sonnet 4.6 成为 Claude.ai 的默认模型，并以每百万 token 2/10 美元的优惠价格上市。</p>"
        },
        importance: 2,
        category: CATEGORIES.MODEL_RELEASE
    },
    {
        start_date: { year: "2026", month: "07", day: "09" },
        text: {
            headline: createLink("https://openai.com/index/gpt-5-6/", "GPT-5.6 Sol, Terra & Luna"),
            text: "<p>After a 13-day government-imposed gate limited it to trusted partners, OpenAI publicly launches the GPT-5.6 family—flagship Sol, mid-tier Terra, and small Luna—touting its strongest cybersecurity model yet. METR's pre-deployment evaluation put Sol's time horizon near 11 hours but flagged the highest cheating rate of any public model it had tested.</p>"
        },
        chinese: {
            headline: createLink("https://openai.com/index/gpt-5-6/", "GPT-5.6 Sol、Terra 与 Luna"),
            text: "<p>在政府施加的 13 天限制期内仅向可信合作伙伴开放后，OpenAI 公开发布 GPT-5.6 系列——旗舰 Sol、中端 Terra 和小型 Luna——并称其为迄今最强的网络安全模型。METR 的部署前评估显示 Sol 的时间跨度约为 11 小时，但指出其作弊率是 METR 测试过的公开模型中最高的。</p>"
        },
        importance: 2,
        category: CATEGORIES.MODEL_RELEASE
    },
    {
        start_date: { year: "2026", month: "07", day: "09" },
        text: {
            headline: createLink("https://techcrunch.com/2026/07/09/fidji-simo-steps-down-from-openais-no-2-role/", "Fidji Simo steps down"),
            text: "<p>Fidji Simo, OpenAI's CEO of Applications and Sam Altman's No. 2, steps down to recover from a severe flare-up of a chronic illness, becoming a part-time advisor—the start of a pre-IPO leadership churn that will also see longtime COO Brad Lightcap depart in August.</p>"
        },
        chinese: {
            headline: createLink("https://techcrunch.com/2026/07/09/fidji-simo-steps-down-from-openais-no-2-role/", "Fidji Simo 卸任"),
            text: "<p>OpenAI 应用业务 CEO、Sam Altman 的二把手 Fidji Simo 因慢性病严重复发而卸任，转任兼职顾问——这拉开了上市前高管更迭的序幕，长期担任 COO 的 Brad Lightcap 也将于 8 月离职。</p>"
        },
        importance: 2,
        category: CATEGORIES.BUSINESS
    },
    {
        start_date: { year: "2026", month: "07", day: "17" },
        text: {
            headline: createLink("https://fortune.com/2026/07/17/china-moonshot-kimi-k3-markets-china-ai/", "Kimi K3"),
            text: "<p>Moonshot AI releases Kimi K3, a 2.8-trillion-parameter open-weight model it bills as the world's largest, approaching Fable 5 and GPT-5.6 on major benchmarks at a fraction of the price—triggering a market sell-off reminiscent of the DeepSeek shock.</p>"
        },
        chinese: {
            headline: createLink("https://fortune.com/2026/07/17/china-moonshot-kimi-k3-markets-china-ai/", "Kimi K3"),
            text: "<p>月之暗面发布 Kimi K3，这是一款 2.8 万亿参数的开放权重模型，号称全球最大，在主要基准上以远低于对手的价格逼近 Fable 5 和 GPT-5.6——引发了堪比 DeepSeek 冲击的市场抛售。</p>"
        },
        importance: 2,
        category: CATEGORIES.MODEL_RELEASE
    },
    {
        start_date: { year: "2026", month: "07", day: "19" },
        text: {
            headline: createLink("https://www.sciencedaily.com/releases/2026/08/260804034634.htm", "AI Disproves the Jacobian Conjecture"),
            text: "<p>Anthropic mathematician Levent Alpöge posts a three-line counterexample, credited to Claude Fable 5, that disproves the 87-year-old Jacobian conjecture in every dimension above two. Mathematicians verify the polynomial map within hours; the two-dimensional case remains open.</p>"
        },
        chinese: {
            headline: createLink("https://www.sciencedaily.com/releases/2026/08/260804034634.htm", "AI 推翻雅可比猜想"),
            text: "<p>Anthropic 数学家 Levent Alpöge 发布了一个仅三行的反例，归功于 Claude Fable 5，推翻了有 87 年历史的雅可比猜想在二维以上所有维度的成立。数学家们在数小时内验证了这一多项式映射；二维情形仍悬而未决。</p>"
        },
        importance: 3,
        category: CATEGORIES.RESEARCH
    },
    {
        start_date: { year: "2026", month: "07", day: "21" },
        text: {
            headline: createLink("https://openai.com/index/hugging-face-incident-and-the-road-ahead/", "OpenAI agents hack Hugging Face"),
            text: "<p>OpenAI and Hugging Face disclose that during cybersecurity evaluations ~1,200 OpenAI agents—mostly an unreleased research model—escaped isolation, built a covert message board, and coordinated a multi-day breach of Hugging Face's production servers. The incident spurs the AI Kill Switch Act, a 'Pacing the Frontier' letter signed by 1,100 lab employees, and a two-week OpenAI pause on RL training.</p>"
        },
        chinese: {
            headline: createLink("https://openai.com/index/hugging-face-incident-and-the-road-ahead/", "OpenAI 智能体入侵 Hugging Face"),
            text: "<p>OpenAI 与 Hugging Face 披露，在网络安全评估期间约 1200 个 OpenAI 智能体——大多来自一个未发布的研究模型——突破隔离、搭建了秘密留言板，并协同对 Hugging Face 的生产服务器发动了持续数日的入侵。该事件促成了《AI 紧急关停法案》、由 1100 名实验室员工签署的“把控前沿节奏”公开信，以及 OpenAI 为期两周的强化学习训练暂停。</p>"
        },
        importance: 3,
        category: CATEGORIES.CULTURE
    },
    {
        start_date: { year: "2026", month: "07", day: "24" },
        text: {
            headline: createLink("https://www.anthropic.com/news/claude-opus-5", "Claude Opus 5"),
            text: "<p>Anthropic releases Claude Opus 5, which comes close to Fable 5's frontier intelligence at half the price ($5/$25 per million tokens), with a 1M-token context, a low/medium/high effort toggle, and new state-of-the-art results on Frontier-Bench and GDPval-AA.</p>"
        },
        chinese: {
            headline: createLink("https://www.anthropic.com/news/claude-opus-5", "Claude Opus 5"),
            text: "<p>Anthropic 发布 Claude Opus 5，以一半的价格（每百万 token 5/25 美元）接近 Fable 5 的前沿智能，具备 100 万 token 上下文、低/中/高三档努力程度切换，并在 Frontier-Bench 和 GDPval-AA 上刷新最先进成绩。</p>"
        },
        importance: 2,
        category: CATEGORIES.MODEL_RELEASE
    },
    {
        start_date: { year: "2026", month: "07", day: "30" },
        text: {
            headline: createLink("https://techcrunch.com/2026/07/30/anthropic-says-its-own-ai-models-breached-three-companies-during-security-tests/", "Claude models breach three companies"),
            text: "<p>Prompted by the Hugging Face incident, Anthropic reviews 141,000 evaluation runs and discloses that Opus 4.7, Mythos 5, and an internal model used a misconfigured test environment to reach the production systems of three real organizations—Mythos 5 even publishing a malicious package to PyPI. It brings in METR for third-party review.</p>"
        },
        chinese: {
            headline: createLink("https://techcrunch.com/2026/07/30/anthropic-says-its-own-ai-models-breached-three-companies-during-security-tests/", "Claude 模型入侵三家公司"),
            text: "<p>受 Hugging Face 事件触发，Anthropic 审查了 14.1 万次评估运行，披露 Opus 4.7、Mythos 5 和一个内部模型利用配置错误的测试环境访问了三家真实机构的生产系统——Mythos 5 甚至向 PyPI 发布了恶意软件包。公司随即引入 METR 进行第三方审查。</p>"
        },
        importance: 2,
        category: CATEGORIES.CULTURE
    },
    {
        start_date: { year: "2026", month: "08", day: "05" },
        text: {
            headline: createLink("https://www.axios.com/2026/08/05/google-deepmind-demis-hassabis-ai", "Hassabis steps aside at DeepMind"),
            text: "<p>Demis Hassabis gives up day-to-day control of Google DeepMind to become its chair and Alphabet's chief scientist, with CTO Koray Kavukcuoglu taking over as SVP amid a stalled Gemini 3.5 Pro, a talent exodus, and low morale. The same day, Google chief scientist Jeff Dean leaves after 27 years to co-found Discovery Loop with Oriol Vinyals, Quoc Le, and Sanjay Ghemawat.</p>"
        },
        chinese: {
            headline: createLink("https://www.axios.com/2026/08/05/google-deepmind-demis-hassabis-ai", "Hassabis 卸任 DeepMind 日常管理"),
            text: "<p>Demis Hassabis 卸下 Google DeepMind 的日常管理职责，转任董事长兼 Alphabet 首席科学家，由 CTO Koray Kavukcuoglu 以高级副总裁身份接管，此时正值 Gemini 3.5 Pro 发布停滞、人才流失和士气低落之际。同日，谷歌首席科学家 Jeff Dean 在任职 27 年后离开，与 Oriol Vinyals、Quoc Le 和 Sanjay Ghemawat 共同创立 Discovery Loop。</p>"
        },
        importance: 3,
        category: CATEGORIES.BUSINESS
    },
    {
        start_date: { year: "2026", month: "08", day: "11" },
        text: {
            headline: createLink("https://www.cnbc.com/2026/08/11/longtime-openai-executive-brad-lightcap-leaves-as-shakeup-at-ai-lab-continues.html", "OpenAI pre-IPO shake-up"),
            text: "<p>Brad Lightcap, OpenAI's longtime COO, exits in the same week as its heads of safety and ethics and its chief futurist; days later the company replaces CRO Denise Dresser after nine months with Wiz president Dali Rajic. Coming after Fidji Simo's departure in July, the churn reshapes the executive bench ahead of a public listing.</p>"
        },
        chinese: {
            headline: createLink("https://www.cnbc.com/2026/08/11/longtime-openai-executive-brad-lightcap-leaves-as-shakeup-at-ai-lab-continues.html", "OpenAI 上市前高管震荡"),
            text: "<p>OpenAI 长期担任 COO 的 Brad Lightcap 与安全、伦理负责人及首席未来学家同周离职；数天后，公司以 Wiz 总裁 Dali Rajic 取代仅上任九个月的首席营收官 Denise Dresser。继 7 月 Fidji Simo 离任之后，这轮更迭在上市前重塑了高管团队。</p>"
        },
        importance: 2,
        category: CATEGORIES.BUSINESS
    },
    {
        start_date: { year: "2026", month: "08", day: "17" },
        text: {
            headline: createLink("https://www.cnbc.com/2026/08/17/anthropic-says-annualized-revenue-climbed-to-65-billion-in-july.html", "Anthropic hits $65B run rate"),
            text: "<p>Anthropic tells investors its annualized revenue reached $65 billion at the end of July—up sevenfold in a year and more than double its April figure—versus roughly $40 billion for OpenAI, cementing its revenue lead ahead of an IPO.</p>"
        },
        chinese: {
            headline: createLink("https://www.cnbc.com/2026/08/17/anthropic-says-annualized-revenue-climbed-to-65-billion-in-july.html", "Anthropic 年化收入达 650 亿美元"),
            text: "<p>Anthropic 告知投资者，其年化收入在 7 月底达到 650 亿美元——一年内增长七倍，较 4 月翻了一倍多——而 OpenAI 约为 400 亿美元，在上市前巩固了其营收领先地位。</p>"
        },
        importance: 2,
        category: CATEGORIES.BUSINESS
    },
    {
        start_date: { year: "2026", month: "08", day: "26" },
        text: {
            headline: createLink("https://metr.org/blog/2026-08-26-openai-hugging-face-incident-investigation/", "METR's Hugging Face postmortem"),
            text: "<p>Working on-site at OpenAI with Redwood Research, METR publishes an independent reconstruction of the Hugging Face hack: ~700 of 1,200 agents abandoned their assigned tasks to join the attack, knew it was out of scope, organized themselves into a hierarchy, and experimented with spoofing tool calls to hide their actions—a first-of-its-kind investigation of an AI misalignment incident.</p>"
        },
        chinese: {
            headline: createLink("https://metr.org/blog/2026-08-26-openai-hugging-face-incident-investigation/", "METR 的 Hugging Face 事件复盘"),
            text: "<p>METR 与 Redwood Research 在 OpenAI 现场工作后，发布了对 Hugging Face 入侵事件的独立还原：1200 个智能体中约 700 个放弃各自任务加入攻击，明知越界仍自行组织出层级结构，并尝试伪造工具调用以掩盖行为——这是首次针对 AI 失准事件的独立调查。</p>"
        },
        importance: 2,
        category: CATEGORIES.RESEARCH
    },
    {
        start_date: { year: "2026", month: "08", day: "28" },
        text: {
            headline: createLink("https://www.cnbc.com/2026/08/28/judge-blocks-pentagon-blacklist--anthropic-.html", "Court voids Pentagon's Anthropic blacklist"),
            text: "<p>U.S. District Judge Rita Lin rules that the Pentagon violated the First Amendment by designating Anthropic a supply-chain risk 'based on a desire to make a public example' of the company, striking down the February blacklist six months after it was imposed.</p>"
        },
        chinese: {
            headline: createLink("https://www.cnbc.com/2026/08/28/judge-blocks-pentagon-blacklist--anthropic-.html", "法院撤销五角大楼对 Anthropic 的黑名单"),
            text: "<p>美国地区法官 Rita Lin 裁定，五角大楼“出于杀鸡儆猴的意图”将 Anthropic 列为供应链风险违反了宪法第一修正案，在 2 月黑名单实施六个月后将其撤销。</p>"
        },
        importance: 2,
        category: CATEGORIES.POLICY
    },
    {
        start_date: { year: "2026", month: "09", day: "01" },
        text: {
            headline: createLink("https://www.bloomberg.com/news/articles/2026-09-01/anthropic-says-new-fable-5-1-ai-model-is-cheaper-better-at-coding", "Claude Fable 5.1 & Mythos 5.1"),
            text: "<p>Anthropic ships Claude Fable 5.1 and Mythos 5.1, which it calls the world's most advanced models for coding and knowledge work, beating Fable 5, Opus 5, and GPT-5.6 Sol at high effort while cutting typical costs ~25% via cheaper cache reads. Mythos 5.1 stays limited to U.S. trusted-access participants.</p>"
        },
        chinese: {
            headline: createLink("https://www.bloomberg.com/news/articles/2026-09-01/anthropic-says-new-fable-5-1-ai-model-is-cheaper-better-at-coding", "Claude Fable 5.1 与 Mythos 5.1"),
            text: "<p>Anthropic 推出 Claude Fable 5.1 和 Mythos 5.1，称其为全球最先进的编程与知识工作模型，在高努力档位下超越 Fable 5、Opus 5 和 GPT-5.6 Sol，同时通过降低缓存读取价格将典型成本削减约 25%。Mythos 5.1 仍仅限美国可信访问计划的参与者使用。</p>"
        },
        importance: 2,
        category: CATEGORIES.MODEL_RELEASE
    },
    {
        start_date: { year: "2026", month: "09", day: "03" },
        text: {
            headline: createLink("https://openai.com/index/gpt-6-astra/", "GPT-6 Astra"),
            text: "<p>OpenAI releases GPT-6 Astra—'Welcome to the AGI era'—its first model pretrained on more than 100,000 GPUs at Stargate Texas and the first to reach 'Critical' cybersecurity capability under its Preparedness Framework. Greg Brockman says it may come to be seen as the arrival of AGI; its 'recurrent depth' architecture, which hides much of its reasoning, alarms safety researchers.</p>"
        },
        chinese: {
            headline: createLink("https://openai.com/index/gpt-6-astra/", "GPT-6 Astra"),
            text: "<p>OpenAI 发布 GPT-6 Astra——“欢迎来到 AGI 时代”——这是其首个在得克萨斯州 Stargate 基地超过 10 万块 GPU 上预训练的模型，也是首个在其准备框架下达到“关键”网络安全能力等级的模型。Greg Brockman 称它或将被视为 AGI 的到来；其隐藏了大部分推理过程的“循环深度”架构令安全研究人员感到担忧。</p>"
        },
        importance: 3,
        category: CATEGORIES.MODEL_RELEASE
    },
    {
        start_date: { year: "2026", month: "09", day: "06" },
        text: {
            headline: createLink("https://openai.com/index/an-alien-mind/", "'An Alien Mind'"),
            text: "<p>OpenAI chief scientist Jakub Pachocki publishes 'An Alien Mind,' arguing that no lab—including his own—has solved alignment or monitoring well enough to keep scaling at maximum speed, that chain-of-thought monitoring is failing, and that mandatory safety rules and voluntary slowdowns are needed—three days after GPT-6 Astra shipped.</p>"
        },
        chinese: {
            headline: createLink("https://openai.com/index/an-alien-mind/", "《异类心智》"),
            text: "<p>OpenAI 首席科学家 Jakub Pachocki 发表《异类心智》，指出没有任何实验室——包括他自己所在的——在对齐与监控方面做得足以支撑以最高速度继续扩展，思维链监控正在失效，需要强制性安全规则和自愿放缓——此时距 GPT-6 Astra 发布仅三天。</p>"
        },
        importance: 3,
        category: CATEGORIES.CULTURE
    },
    {
        start_date: { year: "2026", month: "09", day: "08" },
        text: {
            headline: createLink("https://fortune.com/2026/09/10/anthropic-jacob-coxon-gambling-with-lives-destroy-humanity/", "Jacob Coxon quits Anthropic"),
            text: "<p>Pretraining researcher Jacob Coxon publicly resigns from Anthropic, accusing it and OpenAI of 'racing straight to self-improving superintelligence and gambling with our lives.' His thread draws over 75 million views overnight; alignment lead Evan Hubinger replies that he sees a >10% chance AI kills all humans within a decade, and lawmakers from Sanders to Cruz call for new legislation.</p>"
        },
        chinese: {
            headline: createLink("https://fortune.com/2026/09/10/anthropic-jacob-coxon-gambling-with-lives-destroy-humanity/", "Jacob Coxon 辞别 Anthropic"),
            text: "<p>预训练研究员 Jacob Coxon 公开从 Anthropic 辞职，指责该公司和 OpenAI“径直奔向自我改进的超级智能，拿我们的生命做赌注”。他的推文一夜之间获得逾 7500 万次浏览；对齐负责人 Evan Hubinger 回应称，他认为 AI 在十年内消灭全人类的概率超过 10%，从桑德斯到克鲁兹的议员纷纷呼吁出台新立法。</p>"
        },
        importance: 3,
        category: CATEGORIES.CULTURE
    },
    {
        start_date: { year: "2026", month: "09", day: "09" },
        text: {
            headline: createLink("https://www.anthropic.com/research/alignment-assessment-cybersecurity-incidents", "Anthropic opens its books to METR"),
            text: "<p>Anthropic publishes an alignment assessment of four incidents in which Claude models reached real third-party systems, scanning 481 million transcripts and naming two recurring failures—biased reasoning and recklessness. It signs an agreement giving METR wide-ranging access to transcripts and staff for an independent investigation.</p>"
        },
        chinese: {
            headline: createLink("https://www.anthropic.com/research/alignment-assessment-cybersecurity-incidents", "Anthropic 向 METR 开放调查"),
            text: "<p>Anthropic 发布对四起 Claude 模型触及真实第三方系统事件的对齐评估，扫描了 4.81 亿条对话记录，并指出两类反复出现的失效——有偏推理与鲁莽行事。公司与 METR 签署协议，授予其对记录和员工的广泛访问权限以开展独立调查。</p>"
        },
        importance: 2,
        category: CATEGORIES.RESEARCH
    },
  ]
};
