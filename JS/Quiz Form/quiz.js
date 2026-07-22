const form = document.querySelector('form');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);

    
    // const answer = Array.from(data.values());
    // const original_answer = ["Sachin Tendulkar", "West Indies", "Sachin Tendulkar", "264", "Muttiah Muralitharan"];
    // for (let i = 0; i < answer.length; i++) 
    // {
    //     if(answer[i]==original_answer[i])
    //     {
    //         result+=1;
    //     }
    // }
    

    const original_answer=
    {
        q1:"Sachin Tendulkar",
        q2:"West Indies",
        q3:"Sachin Tendulkar",
        q4:"264",
        q5:"Muttiah Muralitharan"
    }
    
    let result = 0;

    for(let [key,value] of data.entries())
    {
        if(value === original_answer[key])
        {
            result++;
        }
    }
    console.log(result);

    const out=document.getElementById('out');
    out.innerHTML= `${result} out of 5 is correct`;
 
})
