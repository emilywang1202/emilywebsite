// 个人信息数据
const personalInfo = {
    name: "Emily 艾米粒",
    intro: "纯血文科生，勇闯AI世界",
    tags: [
        { text: "INTJ", color: "primary" },
        { text: "好奇心驱动", color: "secondary" },
        { text: "Marketing打工人", color: "primary" },
        { text: "心理咨询师养成中", color: "secondary" },
        { text: "AI Creator-用AI工具解决实际问题", color: "gradient" }
    ]
};

// 职业经历数据
const timelineData = [
    {
        date: '2025',
        title: 'AI Creator 探索中',
        description: '用AI工具创造性解决问题',
        type: 'future'
    },
    {
        date: '2024',
        title: '临床心理学硕士在读',
        description: '探索AI+心理的应用',
        type: 'education'
    },
    {
        date: '2019-2024',
        title: '「创业公司历险记」',
        description: '电动摩托车创业公司',
        type: 'work'
    },
    {
        date: '2017-2019',
        title: '「车主新生活方式设计师」',
        description: '蔚来汽车',
        type: 'work'
    },
    {
        date: '2015-2019',
        title: '「PPT纺织女工」',
        description: 'PR Agency',
        type: 'work'
    }
];

// 教育经历数据
const educationData = [
    {
        school: "北京大学",
        logo: "/images/教育经历logo/北京大学.webp",
        degree: "临床心理学硕士"
    },
    {
        school: "纽约大学",
        logo: "/images/教育经历logo/纽约大学.webp",
        degree: "公共关系与企业传播"
    },
    {
        school: "对外经贸大学",
        logo: "/images/教育经历logo/对外经贸大学.webp",
        degree: "市场营销"
    }
];

// 旅行数据
const travelData = {
    cities: [
        { name: "香港", coords: [22.3193, 114.1694] },
        { name: "首尔", coords: [37.5665, 126.9780], country: "韩国" },
        { name: "台北", coords: [25.0330, 121.5654], country: "台湾" },
        { name: "东京", coords: [35.6762, 139.6503], country: "日本" },
        { name: "曼谷", coords: [13.7563, 100.5018], country: "泰国" },
        { name: "新加坡", coords: [1.3521, 103.8198] },
        { name: "雅加达", coords: [-6.2088, 106.8456], country: "印尼" },
        { name: "迪拜", coords: [25.2048, 55.2708], country: "阿联酋" },
        { name: "阿布扎比", coords: [24.4539, 54.3773] },
        { name: "柏林", coords: [52.5200, 13.4050], country: "德国" },
        { name: "巴黎", coords: [48.8566, 2.3522], country: "法国" },
        { name: "阿姆斯特丹", coords: [52.3676, 4.9041], country: "荷兰" },
        { name: "布鲁塞尔", coords: [50.8503, 4.3517], country: "比利时" },
        { name: "马德里", coords: [40.4168, -3.7038], country: "西班牙" },
        { name: "伦敦", coords: [51.5074, -0.1278], country: "英国" },
        { name: "墨西哥城", coords: [19.4326, -99.1332], country: "墨西哥" },
        // 美国城市
        { name: "纽约", coords: [40.7128, -74.0060], country: "美国" },
        { name: "大西洋城", coords: [39.3643, -74.4229], country: "美国" },
        { name: "新泽西", coords: [40.0583, -74.4057], country: "美国" },
        { name: "芝加哥", coords: [41.8781, -87.6298], country: "美国" },
        { name: "迈阿密", coords: [25.7617, -80.1918], country: "美国", state: "佛罗里达" },
        { name: "安克雷奇", coords: [61.2181, -149.9003], country: "美国", state: "阿拉斯加" },
        { name: "西雅图", coords: [47.6062, -122.3321], country: "美国" },
        { name: "旧金山", coords: [37.7749, -122.4194], country: "美国", state: "加州" },
        { name: "拉斯维加斯", coords: [36.1699, -115.1398], country: "美国", state: "内华达州" }
    ]
};

// 运动数据
const sportsData = [
    { name: "游泳", level: 80, icon: "🏊‍♀️" },
    { name: "壁球", level: 70, icon: "🏸" },
    { name: "冲浪", level: 60, icon: "🏄‍♀️" },
    { name: "健身", level: 75, icon: "💪" }
];

