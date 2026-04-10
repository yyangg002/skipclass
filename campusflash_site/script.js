const defaultDeals = [
  {
    id: 1, title: 'Milk Tea Happy Hour', vendor: 'Cha Corner', category: 'Drinks', campus: 'HKU', distance: '220m',
    discount: 35, minutesLeft: 18, stockLeft: 9, recommended: true, trending: true, sustainable: false,
    offPeak: true, groupDeal: false, examSurvival: false,
    description: 'Empty tables right now! Flash deal for verified students to fill the off-peak hours.', claimed: 31,
  },
  {
    id: 2, title: 'Late Lunch Bento Rescue', vendor: 'Campus Bento Lab', category: 'Food', campus: 'HKU', distance: '350m',
    discount: 45, minutesLeft: 27, stockLeft: 6, recommended: true, trending: false, sustainable: true,
    offPeak: false, groupDeal: false, examSurvival: false,
    description: 'Unsold lunch sets released as last-minute discounted boxes to reduce waste.', claimed: 22,
  },
  {
    id: 3, title: 'Print 20 Pages Get 10 Free', vendor: 'QuickPrint Studio', category: 'Printing', campus: 'CUHK', distance: '180m',
    discount: 25, minutesLeft: 44, stockLeft: 20, recommended: false, trending: true, sustainable: false,
    offPeak: false, groupDeal: false, examSurvival: true,
    description: 'Perfect for assignment submission week and project handouts.', claimed: 12,
  },
  {
    id: 4, title: 'Group Dinner: 2nd Meal Half Price', vendor: 'Burger Joint', category: 'Food', campus: 'PolyU', distance: '150m',
    discount: 50, minutesLeft: 120, stockLeft: 15, recommended: true, trending: true, sustainable: false,
    offPeak: true, groupDeal: true, examSurvival: false,
    description: 'Bring a friend! Use the group buy feature to unlock 50% off your second meal.', claimed: 45,
  },
  {
    id: 5, title: 'Midnight Study Cafe Pass', vendor: 'Bean Sprint', category: 'Drinks', campus: 'HKU', distance: '140m',
    discount: 40, minutesLeft: 300, stockLeft: 14, recommended: true, trending: false, sustainable: false,
    offPeak: false, groupDeal: false, examSurvival: true,
    description: 'Exam Season Survival: Late-night study space + discounted Americano.', claimed: 18,
  }
];

