// === 1. 信件内容配置 ===
const letterHTML = `
    <div id="letter-wrapper" style="font-family: 'Georgia', serif; text-align: left; line-height: 1.8; padding-bottom: 50px;">
        <h3 style="color: #d45d79;">亲爱的小小姐:</h3>
        <p>见字如晤，展信舒颜。</p>
        <p>这是一封停滞许久的信，记得初识你时也是这般的深秋，巨大的落叶从天而降，仿佛一场枯黄色的大雪，恍若苍穹碎落。现在想来有些记忆这般深刻也许是因为一身晴朗的人或许从未远离，只是以记忆的形式相伴。</p>
        <p>记得那时总是难过，但现在回想起来却像是水彩风，用色温暖而苍老，像是水洗风吹日晒后，失色在阳光里的老照片，平静的让人想落泪。而你像是那照片上不经意滴上的墨水，褪色成独一无二的涟漪，留下书香味的余韵。</p>
        <p>但不知从什么时候开始，于我而言，平静比幸福更重要了呢，会害怕别人用短暂的相逢，来惩罚贪心而痴情的旧人，会害怕别人闯入我的生活，把我的思绪弄乱后扬长而去，会害怕别人对我好，害怕依赖，害怕习惯。他们说反复受伤的伤口会起茧子，直到感受不到疼痛，于是也终于学会了保护自己。</p>
        <p>其实大家都是巨蟹座，都要学着用一层坚硬的壳来保护自己的。</p>
        <p>在没课的下午，有时我就这样静静的看着昏黄的灯光浸湿了雨水，在玻璃的反光中光怪陆离，很少认识新的朋友了，这个世界很大，我就守着自己那一小块。有时候厌倦了，就跑去很高的悬崖边上看海，听一首喜欢的老歌，看潮水在黑色的山崖下碎成白色的浪花，落日发红，斜斜的阳光从树荫的缝隙间投下，傍晚的树林远看也像海，仓红色的海，树梢摇曳，层层叠叠的波涛。</p>
        <p>其实一个人也能很幸福，只是这份幸福无从分享。</p>
        <p>开始变成一个很淡的人，允许别人做别人，允许自己做自己，珍惜短暂的相遇，放下期待，允许一切发生，也许真诚，但再也不会那么撕心裂肺的壮烈着自我感动了。于是这样也挺好，不再去在意别人的想法，只是学着用别人对待自己的方式对待别人。</p>
        <p>其实大家都是木偶人，再缝几针爱过几次就不会疼，假装学着去爱人。</p>
        <p>很多年以前看《读者》，有篇散文，作者自述他的人生。大意是说他年轻的时候期待着娶一个女孩，她有着淡金色绚烂的长发、会穿橙色的太阳裙、会骑马、弹一手好钢琴、总在下午茶的时间为他煮好香浓的曼特宁咖啡，他为了这个目标而努力着——比如每天读一本新的书，想着这样我将来就可以和她分享这本书了；练习书法，想着将来用这手漂亮的字写情书给她；努力地工作赚钱，这样他将来会有一笔积蓄和她一起去加勒比海度假。</p>
        <p>很多年之后，他结婚了，于一个阳光暖暖的下午在打字机上写那篇散文，转头看看窗外在花园里剪枝的妻子。他的妻子没有淡金色的长发，不穿太阳裙，不骑马和弹钢琴，也不会煮曼特宁咖啡，但是，她带卷的红发很漂亮，她穿粗布长裙的时候感觉家居却优雅，她会烧一手很棒的意大利菜，忙碌的时候总是轻声地哼着歌。</p>
        <p>于是这样也很好，作者说，虽然你冲着梦中的女孩跑去而没有触及她的长发，但你最终仍旧安宁和快乐，你也仍旧可以与身边的女孩分享你曾为梦中某个女孩积蓄的一切，无论是书法、漂亮的信、有趣的书，或者一场去往阳光盛大的加勒比海滩的旅行。</p>
        <p>生活大概就是这样一场旅行，你把行囊放进车里，沿着漫长的道路，开去地图上的远方小镇，你不曾到过那里，只听说那里很美。多年以后你穿过迷雾和荆棘，终于到达了一个小镇，才发现和地图上所标的不是同一个镇子。但是也很好，走了很远的路，终于到达了某个终点，可以走进街边的小茶馆里，点一杯热茶，慢慢的喝着，在氤氲的热茶香里，整个小镇的声音、光、温度和气味……一点一滴都涌向你。</p>
        <p>其实大家都会幸福的。</p>
        <p>我们蛮像的，其实第一次遇到你就发现了，你很细心，能察觉出大家情绪上的感受，很有趣。但那个习惯给大家情绪价值的你，是不是常常被情感忽视，被消费。其实希望你也开心，会想你是否疲惫，是否也需要自己的空间，所以还是不太喜欢直播啦，希望下次遇见你，不是直播间的大哥，而是可以偶尔联系的老朋友。</p>
        <p>给你准备了点小礼物，列一下就当备忘录了！一点英国的保健品、饼干和红茶；这个饼干应该是你喜欢的黄油饼干，红色这个瓶瓶是蔓越莓对姨妈好，这个苹果醋对肠胃好；尝尝这两款茶，希望会喜欢。最后给你选了这个手链送给你，因为项链送了嘻嘻，然后是两个娃娃小挂件，希望不会被星期六咬。</p>
        <p>好咯，就这样，勿忘也勿念。</p>
        <p>愿你幸福，所遇皆良人。</p>
        <p>爱与别，是一生无解的鹤立华亭。</p>
        <br>
        <p style="text-align: right;">你的，</p>
        <p style="text-align: right; font-weight: bold;">阿涛写于12月14号</p>
        
        <hr style="border: 0; border-top: 1px dashed #ccc; margin: 30px 0;">
        
        <h3 style="color: #d45d79;">续:</h3>
        <p>现在是2025年的12月21号，冬至，不知道你吃饺子了没有，愿你平安喜乐，原本想就这样上面内容直接发给你的，但看来看去更多内容像是写给自己的，所以又补了一段。</p>
        
        <br>
        
        <h3 style="color: #d45d79;">亲爱的石燕藏:</h3>
        <p>请允许我这样称呼，一如我们是许久不见的朋友，尽管未曾相逢。</p>
        <p>写下一封信的感觉很奇妙，它会穿越崇山峻岭，再越过时间的沟壑，也许还有千山万水，记下的却是当时的心情，像是某种时间胶囊。</p>
        <p>这是一封等待你打开的尺素书。</p>
        <p>沉淀，积累，一如思念。</p>
        <p>多年以后，你是否还会记得这封信跨过了柏林的勃兰登堡门，穿过列支波士顿的车站，再越过土耳其的圣索菲亚大教堂。此去经年，你是否记得某个素未谋面的小男孩用纸笔一点点记录着你们的故事呢。</p>
        <p>特别喜欢纸笔下的浓墨重彩，无从修改，无从粉饰，是否能被感受到呢这字字句句下的深埋的隐藏的悸动与柔软，还有那一次次推开却渴望被拥紧的心。</p>
        <p>也许是认识的方式，也许是时间的皱褶，一切于我而言像是绚丽的泡沫，所以始终不敢靠太近，于是这样也很好，其实一直希望我们能公平点，希望你首先是你，然后才是小小或者是柔柔。</p>
        <p>我时常会想啊，想看到你的有趣、你的脆弱、你的拧巴，看到你电脑屏幕后或者精致妆容下的或许暗淡的状态、看到你下班后也许摊在床上一动不动的劳累，看到你也许不开心时坐在窗前发呆。想知道你孤单吗，有人陪你吗，那个城市有那么那么多人，你会恍惚吗，会不会觉得那个城市太大了，却依旧没有你的位置。</p>
        <p>我想触摸你的灵魂，摸摸你的头告诉你我在，也许我们生活的交集会越来越少，也许有一天我们会越来越淡，然后在某个平常的一天不在联系，但只是希望今后的你，在遇到不开心的时刻，在遇到低谷，不要灰心，至少有那么一个人被你所吸引，你的温柔、细心，也许还有一点点悲伤，曾经是、以后也是。</p>
        <p>原谅我，我实在无法许诺未来，无法承诺永远，所以我想说，明天见。</p>
        <p>愿你幸福，无论是否与我有关。</p>
        <br>
        <p style="text-align: right;">你的，</p>
        <p style="text-align: right; font-weight: bold;">金涛</p>
    </div>
`;