// 摄影作品数据
const photographyData = [
    { url: "/images/摄影作品/DSCF5261大.jpeg", description: "摄影作品" },
    { url: "/images/摄影作品/DSCF5260大.jpeg", description: "摄影作品" },
    { url: "/images/摄影作品/DSCF5254大.jpeg", description: "摄影作品" },
    { url: "/images/摄影作品/DSCF5250大.jpeg", description: "摄影作品" },
    { url: "/images/摄影作品/DSCF5224大.jpeg", description: "摄影作品" },
    { url: "/images/摄影作品/DSCF5144大.jpeg", description: "摄影作品" },
    { url: "/images/摄影作品/DSCF5117大.jpeg", description: "摄影作品" },
    { url: "/images/摄影作品/DSCF5109大.jpeg", description: "摄影作品" },
    { url: "/images/摄影作品/DSCF4851大.jpeg", description: "摄影作品" },
    { url: "/images/摄影作品/DSCF4799大.jpeg", description: "摄影作品" },
    { url: "/images/摄影作品/DSCF4793大.jpeg", description: "摄影作品" },
    { url: "/images/摄影作品/DSCF4722大.jpeg", description: "摄影作品" },
    { url: "/images/摄影作品/DSCF4596大.jpeg", description: "摄影作品" },
    { url: "/images/摄影作品/DSCF4583大.jpeg", description: "摄影作品" },
    { url: "/images/摄影作品/DSCF4575大.jpeg", description: "摄影作品" },
    { url: "/images/摄影作品/DSCF4574大.jpeg", description: "摄影作品" },
    { url: "/images/摄影作品/DSCF4559大.jpeg", description: "摄影作品" },
    { url: "/images/摄影作品/IMG_6025大.jpeg", description: "摄影作品" },
    { url: "/images/摄影作品/IMG_5605大.jpeg", description: "摄影作品" },
    { url: "/images/摄影作品/IMG_5598大.jpeg", description: "摄影作品" },
    { url: "/images/摄影作品/IMG_5499大.jpeg", description: "摄影作品" }
];

// 示例数据
const hobbiesData = [
    {
        image: 'https://via.placeholder.com/800x400',
        description: '热爱摄影，记录生活中的美好瞬间'
    },
    {
        image: 'https://via.placeholder.com/800x400',
        description: '喜欢旅行，探索世界的每个角落'
    }
];

const booksData = [
    {
        cover: 'https://via.placeholder.com/200x300',
        title: '深入理解计算机系统',
        author: 'Randal E. Bryant',
        review: '一本非常棒的计算机基础书籍'
    },
    {
        cover: 'https://via.placeholder.com/200x300',
        title: '算法导论',
        author: 'Thomas H. Cormen',
        review: '经典的算法教材'
    }
];

// 访问统计功能
function initVisitorCount() {
    try {
        const countElement = document.getElementById('visitor-count');
        const countKey = 'page_visits';
        
        // 从localStorage获取访问次数
        let count = parseInt(localStorage.getItem(countKey)) || 0;
        count += 1;
        
        // 更新访问次数
        localStorage.setItem(countKey, count);
        countElement.textContent = `访问量：${count}`;
    } catch (error) {
        console.error('初始化访问统计失败:', error);
    }
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    console.log('页面加载开始');
    
    try {
        // 初始化访问统计
        initVisitorCount();
        console.log('访问统计初始化完成');

        // 渲染个人信息
        renderPersonalInfo();
        console.log('个人信息渲染完成');

        // 渲染时间轴
        renderTimeline();
        console.log('时间轴渲染完成');

        // 渲染兴趣部分
        renderInterests();
        console.log('兴趣部分渲染完成');

        // 初始化动画
        initFadeInAnimation();
        console.log('动画初始化完成');

        // 隐藏加载状态
        const loading = document.getElementById('loading');
        if (loading) {
            loading.classList.add('hidden');
            console.log('加载状态隐藏完成');
        }

        console.log('页面加载完成');
    } catch (error) {
        console.error('初始化失败:', error);
        const loading = document.getElementById('loading');
        if (loading) {
            loading.innerHTML = '<div class="text-xl text-red-500">页面加载失败，请刷新重试</div>';
        }
    }
});

// 初始化淡入动画
function initFadeInAnimation() {
    try {
        const fadeElements = document.querySelectorAll('.fade-in');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        fadeElements.forEach(element => observer.observe(element));
    } catch (error) {
        console.error('初始化动画失败:', error);
    }
}

