async function makeIssue() {
    const token = process.env.GITHUB_TOKEN;
    //이것
    const OWNER = "songcw8"; // 깃허브 계정이름
    //이것
    const REPO = "github_power_actions"; // 현재 레퍼지토리 이름
    const response = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/issues`,{
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            title : "행운의 숫자", //이것
            body : `${Math.floor(Math.random() * 100) + 1}`, //이것
        })
    });
    if(response.ok){
        console.log("성공");
    }else{
        console.log("실패");
    }
}

makeIssue();