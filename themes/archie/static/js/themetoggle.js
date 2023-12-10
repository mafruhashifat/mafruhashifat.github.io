/**
 * Sets the website theme.
 * @param {string} mode - The theme mode, either 'dark' or 'light'.
 */
function setTheme(mode) {
    localStorage.setItem('theme-storage', mode);
    const themeStyle = document.getElementById('darkModeStyle');
    const themeToggleButton = document.getElementById('dark-mode-toggle');

    if (mode === 'dark') {
        themeStyle.disabled = false;
        themeToggleButton.innerHTML = '<i data-feather="sun" aria-label="Switch to light mode"></i>';
    } else if (mode === 'light') {
        themeStyle.disabled = true;
        themeToggleButton.innerHTML = '<i data-feather="moon" aria-label="Switch to dark mode"></i>';
    }

    feather.replace();
}

/**
 * Toggles the website theme between light and dark.
 */
function toggleTheme() {
    const currentTheme = localStorage.getItem('theme-storage');
    if (currentTheme === 'light') {
        setTheme('dark');
    } else {
        setTheme('light');
    }
}

// Initialize the theme based on saved preference or default to 'light'
const savedTheme = localStorage.getItem('theme-storage') || 'light';
setTheme(savedTheme);
