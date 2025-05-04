// 定义当前选中的城市，默认为长春
let currentCity = 'changchun';
let currentAudio = null; // 当前播放的音频对象
let lastPlayedElement = null; // 最后点击的元素

// 停止当前播放的音频
function stopCurrentAudio() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio = null;
    }
    if (lastPlayedElement) {
        lastPlayedElement.classList.remove('playing');
        lastPlayedElement = null;
    }
}

// 添加暂停所有视频的函数
function pauseAllVideos() {
    // 暂停主视频
    const mainVideo = document.querySelector('.video video');
    if (mainVideo) mainVideo.pause();
    
    // 暂停所有内容视频
    document.querySelectorAll('.tab-content video').forEach(video => {
        video.pause();
    });
}


// 播放或暂停音频
function toggleAudio(audioSrc, element) {
    // 如果点击的是同一个元素
    if (lastPlayedElement === element) {
        if (currentAudio && !currentAudio.paused) {
            stopCurrentAudio();
        } else {
            playAudio(audioSrc, element);
        }
    } else {
        stopCurrentAudio();
        playAudio(audioSrc, element);
    }
}

// 播放音频
function playAudio(audioSrc, element) {
    currentAudio = new Audio(audioSrc);
    currentAudio.play();
    element.classList.add('playing');
    lastPlayedElement = element;

    // 音频结束时移除播放状态
    currentAudio.onended = function () {
        element.classList.remove('playing');
        currentAudio = null;
        lastPlayedElement = null;
    };
}

// 显示指定城市的信息
function showCity(city, event) {
    // 切换城市时停止当前播放的音频
    stopCurrentAudio();
    pauseAllVideos();
    currentCity = city; // 更新当前城市
    const cityInfo = document.getElementById("city-info"); // 获取城市信息容器
    // 设置城市名称和标题
    const cityTitle = cityData[city].name + "-" + cityData[city].title;
    const titleElement = cityInfo.querySelector("h3");
    titleElement.innerText = cityTitle;

    // 添加点击事件来播放城市介绍音频
    titleElement.onclick = function () {
        toggleAudio(cityData[city].audio, titleElement);
    };

    // 设置城市描述
    cityInfo.querySelector("p").innerText = cityData[city].description;
    // 设置城市介绍视频
    const videoElement = document.querySelector('.video video');
    videoElement.src = cityData[city].video;

    // 默认显示"特色美食"标签
    showTab('food');

    // 为当前导航按钮添加激活状态（只有在有event参数时才执行）
    if (event) {
        document.querySelectorAll('.nav button').forEach(btn => {
            btn.classList.remove('active'); // 移除所有按钮的激活状态
        });
        event.target.classList.add('active'); // 为点击的按钮添加激活状态
    }
}

// 显示指定标签的内容
function showTab(tabName, event) {
    // 切换标签页时停止当前播放的音频
    stopCurrentAudio();
    pauseAllVideos();
    // 隐藏所有标签内容
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.style.display = 'none';
    });

    // 移除所有标签按钮的激活状态
    document.querySelectorAll('.tabs button').forEach(btn => {
        btn.classList.remove('active');
    });

    // 显示选中的标签内容
    const tabContent = document.getElementById(tabName);
    tabContent.style.display = 'block';

    // 设置激活按钮（如果有事件则使用事件目标，否则找到对应的按钮）
    let activeButton;
    if (event) {
        activeButton = event.target;
    } else {
        activeButton = document.querySelector(`.tabs button[onclick*="${tabName}"]`);
    }
    activeButton.classList.add('active');

    // 控制 pear GIF 的显示
    const pear = document.getElementById('pear');
    pear.style.display = (tabName === 'food' || tabName === 'attractions') ? 'block' : 'none';

    // 根据标签渲染对应内容
    if (tabName === 'food') {
        renderFood();
    } else if (tabName === 'attractions') {
        renderAttractions();
    } else if (tabName === 'route') {
        renderRoute();
    }
}