const translations = {
  en: {
    studentOnly: 'Student-Only Verified Deals', heroTitle: '走堂 SkipClass HK', heroDesc: 'Don\'t pay full price. One-time student verification unlocks last-minute off-peak deals, exam survival packs, and food rescue offers around your campus.',
    exploreDeals: 'Explore Deals', merchantDashboard: 'Merchant Dashboard', featuredLabel: 'Featured deal right now', campus: 'Campus', distance: 'Distance', endsIn: 'Ends In', smartRec: 'Smart Recommendation', smartRecText: 'Picked for you based on your campus, the time of day, and what students are liking most right now.',
    activeDeals: 'Active Deals', acrossNearby: 'Across nearby SMEs', studentSavings: 'Student Savings', estimatedMonth: 'Estimated this month', partnerSMEs: 'Partner SMEs', nearCampuses: 'Near Hong Kong campuses', flashClaims: 'Flash Claims', thisWeek: 'This week',
    findTitle: 'Find your next deal', findDesc: 'Browse nearby student discounts, empty-table off-peak offers, and popular campus picks.', browseAll: 'Browse All Deals', dealsPageDesc: 'Filter by campus, search by keyword, and claim student offers in a few clicks.', searchPlaceholder: 'Search coffee, lunch, printing...', allDeals: 'All Deals', recommended: 'Recommended', foodRescue: 'Food Rescue', dealDetails: 'Deal details',
    merchantPageTitle: 'Merchant dashboard', merchantPageDesc: 'Create student flash deals, track interest, and fill low-demand hours near campus.', createDealForm: 'Create a flash deal', dealTitle: 'Deal title', vendorName: 'Vendor name', category: 'Category', discount: 'Discount', timeRemaining: 'Minutes left', spotsLeft: 'Spots left', description: 'Description', saveDeal: 'Save deal', yourDeals: 'Your saved deals',
    studentPerks: 'Student perks', perk1Title: 'Budget Mode', perk1Text: 'Set a monthly limit and let the app suggest deals to maximize your savings.', perk2Title: 'Group Buy Discounts', perk2Text: 'Bring friends to unlock extra discounts at partner restaurants.', perk3Title: 'Off-Peak Flash', perk3Text: 'Grab instant deals when nearby cafes have empty tables.', howItWorks: 'How it works', step1: 'Verify once with your Student ID.', step2: 'Claim flash deals and show your Smart Pass.', step3: 'SMEs gain traffic during slower hours.', footerText: 'Built for Hong Kong university students and local SMEs.', noDeals: 'No deals found for this filter.', trending: 'Trending', viewDeal: 'View Deal', claim: 'Claim', startGroupBuy: 'Start Group Buy', urgency: 'Urgency', only: 'Only', left: 'left', studentDeal: 'student deal', trendingNearCampus: 'Trending', wasteSupport: 'Save Food', groupBuyLabel: 'Group Deal', offPeakLabel: 'Off-Peak', examLabel: 'Exam Survival', by: 'by', claimThis: 'Claim This Deal', saveLater: 'Save for Later',
    claimSuccess: 'Deal claimed! Show your Smart Pass at the store.', groupBuySuccess: 'Group Buy started! Share the link with your friend.', saveSuccess: 'Deal saved successfully.', merchantSaved: 'Flash deal saved successfully.',
    signIn: 'Sign In', signUp: 'Sign Up', signInBtn: 'Login', signUpBtn: 'Create Account', email: 'Email Address', password: 'Password', fullName: 'Full Name', studentId: 'Student ID Number', businessName: 'Business Name', contactPerson: 'Contact Person', studentRole: '👨‍🎓 Student', merchantRole: '🏪 Merchant', authTitle: 'Welcome Back', createAccount: 'Create Account', authDescStudent: 'Sign in to claim student-only deals and manage your Smart Pass.', authDescMerchant: 'Sign in to your Merchant Dashboard to create and manage flash deals.', registerDescStudent: 'Join SkipClass to unlock off-peak and food rescue deals.', registerDescMerchant: 'Register your business to attract students during off-peak hours.', noAccount: 'Don\'t have an account?', hasAccount: 'Already have an account?', loginSuccess: 'Logged in successfully!', registerSuccess: 'Account created successfully!',
    logout: 'Logout', pleaseLogin: 'Please sign in to claim deals.', studentOnlyAction: 'Only verified students can claim deals. Merchants cannot claim.',
    aboutTitle: 'About SkipClass HK', aboutDesc: 'SkipClass HK is designed to connect university students with nearby SMEs through quick, location-based offers.',
    missionTitle: 'Our mission', missionText: 'We help students save money and help small businesses attract more customers, especially during slower hours.',
    whyUsefulTitle: 'Why it is useful', why1: 'Students get easy access to affordable food, drinks, printing, and study supplies.',
    why2: 'SMEs can create limited-time promotions and increase local visibility.', why3: 'Food rescue offers can reduce waste near campus.',
    keyFeaturesTitle: 'Key features', feature1: 'Smart Pass Verification', feature2: 'Campus-based filtering', feature3: 'Merchant flash deal creator', feature4: 'Group-buy discounts',
    prototypeNoteTitle: 'Prototype note', prototypeNoteText: 'This version is a frontend-ready prototype. It works as a static website and stores demo data locally in your browser.',
    redeemSuccess: 'Redeemed Successfully!', simulateScan: 'Simulate Merchant Scan'
  },
  zhHK: {
    studentOnly: '學生專屬認證優惠', heroTitle: '走堂 SkipClass HK', heroDesc: '告別正價！一次學生認證，解鎖校園周邊的最後召集離峰優惠、考試季特價及惜食折扣。',
    exploreDeals: '查看優惠', merchantDashboard: '商戶後台', featuredLabel: '即時精選優惠', campus: '校園', distance: '距離', endsIn: '剩餘時間', smartRec: '智能推薦', smartRecText: '根據你的校園位置、時段，以及現時學生熱門選擇而推薦。',
    activeDeals: '進行中優惠', acrossNearby: '來自附近中小企', studentSavings: '學生已節省', estimatedMonth: '本月估算', partnerSMEs: '合作商戶', nearCampuses: '鄰近香港各大校園', flashClaims: '已領取優惠', thisWeek: '本星期',
    findTitle: '尋找你的下一個優惠', findDesc: '瀏覽附近學生折扣、離峰空檯優惠，以及校園熱門選擇。', browseAll: '查看全部優惠', dealsPageDesc: '可按校園篩選、搜尋關鍵字，並快速領取學生優惠。', searchPlaceholder: '搜尋咖啡、午餐、影印...', allDeals: '全部優惠', recommended: '為你推薦', foodRescue: '惜食優惠', dealDetails: '優惠詳情',
    merchantPageTitle: '商戶後台', merchantPageDesc: '建立學生限時優惠、追蹤反應，並於校園附近冷門時段吸引更多客人。', createDealForm: '建立限時優惠', dealTitle: '優惠名稱', vendorName: '商戶名稱', category: '分類', discount: '折扣', timeRemaining: '剩餘分鐘', spotsLeft: '剩餘名額', description: '描述', saveDeal: '儲存優惠', yourDeals: '你已儲存的優惠',
    studentPerks: '學生福利', perk1Title: '預算模式', perk1Text: '設定每月預算，讓 App 為你推薦優惠以實現慳錢最大化。', perk2Title: '拼團優惠', perk2Text: '約埋朋友一齊買，解鎖合作餐廳的額外折扣。', perk3Title: '離峰閃購', perk3Text: '當附近 Cafe 有空檯時，即時搶購特價優惠。', howItWorks: '使用方式', step1: '只需驗證一次學生證。', step2: '領取限時優惠並出示 Smart Pass。', step3: '中小企於淡時增加人流。', footerText: '專為香港大學生及本地中小企而設。', noDeals: '此篩選條件下找不到優惠。', trending: '熱門', viewDeal: '查看優惠', claim: '領取', startGroupBuy: '發起拼團', urgency: '緊迫程度', only: '只剩', left: '個', studentDeal: '學生優惠', trendingNearCampus: '熱門', wasteSupport: '惜食', groupBuyLabel: '拼團', offPeakLabel: '離峰', examLabel: '考試季', by: '商戶', claimThis: '立即領取', saveLater: '稍後再看',
    claimSuccess: '成功領取！請向店員出示 Smart Pass。', groupBuySuccess: '拼團已發起！將連結分享給朋友吧。', saveSuccess: '已儲存優惠。', merchantSaved: '限時優惠已成功儲存。',
    signIn: '登入', signUp: '註冊', signInBtn: '登入', signUpBtn: '建立帳戶', email: '電郵地址', password: '密碼', fullName: '全名', studentId: '學生證號碼', businessName: '商店名稱', contactPerson: '聯絡人姓名', studentRole: '👨‍🎓 學生', merchantRole: '🏪 商戶', authTitle: '歡迎回來', createAccount: '建立帳戶', authDescStudent: '登入以領取學生專屬優惠並管理你的 Smart Pass。', authDescMerchant: '登入商戶後台，建立及管理你的限時優惠。', registerDescStudent: '加入 SkipClass 解鎖離峰及惜食優惠。', registerDescMerchant: '註冊你的商店，在冷門時段吸引更多學生客流。', noAccount: '未有帳戶？', hasAccount: '已有帳戶？', loginSuccess: '成功登入！', registerSuccess: '帳戶已成功建立！',
    logout: '登出', pleaseLogin: '請先登入以領取優惠。', studentOnlyAction: '只有已認證的學生可以領取優惠，商戶無法領取。',
    aboutTitle: '關於 SkipClass HK', aboutDesc: 'SkipClass HK 旨在以快速、地區化優惠連接大學生與附近中小企。', missionTitle: '我們的使命', missionText: '我們幫助學生慳錢，同時幫助小商戶在淡時吸引更多顧客。',
    whyUsefulTitle: '為何有用', why1: '學生可更容易找到實惠的食物、飲品、影印及文具優惠。', why2: '中小企可建立限時推廣，提升本地曝光。', why3: '惜食優惠可減少校園附近的食物浪費。',
    keyFeaturesTitle: '主要功能', feature1: 'Smart Pass 學生認證', feature2: '按校園篩選', feature3: '商戶限時優惠建立功能', feature4: '拼團專屬折扣', prototypeNoteTitle: '原型說明', prototypeNoteText: '此版本為前端原型，可作為靜態網站運作，並在瀏覽器內本機儲存示範資料。',
    redeemSuccess: '兌換成功！', simulateScan: '模擬商戶掃描'
  },
  zhCN: {
    studentOnly: '学生专属认证优惠', heroTitle: '走堂 SkipClass HK', heroDesc: '告别正价！一次学生认证，解锁校园周边的低峰时段优惠、考试季特价及惜食折扣。',
    exploreDeals: '查看优惠', merchantDashboard: '商户后台', featuredLabel: '当前精选优惠', campus: '校园', distance: '距离', endsIn: '剩余时间', smartRec: '智能推荐', smartRecText: '根据你的校园位置、当前时段，以及学生热门选择为你推荐。',
    activeDeals: '进行中优惠', acrossNearby: '来自附近中小商户', studentSavings: '学生已节省', estimatedMonth: '本月预估', partnerSMEs: '合作商户', nearCampuses: '靠近香港各大学校园', flashClaims: '已领取优惠', thisWeek: '本周',
    findTitle: '找到你的下一个优惠', findDesc: '浏览附近学生折扣、低峰空桌优惠和校园热门选择。', browseAll: '查看全部优惠', dealsPageDesc: '可按校园筛选、搜索关键词，并快速领取学生优惠。', searchPlaceholder: '搜索咖啡、午餐、打印...', allDeals: '全部优惠', recommended: '为你推荐', foodRescue: '惜食优惠', dealDetails: '优惠详情',
    merchantPageTitle: '商户后台', merchantPageDesc: '创建学生限时优惠、追踪反应，并在校园附近低峰时段吸引更多顾客。', createDealForm: '创建限时优惠', dealTitle: '优惠标题', vendorName: '商户名称', category: '分类', discount: '折扣', timeRemaining: '剩余分钟', spotsLeft: '剩余名额', description: '描述', saveDeal: '保存优惠', yourDeals: '你已保存的优惠',
    studentPerks: '学生福利', perk1Title: '预算模式', perk1Text: '设定每月限额，让 App 为你推荐优惠以实现省钱最大化。', perk2Title: '拼团优惠', perk2Text: '和朋友一起买，解锁合作餐厅的额外折扣。', perk3Title: '低峰闪购', perk3Text: '当附近咖啡店有空桌时，即时抢购特价优惠。', howItWorks: '使用方式', step1: '只需验证一次学生证。', step2: '领取限时优惠并出示 Smart Pass。', step3: '中小商户在低峰时段提升客流。', footerText: '专为香港大学生和本地中小商户而设。', noDeals: '当前筛选条件下找不到优惠。', trending: '热门', viewDeal: '查看优惠', claim: '领取', startGroupBuy: '发起拼团', urgency: '紧迫程度', only: '仅剩', left: '个', studentDeal: '学生优惠', trendingNearCampus: '热门', wasteSupport: '惜食', groupBuyLabel: '拼团', offPeakLabel: '低峰', examLabel: '考试季', by: '商户', claimThis: '立即领取', saveLater: '稍后查看',
    claimSuccess: '成功领取！请向店员出示 Smart Pass。', groupBuySuccess: '拼团已发起！将链接分享给朋友吧。', saveSuccess: '优惠已保存。', merchantSaved: '限时优惠已成功保存。',
    signIn: '登录', signUp: '注册', signInBtn: '登录', signUpBtn: '创建账户', email: '邮箱地址', password: '密码', fullName: '全名', studentId: '学生证号码', businessName: '商店名称', contactPerson: '联系人姓名', studentRole: '👨‍🎓 学生', merchantRole: '🏪 商户', authTitle: '欢迎回来', createAccount: '创建账户', authDescStudent: '登录以领取学生专属优惠并管理你的 Smart Pass。', authDescMerchant: '登录商户后台，创建及管理你的限时优惠。', registerDescStudent: '加入 SkipClass 解锁低峰及惜食优惠。', registerDescMerchant: '注册你的商店，在低峰时段吸引更多学生客流。', noAccount: '还没有账户？', hasAccount: '已有账户？', loginSuccess: '登录成功！', registerSuccess: '账户已成功创建！',
    logout: '登出', pleaseLogin: '请先登录以领取优惠。', studentOnlyAction: '只有已认证的学生可以领取优惠，商户无法领取。',
    aboutTitle: '关于 SkipClass HK', aboutDesc: 'SkipClass HK 旨在通过快速、基于位置的优惠连接大学生与附近中小商户。', missionTitle: '我们的使命', missionText: '我们帮助学生省钱，也帮助小商户在低峰时段吸引更多顾客。',
    whyUsefulTitle: '为什么有用', why1: '学生可以更方便地找到实惠的食物、饮品、打印和文具优惠。', why2: '中小商户可以创建限时推广并提升本地曝光。', why3: '惜食优惠可以减少校园附近的食物浪费。', keyFeaturesTitle: '主要功能', feature1: 'Smart Pass 学生认证', feature2: '按校园筛选', feature3: '商户限时优惠创建功能', feature4: '拼团专属折扣', prototypeNoteTitle: '原型说明', prototypeNoteText: '此版本是可运行的前端原型，可作为静态网站使用，并在浏览器中本地保存示例数据。',
    redeemSuccess: '兑换成功！', simulateScan: '模拟商户扫描'
  }
};

