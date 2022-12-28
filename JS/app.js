
    const mainHeader = document.querySelector(".main-header")

    window.addEventListener("scroll", (e) => {
        if(scrollY >= 160) {
            mainHeader.classList.add("bg")
        } else (
            mainHeader.classList.remove("bg")
        )
        console.log(scrollY)
    })