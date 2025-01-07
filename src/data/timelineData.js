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
            start_date: { year: "2015", month: "11", day: "15" },
            text: {
                headline: "OpenAI founded",
                text: "<p>Elon Musk, Sam Altman, Greg Brockman, and others found OpenAI.</p>"
            },
            importance: 3,
            category: CATEGORIES.BUSINESS
        },
        {
            start_date: { year: "2016", month: "03", day: "23" },
            text: {
                headline: "AlphaGo",
                text: "<p>DeepMind's AlphaGo beats the top human player Lee Sedol in the board game Go. Showing that a neural network can develop \"intuitions\" once thought exclusive to human experts.</p>"
            },
            importance: 2,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2017", month: "06", day: "12" },
            text: {
                headline: "Attention is All You Need",
                text: "<p>Google introduces the transformer architecture, a breakthrough technology that allows AI models to direct their 'attention' more efficiently, leading to major improvements in language understanding and generation.</p>"

            },
            importance: 3,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2017", month: "06", day: "12" },
            text: {
                headline: "RLHF",
                text: "<p>Christiano et al. publish the technique of reinforcement learning from human feedback (RLHF), which would later be used extensively to align LLMs.</p>"
            },
            importance: 3,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2018", month: "06", day: "11" },
            text: {
                headline: "GPT-1",
                     text: "<p>OpenAI reveals the first version of its Generative Pre-trained Transformer (GPT). This model demonstrates how large-scale training on text can help an AI understand and generate language more naturally.</p>"

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
            start_date: { year: "2021", month: "05", day: "28" },
            text: {
                headline: "Anthropic founded",
                text: "<p>A group of researchers from OpenAI leave to start Anthropic, featuring an empirical hard-science culture focused on AI safety.</p>"
            },
            importance: 3,
            category: CATEGORIES.BUSINESS
        },
        {
            start_date: { year: "2022", month: "01", day: "28"},
            text: {
                headline: "Chain-of-Thought Prompting",
                text: "<p>Google Brain publishes a paper showing gains in LLM reasoning by having them think step-by-step.</p>"
            },
            importance: 1,
            category: CATEGORIES.RESEARCH
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
                text: "<p>Bing's AI chatbot has a viral interaction with New York Times reporter Kevin Roose.</p>"
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
                text: "<p>The Future of Life Institute puts out an open letter calling for a 6 month pause on AI development. The letter is signed by Elon Musk and other noteworthy figures.</p>"
            },
            importance: 1.0,
            category: CATEGORIES.CULTURE
        },
        {
            start_date: { year: "2023", month: "04", "day": "07" },
            text: {
                headline: "Smallville",
                text: "<p>The paper \"Generative Agents: Interactive Simulacra of Human Behavior\" shows that LLMs can be used to create social simulations of behavior.</p>"
            },
            importance: 1,
            category: CATEGORIES.RESEARCH
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
                text: "<p>The chipmaker providing the GPUs for generative AI has its valuation skyrocket.</p>"
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
                text: "<p>French lab Mistral releases their first model, which quickly became a fan favorite.</p>"
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
            start_date: { year: "2024", month: "02", "day": "15" },
            text: {
                headline: "Sora",
                text: "<p>OpenAI demos 'Sora,' a text-to-video model that can generate short clips from written descriptions.</p>"

            },
            importance: 2.5,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2024", month: "04", "day": "11"},
            text: {
                headline: "OpenAI fires leakers",
                text: "<p>Leopold Aschenbrenner and Pavel Izmailov, two researchers from the superalignment team are fired for \"leaking\".</p>"
            },
            importance: 1,
            category: CATEGORIES.BUSINESS
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
            start_date: { year: "2024", month: "05", "day": "14" },
            text: {
                headline: "Ilya quits OpenAI",
                text: "<p>Ilya Sutskever, founder of OpenAI, quits after months of silence, originating from the Board dispute.</p>"
            },
            importance: 1,
            category: CATEGORIES.BUSINESS
        },
        {
            start_date: { year: "2024", month: "05", "day": "21" },
            text: {
                headline: "EU AI Act",
                text: "<p>The EU AI Act is voted into law after contentious debates.</p>"
            },
            importance: 2,
            category: CATEGORIES.POLICY
        },
        {
            start_date: { year: "2024", month: "06", "day": "04" },
            text: {
                headline: "Situational Awareness",
                text: "<p>Leopold Aschenbrenner publishes a contentious and influential essay series, claiming that AGI will arrive sooner than people think and is likely to be nationalized.</p>"
            },
            importance: 3,
            category: CATEGORIES.CULTURE
        },
        {
            start_date: { year: "2024", month: "08", "day": "23" },
            text: {
                headline: "Cursor",
                text: "<p>After a viral tweet by Andrej Karpathy, the Cursor AI Code Editor explodes in popularity among developers.</p>",
            },
            importance: 1,
            category: CATEGORIES.BUSINESS
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
                text: "<p>OpenAI's CTO Mira Murati departs the company</p>"
            },
            importance: 1.5,
            category: CATEGORIES.BUSINESS
        },
        {
            start_date: { year: "2024", month: "09", "day": "29" },
            text: {
                headline: "SB1047 Vetoed",
                text: "<p>Governor Gavin Newsom vetoes California senate bill 1047, which sparked lots of vitriolic debate between AI safety and accelerationist crowds.</p>"
            },
            importance: 2,
            category: CATEGORIES.POLICY
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
            start_date: { year: "2024", month: "11", "day": "01" },
            text: {
                headline: "Trump elected",
                text: "<p>Donald Trump wins the 2024 election with the vocal support of Elon Musk.</p>"
            },
            importance: 2,
            category: CATEGORIES.POLICY
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
                text: "<p>On the 12th day of \"12 Days of OpenAI\", OpenAI releases benchmark results for o3, shocking the world. They show striking improvements on the ARC-AGI eval, suggesting AGI may be nearer than many skeptics believed.</p>"
            },
            importance: 2,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2024", month: "12", "day": "26" },
            text: {
                headline: "DeepSeek v3",
                text: "<p>Chinese lab DeepSeek stuns with the release of DeepSeek v3, which showed strong performance for low cost.</p>"
            },
            importance: 2,
            category: CATEGORIES.MODEL_RELEASE
        }
    ]
};