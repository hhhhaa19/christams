// === 1. 信件内容配置 ===
const letterHTML = `
    <h2>Dearest Ter,</h2>
    <p>Merry Christmas!</p>
    <p>这是一棵只为你绽放的圣诞树。</p>
    <p>每一层光晕，</p>
    <p>都藏着我的一份心意。</p>
    <p>愿你永远明媚如初。</p>
    <br>
    <p style="text-align: right;">Yours,<br>Jintao</p>
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