// === 2. 初始化场景 ===
const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x000000, 0.0015);

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 3, 25);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor(0x000000);
document.getElementById('scene-container').appendChild(renderer.domElement);

const textureLoader = new THREE.TextureLoader();
const particleTexture = textureLoader.load('https://assets.codepen.io/127738/dotTexture.png');

let animationState = 'idle'; 

// === 3. 分层松树结构 ===
const treeGroup = new THREE.Group();
scene.add(treeGroup);
let treeMaterial, ringMaterial, heartMaterial;

function createLayeredTree() {
    const geometry = new THREE.BufferGeometry();
    const positions = [];
    const colors = [];
    const sizes = [];
    const velocities = [];
    const particleCount = 18000; 
    const colorPalette = [
        new THREE.Color(0x191970), new THREE.Color(0x4169e1), 
        new THREE.Color(0x87cefa), new THREE.Color(0xf0f8ff)
    ];
    const params = { height: 20, maxRadius: 7.5, layers: 8 };

    for (let i = 0; i < particleCount; i++) {
        const h = Math.random();
        if (h > 0.5 && Math.random() < Math.pow(h, 2) * 0.6) continue;
        const scaledH = h * params.layers;
        const layerIndex = Math.floor(scaledH);
        const layerProgress = scaledH - layerIndex;
        if (layerProgress > 0.8) continue; 
        const branchShape = Math.pow(1 - layerProgress, 0.55); 
        const globalConeRadius = (1 - h) * params.maxRadius;
        const rRatio = Math.sqrt(Math.random()); 
        
        let currentRadius = globalConeRadius * branchShape * rRatio;
        currentRadius *= 1.2; 
        const angle = Math.random() * Math.PI * 2;
        let x = Math.cos(angle) * currentRadius;
        let z = Math.sin(angle) * currentRadius;
        let y = h * params.height - params.height / 2;
        y -= (currentRadius / params.maxRadius) * 1.5;
        x += (Math.random() - 0.5) * 0.3;
        z += (Math.random() - 0.5) * 0.3;
        y += (Math.random() - 0.5) * 0.3;

        positions.push(x, y, z);
        velocities.push(0, 0, 0); 

        let color;
        if (rRatio > 0.85) {
             color = Math.random() > 0.5 ? colorPalette[3] : colorPalette[2];
        } else {
             color = Math.random() > 0.6 ? colorPalette[1] : colorPalette[0];
        }
        colors.push(color.r, color.g, color.b);
        sizes.push((Math.random() * 0.5 + 0.2) * (1.1 - h * 0.6)); 
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));
    geometry.setAttribute('velocity', new THREE.Float32BufferAttribute(velocities, 3));

    treeMaterial = new THREE.PointsMaterial({
        size: 0.2, sizeAttenuation: true, depthWrite: false, blending: THREE.AdditiveBlending,
        vertexColors: true, map: particleTexture, transparent: true, opacity: 0.9
    });
    const points = new THREE.Points(geometry, treeMaterial);
    treeGroup.add(points);
    return points;
}
const layeredTree = createLayeredTree();

