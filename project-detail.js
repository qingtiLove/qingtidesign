const projects = {
  fulfillment: {
    category: "03 / B 端提效",
    title: "履约工作台 · 双端升级",
    intro: "围绕信息触达、精准筛选和操作路径，帮助商家更快发现并处理履约问题。",
    role: "设计发起人 / 设计负责人",
    team: "带领 1 名外包同学",
    image: "assets/fulfillment-cover.png",
    background: "接手商家端设计接口人任务后，从满意度调研中发现履约模块是经营后台中体验问题最集中的部分，因此发起专项升级。",
    problem: "商家容易错过关键订单状态，异常订单定位不便，售后处理路径较长，同时页面信息密度与视觉规范也需要更新。",
    solution: "以“信息主动触达、筛选精准定位、操作路径压缩”为设计主张，完成竞品调研、方案设计、双端协同和规范沉淀。",
    result: "改善商家履约处理体验，同步升级 PC 端规范并制定移动端设计规范。"
  },
  "live-console": {
    category: "04 / B 端提效",
    title: "百度直播开播链路体验升级",
    intro: "从主播反馈出发，补齐开播链路断点并重构实时中控体验。",
    role: "项目发起人 / 设计负责人",
    team: "带领 2 名外包同学",
    image: "assets/live-console-cover.png",
    background: "头部主播团队反馈中控台不好用。通过全链路体验走查发现，问题不仅是商品检索效率低，还包括开播前、中、后的链路断裂。",
    problem: "中控操作效率低、交互不一致，基础能力不完善，开播后的内容沉淀与二次经营链路也不完整。",
    solution: "确定“补齐断点 + 中控重构”的设计主张，绘制理想态开播链路，完成实时中控重构，并推动预约直播、切片管理与发布能力落地。",
    result: "打通直播前、中、后体验，补齐关键基础能力，提升直播团队的操作效率与整体体验。"
  },
  "ai-system": {
    category: "05 / AI 赋能",
    title: "全域商家 AI 体验体系",
    intro: "从散点分布到体系感知，构建可复用的商家 AI 交互范式。",
    role: "项目负责人 / 设计发起人",
    team: "带领 5 名外包同学",
    image: "assets/ai-system-cover.png",
    background: "商家端、直播端和投放端陆续上线 AI 能力，但视觉元素和交互规则各自为政，用户感知到的是多个工具，而不是一个统一的平台。",
    problem: "AI 入口、对话框架、反馈方式和视觉语言不一致，增加了商家理解成本，也提高了后续维护成本。",
    solution: "围绕 AI 如何介入用户操作，提炼嵌入式、伴随式、托管式三大交互范式，统一入口、对话和反馈的体验语言。",
    result: "建立全域商家 AI 体验体系，沉淀可复用的设计资产和交互规范，为后续 AI 能力接入提供统一基础。"
  },
  "live-growth": {
    category: "02 / C 端增长",
    title: "直播电商 GMV 提转专项",
    intro: "围绕吸引力与氛围感，升级直播间购买转化体验。",
    role: "项目发起人 / 交互设计师",
    team: "带领设计同学协作推进",
    image: "assets/live-growth-cover.png",
    background: "从购买链路业务转向直播电商后，主动发现直播间氛围冷清、商品感知弱、用户下单意愿不足等问题。",
    problem: "直播间购买入口吸引力不足，商品卖点表达不充分，优惠券与红包雨等营销玩法的操作链路也有优化空间。",
    solution: "绘制用户行为地图并开展竞品分析，以“吸引力 × 氛围感”为策略，升级优惠券、红包雨、商品讲解卡和热卖标签等关键体验。",
    result: "提升直播间购买氛围和商品感知，形成可复用的大促氛围展示位与营销玩法规范。"
  },
  "purchase-flow": {
    category: "01 / 全域交易",
    title: "内循环购买链路提转专项",
    intro: "收敛多场景购买框架，简化下单链路，建立统一的全域交易体验。",
    role: "资深交互设计师 / 设计主导",
    team: "跨团队协作推进",
    image: "assets/purchase-flow-cover.png",
    backgroundImage: "assets/purchase-flow-background.png",
    solutionImage: "assets/purchase-flow-solution.png",
    background: "整合多业务电商能力成立独立业务单元后，借购买链路性能升级的机会，主动发起全域购买体验统一专项。",
    problem: "不同场域存在多套购买框架，商详、选规格、提单和支付之间的路径较长，页面样式也需要更新。",
    solution: "梳理多场域场景，收敛购买框架，融合选规格、提单与支付环节，并逐层验证框架、链路和页面样式。",
    result: "建立更统一、更连续的全域购买体验，降低不同场景之间的体验差异，各个场域的转化率均有提升。"
  },
  other: {
    category: "06 / 项目快览",
    title: "其他项目快览",
    intro: "从搜索电商到 AI 经营，持续积累不同业务场景中的体验设计实践。",
    role: "体验设计主导 / 跨团队协作",
    team: "多项目并行推进",
    image: "assets/other-projects-cover.png",
    background: "除核心项目外，长期参与搜索电商、AI 智能导购、AI 生图 SDK、运营活动与商机中心等多个方向。",
    problem: "不同业务有不同的目标、场景和约束，需要在快速交付的同时保持体验的一致性和设计资产的可复用性。",
    solution: "通过场景梳理、共性问题提炼和设计规范沉淀，把分散的项目经验转化为可复用的设计方法和组件资产。",
    result: "形成覆盖搜索、交易、AI 和经营工具的多场景设计实践，持续支持业务体验升级。"
  }
};

