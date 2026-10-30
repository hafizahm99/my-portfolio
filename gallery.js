document.addEventListener("DOMContentLoaded", () => {
    const yearData = {
        "2020": [
            "MYART/2020/MAY26.PNG",
            "MYART/2020/MAY27.PNG",
            "MYART/2020/JUNE7.PNG",
            "MYART/2020/JUNE24.PNG",
            "MYART/2020/JULY15.PNG",
            "MYART/2020/JULY20.PNG",
            "MYART/2020/JULY29.PNG",
            "MYART/2020/AUG2.PNG",
            "MYART/2020/AUG7.PNG",
            "MYART/2020/AUG19.PNG",
            "MYART/2020/NOV14.PNG",
            "MYART/2020/DEC19.PNG"
        ],
        "2021": [
            "MYART/2021/JAN11.PNG",
            "MYART/2021/JAN17.PNG",
            "MYART/2021/FEB25.PNG",
            "MYART/2021/APR6.PNG",
            "MYART/2021/MAY1.PNG",
            "MYART/2021/MAY26.PNG",
            "MYART/2021/JUNE3.PNG",
            "MYART/2021/JUNE12.PNG",
            "MYART/2021/JULY22.PNG",
            "MYART/2021/AUG1.PNG",
            "MYART/2021/SEPT2.PNG",
            "MYART/2021/SEPT7.PNG",
            "MYART/2021/SEPT16.PNG",
            "MYART/2021/NOV5.PNG",
            "MYART/2021/DEC9.PNG",
            "MYART/2021/DEC12.PNG",
            "MYART/2021/DEC24.PNG"
        ],
        "2022": [
            "MYART/2022/JAN6.PNG",
            "MYART/2022/FEB10.PNG",
            "MYART/2022/FEB12.PNG",
            "MYART/2022/FEB15.PNG",
            "MYART/2022/MARCH20.PNG",
            "MYART/2022/MAY18.PNG",
            "MYART/2022/JUNE30.PNG",
            "MYART/2022/AUG6.PNG",
            "MYART/2022/AUG30.PNG",
            "MYART/2022/SEPT19.png",
            "MYART/2022/OCT12.PNG",
            "MYART/2022/OCT16.PNG",
            "MYART/2022/NOV21.PNG"
        ],
        "2023": [
            "MYART/2023/MAY7.JPG",
            "MYART/2023/MAY28.PNG",
            "MYART/2023/JUNE21.PNG",
            "MYART/2023/SEPT7.PNG",
            "MYART/2023/SEPT16.PNG",
            "MYART/2023/SEPT27.png"
        ],
        "2024": [
            "MYART/2024/MARCH23.PNG",
        ],
        "2025": [
            "MYART/2025/JUNE10.PNG",
        ],
        "2026": [
            "MYART/2026/FEB8.PNG",
            "MYART/2026/MARCH11.png",
            "MYART/2026/MAY7.PNG",
            "MYART/2026/JUNE18.PNG",
            "MYART/2026/SEPT2.PNG",
            "MYART/2026/SEPT11.PNG",
            "MYART/2026/OCT10.PNG"
        ]
    };

    const carousels = document.querySelectorAll(".carousel-container");

    carousels.forEach(carousel => {
        const year = carousel.getAttribute("data-year");
        const images = yearData[year] || [];
        
        const imgElement = carousel.querySelector(".carousel-img");
        const counterElement = carousel.querySelector(".image-counter");
        const prevBtn = carousel.querySelector(".prev-btn");
        const nextBtn = carousel.querySelector(".next-btn");

        let currentIndex = 0;

        if (images.length === 0) {
            carousel.innerHTML = `<p style="color: #b56576; font-style: italic; font-size: 0.9rem;">No artworks uploaded for ${year} yet ♡</p>`;
            return;
        }

        function updateSlider() {
            imgElement.src = images[currentIndex];
            counterElement.textContent = `${currentIndex + 1} / ${images.length}`;
        }

        updateSlider();

        prevBtn.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateSlider();
        });

        nextBtn.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % images.length;
            updateSlider();
        });
    });
});