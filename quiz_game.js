const allquestions =[{
  question: "You're 4th place right now in a race. What place will you be in when you pass the person in 3rd place?",
  options: ["1st", "2nd", "3rd", "none of above"],
  correctans: "3rd"
},
{question:"What do you call a fish with no eyes?",
options: ["Fsh", "Blind Fish", "Fishy", "Wanda"],
  correctans: "Fsh"},

  {question:"If Sharma ji's hen laid an egg in Gupta ji's garden, whose egg would it be?",
options: ["Gupta Ji", "Sharma Ji", "Garden", "of Chicken"],
  correctans: "of Chicken"},

  {question:" If it takes four minutes to boil one egg, how long will it take to boil four eggs?",
options: ["4 Min", "8 Min", "12 Min", "16 Min"],
  correctans: "4 Min"},

  {question:"What kind of tree fits in your hand?",
options: ["Palm tree", "Oak tree", "Christmas tree", "A 'pencil' tree"],
  correctans: "Palm tree"},

];

function suffle(options){
	for(let i=0;i<options.length;i++){
		let temp=options[i];
		let ran=Math.floor(Math.random()*4);		//0(inclusive) to 1(exclusive)
		options[i]=options[ran]; 
		options[ran]=temp;
	}
}

let score=0;
let questionnumber=0;
let quiz = document.querySelector(".quiz");

	let scoreEl=document.getElementById("score");

	let optionsEl=document.getElementById("options");
		let questionEl=document.getElementById("question");
		let nextEl=document.getElementById("next");

		let nextbtn=document.createElement("button");
		nextbtn.textContent="Next";
		nextbtn.addEventListener('click',()=>{
					if(questionnumber>=5){
						questionnumber=-1;
						score=0;
						
					}
					nextquestion();
		})
		nextEl.appendChild(nextbtn);



function showQuestion(){
	if(questionnumber==0){
		optionsEl.style.height="40%";

	}

	scoreEl.textContent=`score: ${score}`;
	
		nextbtn.textContent="next";
	
	

	const {question,options,correctans}=allquestions[questionnumber];
	
	suffle(options);
	questionEl.textContent=question;
	options.forEach((e)=>{
		
		const btn=document.createElement("button");
		btn.textContent=e;
		optionsEl.appendChild(btn);
		btn.addEventListener('click',()=>{
			if(correctans===e){
				score++;
			}
			else{
				score=score-0.25;
			}
			
			nextquestion();
			
			
		})

	})

}
function nextquestion(){
	questionnumber++;
		if(questionnumber>=5){
					scoreEl.textContent=`Score: ${score}/5`;
					
					questionEl.textContent="Quiz Completed!!!"
					optionsEl.textContent="";

				optionsEl.style.height="0px";


				scoreEl.style.fontSize="30px";
				nextbtn.textContent="reset";

				



				}
				else{
					optionsEl.textContent="";
					questionEl.textContent="";
					showQuestion();
				}
}
showQuestion();