// === 4. 底部涟漪 ===
function createWideRipples() {
    const geometry = new THREE.BufferGeometry();
    const positions = [];
    const colors = [];
    const sizes = [];
    const velocities = []; 
    const ringCount = 3;
    for(let r = 0; r < ringCount; r++) {
        const radius = 8 + r * 2.5; 
        const particlesPerRing = 450; 
        for(let i=0; i<particlesPerRing; i++) {
            const angle = (i / particlesPerRing) * Math.PI * 2;
            let x = Math.cos(angle) * radius;
            let z = Math.sin(angle) * radius;
            let y = -11; 
            x += (Math.random() - 0.5) * 0.6;
            z += (Math.random() - 0.5) * 0.6;
            positions.push(x, y, z);
            colors.push(0.8, 0.9, 1.0); 
            sizes.push(Math.random() * 0.3 + 0.1);
            velocities.push(0,0,0);
        }
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));
    geometry.setAttribute('velocity', new THREE.Float32BufferAttribute(velocities, 3));

    ringMaterial = new THREE.PointsMaterial({
        size: 0.2, map: particleTexture, vertexColors: true, blending: THREE.AdditiveBlending,
        depthWrite: false, transparent: true, opacity: 0.3
    });
    const rings = new THREE.Points(geometry, ringMaterial);
    treeGroup.add(rings);
    return rings;
}
const baseRings = createWideRipples();

