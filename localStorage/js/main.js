const initializeThemeToggle = () => {
    const colorModeButton = document.querySelector(".js-color-mode-button");
    const darkModeClass = "dark-mode";

    let isDarkMode = localStorage.getItem("isDarkMode") === "true";

    const setTheme = () => {
        if (isDarkMode) {
            // ライトモードにする
            colorModeButton.textContent = "ライトモードへ切り替え";
            document.body.classList.add(darkModeClass);
        } else {
            // ダークモードにする
            colorModeButton.textContent = "ダークモードへ切り替え";
            document.body.classList.remove(darkModeClass);
        }
        localStorage.setItem("isDarkMode", isDarkMode);
    };

    setTheme();

    colorModeButton.addEventListener("click", () => {
        isDarkMode = !isDarkMode;
        setTheme();
    });
};

initializeThemeToggle();