const key = new URLSearchParams(window.location.search).get("project") || "fulfillment";
const project = projects[key] || projects.fulfillment;
const isPurchaseFlow = key === "purchase-flow";
document.body.classList.toggle("purchase-flow-detail", isPurchaseFlow);
const solutionContent = isPurchaseFlow
  ? `
    <div class="solution-steps">
      <article class="solution-step">
        <span>01</span>
        <div><h3>收敛框架</h3><p>梳理直播间、短小视频流、搜索、Feed 信息流和商城等场域，统一多套购买框架，建立更清晰的全域体验基础。</p></div>
      </article>
      <article class="solution-step">
        <span>02</span>
        <div><h3>链路简化</h3><p>融合选规格、提单与支付环节，缩短用户从商品决策到完成购买的操作路径。</p></div>
      </article>
      <article class="solution-step">
        <span>03</span>
        <div><h3>视觉升级</h3><p>重构核心页面的信息层级、内容排布和组件表现，让不同场景中的购买体验更统一、更易理解。</p></div>
      </article>
    </div>
  `
  : `<h2>${project.solution}</h2>`;

document.title = `${project.title} · 李楠`;
document.querySelector("#detail-root").innerHTML = `
  <section class="detail-hero section-shell">
    <div class="detail-copy reveal visible">
      <p class="section-number">${project.category}</p>
      <h1>${project.title}</h1>
      <p class="detail-intro">${project.intro}</p>
      <div class="detail-meta"><span>${project.role}</span><span>${project.team}</span></div>
    </div>
    ${isPurchaseFlow ? "" : `<img class="detail-cover reveal visible delay-one" src="${project.image}" alt="${project.title}" />`}
  </section>
  <section class="detail-body section-shell">
    <div class="detail-block"><p class="section-number">01 / 背景</p><p>${project.background}</p></div>
    ${isPurchaseFlow ? `<img class="detail-image background-image" src="${project.backgroundImage}" alt="内循环购买链路项目背景" />` : ""}
    <div class="detail-block"><p class="section-number">02 / 问题</p><p>${project.problem}</p></div>
    <div class="detail-block detail-highlight"><p class="section-number">03 / 设计方案</p>${solutionContent}${isPurchaseFlow ? `<img class="detail-image solution-image" src="${project.solutionImage}" alt="内循环购买链路设计方案" />` : ""}</div>
    <div class="detail-block"><p class="section-number">04 / 项目成果</p><p>${project.result}</p></div>
    ${isPurchaseFlow ? "" : `<img class="detail-image" src="${project.image}" alt="${project.title} 设计展示" />`}
  </section>
`;