// === 5. 粉色发光爱心树顶 ===
const heartGroup = new THREE.Group();
heartGroup.position.set(0, 10.5, 0); 
treeGroup.add(heartGroup);
let heartParticles; 
function createPinkHeart() {
    const geometry = new THREE.BufferGeometry();
    const positions = [];
    const colors = [];
    const sizes = [];
    const velocities = [];
    const count = 600;
    for (let i = 0; i < count; i++) {
        const t = Math.random() * Math.PI * 2;
        let x = 16 * Math.pow(Math.sin(t), 3);
        let y = 13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t);
        let z = 0;
        const scale = 0.06; 
        x *= scale; y *= scale; z *= scale;
        const fillRatio = Math.sqrt(Math.random());
        x *= fillRatio; y *= fillRatio; 
        z += (Math.random() - 0.5) * 0.3 * fillRatio;
        positions.push(x, y, z);
        velocities.push(0,0,0);
        if (fillRatio < 0.4) colors.push(1, 1, 1); 
        else colors.push(1.0, 0.5, 0.7); 
        sizes.push(Math.random() * 0.4 + 0.2);
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));
    geometry.setAttribute('velocity', new THREE.Float32BufferAttribute(velocities, 3));

    heartMaterial = new THREE.PointsMaterial({
        size: 0.2, map: particleTexture, vertexColors: true, blending: THREE.AdditiveBlending,
        depthWrite: false, transparent: true, opacity: 1.0
    });
    heartParticles = new THREE.Points(geometry, heartMaterial);
    heartGroup.add(heartParticles);
}
createPinkHeart();

// === 6. 背景稀疏星光 ===
const snowGeo = new THREE.BufferGeometry();
const snowCount = 3000; 
const snowPos = [];
const snowColors = [];
for(let i=0; i<snowCount; i++) {
    snowPos.push((Math.random()-0.5)*70, (Math.random()-0.5)*70, (Math.random()-0.5)*70);
    snowColors.push(1, 1, 1);
}
snowGeo.setAttribute('position', new THREE.Float32BufferAttribute(snowPos, 3));
snowGeo.setAttribute('color', new THREE.Float32BufferAttribute(snowColors, 3));
const snowMat = new THREE.PointsMaterial({
    size: 0.2, vertexColors: true, transparent: true, opacity: 0.6, 
    map: particleTexture, blending: THREE.AdditiveBlending, depthWrite: false
});
const snow = new THREE.Points(snowGeo, snowMat);
scene.add(snow);

// === 7. 物理引擎 ===
const clock = new THREE.Clock();
let driftTriggered = false;

function triggerGentleDrift(object, forceMultiplier) {
    const positions = object.geometry.attributes.position.array;
    const velocities = object.geometry.attributes.velocity.array;
    const count = positions.length / 3;
    for (let i = 0; i < count; i++) {
        const x = positions[i*3];
        const y = positions[i*3 + 1];
        const z = positions[i*3 + 2];
        const length = Math.sqrt(x*x + y*y + z*z) + 0.001;
        const nx = x / length;
        const ny = y / length;
        const nz = z / length;
        velocities[i*3] = nx * forceMultiplier * (0.5 + Math.random() * 0.5);
        velocities[i*3 + 1] = ny * forceMultiplier * (0.5 + Math.random() * 0.5);
        velocities[i*3 + 2] = nz * forceMultiplier * (0.5 + Math.random() * 0.5);
    }
    object.geometry.attributes.velocity.needsUpdate = true;
}

function applyAscensionPhysics(object) {
    if (treeMaterial.opacity < 0.01) return;
    const positions = object.geometry.attributes.position.array;
    const velocities = object.geometry.attributes.velocity.array;
    const count = positions.length / 3;
    for (let i = 0; i < count; i++) {
        velocities[i*3] *= 0.95;     
        velocities[i*3 + 2] *= 0.95; 
        velocities[i*3 + 1] += 0.003; 
        if(velocities[i*3+1] > 0.1) velocities[i*3+1] = 0.1;
        positions[i*3] += velocities[i*3];
        positions[i*3 + 1] += velocities[i*3 + 1];
        positions[i*3 + 2] += velocities[i*3 + 2];
    }
    object.geometry.attributes.position.needsUpdate = true;
    object.geometry.attributes.velocity.needsUpdate = true;
}

