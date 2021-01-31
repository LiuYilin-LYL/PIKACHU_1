const string = `
/* 来画一只皮卡丘 */
/* 皮卡丘是黄色的 */
*{box-sizing: border-box;
    margin: 0;
    padding: 0;}
    *::before, *::after{box-sizing: border-box;}
    body{
    
        background-color: #ffe600;
        min-height: 50vh;
    }

    .skin{
        position: relative;
       
    }
    /* 首先画皮卡丘的鼻子 */
    .nose{
        border:10px solid black;
        border-color: black transparent  transparent  transparent;
        width: 0px;
        height: 0px;
        position: relative;
        left: 50%;
        top:145px;
        margin-left: -10px;
       z-index: 2;
    }
    @keyframes wave{
        0%{
            transform: rotate(0deg);
        }
        33%{
            transform: rotate(5deg);
        }
        66%{
            transform: rotate(-5deg);
        }
        100%{
            transform: rotate(0deg);
        }
    }
    .yuan{
        position: absolute;
        width: 20px;
        height: 6px;
        top:-16px;
        left:-10px;
        border-radius:10px 10px 0 0;
        background:black;
    
    }

    .nose:hover{
        
        animation: wave 0.5s infinite linear;
    }
    /* 再画皮卡丘的圆眼睛 */
    .eye { border:2px solid #000000;
        border-radius: 50%;
        width: 64px;
        height: 64px;
        position: absolute;
        left:50%;
        top:100px;
        margin-left: -32px;
        background-color: #2e2e2e;
       
    }
    .eye.left{ 
        transform: translateX(-116px);
       
    }
    .eye.right{ 
        transform: translateX(116px);
       
    }
   
    .eye::before{
        content: "";
        display: block;
        border: 3px solid #000000;
        width: 29px;
        height:29px;
        background-color: #fff;
        border-radius: 50%;
       position: relative;
       left:6px;
       top:3px;
    
    }
    /* 接下来画皮卡丘的嘴巴 */
    .mouth{
     
        width: 200px;
        height: 200px;
        position: absolute;
        left: 50%;
        top: 170px;
        margin-left: -100px;
    
    }
    .mouth .up {
        position: relative;
        top:-10px;
        z-index: 1;
    }
    .mouth .up .lip{
        background-color: #ffe600;
        border: 5px solid #000000;
        height: 40px;
        width: 100px;
        border-top-color:transparent;
        border-right-color:transparent;
        position: relative;
        position: absolute;
        left: 50%;
        margin-left: -50px;
        top: -20px;
    }
    .mouth .up .lip.left{
        border-radius: 0 0 0 100px;
        transform: rotate(-20deg) translateX(-56px);
       }
    
    .mouth .up .lip.right{
        border-radius: 0 0 100px 0;
        transform: rotate(20deg) translateX(56px);
    }
    .mouth .up .lip::before{
        content: "";
        display: block;
        width: 8px;
        height:30px;
        position: absolute;
        width: 8px;
        height:36px;
        top:-6px;
        background-color: #ffe600;
    }
    .mouth .up .lip.left::before{
        left: 89px;
    }
    .mouth .up .lip.right::before{
        right:89px;
    }
    .mouth .down{
        height: 150px;
        position: absolute;
        overflow: hidden;
        width:100%;
        top: 5px;
    }
    .mouth .down .yuan1{
        background-color: #9b000a;
        border: 3px solid black;
        width: 150px;
        height: 1000px;
        position: absolute;
        bottom:0;
        left:50%;
        margin-left:-75px;
        border-radius: 75px/300px;
        overflow: hidden;
    }
    .mouth .down .yuan1 .yuan2{
       
        width: 200px;
        height: 300px;
        background: #ff485f;
        position: absolute;
        bottom: -190px;
        left:50%;
        margin-left:-100px;
       border-radius: 100px;
    }
    
    @keyframes zhuan{
        0%{
            transform: rotate(0deg);
        }
        33%{
            transform: rotate(2deg);
        }
        66%{
            transform: rotate(-2deg);
        }
        100%{
            transform: rotate(0deg);
        }
    }
    .down:hover{
        animation: zhuan 1s infinite linear;
    
     }
     /* 皮卡丘可以放电 */
    .face{
        background-color: #ff0000;
        position: absolute;
        border: 3px solid black;
        width: 84px;
        height: 84px;
        border-radius: 50%;
        top:208px;
        left: 50%;
        margin-left:-42px;
    }
  
      .face.left{
        transform: translateX(-180px);
        background: #ff0000;
        border-radius: 50%;
      }
      .face.right{
        transform: translateX(180px);
        background: #ff0000;
        border-radius: 50%;
      }

      .face.left > img{
        transform: rotateY(180deg);
        transform-origin: 0 0;
      }
      .face > img{
        position: relative;
        top: 50%;
        left: 50%;
      }
   /* 皮卡丘完成了！*/
      
`
export default string;