// 渲染个人信息
function renderPersonalInfo() {
    try {
        // 更新姓名
        document.getElementById('name').textContent = personalInfo.name;
        // 更新介绍
        document.getElementById('intro').textContent = personalInfo.intro;
        
        // 更新标签
        const tagsContainer = document.getElementById('tags');
        tagsContainer.innerHTML = personalInfo.tags.map(tag => {
            let colorClass = '';
            switch(tag.color) {
                case 'primary':
                    colorClass = 'from-primary-100 to-primary-200 hover:from-primary-200 hover:to-primary-300';
                    break;
                case 'secondary':
                    colorClass = 'from-secondary-100 to-secondary-200 hover:from-secondary-200 hover:to-secondary-300';
                    break;
                case 'gradient':
                    colorClass = 'from-primary-100 to-secondary-100 hover:from-primary-200 hover:to-secondary-200';
                    break;
            }
            return `<span class="px-4 py-2 bg-gradient-to-r ${colorClass} rounded-full transition-all cursor-default shadow-sm">${tag.text}</span>`;
        }).join('');
    } catch (error) {
        console.error('渲染个人信息失败:', error);
    }
}

// 渲染时间轴
function renderTimeline() {
    console.log('开始渲染时间轴');
    
    const timeline = document.getElementById('timeline');
    if (!timeline) {
        console.error('找不到时间轴容器');
        return;
    }
    
    // 清空现有内容
    timeline.innerHTML = '';
    
    // 添加职业旅程标题
    const careerTitle = document.createElement('h3');
    careerTitle.className = 'text-2xl font-semibold mb-12 text-center text-primary-600';
    careerTitle.textContent = '职业旅程';
    timeline.appendChild(careerTitle);

    // 创建时间轴容器
    const timelineContainer = document.createElement('div');
    timelineContainer.className = 'relative px-4';

    // 添加中心线
    const centerLine = document.createElement('div');
    centerLine.className = 'absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary-200 to-secondary-200 h-full rounded-full';
    timelineContainer.appendChild(centerLine);

    console.log('开始渲染时间轴项目，数量:', timelineData.length);

    // 渲染时间轴内容
    timelineData.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = `relative flex items-center mb-16 fade-in ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`;
        
        // 根据类型选择不同的样式
        let typeColor = '';
        let iconClass = '';
        let bgColor = '';
        switch(item.type) {
            case 'future':
                typeColor = 'text-secondary-500';
                iconClass = 'fas fa-rocket';
                bgColor = 'bg-secondary-100';
                break;
            case 'education':
                typeColor = 'text-amber-500';
                iconClass = 'fas fa-graduation-cap';
                bgColor = 'bg-amber-50';
                break;
            case 'work':
                typeColor = 'text-primary-500';
                iconClass = 'fas fa-briefcase';
                bgColor = 'bg-primary-100';
                break;
        }
        
        timelineItem.innerHTML = `
            <div class="w-2/12 flex ${index % 2 === 0 ? 'justify-end pr-8' : 'justify-start pl-8'}">
                <span class="text-sm font-semibold ${typeColor} bg-white px-3 py-1.5 rounded-full shadow-sm whitespace-nowrap">${item.date}</span>
            </div>
            <div class="w-1/12 flex justify-center relative">
                <div class="w-10 h-10 rounded-full ${bgColor} flex items-center justify-center ${typeColor} relative z-10 shadow-lg">
                    <i class="${iconClass}"></i>
                </div>
            </div>
            <div class="w-8/12 flex ${index % 2 === 0 ? 'justify-start pl-8' : 'justify-end pr-8'}">
                <div class="glass-card p-6 rounded-xl hover:shadow-lg transition-all transform hover:-translate-y-1 w-full">
                    <h3 class="text-xl font-semibold mb-2 ${typeColor}">${item.title}</h3>
                    <p class="text-gray-600">${item.description}</p>
                </div>
            </div>
        `;
        
        timelineContainer.appendChild(timelineItem);
        console.log('已渲染时间轴项目:', item.title);
    });

    timeline.appendChild(timelineContainer);

    // 添加教育经历标题
    const educationTitle = document.createElement('h3');
    educationTitle.className = 'text-2xl font-semibold my-16 text-center text-primary-600';
    educationTitle.textContent = '教育经历';
    timeline.appendChild(educationTitle);

    // 渲染教育经历卡片
    const educationContainer = document.createElement('div');
    educationContainer.className = 'flex justify-center gap-8 flex-wrap';
    
    console.log('开始渲染教育经历，数量:', educationData.length);

    // 确保教育经历数据存在
    if (educationData && educationData.length > 0) {
        educationData.forEach(edu => {
            const eduCard = document.createElement('div');
            eduCard.className = 'glass-card p-6 rounded-xl w-64 text-center fade-in hover:shadow-lg transition-all transform hover:-translate-y-1';
            eduCard.innerHTML = `
                <div class="w-32 h-32 mx-auto mb-4 rounded-full bg-white p-4 flex items-center justify-center">
                    <img src="${edu.logo}" alt="${edu.school}" class="w-full h-full object-contain"
                         onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22150%22 height=%22150%22><rect width=%22150%22 height=%22150%22 fill=%22%23f3f4f6%22/></svg>'">
                </div>
                <h3 class="text-lg font-semibold text-primary-600">${edu.school}</h3>
                <p class="text-sm text-gray-600 mt-2">${edu.degree}</p>
            `;
            educationContainer.appendChild(eduCard);
            console.log('已渲染教育经历:', edu.school);
        });
    } else {
        console.error('教育经历数据不存在或为空');
    }
    
    timeline.appendChild(educationContainer);
    console.log('时间轴渲染完成');
}

