function copyEmail(){
    const copyBtn = document.getElementById("copyBtn");
    const email_name = document.getElementById("email_name");

    navigator.clipboard.writeText(email_name.textContent);
    // 나중에 좀 더 괜찮게 alert하는 방식으로 교체하기 
    alert("email copyed");
}