const frontIcon = document.getElementById("front-icon");
const jungaboonText = document.getElementById("jungaboon-text");
const frontDivider = document.getElementById("front-divider");

const jbTexts = [
    "(gah-bah-goohl)",
    "(jung-gah-boon)",
    "(yaba-daba-dooh)",
    "(bah-bah-booey)",
    "(fin-fang-foom)",
    "(bung-gah-joon)"
]

frontIcon.addEventListener("mousemove", ShiftIconToMousePos);
frontIcon.addEventListener("mouseleave", ResetIconPos);
SetJungaBoonText();

function ShiftIconToMousePos(event)
{
    const rect = frontIcon.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const offsetX = (mouseX - centerX) * 0.1;
    const offsetY = (mouseY - centerY) * 0.1;

    frontIcon.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
}

function ResetIconPos(event)
{
    frontIcon.style.transform='translate(0,0)';
}

function SetJungaBoonText()
{
    jungaboonText.innerHTML=jbTexts[Math.floor(Math.random()*jbTexts.length)];
    frontDivider.style.width="60%";
}