// 渲染旅行经历
function renderTravel() {
    try {
        const container = document.createElement('div');
        container.className = 'mb-20';
        container.innerHTML = `
            <h2 class="text-3xl font-bold mb-12 text-center gradient-text">旅行足迹</h2>
            <div class="glass-card p-6 rounded-xl">
                <div id="travel-map" class="w-full h-[500px]"></div>
            </div>
        `;

        // 初始化地图
        setTimeout(() => {
            try {
                const mapContainer = document.getElementById('travel-map');
                if (!mapContainer) {
                    console.error('找不到地图容器');
                    return;
                }

                console.log('开始初始化地图');
                const map = L.map('travel-map', {
                    center: [35, 105],
                    zoom: 3,
                    minZoom: 2,
                    maxBounds: [[-90, -180], [90, 180]],
                    maxBoundsViscosity: 1.0
                });
                
                console.log('添加地图图层');
                // 使用 CartoDB 的地图图层
                L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
                    attribution: '© OpenStreetMap contributors, © CARTO',
                    subdomains: 'abcd',
                    maxZoom: 19
                }).addTo(map);

                console.log('开始添加标记，城市数量:', travelData.cities.length);
                // 添加自定义标记
                travelData.cities.forEach(city => {
                    // 创建自定义图标
                    const icon = L.divIcon({
                        className: 'bg-transparent',
                        html: `<div class="w-4 h-4 bg-orange-400 rounded-full shadow-lg shadow-orange-400/50 pulse-animation"></div>`,
                        iconSize: [16, 16],
                        iconAnchor: [8, 8]
                    });

                    const marker = L.marker(city.coords, { icon }).addTo(map);
                    
                    // 创建自定义弹出内容
                    let popupContent = city.name;
                    if (city.country === "美国" && city.state) {
                        popupContent = `${city.name}（${city.state}）`;
                    } else if (city.country) {
                        popupContent = `${city.name}（${city.country}）`;
                    }
                    
                    // 自定义弹出窗口样式
                    const popup = L.popup({
                        className: 'custom-popup',
                        closeButton: false,
                        offset: [0, -8]
                    }).setContent(`
                        <div class="px-3 py-2 text-sm font-medium text-gray-700">
                            ${popupContent}
                        </div>
                    `);
                    
                    marker.bindPopup(popup);
                    console.log('已添加标记:', popupContent);
                });

                // 适应所有标记的视图
                const bounds = L.latLngBounds(travelData.cities.map(city => city.coords));
                map.fitBounds(bounds, { padding: [50, 50] });

                console.log('地图初始化完成');
            } catch (error) {
                console.error('地图初始化失败:', error);
            }
        }, 1000); // 增加延迟时间到1秒

        return container;
    } catch (error) {
        console.error('渲染旅行经历失败:', error);
        return null;
    }
}

// 渲染运动爱好
function renderSports() {
    try {
        const container = document.createElement('div');
        container.className = 'mb-20';
        container.innerHTML = `
            <h2 class="text-3xl font-bold mb-12 text-center gradient-text">运动爱好</h2>
            <div class="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                ${sportsData.map(sport => `
                    <div class="glass-card p-6 rounded-xl fade-in text-center">
                        <div class="text-6xl mb-4">${sport.icon}</div>
                        <h3 class="text-lg font-semibold text-primary-600">${sport.name}</h3>
                    </div>
                `).join('')}
            </div>
        `;
        return container;
    } catch (error) {
        console.error('渲染运动爱好失败:', error);
        return null;
    }
}

