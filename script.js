function showFinal() {

    document.getElementById("page1").classList.remove("active");
    document.getElementById("page2").classList.add("active");

    document.getElementById("d1").classList.remove("on");
    document.getElementById("d2").classList.add("on");

    // เล่นเพลงเมื่อกด Next
    document.getElementById("loveMusic").play();

}