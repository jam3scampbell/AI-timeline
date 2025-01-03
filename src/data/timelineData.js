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
            headline: "Inside the AGI revolution<br/> 2022 - 2024",
            text: "<p>The last three years of AI have happened fast. This timeline attempts to tell its story.</p>"
        }
    },
    events: [
        {
            start_date: { year: "2015", month: "11", day: "15" },
            text: {
                headline: "OpenAI founded",
                text: "<p>Elon Musk, Sam Altman, Greg Brockman, and others found OpenAI.</p>"
            },
            importance: 3,
            category: CATEGORIES.BUSINESS
        },
        {
            start_date: { year: "2017", month: "06", day: "12" },
            text: {
                headline: "Attention is All You Need",
                text: "<p>Google releases the transformer architecture.</p>"
            },
            importance: 3,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2018", month: "06", day: "11" },
            text: {
                headline: "GPT-1",
                text: "<p>Radford et al. publish <a href=https://openai.com/index/language-unsupervised/>Improving Language Understanding by Generative Pre-Training</a>, the first GPT model.</p>"
            },
            importance: 3,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2019", month: "02", day: "14" },
            text: {
                headline: "GPT-2",
                text: "<p>OpenAI releases the GPT-2 model, but withholds the largest version due to concerns about misuse.</p>"
            },
            importance: 3,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2020", month: "01", day: "23" },
            text: {
                headline: "Scaling Laws",
                text: "<p>Kaplan et al. release \"Scaling Laws for Neural Language Models\", showing that model performance predictably scales with compute, data, and parameters.</p>"
            },
            importance: 3,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2020", month: "05", day: "28" },
            text: {
                headline: "GPT-3",
                text: "<p>OpenAI releases the GPT-3 model, the largest language model at the time.</p>"
            },
            importance: 3,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2022", month: "06", day: "11" },
            text: {
                headline: "Blake Lemoine fired",
                text: "<p>The Google engineer is fired after claiming that its LaMBDA model was sentient.</p>"
            },
            importance: 1, 
            category: CATEGORIES.CULTURE
        },
        {
            start_date: { year: "2022", month: "11", day: "30" },
            text: {
                headline: "ChatGPT drops",
                text: "<p>OpenAI releases the blogpost \"Optimizing Language Models for Dialog\"</p>"
            },
            importance: 3,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2023", month: "02", day: "17" },
            text: {
                headline: "Bing gaslights NYT reporter",
                text: "<p>Bing's AI chatbot has a contentious interaction with a New York Times reporter.</p>"
            },
            importance: 1.5,
            category: CATEGORIES.CULTURE
        },
        {
            start_date: { year: "2023", month: "02", day: "24" },
            text: {
                headline: "LLaMA leaked",
                text: "<p>Meta's large language model is released and subsequently leaked online.</p>"
            },
            importance: 2.5,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2023", month: "03", day: "09" },
            text: {
                headline: "xAI founded",
                text: "<p>Elon Musk establishes xAI as a new artificial intelligence company.</p>"
            },
            importance: 2,
            category: CATEGORIES.BUSINESS
        },
        {
            start_date: { year: "2023", month: "03", day: "14" },
            text: {
                headline: "Anthropic introduces Claude",
                text: "<p>Anthropic introduces its AI assistant<p>"
            },
            importance: 2,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2023", month: "03", "day": "22" },
            text: {
                headline: "FLI letter",
                text: "<p>Future of Life Institute puts out \"Pause Giant AI Experiments\"</p>"
            },
            importance: 1.0,
            category: CATEGORIES.CULTURE
        },
        {
            start_date: { year: "2023", month: "04", "day": "16" },
            text: {
                headline: "AutoGPT",
                text: "<p>An open-source repository called AutoGPT, which put GPT-4 in an agent loop, becomes one of the most starred Github repositories of all time.</p>"
            },
            importance: 1,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2023", month: "04", "day": "23" },
            text: {
                headline: "Fake Drake",
                text: "<p>An anonymous creator named Ghostwriter uses music AI tools to produce viral songs that sound like Drake. The songs were taken down for breaking copyright.</p>"
            },
            importance: 1,
            category: CATEGORIES.CULTURE
        },
        {
            start_date: { year: "2023", month: "05", "day": "02" },
            text: {
                headline: "Hinton quits Google",
                text: "<p>Geoffrey Hinton quits Google to speak freely of the danger of AI</p>"
            },
            importance: 2.5,
            category: CATEGORIES.CULTURE
        },
        {
            start_date: { year: "2023", month: "05", "day": "25" },
            text: {
                headline: "Voyager",
                text: "<p>A team from NVIDIA demonstrates the use of GPT-4 for continuous skill learning in Minecraft, an open-ended embodied domain.</p>"
            },
            importance: 1,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2023", month: "05", "day": "30" },
            text: {
                headline: "CAIS letter",
                text: "<p>\"Mitigating the risk of extinction from AI should be a global priority.\"</p>"
            },
            importance: 2,
            category: CATEGORIES.CULTURE
        },
        {
            start_date: { year: "2023", month: "05", "day": "30" },
            text: {
                headline: "NVIDIA reaches 1T",
                text: "<p>The chipmaker providing the GPU's for generative AI has its valuation skyrocket.</p>"
            },
            importance: 2,
            category: CATEGORIES.BUSINESS
        },
        {
            start_date: { year: "2023", month: "07", "day": "27" },
            text: {
                headline: "Automated Jailbreaks",
                text: "<p>A team from CMU puts out \"Universal and Transferable Adversarial Attacks on Aligned Language Models\", showing that gradient-based adversarial attacks could be used on LLMs.</p>"
            },
            importance: 1,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2023", month: "09", "day": "27" },
            text: {
                headline: "Mistral 7B",
                text: "<p>French lab Mistral releases their first model.</p>"
            },
            importance: 2,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2023", month: "10", "day": "05" },
            text: {
                headline: "Anthropic SAE's",
                text: "<p>Anthropic puts out \"Towards Monosemanticity: Decomposing Language Models With Dictionary Learning\", showing that they could train sparse autoencoders to isolate features in LLMs.</p>"
            },
            importance: 1.5,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2023", month: "11", "day": "01" },
            text: {
                headline: "UK AI Summit",
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
                headline: "Altman fired",
                text: "<p>Sam Altman is fired as CEO of OpenAI</p>"
            },
            importance: 3,
            category: CATEGORIES.BUSINESS
        },
        {
            start_date: { year: "2024", month: "02", "day": "15" },
            text: {
                headline: "Sora",
                text: "<p>OpenAI demonstrates their new text-to-video model Sora</p>"
            },
            importance: 2.5,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2024", month: "05", "day": "13" },
            text: {
                headline: "GPT-4o",
                text: "<p>The first omni-model trained natively on text, image, and audio</p>"
            },
            importance: 2.5,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2024", month: "06", "day": "04" },
            text: {
                headline: "Situational Awareness",
                text: "<p>Publication of influential paper on AI situational awareness</p>"
            },
            importance: 2,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2024", month: "09", "day": "20" },
            text: {
                headline: "o1-preview",
                text: "<p>Introduction of inference-time scaling paradigm</p>"
            },
            importance: 2,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2024", month: "09", "day": "25" },
            text: {
                headline: "Murati quits",
                text: "<p>OpenAI's CTO departs the company</p>"
            },
            importance: 1.5,
            category: CATEGORIES.BUSINESS
        },
        {
            start_date: { year: "2024", month: "10", "day": "22" },
            text: {
                headline: "Claude Computer Use",
                text: "<p>Claude gains ability to use computer interfaces</p>"
            },
            importance: 2,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2024", month: "12", "day": "04" },
            text: {
                headline: "David Sacks is AI Czar",
                text: "<p>Appointment of new regulatory position</p>"
            },
            importance: 1.5,
            category: CATEGORIES.POLICY
        },
        {
            start_date: { year: "2024", month: "12", "day": "20" },
            text: {
                headline: "o3 evals",
                text: "<p>Release of preliminary evaluation results for o3</p>"
            },
            importance: 2,
            category: CATEGORIES.RESEARCH
        }
    ]
};