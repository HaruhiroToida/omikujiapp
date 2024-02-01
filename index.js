'use strict'

{
    const btn = document.getElementById("btn"); //buttonタグのid：btn取得
    const result = document.getElementById("result") //pタグのid：btn取得

    btn.addEventListener("click",()=>{
        const results = ["大吉","中吉","小吉","末吉","凶","大凶"]
        const n = Math.floor(Math.random()*results.length);

        result.textContent = results[n];
        
    });

}