let selectedLanguage = localStorage.getItem('campusflash_lang') || 'en';
let selectedTab = 'all';
let selectedDeal = null;
const postScanDealKey = 'skipclass_post_scan_deal_id';
const activeSmartPassDealKey = 'skipclass_active_smartpass_deal_id';
const defaultScanBaseUrl = 'https://yyangg002.github.io/skipclass';

// --- 狀態管理 (State Management) ---
function getCurrentUser() {
  try { return JSON.parse(localStorage.getItem('skipclass_user')); }
  catch(e) { return null; }
}
function loginUser(role, name) {
  localStorage.setItem('skipclass_user', JSON.stringify({ role, name }));
}
function logout() {
  localStorage.removeItem('skipclass_user');
  window.location.href = 'index.html';
}

function updateAuthUI() {
  const user = getCurrentUser();
  const desktopWrap = document.getElementById('desktopAuthWrap');
  const mobileWrap = document.getElementById('mobileAuthWrap');
  
  if (!desktopWrap || !mobileWrap) return;

  if (!user) {
    //明確設定 Login 按鈕為深色背景
    const loginHtml = `<a href="login.html" class="btn" style="background: var(--brand); color: #fff; padding: 6px 14px; border-radius: 8px; font-weight: bold;">${getText('signIn')}</a>`;
    desktopWrap.innerHTML = loginHtml;
    mobileWrap.innerHTML = loginHtml;
  } else if (user.role === 'student') {
    //明確設定 Logout 按鈕為灰色背景、深色字
    const studentHtml = `
      <button class="btn btn-outline smartPassTrigger" style="border-color: var(--brand); color: var(--brand); padding: 6px 12px; border-radius: 8px; font-weight: bold;">🎟️ Smart Pass</button>
      <button class="btn" onclick="logout()" style="background: #f1f5f9; color: var(--muted); border: 1px solid var(--line); padding: 6px 12px; border-radius: 8px;">${getText('logout')} (${user.name})</button>
    `;
    desktopWrap.innerHTML = studentHtml;
    mobileWrap.innerHTML = studentHtml;
    setupSmartPass();
  } else if (user.role === 'merchant') {
    //明確設定 Logout 按鈕為灰色背景、深色字
    const merchantHtml = `
      <a href="merchant.html" class="btn btn-outline" style="border-color: var(--brand); color: var(--brand); padding: 6px 12px; border-radius: 8px; font-weight: bold;">${getText('merchantDashboard')}</a>
      <button class="btn" onclick="logout()" style="background: #f1f5f9; color: var(--muted); border: 1px solid var(--line); padding: 6px 12px; border-radius: 8px;">${getText('logout')} (${user.name})</button>
    `;
    desktopWrap.innerHTML = merchantHtml;
    mobileWrap.innerHTML = merchantHtml;
  }
  }

