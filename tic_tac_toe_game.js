//let tic_tac_toe=(function(){
    
    const gameBoard= {
        gameboard: new Array(9),
        playerArray: new Array(2),
        pictureArray: [],
        savePictures: function(){
            for (let i=0; i<5; i++){
            this.tyrion=document.createElement("img")
            this.tyrion.src="tyrion.jpg"
            this.jon=document.createElement("img")
            this.jon.src="Jon.png"
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
                game.chooseMarker(item.target); 
                game.cachegrid(item.target);
                game.checkWinner();     
                    }
                else{
                    return
                } 
            }        
                })
            });
        },
        setHumanButton1: function(){
            
            gameBoard.humanButton1.addEventListener("click", event =>{
            //let x = prompt("Put in your Name")
            if (x===null){
                let player1=player("No one",0,"X",true,this.jon)
                this.playerArray[0]=(player1);
                this.disableButtons1();
            }
            else{
            let player1 = player(x,0,"X" , true,this.jon);
            this.playerArray[0]=(player1);
            this.disableButtons1();
            }
            });
        },
        setComputerButton1: function(){
            
            gameBoard.computerButton1.addEventListener("click", event =>{
            player1 = player("Computer",0, "X", false,this.jon);
            this.playerArray[0]=(player1);
            this.disableButtons1();
            });
        },
        setHumanButton2: function(){
            
            gameBoard.humanButton2.addEventListener("click", event =>{
            //let x = prompt("Put in your Name") 
            if (x===null){
                player2=player("No one",1,"O",true,this.tyrion)
                this.playerArray[1]=(player2);
                this.disableButtons2();
            }
            else{
            player2 = player(x,1, "O", true,this.tyrion);
            this.playerArray[1]=(player2);
            this.disableButtons2();
            }
        });
        },
        
        setComputerButton2: function(){
            
            gameBoard.computerButton2.addEventListener("click", event =>{
            player2 = player("computer",1, "O", false,this.tyrion);
            player1=player(1)
            this.playerArray[1]=(player2);
            this.disableButtons2();
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
                    })
                } )
            },
        enableButtons: function(){
            gameBoard.humanButton1.disabled=false;
            gameBoard.computerButton1.disabled=false;
            gameBoard.humanButton2.disabled=false;
            gameBoard.computerButton2.disabled=false;
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
            counter: 1,


            chooseMarker: function(x){
                if (this.counter===1){
                    
                    x.appendChild(gameBoard.pictureArray[gameBoard.playerArray[0].number])
                    this.counter=0;
                    gameBoard.playerArray[0].number=gameBoard.playerArray[0].number+2


                }
                else{
                    x.appendChild(gameBoard.pictureArray[gameBoard.playerArray[1].number])
                    this.counter=1;
                    gameBoard.playerArray[1].number=gameBoard.playerArray[1].number+2

                }
            },
        cachegrid: function(x){
            if (this.counter===0){
            this.library[x.dataset.index]=gameBoard.playerArray[0].marker

            }
            else{
            this.library[x.dataset.index]=gameBoard.playerArray[1].marker

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
                gameBoard.winner.textContent="Jon Snow Wins!"
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
                gameBoard.winner.textContent="Tyrion Lannister Wins!";
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
                }
             
            }
        }
            
        


    //return (gameBoard)

 //})();