// 渲染摄影作品
function renderPhotography() {
    try {
        const container = document.createElement('div');
        container.className = 'mb-20';
        
        // 计算总页数
        const itemsPerPage = 6;
        const totalPages = Math.ceil(photographyData.length / itemsPerPage);
        
        container.innerHTML = `
            <h2 class="text-3xl font-bold mb-6 text-center gradient-text">摄影作品</h2>
            <div class="flex justify-center gap-4 mb-12">
                <span class="px-4 py-2 bg-gradient-to-r from-primary-100 to-primary-200 hover:from-primary-200 hover:to-primary-300 rounded-full transition-all cursor-pointer shadow-sm">云彩收集</span>
                <span class="px-4 py-2 bg-gradient-to-r from-secondary-100 to-secondary-200 hover:from-secondary-200 hover:to-secondary-300 rounded-full transition-all cursor-pointer shadow-sm">日落收集</span>
                <span class="px-4 py-2 bg-gradient-to-r from-amber-100 to-amber-200 hover:from-amber-200 hover:to-amber-300 rounded-full transition-all cursor-pointer shadow-sm">城市建筑</span>
            </div>
            <div class="max-w-6xl mx-auto relative">
                <div class="carousel-container overflow-hidden">
                    <div class="carousel-track flex transition-transform duration-500" style="transform: translateX(0);">
                        ${Array.from({ length: totalPages }, (_, pageIndex) => `
                            <div class="carousel-page w-full flex-shrink-0">
                                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    ${photographyData
                                        .slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage)
                                        .map(image => `
                                            <div class="glass-card rounded-xl overflow-hidden fade-in group">
                                                <div class="relative">
                                                    <img src="${image.url}" alt="${image.description}" 
                                                         class="w-full aspect-[4/3] object-cover object-center transition-transform group-hover:scale-105"
                                                         style="image-rendering: -webkit-optimize-contrast; image-rendering: crisp-edges;">
                                                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                                </div>
                                            </div>
                                        `).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <button class="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-white/80 hover:bg-white text-primary-500 p-3 rounded-full shadow-lg transition-all z-10" onclick="prevPage()">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <button class="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-white/80 hover:bg-white text-primary-500 p-3 rounded-full shadow-lg transition-all z-10" onclick="nextPage()">
                    <i class="fas fa-chevron-right"></i>
                </button>
                <div class="flex justify-center gap-2 mt-6">
                    ${Array.from({ length: totalPages }, (_, i) => `
                        <button class="w-2 h-2 rounded-full bg-primary-200 hover:bg-primary-400 transition-colors carousel-dot" data-page="${i}"></button>
                    `).join('')}
                </div>
            </div>
        `;

        // 添加轮播控制脚本
        const script = document.createElement('script');
        script.textContent = `
            let currentPage = 0;
            const totalPages = ${totalPages};
            
            function updateCarousel() {
                const track = document.querySelector('.carousel-track');
                if (track) {
                    track.style.transform = \`translateX(-\${currentPage * 100}%)\`;
                }
                // 更新指示点
                document.querySelectorAll('.carousel-dot').forEach((dot, index) => {
                    dot.classList.toggle('bg-primary-400', index === currentPage);
                    dot.classList.toggle('bg-primary-200', index !== currentPage);
                });
            }
            
            function nextPage() {
                currentPage = (currentPage + 1) % totalPages;
                updateCarousel();
            }
            
            function prevPage() {
                currentPage = (currentPage - 1 + totalPages) % totalPages;
                updateCarousel();
            }
            
            // 自动轮播
            let autoplayInterval = setInterval(nextPage, 5000);
            
            // 鼠标悬停时暂停自动轮播
            document.querySelector('.carousel-container')?.addEventListener('mouseenter', () => {
                clearInterval(autoplayInterval);
            });
            
            // 鼠标离开时恢复自动轮播
            document.querySelector('.carousel-container')?.addEventListener('mouseleave', () => {
                autoplayInterval = setInterval(nextPage, 5000);
            });
            
            // 点击指示点切换页面
            document.querySelectorAll('.carousel-dot').forEach(dot => {
                dot.addEventListener('click', () => {
                    currentPage = parseInt(dot.dataset.page);
                    updateCarousel();
                });
            });
        `;
        container.appendChild(script);

        return container;
    } catch (error) {
        console.error('渲染摄影作品失败:', error);
        return null;
    }
}

// 渲染兴趣部分
function renderInterests() {
    const experienceSection = document.getElementById('experience');
    if (!experienceSection) {
        console.error('找不到experience部分');
        return;
    }

    const interestsSection = document.createElement('section');
    interestsSection.id = 'interests';
    interestsSection.className = 'section bg-gradient-to-br from-primary-50 to-primary-100';
    
    const travelSection = renderTravel();
    const sportsSection = renderSports();
    const photographySection = renderPhotography();
    
    if (travelSection) interestsSection.appendChild(travelSection);
    if (sportsSection) interestsSection.appendChild(sportsSection);
    if (photographySection) interestsSection.appendChild(photographySection);
    
    experienceSection.after(interestsSection);
} 