// --- 基礎資料存取 ---
function getDeals() {
  const saved = localStorage.getItem('campusflash_deals');
  return saved ? JSON.parse(saved) : defaultDeals;
}
function saveDeals(deals) { localStorage.setItem('campusflash_deals', JSON.stringify(deals)); }
function getClaimCount() { return getDeals().reduce((sum, d) => sum + (Number(d.claimed) || 0), 0); }
function getMerchantCount() { return new Set(getDeals().map(d => d.vendor)).size; }
function getText(key) { return translations[selectedLanguage]?.[key] || translations.en[key] || key; }
function setActiveSmartPassDealId(id) { sessionStorage.setItem(activeSmartPassDealKey, String(id)); }
function getActiveSmartPassDealId() { return sessionStorage.getItem(activeSmartPassDealKey); }
function setPostScanRedirectDealId(id) { sessionStorage.setItem(postScanDealKey, String(id)); }
function consumePostScanRedirectDealId() {
  const id = sessionStorage.getItem(postScanDealKey);
  if (id) sessionStorage.removeItem(postScanDealKey);
  return id;
}
function getSmartPassBaseUrl() {
  return defaultScanBaseUrl;
}
function getDealIdFromUrl() {
  try {
    return new URLSearchParams(window.location.search).get('deal');
  } catch (e) {
    return null;
  }
}
function buildSmartPassQrPayload(user, deal) {
  if (!user) return 'SkipClass Smart Pass';
  // URL QR is the most reliable format for mobile camera scanners.
  const baseUrl = getSmartPassBaseUrl();
  if (baseUrl) {
    const params = new URLSearchParams({
      student: user.name,
      couponId: deal?.id ? String(deal.id) : '',
      title: deal?.title || '',
      vendor: deal?.vendor || '',
      discount: deal?.discount ? `${deal.discount}%` : '',
      campus: deal?.campus || '',
      timeLeft: deal?.minutesLeft ? `${deal.minutesLeft} min` : '',
      spotsLeft: deal?.stockLeft ? String(deal.stockLeft) : '',
      v: String(Date.now())
    });
    return `${baseUrl}/scan.html?${params.toString()}`;
  }
  // No public site URL available: use a public echo endpoint so phone scan still shows readable text.
  const params = new URLSearchParams({
    source: 'SkipClassSmartPass',
    student: user.name,
    couponId: deal?.id ? String(deal.id) : '',
    title: deal?.title || '',
    vendor: deal?.vendor || '',
    discount: deal?.discount ? `${deal.discount}%` : '',
    campus: deal?.campus || ''
  });
  return `https://httpbin.org/get?${params.toString()}`;
}

