// DonBox 内容配置文件
// 以后只需修改这里，网站内容会自动更新

window.donboxData = {
    // 社交链接
    social: {
        x: "https://x.com/zeroXall",
        notion_blog: "https://notion.so/your-page-id" // 你的 Notion 主页链接
    },

    // 博客文章列表 (新增一项就会自动多出一张卡片)
    // tag 建议使用: #Web3, #AI, #Life, #Economics
    blogs: [
        {
            title_cn: "新西兰科技移民指南：PM 视角",
            title_en: "NZ Tech Immigration: A PM Perspective",
            desc_cn: "从技术打分到文化契合度，全方位拆解移民路径。",
            desc_en: "Breaking down the immigration path from points to cultural fit.",
            link: "https://notion.so/post-1", 
            tag: "#Life",
            color: "blue" // 可选: red, blue, yellow
        },
        {
            title_cn: "Web3 产品的边际成本分析",
            title_en: "Marginal Cost Analysis in Web3",
            desc_cn: "当数据上链成为常态，如何优化经济模型？",
            desc_en: "Optimizing economic models when on-chain data is the norm.",
            link: "https://notion.so/post-2",
            tag: "#Web3",
            color: "red"
        }
    ],

    // Prompt 提示词列表
    prompts: [
        {
            title_cn: "PM 需求拆解",
            title_en: "PM Requirement Breakdown",
            content_cn: "作为电商产品经理，请利用 MECE 原则拆解 [功能名称] 的用户路径...",
            content_en: "As an E-commerce PM, use the MECE principle to break down the user path...",
            tag: "#ProductLogic",
            color: "red"
        },
        {
            title_cn: "经济学模型分析",
            title_en: "Economic Model Analysis",
            content_cn: "基于奥地利经济学派视角，分析 [Web3项目] 的代币通缩机制...",
            content_en: "Analyze the token deflation mechanism from the Austrian School perspective...",
            tag: "#Economics",
            color: "blue"
        },
        {
            title_cn: "英语口语纠错",
            title_en: "English Correction",
            content_cn: "模拟雅思口语考官，针对我的回答指出语法错误...",
            content_en: "Act as an IELTS examiner, point out grammatical errors...",
            tag: "#EnglishLearning",
            color: "yellow"
        }
    ]
};