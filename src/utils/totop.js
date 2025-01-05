function listenToTop () {
    const totop = document.querySelector(".to-top");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 1000) {
            totop.classList.add("active");
        } else {
            totop.classList.remove("active");
        }
    })
}

export default listenToTop;