function setActiveNav() {
  const page = document.body.dataset.page;
  document.querySelectorAll('[data-nav]').forEach(a => {
    if (a.dataset.nav === page) a.classList.add('active');
  });
}

function setupMenu() {
  const btn = document.getElementById('menuBtn');
  const nav = document.getElementById('mobileNav');
  if (!btn || !nav) return;
  btn.addEventListener('click', () => nav.classList.toggle('open'));
}

function setupSmartPass() {
  const user = getCurrentUser();
  if (!user || user.role !== 'student') return; // 只有學生需要 Smart Pass

  // 1. 移除舊的彈窗 (為了確保切換語言時能重新生成)
  let oldModal = document.getElementById('smartPassModalWrap');
  if (oldModal) oldModal.remove();

  // 2. 自動在當前頁面生成新的彈窗
  const modal = document.createElement('div');
  modal.id = 'smartPassModalWrap';
  modal.style.cssText = 'display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(15,23,42,0.6); z-index:999; align-items:center; justify-content:center; backdrop-filter: blur(4px);';
  
  modal.innerHTML = `
    <div class="card" style="text-align:center; padding: 40px; max-width: 90%; width: 340px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); position: relative;">
       <h3 style="margin-top:0; color: var(--brand);">🎟️ Smart Pass</h3>
       <p class="subtle" id="spSub" style="margin-bottom: 20px;">Show this to the merchant to verify.</p>
       
       <div id="spQrWrap" style="width:200px; height:200px; background:#fff; border: 2px solid var(--line); border-radius: 16px; margin:0 auto 20px; display:flex; align-items:center; justify-content:center; overflow: hidden;">
        <img id="spQrImage" src="https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=SkipClass_${user.name}" alt="QR Code" style="width: 200px; height: 200px;">
       </div>

       <div id="spSuccessWrap" style="display:none; height:200px; margin:0 auto 20px; flex-direction:column; align-items:center; justify-content:center; animation: fadeIn 0.3s ease;">
         <div style="font-size: 64px; margin-bottom: 10px;">✅</div>
         <h2 style="color: #16a34a; margin: 0;">${getText('redeemSuccess')}</h2>
       </div>

       <div style="background: var(--green); color: #166534; padding: 8px; border-radius: 8px; margin-bottom: 20px; font-weight: bold; font-size: 0.9rem;">
         ✓ Active Student (${user.name})
       </div>

       <button class="btn btn-primary" id="simScanBtn" style="width: 100%; margin-bottom: 10px;">🔍 ${getText('simulateScan')}</button>
       <button class="btn btn-outline" id="closeModalBtn" style="width: 100%;">Close</button>
    </div>
  `;
  document.body.appendChild(modal);

  // 3. 綁定按鈕與互動邏輯
  const closeBtn = document.getElementById('closeModalBtn');
  const simScanBtn = document.getElementById('simScanBtn');
  const spQrWrap = document.getElementById('spQrWrap');
  const spQrImage = document.getElementById('spQrImage');
  const spSuccessWrap = document.getElementById('spSuccessWrap');
  const spSub = document.getElementById('spSub');
  const refreshSmartPassQr = () => {
    if (!spQrImage) return;
    const activeDealId = getActiveSmartPassDealId();
    const activeDeal = getDeals().find(d => String(d.id) === String(activeDealId));
    const payload = buildSmartPassQrPayload(user, activeDeal);
    spQrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(payload)}`;
  };
  refreshSmartPassQr();

  // 綁定導覽列上的 "🎟️ Smart Pass" 按鈕
  document.querySelectorAll('.smartPassTrigger').forEach(btn => {
    btn.onclick = () => {
      // 每次打開時，重置回 QR Code 狀態
      refreshSmartPassQr();
      spQrWrap.style.display = 'flex';
      spSuccessWrap.style.display = 'none';
      simScanBtn.style.display = 'block';
      spSub.textContent = 'Show this to the merchant to verify.';
      modal.style.display = 'flex';
    };
  });

  // 綁定模擬掃描按鈕 (展示兌換成功)
  simScanBtn.onclick = () => {
    const activeDealId = getActiveSmartPassDealId();
    spQrWrap.style.display = 'none';          // 隱藏 QR Code
    simScanBtn.style.display = 'none';        // 隱藏掃描按鈕
    spSuccessWrap.style.display = 'flex';     // 顯示大勾勾和兌換成功
    spSub.textContent = 'Verification complete!';
    if (activeDealId) setPostScanRedirectDealId(activeDealId);
    setTimeout(() => {
      modal.style.display = 'none';
      if (activeDealId) window.location.href = 'deals.html';
    }, 1200);
  };

  // 綁定關閉事件
  closeBtn.onclick = () => modal.style.display = 'none';
  modal.onclick = (e) => { if(e.target === modal) modal.style.display = 'none'; };
}
function setupLanguage() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === selectedLanguage);
    btn.addEventListener('click', () => {
      selectedLanguage = btn.dataset.lang;
      localStorage.setItem('campusflash_lang', selectedLanguage);
      applyTranslations();
      updateAuthUI(); // 切換語言時也要更新按鈕文字
      initPage();
    });
  });
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = getText(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.placeholder = getText(el.dataset.i18nPlaceholder); });
}

function categoryLabel(cat) {
  const map = {
    en: { Drinks: 'Drinks', Food: 'Food', Printing: 'Printing', Supplies: 'Supplies' },
    zhHK: { Drinks: '飲品', Food: '食物', Printing: '影印', Supplies: '文具' },
    zhCN: { Drinks: '饮品', Food: '食物', Printing: '打印', Supplies: '文具' },
  };
  return map[selectedLanguage][cat] || cat;
}

function dealCardHTML(deal) {
  const urgency = Math.max(5, Math.min(100, (Number(deal.minutesLeft) / 60) * 100));
  const actionText = deal.groupDeal ? getText('startGroupBuy') : getText('claim');
  const actionClass = deal.groupDeal ? 'group-buy-deal' : 'claim-deal';
  const actionBtnClass = deal.groupDeal ? 'btn-secondary' : 'btn-outline';
  
  return `
    <div class="card deal-card" data-id="${deal.id}">
      <div class="deal-top">
        <div>
          <div class="deal-badges">
            <span class="badge-pill">${categoryLabel(deal.category)}</span>
            ${deal.trending ? `<span class="badge-pill badge-trending">${getText('trendingNearCampus')}</span>` : ''}
            ${deal.sustainable ? `<span class="badge-pill badge-save">${getText('wasteSupport')}</span>` : ''}
            ${deal.groupDeal ? `<span class="badge-pill" style="background:var(--brand);color:#fff;">${getText('groupBuyLabel')}</span>` : ''}
            ${deal.offPeak ? `<span class="badge-pill" style="background:#fef08a;">${getText('offPeakLabel')}</span>` : ''}
            ${deal.examSurvival ? `<span class="badge-pill" style="background:#fed7aa;">${getText('examLabel')}</span>` : ''}
          </div>
          <h3>${deal.title}</h3>
          <p class="meta">${deal.vendor}</p>
        </div>
        <div>
          <div class="deal-discount">-${deal.discount}%</div>
          <small class="subtle">${getText('studentDeal')}</small>
        </div>
      </div>
      <p>${deal.description}</p>
      <div class="deal-meta"><span>${deal.campus} · ${deal.distance}</span><span>${deal.minutesLeft} min</span></div>
      <div class="urgency-row"><span>${getText('urgency')}</span><span>${getText('only')} ${deal.stockLeft} ${getText('left')}</span></div>
      <div class="progress-bar"><div class="progress-fill" style="width:${urgency}%"></div></div>
      <div class="deal-actions">
        <button class="btn btn-primary view-deal" data-id="${deal.id}">${getText('viewDeal')}</button>
        <button class="btn ${actionBtnClass} ${actionClass}" data-id="${deal.id}" ${deal.groupDeal ? 'style="background:var(--brand);color:#fff;"' : ''}>${actionText}</button>
      </div>
    </div>`;
}

// --- 頁面渲染邏輯 ---
function renderHomePage() {
  const deals = getDeals();
  const homeDeals = document.getElementById('homeDeals');
  if (!homeDeals) return;
  selectedDeal = deals[0] || null;
  homeDeals.innerHTML = deals.slice(0, 3).map(dealCardHTML).join('');
  bindDealButtons();
  updateFeatured(selectedDeal);
  if(document.getElementById('statDeals')) document.getElementById('statDeals').textContent = deals.length;
  if(document.getElementById('statMerchants')) document.getElementById('statMerchants').textContent = getMerchantCount();
  if(document.getElementById('statClaims')) document.getElementById('statClaims').textContent = getClaimCount();
}

function updateFeatured(deal) {
  if (!deal || !document.getElementById('featuredTitle')) return;
  document.getElementById('featuredTitle').textContent = deal.title;
  document.getElementById('featuredDiscount').textContent = `-${deal.discount}%`;
  document.getElementById('featuredCampus').textContent = deal.campus;
  document.getElementById('featuredDistance').textContent = deal.distance;
  document.getElementById('featuredTime').textContent = `${deal.minutesLeft} min`;
}

function renderDealsPage() {
  const container = document.getElementById('dealsContainer');
  const detailContent = document.getElementById('detailContent');
  if (!container || !detailContent) return;

  function draw() {
    const query = (document.getElementById('searchInput')?.value || '').toLowerCase();
    const campus = document.getElementById('campusFilter')?.value || 'All';
    const category = document.getElementById('categoryFilter')?.value || 'All';
    let deals = getDeals().filter(deal => {
      const q = `${deal.title} ${deal.vendor} ${deal.category}`.toLowerCase();
      return q.includes(query) && (campus === 'All' || deal.campus === campus) && (category === 'All' || deal.category === category);
    });
    if (selectedTab === 'recommended') deals = deals.filter(d => d.recommended);
    if (selectedTab === 'savefood') deals = deals.filter(d => d.sustainable);
    
    if (!deals.length) {
      container.innerHTML = `<div class="empty-state">${getText('noDeals')}</div>`;
      detailContent.innerHTML = ''; return;
    }
    const redirectDealId = consumePostScanRedirectDealId() || getDealIdFromUrl();
    if (redirectDealId) {
      selectedDeal = deals.find(d => String(d.id) === String(redirectDealId)) || selectedDeal;
    }
    selectedDeal = deals.find(d => d.id === selectedDeal?.id) || deals[0];
    container.innerHTML = deals.map(dealCardHTML).join('');
    renderDetail(selectedDeal);
    bindDealButtons();
  }

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.onclick = () => {
      selectedTab = btn.dataset.tab;
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active'); draw();
    };
  });
  document.getElementById('searchInput')?.addEventListener('input', draw);
  document.getElementById('campusFilter')?.addEventListener('change', draw);
  document.getElementById('categoryFilter')?.addEventListener('change', draw);
  draw();
}

function renderDetail(deal) {
  const detailContent = document.getElementById('detailContent');
  if (!detailContent || !deal) return;
  detailContent.innerHTML = `
    <div class="deal-badges">
      <span class="badge-pill">${categoryLabel(deal.category)}</span>
      ${deal.groupDeal ? `<span class="badge-pill" style="background:var(--brand);color:#fff;">${getText('groupBuyLabel')}</span>` : ''}
    </div>
    <h3>${deal.title}</h3>
    <p class="subtle">${getText('by')} ${deal.vendor}</p>
    <div class="featured-discount">-${deal.discount}%</div>
    <p>${deal.description}</p>
    <div class="detail-boxes">
      <div class="detail-box"><span>${getText('campus')}</span><strong>${deal.campus}</strong></div>
      <div class="detail-box"><span>${getText('timeRemaining')}</span><strong>${deal.minutesLeft} min</strong></div>
      <div class="detail-box"><span>${getText('spotsLeft')}</span><strong>${deal.stockLeft}</strong></div>
    </div>
    <div class="detail-actions">
      <button class="btn btn-primary ${deal.groupDeal ? 'group-buy-deal' : 'claim-deal'}" data-id="${deal.id}">${deal.groupDeal ? getText('startGroupBuy') : getText('claimThis')}</button>
    </div>`;
  bindDealButtons();
}

// --- 權限防護：檢查使用者狀態 ---
function claimDeal(id, successMsgKey) {
  const user = getCurrentUser();
  
  // 防護 1: 未登入
  if (!user) {
    alert(getText('pleaseLogin'));
    window.location.href = 'login.html';
    return;
  }
  
  // 防護 2: 商戶不能領優惠
  if (user.role !== 'student') {
    alert(getText('studentOnlyAction'));
    return;
  }

  const deals = getDeals();
  const idx = deals.findIndex(d => String(d.id) === String(id));
  if (idx === -1) return;
  const claimedDeal = deals[idx];
  if (deals[idx].stockLeft > 0) deals[idx].stockLeft -= 1;
  deals[idx].claimed = (Number(deals[idx].claimed) || 0) + 1;
  saveDeals(deals);
  setActiveSmartPassDealId(claimedDeal.id);
  
  alert(getText(successMsgKey));
  const modal = document.getElementById('smartPassModalWrap');
  if(modal) modal.style.display = 'flex';
  initPage();
}

function bindDealButtons() {
  document.querySelectorAll('.view-deal').forEach(btn => {
    btn.onclick = () => {
      const found = getDeals().find(d => String(d.id) === String(btn.dataset.id));
      if (!found) return; selectedDeal = found;
      if (document.body.dataset.page === 'home') updateFeatured(found);
      if (document.body.dataset.page === 'deals') renderDetail(found);
    };
  });
  document.querySelectorAll('.claim-deal').forEach(btn => btn.onclick = () => claimDeal(btn.dataset.id, 'claimSuccess'));
  document.querySelectorAll('.group-buy-deal').forEach(btn => btn.onclick = () => claimDeal(btn.dataset.id, 'groupBuySuccess'));
}

// --- 登入頁面與商戶邏輯 ---
function renderLoginPage() {
  const roleStudentBtn = document.getElementById('roleStudentBtn');
  const roleMerchantBtn = document.getElementById('roleMerchantBtn');
  const studentFields = document.getElementById('studentFields');
  const merchantFields = document.getElementById('merchantFields');
  const formLogin = document.getElementById('loginForm');
  const formRegister = document.getElementById('registerForm'); // 找回被遺漏的註冊表單
  
  const tabLogin = document.getElementById('tabLogin');
  const tabRegister = document.getElementById('tabRegister');
  const linkToRegister = document.getElementById('linkToRegister');
  const linkToLogin = document.getElementById('linkToLogin');
  const loginDesc = document.getElementById('loginDesc');
  const registerDesc = document.getElementById('registerDesc');

  let currentRole = 'student';

  if (!formLogin || !formRegister) return;

  // 1. 處理 Sign In / Sign Up 切換
  function showRegister() {
    tabLogin.classList.remove('active'); tabRegister.classList.add('active');
    formLogin.classList.remove('active'); formRegister.classList.add('active');
  }
  function showLogin() {
    tabRegister.classList.remove('active'); tabLogin.classList.add('active');
    formRegister.classList.remove('active'); formLogin.classList.add('active');
  }
  if(tabRegister) tabRegister.onclick = showRegister;
  if(linkToRegister) linkToRegister.onclick = showRegister;
  if(tabLogin) tabLogin.onclick = showLogin;
  if(linkToLogin) linkToLogin.onclick = showLogin;

  // 2. 處理 學生 / 商戶 身份切換
  function switchRole(role) {
    currentRole = role;
    if (role === 'student') {
      roleStudentBtn.classList.add('active'); roleMerchantBtn.classList.remove('active');
      studentFields.classList.add('active'); merchantFields.classList.remove('active');
      if(loginDesc) loginDesc.setAttribute('data-i18n', 'authDescStudent');
      if(registerDesc) registerDesc.setAttribute('data-i18n', 'registerDescStudent');
    } else {
      roleMerchantBtn.classList.add('active'); roleStudentBtn.classList.remove('active');
      merchantFields.classList.add('active'); studentFields.classList.remove('active');
      if(loginDesc) loginDesc.setAttribute('data-i18n', 'authDescMerchant');
      if(registerDesc) registerDesc.setAttribute('data-i18n', 'registerDescMerchant');
    }
    applyTranslations();
  }
  if(roleStudentBtn) roleStudentBtn.onclick = () => switchRole('student');
  if(roleMerchantBtn) roleMerchantBtn.onclick = () => switchRole('merchant');

  // 3. 表單提交模擬，並儲存登入狀態
  formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = formLogin.querySelector('input[type="email"]').value;
    const displayName = emailInput.split('@')[0]; // 擷取 email 前綴當作名稱
    loginUser(currentRole, displayName);
    alert(getText('loginSuccess'));
    window.location.href = currentRole === 'student' ? 'index.html' : 'merchant.html';
  });

  // 補回註冊表單的提交流程
  formRegister.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = formRegister.querySelector('input[type="email"]').value;
    const displayName = emailInput.split('@')[0]; 
    loginUser(currentRole, displayName); // 註冊成功後自動登入
    alert(getText('registerSuccess'));
    window.location.href = currentRole === 'student' ? 'index.html' : 'merchant.html';
  });
}

function renderMerchantPage() {
  // 防護: 確保是商戶登入才能看後台內容 (簡化處理)
  const user = getCurrentUser();
  if (!user || user.role !== 'merchant') {
    alert('Please login as a Merchant to access this dashboard.');
    window.location.href = 'login.html';
    return;
  }

  const form = document.getElementById('merchantForm');
  const list = document.getElementById('merchantDealsList');
  if (!form || !list) return;

  function drawMerchantDeals() {
    const deals = getDeals();
    document.getElementById('merchantDealCount').textContent = deals.length;
    document.getElementById('merchantClaimCount').textContent = getClaimCount();
    list.innerHTML = deals.slice().reverse().map(d => `<div class="merchant-item"><h4>${d.title}</h4><small>${d.vendor} · ${d.campus} · -${d.discount}%</small></div>`).join('');
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const deals = getDeals();
    deals.push({
      id: Date.now(), title: fd.get('title'), vendor: fd.get('vendor'), campus: fd.get('campus'), category: fd.get('category'),
      distance: fd.get('distance'), discount: Number(fd.get('discount')), minutesLeft: Number(fd.get('minutesLeft')),
      stockLeft: Number(fd.get('stockLeft')), description: fd.get('description'), recommended: fd.get('recommended') === 'on',
      trending: fd.get('trending') === 'on', sustainable: fd.get('sustainable') === 'on', offPeak: false, groupDeal: false, examSurvival: false, claimed: 0,
    });
    saveDeals(deals); form.reset();
    document.getElementById('merchantMessage').textContent = getText('merchantSaved');
    drawMerchantDeals(); setTimeout(() => { document.getElementById('merchantMessage').textContent = ''; }, 2500);
  });
  drawMerchantDeals();
}

function initPage() {
  applyTranslations();
  updateAuthUI(); // 初始化時設定導覽列狀態
  setActiveNav();
  setupLanguage();
  setupMenu();
  const page = document.body.dataset.page;
  if (page === 'home') renderHomePage();
  if (page === 'deals') renderDealsPage();
  if (page === 'merchant') renderMerchantPage();
  if (page === 'login') renderLoginPage();
}

document.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem('campusflash_deals')) saveDeals(defaultDeals);
  initPage();
});