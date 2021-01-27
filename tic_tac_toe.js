// let tic_tac_toe=(function(){
    playerArray=new Array(2);
    counter=1;
    const gameBoard= {
        gameboard: new Array(9),

            cacheDom: function(){
            this.grid=document.getElementById("gameboard");
            this.humanButton1=document.getElementById("human1")
            this.humanButton2=document.getElementById("human2")
            this.computerButton1=document.getElementById("computer1")
            this.computerButton2=document.getElementById("computer2")
            this.restartButton=document.getElementById("restart")
            },

        init: function(){
            
            for(let i=0;i<gameBoard.gameboard.length;i++){
                let newDiv=document.createElement("div");
                newDiv.textContent=gameBoard.gameboard[i];
                this.grid.appendChild(newDiv)
                newDiv.classList.add("grid-content")
                newDiv.setAttribute("data-index",i); 
            };
    },
        addFunctionalityToGrid: function(){
            this.gridContent=document.querySelectorAll(".grid-content")
            this.gridContent.forEach(item => {
                item.addEventListener("click", item=> {
                    if (playerArray[0]==undefined || playerArray[1]==undefined){
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
            let x = prompt("Put in your Name")
            player1 = player(x,1, "x", true);
            player2= player (2)
            playerArray[0]=(player1);
            this.disableButtons();
            });
        },
        setComputerButton1: function(){
            
            gameBoard.computerButton1.addEventListener("click", event =>{
            player1 = player(1, "x", false);
            player2= player (2)
            playerArray[0]=(player1);
            this.disableButtons();
            });
        },
        setHumanButton2: function(){
            
            gameBoard.humanButton2.addEventListener("click", event =>{
            let x = prompt("Put in your Name")     
            player2 = player(x,2, "o", true);
            player1=player(1)
            playerArray[1]=(player2);
            this.disableButtons();
        });
        },
        
        setComputerButton2: function(){
            
            gameBoard.computerButton2.addEventListener("click", event =>{
            player2 = player(2, "o", false);
            player1=player(1)
            playerArray[1]=(player2);
            this.disableButtons();
            });
        },
        disableButtons: function(){
            if (player1.marker==="x"){
                gameBoard.humanButton1.disabled=true;
                gameBoard.computerButton1.disabled=true;
            }
            else{
                gameBoard.humanButton2.disabled=true;
                gameBoard.computerButton2.disabled=true;
            }
            },
        restart: function(){
                this.restartButton.addEventListener("click", event=>{
                    this.gridContent.forEach(item=>{
                        item.textContent="";
                        for(let i=0;i<game.library.length;i++){
                            game.library[i]=undefined;
                        }
                        playerArray=new Array(2);
                        this.enableButtons();
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
        console.log(gameBoard.humanButton1)
        gameBoard.setHumanButton1();
        gameBoard.setHumanButton2();
        gameBoard.setComputerButton1();
        gameBoard.setComputerButton2();
        gameBoard.restart();
    

    

    const player = (name,number,marker,human)=> ({
        name,
        number,
        marker, 
        human       
        });
            
        const game= {
            library: new Array(9),

            chooseMarker: function(x){
                if (counter===1){
                    x.textContent=("X")
                    counter=0;
                }
                else{
                    x.textContent=("O")
                    counter=1;
                }
            },
        cachegrid: function(x){
            this.library[x.dataset.index]=x.textContent
            console.log(game.library)
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
                alert(playerArray[0].name+" Wins!")
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
                alert(playerArray[1].name+" Wins!")
            }
            else {
                for (let i=0;i<this.library.length;i++){
                    if(this.library[i]==undefined){
                        return
                        }
                    }
                        alert("Draw")
                    
                }
             
            }
        }
            
        


    //return (gameBoard)

// })();