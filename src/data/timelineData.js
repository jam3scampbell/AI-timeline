// src/data/timelineData.js

import { text } from "framer-motion/client";

export const CATEGORIES = {
    MODEL_RELEASE: "Model Release",
    CULTURE: "Culture & Society",
    BUSINESS: "Business & Industry",
    RESEARCH: "Research & Papers",
    POLICY: "Policy & Regulation"
};

function createLink(url, title) {
    return `<a href="${url}" target="_blank" rel="noopener noreferrer">${title}</a>`;
}

export const TIMELINE_DATA = {
    events: [
        {
            start_date: { year: "2015", month: "12", day: "11" },
            text: {
                headline: createLink("https://openai.com/index/introducing-openai/", "OpenAI founded"),
                text: "<p>Elon Musk, Sam Altman, Greg Brockman, and others founded OpenAI with the goal of building AGI to benefit humanity.</p>"
            },
            importance: 3,
            category: CATEGORIES.BUSINESS
        },
        {
            start_date: { year: "2016", month: "03", day: "09" },
            text: {
                headline: createLink("https://deepmind.google/research/breakthroughs/alphago/", "AlphaGo"),
                text: "<p>DeepMind's AlphaGo defeats top human player Lee Sedol in the board game Go, defying what many considered possible.</p>"
            },
            importance: 2,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2017", month: "01", day: "05" },
            text: {
                headline: createLink("https://futureoflife.org/event/bai-2017/","Asilomar Conference"),
                text: "<p>Organized by the Future of Life Institute, all of the top names in the field gather for a conference in Asilomar to discuss how to build AGI beneficially."
            },
            importance: 1,
            category: CATEGORIES.CULTURE 
        },
        {
            start_date: { year: "2017", month: "06", day: "12" },
            text: {
                headline: createLink("https://arxiv.org/abs/1706.03762","Attention is All You Need"),
                text: "<p>Google introduces the transformer architecture, a breakthrough deep learning architecture based on the attention mechanism. The architecture shows strong gains on language translation tasks.</p>"
            },
            importance: 3,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2017", month: "06", day: "12" },
            text: {
                headline: createLink("https://arxiv.org/abs/1706.03741","RLHF"),
                text: "<p>Christiano et al. publish the technique of reinforcement learning from human feedback (RLHF), which would later be used extensively to align large language models.</p>"
            },
            importance: 3,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2018", month: "06", day: "11" },
            text: {
                headline: createLink("https://openai.com/index/language-unsupervised/","GPT-1"),
                text: "<p>OpenAI reveals the first version of its Generative Pre-trained Transformer (GPT).</p>"
            },
            importance: 3,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2019", month: "02", day: "14" },
            text: {
                headline: createLink("https://openai.com/index/better-language-models/","GPT-2"),
                text: "<p>OpenAI releases GPT-2, but withholds the largest version due to concerns about misuse. A decoder-only transformer, it was trained with next token prediction to generate text.</p>"
            },
            importance: 3,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2020", month: "01", day: "23" },
            text: {
                headline: createLink("https://arxiv.org/abs/2001.08361","Scaling Laws"),
                text: "<p>Kaplan et al. release \"Scaling Laws for Neural Language Models\", showing that model performance predictably scales with compute, data, and parameters. Scaling laws would become the primary driver of progress over the next few years.</p>"
            },
            importance: 3,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2020", month: "05", day: "28" },
            text: {
                headline: createLink("https://arxiv.org/abs/2005.14165","GPT-3"),
                text: "<p>OpenAI releases GPT-3, the largest language model at the time and shocking in its ability to generate coherent paragraphs.</p>"
            },
            importance: 3,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2021", month: "01", day: "05" },
            text: {
                headline: createLink("https://openai.com/index/dall-e/","DALL-E"),
                text: "<p>OpenAI introduces DALL-E, a model that generates images from textual descriptions."
            },
            importance: 2,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2021", month: "05", day: "28" },
            text: {
                headline: createLink("https://www.anthropic.com/news/anthropic-raises-124-million-to-build-more-reliable-general-ai-systems","Anthropic founded"),
                text: "<p>A group of researchers from OpenAI leave to start Anthropic, featuring an empirical hard-science culture focused on AI safety.</p>"
            },
            importance: 3,
            category: CATEGORIES.BUSINESS
        },
        {
            start_date: { year: "2021", month: "06", day: "29" },
            text: {
                headline: createLink("https://en.wikipedia.org/wiki/GitHub_Copilot","GitHub Copilot"),
                text: "<p>Github previews Copilot in VSCode, a tool that used OpenAI's Codex model to generate code suggestions, marking the beginning of real-world AI code generation."
            },
            importance: 2,
            category: CATEGORIES.BUSINESS
        },
        {
            start_date: { year: "2022", month: "01", day: "27" },
            text: {
                headlines: createLink("https://openai.com/index/instruction-following/", "InstructGPT"),
                text: "<p>OpenAI introduces InstructGPT, a model that can follow instructions in natural language better than base GPT-3 and was a prototype of what would become ChatGPT.</p>"
            },
            importance: 1,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2022", month: "01", day: "28" },
            text: {
                headline: createLink("https://arxiv.org/abs/2201.11903","Chain-of-Thought Prompting"),
                text: "<p>Google Brain publishes a paper showing gains in LLM reasoning by having them think step-by-step. Despite being such a simple technique, chain-of-thought reasoning would become foundational to AI.</p>"
            },
            importance: 1,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2022", month: "04", day: "06" },
            text: {
                headline: createLink("https://openai.com/index/dall-e-2/","DALL-E 2"),
                text: "<p>OpenAI shocks the world with the release of DALL-E 2, which could generate realistic images from text at an unprecedented level.</p>"
            },
            importance: 2,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2022", month: "05", day: "27" },
            text: {
                headline: createLink("https://arxiv.org/abs/2205.14135","Flash Attention"),
                text: "<p>A group from Stanford release Flash Attention, a new method that significantly speeds up the attention mechanism in transformers.</p>"
            },
            importance: 1,
            category: CATEGORIES.RESEARCH 
        },
        {
            start_date: { year: "2022", month: "06", day: "11" },
            text: {
                headline: createLink("https://www.washingtonpost.com/technology/2022/06/11/google-ai-lamda-blake-lemoine/","Blake Lemoine fired"),
                text: "<p>A Google engineer named Blake Lemoine is fired after claiming that its LaMDA model was sentient. The story raises a lot of attention towards the capabilities of conversational LLMs.</p>"
            },
            importance: 1,
            category: CATEGORIES.CULTURE
        },
        {
            start_date: { year: "2022", month: "07", day: "22" },
            text: {
                headline: createLink("https://deepmind.google/discover/blog/alphafold-reveals-the-structure-of-the-protein-universe/", "AlphaFold 2"),
                text: "<p>DeepMind releases AlphaFold 2, solving the protein folding problem and revolutionizing a grand challenge in biology.</p>"
            },
            importance: 2,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2022", month: "08", day: "22" },
            text: {
                headline: createLink("https://stability.ai/news/stable-diffusion-public-release", "Stable Diffusion"),
                text: "<p>Stability AI open-sources Stable Diffusion (v1.4), the first strong image generation to be released to the public.</p>"
            },
            importance: 1,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2022", month: "11", day: "30" },
            text: {
                headline: createLink("https://openai.com/index/chatgpt/","ChatGPT"),
                text: "<p>OpenAI releases a blog post titled \"ChatGPT: Optimizing Language Models for Dialogue\". Despite intended as a lowkey research preview, ChatGPT quickly becomes the biggest AI product in the world, ushering in a new era of generative AI.</p>"
            },
            importance: 3,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2023", month: "02", day: "17" },
            text: {
                headline: createLink("https://www.nytimes.com/2023/02/16/technology/bing-chatbot-microsoft-chatgpt.html","Bing gaslights NYT reporter"),
                text: "<p>Bing's AI chatbot has a viral interaction with New York Times reporter Kevin Roose, in which the chatbot emotionally manipulates Roose. The story woke a lot of people up to the capabilities and risks of LLMs.</p>"
            },
            importance: 1.5,
            category: CATEGORIES.CULTURE
        },
        {
            start_date: { year: "2023", month: "02", day: "24" },
            text: {
                headline: createLink("https://ai.meta.com/blog/large-language-model-llama-meta-ai/","LLaMA"),
                text: "<p>Meta releases its large language model called LLaMA. Intended to be distributed to researchers only, it ends up getting leaked online, allowing anyone to download it. At the time, it became the best open-source model in the world.</p>"
            },
            importance: 2.5,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2023", month: "03", day: "14" },
            text: {
                headline: createLink("https://www.anthropic.com/news/introducing-claude", "Anthropic introduces Claude"),
                text: "<p>Anthropic introduces its flagship AI assistant, Claude.</p>"
            },
            importance: 2,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2023", month: "03", day: "22" },
            text: {
                headline: createLink("https://futureoflife.org/open-letter/pause-giant-ai-experiments/","FLI letter"),
                text: "<p>The Future of Life Institute publishes an open letter calling for a 6-month pause on AI development, signed by Elon Musk and other notable figures. However, the leading labs do not partake in the proposed pause.</p>"
            },
            importance: 1.0,
            category: CATEGORIES.CULTURE
        },
        {
            start_date: { year: "2023", month: "04", day: "07" },
            text: {
                headline: createLink("https://arxiv.org/abs/2304.03442","Generative Agents"),
                text: "<p>The paper \"Generative Agents: Interactive Simulacra of Human Behavior\" shows that LLMs can be used to create social simulations of behavior. It creates a simulated world of LLMs akin to the Sims.</p>"
            },
            importance: 1,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2023", month: "04", day: "16" },
            text: {
                headline: createLink("https://github.com/Significant-Gravitas/AutoGPT","AutoGPT"),
                text: "<p>An open-source repository called AutoGPT, which was one of the first to put GPT-4 in an agent loop, becomes one of the most starred GitHub repositories of all time.</p>"
            },
            importance: 1,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2023", month: "04", day: "23" },
            text: {
                headline: createLink("https://www.nytimes.com/2023/04/19/arts/music/ai-drake-the-weeknd-fake.html","Fake Drake"),
                text: "<p>An anonymous creator named Ghostwriter uses music AI tools to produce viral songs that sound like Drake. The songs were taken down for breaking copyright, but illustrated the ability of generative AI to do creative work.</p>"
            },
            importance: 1,
            category: CATEGORIES.CULTURE
        },
        {
            start_date: { year: "2023", month: "05", day: "02" },
            text: {
                headline: createLink("https://www.theguardian.com/technology/2023/may/02/geoffrey-hinton-godfather-of-ai-quits-google-warns-dangers-of-machine-learning","Hinton quits Google"),
                text: "<p>One of the pioneers of neural networks and winner of the Turing Award, Geoffrey Hinton quits Google to speak freely about the dangers of AI, saying that he's changed his mind about how soon powerful AI might be.</p>"
            },
            importance: 2.5,
            category: CATEGORIES.CULTURE
        },
        {
            start_date: { year: "2023", month: "05", day: "25" },
            text: {
                headline: createLink("https://arxiv.org/abs/2305.16291","Voyager"),
                text: "<p>A team from NVIDIA demonstrates the use of GPT-4 for continuous skill learning in Minecraft. This was one of the first major examples of an LLM succeeding in an open-ended embodied domain and learning skills over time.</p>"
            },
            importance: 1,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2023", month: "05", day: "30" },
            text: {
                headline: createLink("https://www.safe.ai/work/statement-on-ai-risk","CAIS letter"),
                text: "<p>The Center for AI Safety releases an open letter that simply states: \"Mitigating the risk of extinction from AI should be a global priority.\" It is signed by all the top names in the field, signaling unity around the importance of AI safety.</p>"
            },
            importance: 2,
            category: CATEGORIES.CULTURE
        },
        {
            start_date: { year: "2023", month: "05", day: "30" },
            text: {
                headline: createLink("https://www.reuters.com/technology/nvidia-sets-eye-1-trillion-market-value-2023-05-30/","NVIDIA reaches $1T"),
                text: "<p>Nvidia, the chipmaker providing the GPUs for nearly all generative AI, has its valuation skyrocket in the months following ChatGPT.</p>"
            },
            importance: 2,
            category: CATEGORIES.BUSINESS
        },
        {
            start_date: { year: "2023", month: "07", day: "11" },
            text: {
                headline: createLink("https://www.anthropic.com/news/claude-2","Claude 2"),
                text: "<p>Anthropic releases the Claude 2 series of models.</p>"
            },
            importance: 1,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2023", month: "07", day: "14" },
            text: {
                headline: createLink("https://x.com/elonmusk/status/1679951975868436486","xAI founded"),
                text: "<p>After a falling out with OpenAI, Elon Musk establishes xAI to compete for AGI.</p>"
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
            importance: 1,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2023", month: "07", day: "21" },
            text: {
                headline: createLink("https://www.whitehouse.gov/briefing-room/statements-releases/2023/07/21/fact-sheet-biden-harris-administration-secures-voluntary-commitments-from-leading-artificial-intelligence-companies-to-manage-the-risks-posed-by-ai/","White House Commitments"),
                text: "<p>After meeting with leading AI companies, the White House secures voluntary commitments to manage the risks posed by AI.</p>"
            },
            importance: 1,
            category: CATEGORIES.POLICY 
        },
        {
            start_date: { year: "2023", month: "07", day: "27" },
            text: {
                headline: createLink("https://arxiv.org/abs/2307.15043","Automated Jailbreaks"),
                text: "<p>A team from CMU publishes \"Universal and Transferable Adversarial Attacks on Aligned Language Models\", showing that gradient-based adversarial attacks could be used on LLMs.</p>"
            },
            importance: 1,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2023", month: "09", day: "27" },
            text: {
                headline: createLink("https://mistral.ai/news/announcing-mistral-7b/","Mistral 7B"),
                text: "<p>French lab Mistral releases and open-sources their first model, which quickly became a fan favorite.</p>"
            },
            importance: 2,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2023", month: "10", day: "05" },
            text: {
                headline: createLink("https://www.anthropic.com/research/towards-monosemanticity-decomposing-language-models-with-dictionary-learning","Anthropic SAE's"),
                text: "<p>Anthropic publishes \"Towards Monosemanticity: Decomposing Language Models With Dictionary Learning\", showing that they could train sparse autoencoders to isolate features in LLMs. This represented a major breakthrough in combatting the phenomenon of superposition, advancing the mechanistic interpretability agenda.</p>"
            },
            importance: 1.5,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2023", month: "11", "day": "01" },
            text: {
                headline: createLink("https://www.gov.uk/government/topical-events/ai-safety-summit-2023/about","UK AI Safety Summit"),
                text: "<p>The UK hosts a major summit on AI safety, bringing together policymakers and the leading labs.</p>"
            },
            importance: 2,
            category: CATEGORIES.POLICY
        },
        {
            start_date: { year: "2023", month: "11", day: "06" },
            text: {
                headline: createLink("https://openai.com/index/new-models-and-developer-products-announced-at-devday/","GPT-4 Turbo"),
                text: "<p>OpenAI releases an optimized version of GPT-4, significantly reducing inference costs, during their first ever Dev Day event.</p>"
            },
            importance: 2,
            category: CATEGORIES.MODEL_RELEASE
        },        
        {
            start_date: { year: "2023", month: "11", "day": "17" },
            text: {
                headline: createLink("https://openai.com/index/openai-announces-leadership-transition/","Altman Board Drama"),
                text: "<p>Sam Altman is unexpectedly fired as CEO of OpenAI by the Board of Directors and after a dramatic weekend of negotiations, is re-hired. The Board mysteriously claimed that Altman was not \"consistently candid\", but after refusing to elaborate, OpenAI employees created a petition calling for the Board to resign and that they'd leave to Microsoft if they didn't.</p>"
            },
            importance: 3,
            category: CATEGORIES.BUSINESS
        },
        {
            start_date: { year: "2023", month: "11", "day": "23" },
            text: {
                headline: createLink("https://www.reuters.com/technology/sam-altmans-ouster-openai-was-precipitated-by-letter-board-about-ai-breakthrough-2023-11-22/","Q*"),
                text: "<p>A Reuters report claims that Sam Altman's ouster was preceded by a major internal research breakthrough called Q*, boosting LLM performance on math benchmarks with tree search. In the following months, the rumor lit the research community on fire. Q* would eventually turn into o1, which was later codenamed Strawberry.</p>"
            },
            importance: 2,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2023", month: "12", day: "01" },
            text: {
                headline: createLink("https://arxiv.org/abs/2312.00752","Mamba"),
                text: "<p>Albert Gu and Tri Dao release the paper \"Mamba: Linear-Time Sequence Modeling with Selective State Spaces\", showing that state-space models could be made competitve with transformers.</p>"
            },
            importance: 1,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2023", month: "12", day: "06" },
            text: {
                headline: createLink("https://blog.google/technology/ai/google-gemini-ai/", "Google Introduces Gemini"),
                text: "<p>Google introduces the Gemini series of models"
            },
            importance: 2,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2024", month: "02", day: "15" },
            text: {
                headline: createLink("https://openai.com/index/sora/","Sora"),
                text: "<p>OpenAI demos '<a href=\"https://openai.com/sora/\">Sora</a>,' a text-to-video model that can generate short clips from written descriptions.</p>"
            },
            importance: 2.5,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2024", month: "03", day: "04" },
            text: {
                headline: createLink("https://www.anthropic.com/news/claude-3-family","Claude 3"),
                text: "<p>Anthropic releases the Claude 3 series of models. Claude 3 Opus would instantly become a fan favorite.</p>"
            },
            importance: 2,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2024", month: "03", day: "12" },
            text: {
                headline: createLink("https://x.com/cognition_labs/status/1767548763134964000","Devin"),
                text: "<p>Startup Cognition Labs demo Devin, a prototype of a fully autonomous software engineer agent.</p>"
            },
            importance: 2,
            category: CATEGORIES.BUSINESS
        },
        {
            start_date: { year: "2024", month: "04", day: "11" },
            text: {
                headline: createLink("https://cybernews.com/news/openai-researchers-leaking-information/","OpenAI fires leakers"),
                text: "<p><a href=\"https://cybernews.com/news/openai-researchers-leaking-information/\">Leopold Aschenbrenner and Pavel Izmailov</a>, two researchers from the superalignment team, are fired for 'leaking'.</p>"
            },
            importance: 1,
            category: CATEGORIES.BUSINESS
        },
        {
            start_date: { year: "2024", month: "04", day: "18" },
            text: {
                headline: createLink("https://ai.meta.com/blog/meta-llama-3/","LLaMA 3.0"),
                text: "<p>Meta releases and open-sources the LLaMA 3.0 series of models.</p>"
            },
            importance: 1,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2024", month: "05", day: "13" },
            text: {
                headline: createLink("https://openai.com/index/hello-gpt-4o/","GPT-4o"),
                text: "<p>The first omni-model trained natively on text, image, and audio.</p>"
            },
            importance: 2.5,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2024", month: "05", day: "14" },
            text: {
                headline: createLink("https://x.com/ilyasut/status/1790517455628198322","Ilya quits OpenAI"),
                text: "<p>Ilya Sutskever, founder of OpenAI, quits after months of silence, originating from the Board dispute.</p>"
            },
            importance: 1,
            category: CATEGORIES.BUSINESS
        },
        {
            start_date: { year: "2024", month: "05", day: "21" },
            text: {
                headline: createLink("https://www.europarl.europa.eu/news/en/press-room/20240308IPR19015/artificial-intelligence-act-meps-adopt-landmark-law","EU AI Act"),
                text: "<p>The <a href=\"https://en.wikipedia.org/wiki/Artificial_Intelligence_Act\">EU AI Act</a> is voted into law after contentious debates.</p>"
            },
            importance: 2,
            category: CATEGORIES.POLICY
        },
        {
            start_date: { year: "2024", month: "06", day: "04" },
            text: {
                headline: createLink("https://situational-awareness.ai/","Situational Awareness"),
                text: "<p>Leopold Aschenbrenner publishes a contentious and influential essay series, claiming that AGI will arrive sooner than people think and is likely to be nationalized.</p>"
            },
            importance: 3,
            category: CATEGORIES.CULTURE
        },
        {
            start_date: { year: "2024", month: "06", day: "19" },
            text: {
                headline: createLink("https://x.com/ilyasut/status/1803472978753303014","SSI founded"),
                text: "<p><a href=\"https://techcrunch.com/2024/06/19/ilya-sutskever-launches-safe-superintelligence-inc/\">Ilya Sutskever</a> starts a new lab called Safe Superintelligence Inc, which pledges to only have one product: safe superintelligence.</p>"
            },
            importance: 3,
            category: CATEGORIES.BUSINESS
        },
        {
            start_date: { year: "2024", month: "06", day: "20" },
            text: {
                headline: createLink("https://www.anthropic.com/news/claude-3-5-sonnet","Claude 3.5 Sonnet"),
                text: "<p>Anthropic releases Claude 3.5 Sonnet, which would become a fan favorite and was later called 'Berkeley's most eligible bachelor'.</p>"
            },
            importance: 3,
            category: CATEGORIES.BUSINESS
        },
        {
            start_date: { year: "2024", month: "08", day: "23" },
            text: {
                headline: createLink("https://x.com/karpathy/status/1827143768459637073","Cursor"),
                text: "<p>After a viral tweet by <a href=\"https://twitter.com/karpathy/status/1695123456789012345\">Andrej Karpathy</a>, the Cursor AI Code Editor explodes in popularity among developers.</p>"
            },
            importance: 1,
            category: CATEGORIES.BUSINESS
        },
        {
            start_date: { year: "2024", month: "09", day: "12" },
            text: {
                headline: createLink("https://openai.com/index/introducing-openai-o1-preview/","o1-preview"),
                text: "<p>OpenAI releases o1-preview, introducing the inference-time scaling paradigm.</p>"
            },
            importance: 2,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2024", month: "09", day: "25" },
            text: {
                headline: createLink("https://x.com/miramurati/status/1839025700009030027","Murati quits"),
                text: "<p>OpenAI's CTO Mira Murati departs the company.</p>"
            },
            importance: 1.5,
            category: CATEGORIES.BUSINESS
        },
        {
            start_date: { year: "2024", month: "09", day: "29" },
            text: {
                headline: createLink("https://www.gov.ca.gov/wp-content/uploads/2024/09/SB-1047-Veto-Message.pdf","SB1047 Vetoed"),
                text: "<p>Governor Gavin Newsom vetoes California senate bill 1047, which sparked lots of vitriolic debate between AI safety and accelerationist crowds and became one of the main stories of 2024.</p>"
            },
            importance: 2,
            category: CATEGORIES.POLICY
        },
        {
            start_date: { year: "2024", month: "10", day: "08" },
            text: {
                headline: createLink("","Hinton/Hassabis Nobel Prizes"),
                text: "<p>In a surpise to everyone, Geoffrey Hinton (along with John Hopfield) is awarded the Nobel Prize in Physics for their early work on neural networks. A few days later, Demis Hassabis (along with John Jumper) is awarded the Nobel Prize in Chemistry for their work on AlphaFold.</p>"
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
            importance: 2,
            category: CATEGORIES.CULTURE
        },
        {
            start_date: { year: "2024", month: "10", day: "22" },
            text: {
                headline: createLink("https://www.anthropic.com/news/3-5-models-and-computer-use","Claude Computer Use"),
                text: "<p>Claude gains the ability to use computer interfaces. Anthropic also releases Claude 3.5 Haiku and an updated version of Claude 3.5 Sonnet.</p>"
            },
            importance: 2,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2024", month: "11", day: "01" },
            text: {
                headline: createLink("https://www.nytimes.com/2024/11/01/us/politics/trump-2024-election.html","Trump elected"),
                text: "<p>Donald Trump wins the 2024 election with the vocal support of Elon Musk.</p>"
            },
            importance: 2,
            category: CATEGORIES.POLICY
        },
        {
            start_date: { year: "2024", month: "11", day: "19"},
            text: {
                headline: createLink("https://www.reuters.com/technology/artificial-intelligence/us-government-commission-pushes-manhattan-project-style-ai-initiative-2024-11-19/", "China Commission"),
                text: "<p>The US-China Economic and Security Review Commission calls for a Manhattan Project-style initiative for AGI development.</p>"
            },
            importance: 1,
            category: CATEGORIES.POLICY
        },
        {
            start_date: { year: "2024", month: "12", day: "04" },
            text: {
                headline: createLink("https://thehill.com/policy/technology/5026959-venture-capitalist-david-sacks-white-house/","David Sacks is AI Czar"),
                text: "<p>President-elect Donald Trump appoints venture capitalist David Sacks as the 'White House AI and Crypto Czar' to oversee regulation of artificial intelligence and cryptocurrency.</p>"
            },
            importance: 1.5,
            category: CATEGORIES.POLICY
        },
        {
            start_date: { year: "2024", month: "12", day: "11" },
            text: {
                headline: createLink("https://blog.google/products/gemini/google-gemini-ai-collection-2024/","Gemini 2.0"),
                text: "<p>Google announces their Gemini 2.0 models"
            },
            importance: 2,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2024", month: "12", day: "16" },
            text: {
                headline: createLink("https://deepmind.google/technologies/veo/veo-2/","Veo 2"),
                text: "<p>Google unveils Veo 2, a video generation model with a shocking jump in coherence over previous models.</p>"
            },
            importance: 2,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2024", month: "12", day: "20" },
            text: {
                headline: createLink("https://openai.com/12-days/","o3 evals"),
                text: "<p>On the 12th day of '12 Days of OpenAI', OpenAI releases benchmark results for o3, shocking the world. The model achieves a breakthrough score of 87.5% on the <a href=\"https://arcprize.org/blog/oai-o3-pub-breakthrough\">ARC-AGI benchmark</a>, suggesting AGI may be nearer than many skeptics believed.</p>"
            },
            importance: 2,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2024", month: "12", day: "26" },
            text: {
                headline: createLink("https://arxiv.org/abs/2412.19437","DeepSeek v3"),
                text: "<p>Chinese lab DeepSeek stuns with the release of DeepSeek v3, a 671-billion parameter open-source model that shows strong performance at a shockingly low cost.</p>"
            },
            importance: 2,
            category: CATEGORIES.MODEL_RELEASE
        }
    ]
};