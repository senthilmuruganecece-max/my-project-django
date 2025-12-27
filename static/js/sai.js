function updateTime(){
    const now = new Date();
    document.getElementById("datetime").innerText =
        now.toLocaleDateString("en-GB") + " " +
        now.toLocaleTimeString();
}
setInterval(updateTime,1000);
updateTime();


document.addEventListener("keydown", e => {

    switch(e.key){
        case "F1":
            alert("MASTERING SCREEN");
            break;

        case "F2":
            alert("MODEL SCREEN");
            break;

        case "F3":
            alert("LIVE SPC SCREEN");
            break;

        case "F6":
            alert("REPORT SCREEN");
            break;
    }
});