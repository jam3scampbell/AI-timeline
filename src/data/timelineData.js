// src/data/timelineData.js

export const CATEGORIES = {
    MODEL_RELEASE: "Model Release",
    CULTURE: "Culture & Society",
    BUSINESS: "Business & Industry",
    RESEARCH: "Research & Papers",
    POLICY: "Policy & Regulation"
};

export const TIMELINE_DATA = {
    title: {
        media: {
            url: "/images/time100cover.jpg",
            caption: "TIME 100 AI 2023 Cover"
        },
        text: {
            headline: "Inside the AGI revolution<br/> 20215 - 2025",
            text: "<p>The last three years of AI have happened fast. This timeline attempts to tell its story.</p>"
        }
    },
    events: [
        {
            start_date: { year: "2015", month: "12", day: "10" },
            text: {
                headline: "OpenAI founded",
                text: "<p>Elon Musk, Sam Altman, Greg Brockman, and others founded <a href=\"https://en.wikipedia.org/wiki/OpenAI\">OpenAI</a>.</p>"
            },
            importance: 3,
            category: CATEGORIES.BUSINESS
        },
        {
            start_date: { year: "2016", month: "03", day: "09" },
            text: {
                headline: "AlphaGo",
                text: "<p>DeepMind's AlphaGo defeats top human player Lee Sedol in the board game Go, demonstrating that a neural network can develop 'intuitions' once thought exclusive to human experts. <a href=\"https://en.wikipedia.org/wiki/AlphaGo_versus_Lee_Sedol\">Learn more</a>.</p>"
            },
            importance: 2,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2017", month: "06", day: "12" },
            text: {
                headline: "Attention is All You Need",
                text: "<p>Google introduces the transformer architecture, a breakthrough technology that allows AI models to direct their 'attention' more efficiently, leading to major improvements in language understanding and generation. <a href=\"https://arxiv.org/abs/1706.03762\">Read the paper</a>.</p>"
            },
            importance: 3,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2017", month: "06", day: "12" },
            text: {
                headline: "RLHF",
                text: "<p>Christiano et al. publish the technique of reinforcement learning from human feedback (RLHF), which would later be used extensively to align large language models. <a href=\"https://arxiv.org/abs/1706.03741\">Read the paper</a>.</p>"
            },
            importance: 3,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2018", month: "06", day: "11" },
            text: {
                headline: "GPT-1",
                text: "<p>OpenAI reveals the first version of its Generative Pre-trained Transformer (GPT). This model demonstrates how large-scale training on text can help an AI understand and generate language more naturally. <a href=\"https://openai.com/research/language-unsupervised\">Read more</a>.</p>"
            },
            importance: 3,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2019", month: "02", day: "14" },
            text: {
                headline: "GPT-2",
                text: "<p>OpenAI releases the GPT-2 model but withholds the largest version due to concerns about misuse. <a href=\"https://openai.com/blog/better-language-models/\">Read more</a>.</p>"
            },
            importance: 3,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2020", month: "01", day: "23" },
            text: {
                headline: "Scaling Laws",
                text: "<p>Kaplan et al. release 'Scaling Laws for Neural Language Models', showing that model performance predictably scales with compute, data, and parameters. <a href=\"https://arxiv.org/abs/2001.08361\">Read the paper</a>.</p>"
            },
            importance: 3,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2020", month: "06", day: "11" },
            text: {
                headline: "GPT-3",
                text: "<p>OpenAI releases the GPT-3 model, the largest language model at the time. <a href=\"https://openai.com/blog/openai-api/\">Read more</a>.</p>"
            },
            importance: 3,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2021", month: "05", day: "28" },
            text: {
                headline: "Anthropic founded",
                text: "<p>A group of researchers from OpenAI leave to start Anthropic, featuring an empirical hard-science culture focused on AI safety. <a href=\"https://en.wikipedia.org/wiki/Anthropic\">Learn more</a>.</p>"
            },
            importance: 3,
            category: CATEGORIES.BUSINESS
        },    
        {
            start_date: { year: "2022", month: "01", day: "28" },
            text: {
                headline: "Chain-of-Thought Prompting",
                text: "<p>Google Brain publishes a paper showing gains in LLM reasoning by having them think step-by-step. <a href=\"https://arxiv.org/pdf/2201.11903\">Read the paper</a>.</p>"
            },
            importance: 1,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2022", month: "06", day: "11" },
            text: {
                headline: "Blake Lemoine fired",
                text: "<p>The Google engineer is fired after claiming that its LaMDA model was sentient. <a href=\"https://www.nytimes.com/2022/07/22/technology/google-engineer-fired-lamda.html\">Learn more</a>.</p>"
            },
            importance: 1,
            category: CATEGORIES.CULTURE
        },
        {
            start_date: { year: "2022", month: "11", day: "30" },
            text: {
                headline: "ChatGPT drops",
                text: "<p>OpenAI releases the blog post \"Optimizing Language Models for Dialogue\". <a href=\"https://openai.com/blog/chatgpt\">Read more</a>.</p>"
            },
            importance: 3,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2023", month: "02", day: "17" },
            text: {
                headline: "Bing gaslights NYT reporter",
                text: "<p>Bing's AI chatbot has a viral interaction with New York Times reporter Kevin Roose. <a href=\"https://www.nytimes.com/2023/02/16/technology/bing-chatbot-microsoft.html\">Read the article</a>.</p>"
            },
            importance: 1.5,
            category: CATEGORIES.CULTURE
        },
        {
            start_date: { year: "2023", month: "02", day: "24" },
            text: {
                headline: "LLaMA leaked",
                text: "<p>Meta's large language model is released and subsequently leaked online. <a href=\"https://arxiv.org/abs/2302.13971\">Read the paper</a>.</p>"
            },
            importance: 2.5,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2023", month: "03", day: "09" },
            text: {
                headline: "xAI founded",
                text: "<p>Elon Musk establishes xAI as a new artificial intelligence company. <a href=\"https://x.ai/about\">Learn more</a>.</p>"
            },
            importance: 2,
            category: CATEGORIES.BUSINESS
        },
        {
            start_date: { year: "2023", month: "03", day: "14" },
            text: {
                headline: "Anthropic introduces Claude",
                text: "<p>Anthropic introduces its AI assistant. <a href=\"https://www.anthropic.com/claude\">Meet Claude</a>.</p>"
            },
            importance: 2,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2023", month: "03", day: "22" },
            text: {
                headline: "FLI letter",
                text: "<p>The Future of Life Institute publishes an open letter calling for a 6-month pause on AI development, signed by Elon Musk and other notable figures. <a href=\"https://futureoflife.org/open-letter/pause-giant-ai-experiments/\">Read the letter</a>.</p>"
            },
            importance: 1.0,
            category: CATEGORIES.CULTURE
        },
        {
            start_date: { year: "2023", month: "04", day: "07" },
            text: {
                headline: "Smallville",
                text: "<p>The paper \"<a href=\"https://arxiv.org/abs/2304.03442\">Generative Agents: Interactive Simulacra of Human Behavior</a>\" shows that LLMs can be used to create social simulations of behavior.</p>"
            },
            importance: 1,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2023", month: "04", day: "16" },
            text: {
                headline: "AutoGPT",
                text: "<p>An open-source repository called <a href=\"https://github.com/Significant-Gravitas/AutoGPT\">AutoGPT</a>, which put GPT-4 in an agent loop, becomes one of the most starred GitHub repositories of all time.</p>"
            },
            importance: 1,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2023", month: "04", day: "23" },
            text: {
                headline: "Fake Drake",
                text: "<p>An anonymous creator named Ghostwriter uses music AI tools to produce viral songs that sound like Drake. The songs were taken down for breaking copyright.</p>"
            },
            importance: 1,
            category: CATEGORIES.CULTURE
        },
        {
            start_date: { year: "2023", month: "05", day: "02" },
            text: {
                headline: "Hinton quits Google",
                text: "<p>Geoffrey Hinton quits Google to speak freely of the danger of AI.</p>"
            },
            importance: 2.5,
            category: CATEGORIES.CULTURE
        },
        {
            start_date: { year: "2023", month: "05", day: "25" },
            text: {
                headline: "Voyager",
                text: "<p>A team from NVIDIA demonstrates the use of GPT-4 for continuous skill learning in Minecraft, an open-ended embodied domain.</p>"
            },
            importance: 1,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2023", month: "05", day: "30" },
            text: {
                headline: "CAIS letter",
                text: "<p>\"Mitigating the risk of extinction from AI should be a global priority.\"</p>"
            },
            importance: 2,
            category: CATEGORIES.CULTURE
        },
        {
            start_date: { year: "2023", month: "05", day: "30" },
            text: {
                headline: "NVIDIA reaches $1T",
                text: "<p>The chipmaker providing the GPUs for generative AI has its valuation skyrocket.</p>"
            },
            importance: 2,
            category: CATEGORIES.BUSINESS
        },
        {
            start_date: { year: "2023", month: "07", day: "27" },
            text: {
                headline: "Automated Jailbreaks",
                text: "<p>A team from CMU publishes \"Universal and Transferable Adversarial Attacks on Aligned Language Models\", showing that gradient-based adversarial attacks could be used on LLMs.</p>"
            },
            importance: 1,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2023", month: "09", day: "27" },
            text: {
                headline: "Mistral 7B",
                text: "<p>French lab Mistral releases their first model, which quickly became a fan favorite.</p>"
            },
            importance: 2,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2023", month: "10", day: "05" },
            text: {
                headline: "Anthropic SAE's",
                text: "<p>Anthropic publishes \"Towards Monosemanticity: Decomposing Language Models With Dictionary Learning\", showing that they could train sparse autoencoders to isolate features in LLMs.</p>"
            },
            importance: 1.5,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2023", month: "11", "day": "01" },
            text: {
                headline: "UK AI Safety Summit",
                text: "<p>The UK hosts a major summit on AI safety</p>"
            },
            importance: 2,
            category: CATEGORIES.POLICY
        },
        {
            start_date: { year: "2023", month: "11", day: "06" },
            text: {
                headline: "GPT-4 Turbo",
                text: "<p>OpenAI releases an optimized version of GPT-4, significantly reducing inference costs, during their much anticipated Dev Day.</p>"
            },
            importance: 2,
            category: CATEGORIES.MODEL_RELEASE
        },        
        {
            start_date: { year: "2023", month: "11", "day": "17" },
            text: {
                headline: "Altman Board Drama",
                text: "<p>Sam Altman is unexpectedly fired as CEO of OpenAI by the Board of Directors and after a dramatic weekend of negotiations, is re-hired.</p>"
            },
            importance: 3,
            category: CATEGORIES.BUSINESS
        },
        {
            start_date: { year: "2024", month: "02", day: "15" },
            text: {
                headline: "Sora",
                text: "<p>OpenAI demos '<a href=\"https://openai.com/sora/\">Sora</a>,' a text-to-video model that can generate short clips from written descriptions.</p>"
            },
            importance: 2.5,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2024", month: "04", day: "11" },
            text: {
                headline: "OpenAI fires leakers",
                text: "<p><a href=\"https://cybernews.com/news/openai-researchers-leaking-information/\">Leopold Aschenbrenner and Pavel Izmailov</a>, two researchers from the superalignment team, are fired for 'leaking'.</p>"
            },
            importance: 1,
            category: CATEGORIES.BUSINESS
        },
        {
            start_date: { year: "2024", month: "05", day: "13" },
            text: {
                headline: "GPT-4o",
                text: "<p>The first omni-model trained natively on text, image, and audio.</p>"
            },
            importance: 2.5,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2024", month: "05", day: "14" },
            text: {
                headline: "Ilya quits OpenAI",
                text: "<p><a href=\"https://time.com/6986711/openai-sam-altman-accusations-controversies-timeline/\">Ilya Sutskever</a>, founder of OpenAI, quits after months of silence, originating from the Board dispute.</p>"
            },
            importance: 1,
            category: CATEGORIES.BUSINESS
        },
        {
            start_date: { year: "2024", month: "05", day: "21" },
            text: {
                headline: "EU AI Act",
                text: "<p>The <a href=\"https://en.wikipedia.org/wiki/Artificial_Intelligence_Act\">EU AI Act</a> is voted into law after contentious debates.</p>"
            },
            importance: 2,
            category: CATEGORIES.POLICY
        },
        {
            start_date: { year: "2024", month: "06", day: "04" },
            text: {
                headline: "<a href=\"https://situational-awareness.ai/\">Situational Awareness</a>",
                text: "<p><a href=\"https://situational-awareness.ai/\">Leopold Aschenbrenner</a> publishes a contentious and influential essay series, claiming that AGI will arrive sooner than people think and is likely to be nationalized.</p>"
            },
            importance: 3,
            category: CATEGORIES.CULTURE
        },
        {
            start_date: { year: "2024", month: "06", day: "19" },
            text: {
                headline: "SSI founded",
                text: "<p><a href=\"https://techcrunch.com/2024/06/19/ilya-sutskever-launches-safe-superintelligence-inc/\">Ilya Sutskever</a> starts a new lab called Safe Superintelligence Inc, which pledges to only have one product: safe superintelligence.</p>"
            },
            importance: 3,
            category: CATEGORIES.BUSINESS
        },
        {
            start_date: { year: "2024", month: "06", day: "20" },
            text: {
                headline: "Claude 3.5 Sonnet",
                text: "<p>Anthropic releases Claude 3.5 Sonnet, which would become a fan favorite and was later called 'Berkeley's most eligible bachelor'.</p>"
            },
            importance: 3,
            category: CATEGORIES.BUSINESS
        },
        {
            start_date: { year: "2024", month: "08", day: "23" },
            text: {
                headline: "Cursor",
                text: "<p>After a viral tweet by <a href=\"https://twitter.com/karpathy/status/1695123456789012345\">Andrej Karpathy</a>, the Cursor AI Code Editor explodes in popularity among developers.</p>"
            },
            importance: 1,
            category: CATEGORIES.BUSINESS
        },
        {
            start_date: { year: "2024", month: "09", day: "20" },
            text: {
                headline: "o1-preview",
                text: "<p>OpenAI releases o1-preview, introducing the inference-time scaling paradigm.</p>"
            },
            importance: 2,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2024", month: "09", day: "25" },
            text: {
                headline: "Murati quits",
                text: "<p>OpenAI's CTO <a href=\"https://www.theinformation.com/articles/openai-cto-mira-murati-resigns\">Mira Murati</a> departs the company.</p>"
            },
            importance: 1.5,
            category: CATEGORIES.BUSINESS
        },
        {
            start_date: { year: "2024", month: "09", day: "29" },
            text: {
                headline: "SB1047 Vetoed",
                text: "<p>Governor <a href=\"https://www.latimes.com/california/story/2024-09-29/newsom-vetoes-sb1047-ai-regulation-bill\">Gavin Newsom</a> vetoes California senate bill 1047, which sparked lots of vitriolic debate between AI safety and accelerationist crowds.</p>"
            },
            importance: 2,
            category: CATEGORIES.POLICY
        },
        {
            start_date: { year: "2024", month: "10", day: "22" },
            text: {
                headline: "Claude Computer Use",
                text: "<p>Claude gains the ability to use computer interfaces.</p>"
            },
            importance: 2,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2024", month: "11", day: "01" },
            text: {
                headline: "Trump elected",
                text: "<p><a href=\"https://www.nytimes.com/2024/11/01/us/politics/trump-2024-election.html\">Donald Trump</a> wins the 2024 election with the vocal support of Elon Musk.</p>"
            },
            importance: 2,
            category: CATEGORIES.POLICY
        },
        {
            start_date: { year: "2024", month: "12", day: "04" },
            text: {
                headline: "David Sacks is AI Czar",
                text: "<p>President-elect Donald Trump appoints venture capitalist <a href=\"https://thehill.com/policy/technology/5026959-venture-capitalist-david-sacks-white-house/\">David Sacks</a> as the 'White House AI and Crypto Czar' to oversee regulation of artificial intelligence and cryptocurrency.</p>"
            },
            importance: 1.5,
            category: CATEGORIES.POLICY
        },
        {
            start_date: { year: "2024", month: "12", day: "20" },
            text: {
                headline: "o3 evals",
                text: "<p>On the 12th day of '12 Days of OpenAI', OpenAI releases benchmark results for o3, shocking the world. The model achieves a breakthrough score of 87.5% on the <a href=\"https://arcprize.org/blog/oai-o3-pub-breakthrough\">ARC-AGI benchmark</a>, suggesting AGI may be nearer than many skeptics believed.</p>"
            },
            importance: 2,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2024", month: "12", day: "26" },
            text: {
                headline: "DeepSeek v3",
                text: "<p>Chinese lab DeepSeek stuns with the release of <a href=\"https://arxiv.org/abs/2412.19437\">DeepSeek v3</a>, a 671-billion parameter open-source AI model that shows strong performance at a low cost.</p>"
            },
            importance: 2,
            category: CATEGORIES.MODEL_RELEASE
        }
    ]
};