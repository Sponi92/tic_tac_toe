let tic_tac_toe=(function(){
    
    const gameBoard= {
        gameboard: new Array(9),
        playerArray: new Array(2),
        pictureArray: [],
        clickCount: 0,
        savePictures: function(){
            for (let i=0; i<6; i++){
            this.tyrion=document.createElement("img")
            this.tyrion.src="tyrion.jpg"
            this.jon=document.createElement("img")
            this.jon.src="Jon.png"
            this.jon.alt="X"
            this.tyrion.alt="O"
            this.pictureArray.push(this.jon)
            this.pictureArray.push(this.tyrion)
                
           }
        }
        ,

            cacheDom: function(){
            this.grid=document.getElementById("gameboard");
            this.humanButton1=document.getElementById("human1")
            this.humanButton2=document.getElementById("human2")
            this.computerButton1=document.getElementById("computer1")
            this.computerButton2=document.getElementById("computer2")
            this.restartButton=document.getElementById("restart")
            this.winner=document.getElementById("winner")
            },

        init: function(){
            
            for(let i=0;i<gameBoard.gameboard.length;i++){
                let newDiv=document.createElement("div");
                this.grid.appendChild(newDiv)
                newDiv.classList.add("grid-content")
                newDiv.setAttribute("data-index",i); 
            };
    },
        addFunctionalityToGrid: function(){
            this.gridContent=document.querySelectorAll(".grid-content")
            this.gridContent.forEach(item => {
                item.addEventListener("click", item=> {
                    if (this.playerArray[0]==undefined || this.playerArray[1]==undefined){
                        alert("Choose Player")
                        }
                        else{
                    if(item.target.textContent===""){
                game.chooseMarkerHuman(item.target); 
                game.cachegridHuman(item.target);
                game.checkWinner();
                if (game.playerCount===2 && gameBoard.clickCount<4 || game.playerCount===3 && gameBoard.clickCount<4){
                    game.chooseMarkerPC(); 
                    game.cacheGridPC();
                    game.checkWinner();
                    gameBoard.clickCount=gameBoard.clickCount+1;
                }   

                    }
            }        
                })
            });
        },
        setHumanButton1: function(){
            
            gameBoard.humanButton1.addEventListener("click", event =>{

            let player1 = player("Jon Snow ",0,"X" , true,this.jon);
            this.playerArray[0]=(player1);
            this.disableButtons1();
            this.alertStarter();
            });
        },

        setHumanButton2: function(){
            
            gameBoard.humanButton2.addEventListener("click", event =>{
            player2 = player("Tyrion Lannister",1, "O", true,this.tyrion);
            this.playerArray[1]=(player2);
            this.disableButtons2();
            game.playerCount=1;
            game.pictureCount=2;
            this.alertStarter();
        });
        },

        setComputerButton1: function(){
            
            gameBoard.computerButton1.addEventListener("click", event =>{
            player1 = player("Jon Snow",2, "X", false,this.jon);
            this.playerArray[0]=(player1);
            this.disableButtons1();
            this.computerButton2.disabled=true;
            this.alertStarter();
            });
        },
        
        setComputerButton2: function(){
            
            gameBoard.computerButton2.addEventListener("click", event =>{
            player2 = player("Tyrion Lannister",3, "O", false,this.tyrion);
            player1=player(1)
            this.playerArray[1]=(player2);
            this.disableButtons2();
            this.computerButton1.disabled=true;
            this.alertStarter();
            });
        },
        disableButtons1: function(){
                gameBoard.humanButton1.disabled=true;
                gameBoard.computerButton1.disabled=true;
            },
        disableButtons2: function(){
        gameBoard.humanButton2.disabled=true;
        gameBoard.computerButton2.disabled=true;
        },
        restart: function(){
                this.restartButton.addEventListener("click", event=>{
                    this.gridContent.forEach(item=>{
                        item.textContent="";
                        for(let i=0;i<game.library.length;i++){
                            game.library[i]=undefined;
                        }
                        this.playerArray=new Array(2);
                        this.enableButtons();
                        gameBoard.winner.textContent=""
                        gameBoard.winner.style.visibility="hidden"
                        game.playerCount=0,
                        game.pictureCount=1;
                        gameBoard.clickCount=0;
                    })
                } )

            },
        enableButtons: function(){
            gameBoard.humanButton1.disabled=false;
            gameBoard.computerButton1.disabled=false;
            gameBoard.humanButton2.disabled=false;
            gameBoard.computerButton2.disabled=false;
        },
        alertStarter: function(){
            if (this.playerArray[0]!=undefined && this.playerArray[1]!=undefined){
                if (game.playerCount===0){
                    alert("Jon Starts!")
                }
                else{
                    alert("Tyrion Starts!")
                }
            }
            else {
                return;
            }
        }
        };
    
        gameBoard.cacheDom();
        gameBoard.init();
        gameBoard.addFunctionalityToGrid();
        gameBoard.setHumanButton1();
        gameBoard.setHumanButton2();
        gameBoard.setComputerButton1();
        gameBoard.setComputerButton2();
        gameBoard.restart();
        gameBoard.savePictures();
    

    

    const player = (name,number,marker,human,image)=> ({
        name,
        number,
        marker, 
        human,
        image
        });
            
        const game= {
            library: new Array(9),
            playerCount: 0,
            pictureCount: 1,

            //add the pictures from the Array to the Gameboard

            chooseMarkerHuman: function(x){

                if (this.playerCount===0){
                    this.pictureCount=this.pictureCount-1
                    x.appendChild(gameBoard.pictureArray[this.pictureCount])
                    this.pictureCount=this.pictureCount+2


                }
                else if(this.playerCount===1){
                    this.pictureCount=this.pictureCount-1
                    x.appendChild(gameBoard.pictureArray[this.pictureCount])
                    this.pictureCount=this.pictureCount+2
                }
            },
            chooseMarkerPC: function(){
                if(this.playerCount===2){                  
                    do
                         randomNumber=this.createRandom();
                         while(gameBoard.gridContent[randomNumber].innerHTML!=="");
                     this.pictureCount=this.pictureCount-1
                     gameBoard.gridContent[randomNumber].appendChild(gameBoard.pictureArray[this.pictureCount]);
                     
                     this.pictureCount=this.pictureCount+2
                 }
                 else{
                    do
                    randomNumber=this.createRandom();
                    while(gameBoard.gridContent[randomNumber].innerHTML!=="");
                this.pictureCount=this.pictureCount-1
                gameBoard.gridContent[randomNumber].appendChild(gameBoard.pictureArray[this.pictureCount]);
                this.pictureCount=this.pictureCount+2;
                 }

            },

            createRandom: function(){
                    return Math.floor(Math.random() * Math.floor(9));
            },

            //add the marker to the library to check the winner

        cachegridHuman: function(x){
            if (this.playerCount===0){
            this.library[x.dataset.index]=gameBoard.playerArray[0].marker
            this.playerCount=gameBoard.playerArray[1].number;

            }
            else if(this.playerCount===1){
                this.library[x.dataset.index]=gameBoard.playerArray[1].marker 
                this.playerCount=gameBoard.playerArray[0].number;  
            }

        },
        cacheGridPC: function(){
            if (this.playerCount===2){
                this.library[randomNumber]=gameBoard.playerArray[0].marker
                this.playerCount=gameBoard.playerArray[1].number;
                }
            else{
                this.library[randomNumber]=gameBoard.playerArray[1].marker
                this.playerCount=gameBoard.playerArray[0].number;
                }
        },

        checkWinner: function(){
            if
            (this.library[0]==="X" && this.library[1]==="X" && this.library[2]==="X" || 
            this.library[3]==="X" && this.library[4]==="X" && this.library[5]==="X" ||  
            this.library[6]==="X" && this.library[7]==="X" && this.library[8]==="X" ||  
            this.library[0]==="X" && this.library[3]==="X" && this.library[6]==="X" ||  
            this.library[1]==="X" && this.library[4]==="X" && this.library[7]==="X" ||  
            this.library[2]==="X" && this.library[5]==="X" && this.library[8]==="X" || 
            this.library[0]==="X" && this.library[4]==="X" && this.library[8]==="X" ||   
            this.library[2]==="X" && this.library[4]==="X" && this.library[6]==="X" 
            ){
                gameBoard.winner.textContent=gameBoard.playerArray[0].name+ " Wins!"
                gameBoard.winner.style.visibility="visible"
            }
            else if
            (this.library[0]==="O" && this.library[1]==="O" && this.library[2]==="O" || 
            this.library[3]==="O" && this.library[4]==="O" && this.library[5]==="O" || 
            this.library[6]==="O" && this.library[7]==="O" && this.library[8]==="O" || 
            this.library[0]==="O" && this.library[3]==="O" && this.library[6]==="O" || 
            this.library[1]==="O" && this.library[4]==="O" && this.library[7]==="O" || 
            this.library[2]==="O" && this.library[5]==="O" && this.library[8]==="O" || 
            this.library[0]==="O" && this.library[4]==="O" && this.library[8]==="O" ||   
            this.library[2]==="O" && this.library[4]==="O" && this.library[6]==="O"
            ){
                gameBoard.winner.textContent=gameBoard.playerArray[1].name+ " Wins!";
                gameBoard.winner.style.visibility="visible";
            }
            else {
                for (let i=0;i<this.library.length;i++){
                    if(this.library[i]==undefined){
                        return
                        }
                    }
                    gameBoard.winner.textContent="Draw"
                    gameBoard.winner.style.visibility="visible"
                    this.counter=1;
                }
             
            }
        }
            
        


    return (gameBoard)

 })();