// === 8. 动画主循环 ===
function animate() {
    requestAnimationFrame(animate);
    const time = clock.getElapsedTime();

    const snowPosArr = snow.geometry.attributes.position.array;
    if (animationState === 'flowingback') {
        for(let i=1; i<snowCount*3; i+=3) {
            snowPosArr[i] += 0.05; 
            if(snowPosArr[i] > 40) snowPosArr[i] = -40; 
        }
    } else {
        const snowSpeed = animationState === 'spinning' ? 0.15 : 0.03; 
        for(let i=1; i<snowCount*3; i+=3) {
            snowPosArr[i] -= snowSpeed;
            if(snowPosArr[i] < -40) snowPosArr[i] = 40;
        }
    }
    snow.geometry.attributes.position.needsUpdate = true;

    if (animationState === 'spinning') {
        treeGroup.rotation.y -= 0.005; 
        baseRings.rotation.y += 0.005;

    } else if (animationState === 'drifting') {
        if (!driftTriggered) {
            triggerGentleDrift(layeredTree, 0.8); 
            triggerGentleDrift(baseRings, 0.8);
            if(heartParticles) triggerGentleDrift(heartParticles, 1.0); 
            driftTriggered = true;
            setTimeout(() => { animationState = 'flowingback'; }, 50);
        }

    } else if (animationState === 'flowingback') {
        applyAscensionPhysics(layeredTree);
        applyAscensionPhysics(baseRings);
        if(heartParticles) applyAscensionPhysics(heartParticles);
        treeMaterial.opacity *= 0.98;
        ringMaterial.opacity *= 0.98;
        heartMaterial.opacity *= 0.98;

    } else {
        treeGroup.rotation.y = -time * 0.08;
        baseRings.rotation.y = time * 0.05;
        const scale = 1 + Math.sin(time * 3) * 0.05;
        heartGroup.scale.set(scale, scale, scale);
    }
    
    renderer.render(scene, camera);
}
animate();


// === 9. 交互逻辑 (旋转 -> 解体 -> 升空 -> 绽放) ===
const overlay = document.getElementById('overlay');
const letterCard = document.getElementById('letter-card');
const letterContentContainer = document.getElementById('letter-content');
const bgm = document.getElementById('bgm');
let isOpened = false;

letterContentContainer.innerHTML = letterHTML;

overlay.addEventListener('click', () => {
    if(isOpened) return;
    isOpened = true;
    bgm.play().catch(()=>{}); 
    
    overlay.style.opacity = '0';
    setTimeout(() => { overlay.style.display = 'none'; }, 1000);
    
    // 阶段1：旋转 (8s)
    animationState = 'spinning';
    const spinDuration = 8000;
    
    let progress = 0;
    const startZ = camera.position.z;
    const startY = camera.position.y;
    const interval = setInterval(() => {
        progress += 0.005; 
        if(progress >= 1) clearInterval(interval);
        const ease = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;
        camera.position.z = startZ + 18 * ease; 
        camera.position.y = startY - 3 * ease;
        treeGroup.position.y = -8 * ease; 
    }, spinDuration / 200); 

    // 阶段2：解体
    setTimeout(() => {
        animationState = 'drifting';
    }, spinDuration);

    // 阶段3：发射升空 (树解体1s后)
    const launchDelay = spinDuration + 1000;
    setTimeout(() => {
        letterCard.classList.add('launched');
    }, launchDelay);

    // 阶段4：高空绽放 (升空飞行3.6s左右开始展开，消除停顿)
    // CSS升空是4.0s，我们在3.6s左右就触发展开，让惯性接上
    const expandDelay = launchDelay + 3600;
    setTimeout(() => {
        letterCard.classList.add('expanded');
        
        const wrapper = letterContentContainer.firstElementChild;
        const lines = Array.from(wrapper.children);

        lines.forEach(line => {
            line.style.opacity = '0';
            line.style.transform = 'translateY(20px)';
            line.style.transition = 'all 0.8s ease-out';
        });

        // 几乎立刻开始出字，不要等待
        setTimeout(() => {
            lines.forEach((line, index) => {
                setTimeout(() => {
                    line.style.opacity = '1';
                    line.style.transform = 'translateY(0)';
                }, index * 350);
            });
        }, 100);

    }, expandDelay); 
});

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
window.closeLetter = function() {
    letterCard.classList.remove('launched', 'expanded');
    location.reload(); 
};