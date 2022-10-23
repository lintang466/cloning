// sideBar
const menuItems = document.querySelectorAll(".menu-item");

// MESSAGES
const MessagesNotification = document.querySelector("#message-notification");
const Messages = document.querySelector(".messages");
const messagess = Messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#messages-search");

// THEME
const Theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll(".choose-size span");
var root = document.querySelector(":root");
const colorPalette = document.querySelectorAll(".choose-color span");
const bg1 = document.querySelector(".bg-1");
const bg2 = document.querySelector(".bg-2");
const bg3 = document.querySelector(".bg-3");

// remove active class from all menu Item
const changeActiveItem = () => {
    menuItems.forEach((item) => {
        item.classList.remove("active");
    });
};

menuItems.forEach((item) => {
    item.addEventListener("click", () => {
        changeActiveItem();
        item.classList.add("active");
        if (item.id != "notification") {
            document.querySelector(".notification-popup").style.display = "none";
        } else {
            document.querySelector(".notification-popup").style.display = "block";
            document.querySelector(
                "#notification .notification-count"
            ).style.display = "none";
        }
    });
});

// Messages

const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    messagess.forEach((chat) => {
        let name = chat.querySelector("h5").textContent.toLowerCase();
        console.log(name);
        if (name.indexOf(val) != -1) {
            chat.style.display = "flex";
        } else {
            chat.style.display = "none";
        }
    });
};

// search chat
messageSearch.addEventListener("keyup", searchMessage);

MessagesNotification.addEventListener("click", () => {
    Messages.style.boxShadow = "0 0 1rem var(--primary-color)";
    MessagesNotification.querySelector(".notification-count").style.display =
        "none";
    setTimeout(() => {
        Messages.style.boxShadow = "none";
    }, 2000);
});

// Theme/Display Customization

const openThemeModal = () => {
    themeModal.style.display = "grid";
};

// Close Modal
const closeThemeModal = (e) => {
    if (e.target.classList.contains("customize-theme")) {
        themeModal.style.display = "none";
    }
};

themeModal.addEventListener("click", closeThemeModal);

Theme.addEventListener("click", openThemeModal);

// ============== Fonts ==============

const removeSizeSelector = () => {
    fontSizes.forEach((size) => {
        size.classList.remove("active");
    });
};

fontSizes.forEach((size) => {
    size.addEventListener("click", () => {
        removeSizeSelector();
        let fontsize;
        size.classList.toggle("active");

        if (size.classList.contains("font-size-1")) {
            fontsize = "10px";
            root.style.setProperty("----sticky-top-left", "5.4rem");
            root.style.setProperty("----sticky-top-right", "5.4rem");
        } else if (size.classList.contains("font-size-2")) {
            fontsize = "13px";
            root.style.setProperty("----sticky-top-left", "5.4rem");
            root.style.setProperty("----sticky-top-right", "-7rem");
        } else if (size.classList.contains("font-size-3")) {
            fontsize = "16px";
            root.style.setProperty("----sticky-top-left", "-2rem");
            root.style.setProperty("----sticky-top-right", "-17rem");
        } else if (size.classList.contains("font-size-4")) {
            fontsize = "22px";
            root.style.setProperty("----sticky-top-left", "-5rem");
            root.style.setProperty("----sticky-top-right", "-25rem");
        }

        document.querySelector("html").style.fontSize = fontsize;
    });
});

// Change primary color
const removeChangeColor = () => {
    colorPalette.forEach((colorpitcher) => {
        colorpitcher.classList.remove("active");
    });
};

colorPalette.forEach((color) => {
    color.addEventListener("click", () => {
        let primaryHue;
        removeChangeColor();
        if (color.classList.contains("color-1")) {
            primaryHue = 252;
        } else if (color.classList.contains("color-2")) {
            primaryHue = 10;
        } else if (color.classList.contains("color-3")) {
            primaryHue = 352;
        } else if (color.classList.contains("color-4")) {
            primaryHue = 199;
        }

        color.classList.add("active");
        root.style.setProperty("--primary-color-hue", primaryHue);
    });
});