// 渲染特色美食内容
function renderFood() {
    const container = document.getElementById('food'); // 获取美食容器
    // 设置标题
    container.innerHTML = '<h3><span style="color: var(--accent-color);">🍴</span> 特色美食推荐</h3>';
    // 遍历并渲染每个美食项
    cityData[currentCity].food.forEach(item => {
        const foodItem = document.createElement('div');
        foodItem.className = 'food-item';
        foodItem.innerHTML = `
            <h4 class="audio-title" data-audio="${item.audio}"><span style="color: var(--accent-color);">✦</span> ${item.name}</h4>
            <p>${item.desc}</p>
            ${item.img ? `<img src="${item.img}" alt="${item.name}">` : ''}
            ${item.video ? `<video src="${item.video}" preload="metadata" controls>` : ''}
        `;
        container.appendChild(foodItem);

        // 添加点击事件来播放美食音频
        const titleElement = foodItem.querySelector('.audio-title');
        if (item.audio) {
            titleElement.onclick = function () {
                toggleAudio(item.audio, titleElement);
            };
            titleElement.style.cursor = 'pointer';
        }
    });
}

// 渲染旅游景点内容
function renderAttractions() {
    const container = document.getElementById('attractions'); // 获取景点容器
    // 设置标题
    container.innerHTML = '<h3><span style="color: var(--accent-color);">🏞️</span> 必游景点</h3>';
    // 遍历并渲染每个景点项
    cityData[currentCity].attractions.forEach(spot => {
        const attractionItem = document.createElement('div');
        attractionItem.className = 'attraction';
        attractionItem.innerHTML = `
            <h4 class="audio-title" data-audio="${spot.audio}"><span style="color: var(--accent-color);">✦</span> ${spot.name} <span style="font-size: 14px; color: var(--light-text);">（门票：${spot.fee}元）</span></h4>
            <p>${spot.desc}</p>
            ${spot.img ? `<img src="${spot.img}" alt="${spot.name}">` : ''}
            ${spot.video ? `<video src="${spot.video}" controls>` : ''}
        `;
        container.appendChild(attractionItem);

        // 添加点击事件来播放景点音频
        const titleElement = attractionItem.querySelector('.audio-title');
        if (spot.audio) {
            titleElement.onclick = function () {
                toggleAudio(spot.audio, titleElement);
            };
            titleElement.style.cursor = 'pointer';
        }
    });
}
// 渲染推荐行程路线
function renderRoute() {
    const container = document.getElementById('route'); // 获取路线容器
    // 设置标题和提示
    container.innerHTML = `
        <div class="route-header">
            <h3><span style="color: var(--accent-color);">🗺️</span> 推荐行程路线</h3>
            <div class="route-tips">${cityData[currentCity].routeTips || '建议根据季节和兴趣选择适合的路线'}</div>
        </div>
        <div class="timeline">
            ${cityData[currentCity].route.map((day, index) => `
                <div class="timeline-item">
                    <div class="timeline-content">
                        <div class="day-tag">第${index + 1}天</div>
                        <div class="day-content">${day}</div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// 计算旅行预算
function calculateBudget() {
    const days = document.getElementById('days').value; // 获取旅行天数
    const rates = cityData[currentCity].budget; // 获取当前城市的预算数据
    // 计算总预算
    const total = Object.values(rates).reduce((a, b) => a + b) * days;
    // 显示预算结果
    document.getElementById('budget-result').innerHTML =
        `<strong>${days}天预计花费：<span style="color: var(--primary-color);">${total}元</span></strong><br>
        日均预算：<br>
        • 住宿：${rates.住宿}元<br>
        • 餐饮：${rates.餐饮}元<br>
        • 交通：${rates.交通}元<br>
        • 门票：${rates.门票}元`;
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', () => {
    const firstNavButton = document.querySelector('.nav button');
    firstNavButton.classList.add('active');
    showCity('changchun');
    showTab('food'); // 这会自动激活对应的按钮

    const pear = document.getElementById("pear");
    const audio = pear.querySelector("audio");
    
    pear.addEventListener("click", () => {
        if (audio.paused) {  // 检查是否处于暂停状态
            audio.play();    // 如果是暂停状态就播放
        } else {
            audio.pause();   // 否则暂停（注意是函数调用）
        }
    });

});