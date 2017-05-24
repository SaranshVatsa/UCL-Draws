function src(){
    
var teams=["Barcelona","Bayern", "Benfica", "Chelsea", "Juventus", "Paris", "PSV", "Zenit", "Real Madrod", "Atletico", "Sevilla", "Valencia", "Leverkusen", "Monchengladbach", "Wolfsburg","Porto","Arsenal", "Man Utd", "Man City","Roma","Lyon", "CSKA Moscow","Astana", "BATE","Dynamo Zaghreb", "Dynamo Kyiv", "Shakhtar", "Galatasaray", "Gent", "M. Tel-Aviv", "Olympiacos", "Malmo"];
var countries=["Spain", "Germany", "Portugal", "England", "Italy", "France", "Ned", "Russia", "Spain", "Spain", "Spain", "Spain",  "Germany", "Germany", "Germany", "Portugal", "England", "England", "England", "Italy", "France", "Russia", "Kaz", "Blr", "Cro", "Ukraine", "Ukraine", "Turkey", "Bel", "Israel", "Greece", "Sweden"];
var g1=[];
var g2=[];
var g3=[];
var g4=[];
var g5=[];
var g6=[];
var g7=[];
var g8=[];
var g1c=[];
var g2c=[];
var g3c=[];
var g4c=[];
var g5c=[];
var g6c=[];
var g7c=[];
var g8c=[];
var used=[];
var count, n, usecount, flag1=0, pass=0, runcount=0, outerbreak=0, i;
while(pass!=1){
    used=[];
    usecount=-1;
    
    
    count=0;
    while(count<4)
    {
        runcount++;
        if(runcount>1000){
            runcount=0;
            outerbreak=1;
            break;
        }
        if(count==0)
        {
            n=Math.floor(Math.random() * 8);
            if(n<0 || n>7){
                flag1=1;
            }
            for(i=0; i<=usecount; i++)
            {
                if(n==used[i]){
                    flag1=1;
                }
            }
            if(flag1==1){
                flag1=0;
                continue;
            }
            else
            {
                g1[0]=teams[n];
                g1c[0]=countries[n];
                count++;
                usecount++;
                used[usecount]=n;
            }
        }
        else
        {
            n=Math.floor(Math.random() * 24)+8;
            if(n<8 || n>31){
                flag1=1;
            }
            for(i=0; i<=usecount; i++)
            {
                if(n==used[i]){
                    flag1=1;
                }
            }
            for(i=0; i<count; i++)
            {
                if(g1c[i].localeCompare(countries[n])==0){
                    flag1=1;
                }
            }
            if(flag1==1){
                flag1=0;
                continue;
            }
            else
            {
                g1[count]=teams[n];
                g1c[count]=countries[n];
                count++;
                usecount++;
                used[usecount]=n;
            }
        }
    }
        
    if(outerbreak==1){
        outerbreak=0;
        continue;
    }
    
    
    
    
    count=0;
    while(count<4)
    {
        runcount++;
        if(runcount>1000){
            runcount=0;
            outerbreak=1;
            break;
        }
        if(count==0)
        {
            n=Math.floor(Math.random() * 8);
            if(n<0 || n>7){
                flag1=1;
            }
            for(i=0; i<=usecount; i++)
            {
                if(n==used[i]){
                    flag1=1;
                }
            }
            if(flag1==1){
                flag1=0;
                continue;
            }
            else
            {
                g2[0]=teams[n];
                g2c[0]=countries[n];
                count++;
                usecount++;
                used[usecount]=n;
            }
        }
        else
        {
            n=Math.floor(Math.random() * 24)+8;
            if(n<8 || n>31){
                flag1=1;
            }
            for(i=0; i<=usecount; i++)
            {
                if(n==used[i]){
                    flag1=1;
                }
            }
            for(i=0; i<count; i++)
            {
                if(g2c[i].localeCompare(countries[n])==0){
                    flag1=1;
                }
            }
            if(flag1==1){
                flag1=0;
                continue;
            }
            else
            {
                g2[count]=teams[n];
                g2c[count]=countries[n];
                count++;
                usecount++;
                used[usecount]=n;
            }
        }
    }
        
    if(outerbreak==1){
        outerbreak=0;
        continue;
    }
    
    
    
    
    
    count=0;
    while(count<4)
    {
        runcount++;
        if(runcount>1000){
            runcount=0;
            outerbreak=1;
            break;
        }
        if(count==0)
        {
            n=Math.floor(Math.random() * 8);
            if(n<0 || n>7){
                flag1=1;
            }
            for(i=0; i<=usecount; i++)
            {
                if(n==used[i]){
                    flag1=1;
                }
            }
            if(flag1==1){
                flag1=0;
                continue;
            }
            else
            {
                g3[0]=teams[n];
                g3c[0]=countries[n];
                count++;
                usecount++;
                used[usecount]=n;
            }
        }
        else
        {
            n=Math.floor(Math.random() * 24)+8;
            if(n<8 || n>31){
                flag1=1;
            }
            for(i=0; i<=usecount; i++)
            {
                if(n==used[i]){
                    flag1=1;
                }
            }
            for(i=0; i<count; i++)
            {
                if(g3c[i].localeCompare(countries[n])==0){
                    flag1=1;
                }
            }
            if(flag1==1){
                flag1=0;
                continue;
            }
            else
            {
                g3[count]=teams[n];
                g3c[count]=countries[n];
                count++;
                usecount++;
                used[usecount]=n;
            }
        }
    }
        
    if(outerbreak==1){
        outerbreak=0;
        continue;
    }
     
    
    count=0;
    while(count<4)
    {
        runcount++;
        if(runcount>1000){
            runcount=0;
            outerbreak=1;
            break;
        }
        if(count==0)
        {
            n=Math.floor(Math.random() * 8);
            if(n<0 || n>7){
                flag1=1;
            }
            for(i=0; i<=usecount; i++)
            {
                if(n==used[i]){
                    flag1=1;
                }
            }
            if(flag1==1){
                flag1=0;
                continue;
            }
            else
            {
                g4[0]=teams[n];
                g4c[0]=countries[n];
                count++;
                usecount++;
                used[usecount]=n;
            }
        }
        else
        {
            n=Math.floor(Math.random() * 24)+8;
            if(n<8 || n>31){
                flag1=1;
            }
            for(i=0; i<=usecount; i++)
            {
                if(n==used[i]){
                    flag1=1;
                }
            }
            for(i=0; i<count; i++)
            {
                if(g4c[i].localeCompare(countries[n])==0){
                    flag1=1;
                }
            }
            if(flag1==1){
                flag1=0;
                continue;
            }
            else
            {
                g4[count]=teams[n];
                g4c[count]=countries[n];
                count++;
                usecount++;
                used[usecount]=n;
            }
        }
    }
        
    if(outerbreak==1){
        outerbreak=0;
        continue;
    }
    
    
    count=0;
    while(count<4)
    {
        runcount++;
        if(runcount>1000){
            runcount=0;
            outerbreak=1;
            break;
        }
        if(count==0)
        {
            n=Math.floor(Math.random() * 8);
            if(n<0 || n>7){
                flag1=1;
            }
            for(i=0; i<=usecount; i++)
            {
                if(n==used[i]){
                    flag1=1;
                }
            }
            if(flag1==1){
                flag1=0;
                continue;
            }
            else
            {
                g5[0]=teams[n];
                g5c[0]=countries[n];
                count++;
                usecount++;
                used[usecount]=n;
            }
        }
        else
        {
            n=Math.floor(Math.random() * 24)+8;
            if(n<8 || n>31){
                flag1=1;
            }
            for(i=0; i<=usecount; i++)
            {
                if(n==used[i]){
                    flag1=1;
                }
            }
            for(i=0; i<count; i++)
            {
                if(g5c[i].localeCompare(countries[n])==0){
                    flag1=1;
                }
            }
            if(flag1==1){
                flag1=0;
                continue;
            }
            else
            {
                g5[count]=teams[n];
                g5c[count]=countries[n];
                count++;
                usecount++;
                used[usecount]=n;
            }
        }
    }
        
    if(outerbreak==1){
        outerbreak=0;
        continue;
    }
    
    
    
    count=0;
    while(count<4)
    {
        runcount++;
        if(runcount>1000){
            runcount=0;
            outerbreak=1;
            break;
        }
        if(count==0)
        {
            n=Math.floor(Math.random() * 8);
            if(n<0 || n>7){
                flag1=1;
            }
            for(i=0; i<=usecount; i++)
            {
                if(n==used[i]){
                    flag1=1;
                }
            }
            if(flag1==1){
                flag1=0;
                continue;
            }
            else
            {
                g6[0]=teams[n];
                g6c[0]=countries[n];
                count++;
                usecount++;
                used[usecount]=n;
            }
        }
        else
        {
            n=Math.floor(Math.random() * 24)+8;
            if(n<8 || n>31){
                flag1=1;
            }
            for(i=0; i<=usecount; i++)
            {
                if(n==used[i]){
                    flag1=1;
                }
            }
            for(i=0; i<count; i++)
            {
                if(g6c[i].localeCompare(countries[n])==0){
                    flag1=1;
                }
            }
            if(flag1==1){
                flag1=0;
                continue;
            }
            else
            {
                g6[count]=teams[n];
                g6c[count]=countries[n];
                count++;
                usecount++;
                used[usecount]=n;
            }
        }
    }
        
    if(outerbreak==1){
        outerbreak=0;
        continue;
    }
    
    
    count=0;
    while(count<4)
    {
        runcount++;
        if(runcount>1000){
            runcount=0;
            outerbreak=1;
            break;
        }
        if(count==0)
        {
            n=Math.floor(Math.random() * 8);
            if(n<0 || n>7){
                flag1=1;
            }
            for(i=0; i<=usecount; i++)
            {
                if(n==used[i]){
                    flag1=1;
                }
            }
            if(flag1==1){
                flag1=0;
                continue;
            }
            else
            {
                g7[0]=teams[n];
                g7c[0]=countries[n];
                count++;
                usecount++;
                used[usecount]=n;
            }
        }
        else
        {
            n=Math.floor(Math.random() * 24)+8;
            if(n<8 || n>31){
                flag1=1;
            }
            for(i=0; i<=usecount; i++)
            {
                if(n==used[i]){
                    flag1=1;
                }
            }
            for(i=0; i<count; i++)
            {
                if(g7c[i].localeCompare(countries[n])==0){
                    flag1=1;
                }
            }
            if(flag1==1){
                flag1=0;
                continue;
            }
            else
            {
                g7[count]=teams[n];
                g7c[count]=countries[n];
                count++;
                usecount++;
                used[usecount]=n;
            }
        }
    }
        
    if(outerbreak==1){
        outerbreak=0;
        continue;
    }
    
    
    count=0;
    while(count<4)
    {
        runcount++;
        if(runcount>1000){
            runcount=0;
            outerbreak=1;
            break;
        }
        if(count==0)
        {
            n=Math.floor(Math.random() * 8);
            if(n<0 || n>7){
                flag1=1;
            }
            for(i=0; i<=usecount; i++)
            {
                if(n==used[i]){
                    flag1=1;
                }
            }
            if(flag1==1){
                flag1=0;
                continue;
            }
            else
            {
                g8[0]=teams[n];
                g8c[0]=countries[n];
                count++;
                usecount++;
                used[usecount]=n;
            }
        }
        else
        {
            n=Math.floor(Math.random() * 24)+8;
            if(n<8 || n>31){
                flag1=1;
            }
            for(i=0; i<=usecount; i++)
            {
                if(n==used[i]){
                    flag1=1;
                }
            }
            for(i=0; i<count; i++)
            {
                if(g8c[i].localeCompare(countries[n])==0){
                    flag1=1;
                }
            }
            if(flag1==1){
                flag1=0;
                continue;
            }
            else
            {
                g8[count]=teams[n];
                g8c[count]=countries[n];
                count++;
                usecount++;
                used[usecount]=n;
            }
        }
    }
        
    if(outerbreak==1){
        outerbreak=0;
        continue;
    }
    
    
    
    
    for(i=0; i<4; i++){
        if(g1[i]==null || g2[i]==null || g3[i]==null || g4[i]==null || g5[i]==null || g6[i]==null || g7[i]==null || g8[i]==null)
        {
            pass=0;
            continue;
        }
    }
    pass=1;
    
}


var g1t1=document.getElementById("groupA_team1");
var g1t2=document.getElementById("groupA_team2");
var g1t3=document.getElementById("groupA_team3");
var g1t4=document.getElementById("groupA_team4");
g1t1.innerHTML=g1[0];
g1t2.innerHTML=g1[1];
g1t3.innerHTML=g1[2];
g1t4.innerHTML=g1[3];
    
    
var g2t1=document.getElementById("groupB_team1");
var g2t2=document.getElementById("groupB_team2");
var g2t3=document.getElementById("groupB_team3");
var g2t4=document.getElementById("groupB_team4");
g2t1.innerHTML=g2[0];
g2t2.innerHTML=g2[1];
g2t3.innerHTML=g2[2];
g2t4.innerHTML=g2[3];
    
var g3t1=document.getElementById("groupC_team1");
var g3t2=document.getElementById("groupC_team2");
var g3t3=document.getElementById("groupC_team3");
var g3t4=document.getElementById("groupC_team4");
g3t1.innerHTML=g3[0];
g3t2.innerHTML=g3[1];
g3t3.innerHTML=g3[2];
g3t4.innerHTML=g3[3];
    
var g4t1=document.getElementById("groupD_team1");
var g4t2=document.getElementById("groupD_team2");
var g4t3=document.getElementById("groupD_team3");
var g4t4=document.getElementById("groupD_team4");
g4t1.innerHTML=g4[0];
g4t2.innerHTML=g4[1];
g4t3.innerHTML=g4[2];
g4t4.innerHTML=g4[3];
    
var g5t1=document.getElementById("groupE_team1");
var g5t2=document.getElementById("groupE_team2");
var g5t3=document.getElementById("groupE_team3");
var g5t4=document.getElementById("groupE_team4");
g5t1.innerHTML=g5[0];
g5t2.innerHTML=g5[1];
g5t3.innerHTML=g5[2];
g5t4.innerHTML=g5[3];
    
var g6t1=document.getElementById("groupF_team1");
var g6t2=document.getElementById("groupF_team2");
var g6t3=document.getElementById("groupF_team3");
var g6t4=document.getElementById("groupF_team4");
g6t1.innerHTML=g6[0];
g6t2.innerHTML=g6[1];
g6t3.innerHTML=g6[2];
g6t4.innerHTML=g6[3];
    
var g7t1=document.getElementById("groupG_team1");
var g7t2=document.getElementById("groupG_team2");
var g7t3=document.getElementById("groupG_team3");
var g7t4=document.getElementById("groupG_team4");
g7t1.innerHTML=g7[0];
g7t2.innerHTML=g7[1];
g7t3.innerHTML=g7[2];
g7t4.innerHTML=g7[3];
    
    
var g8t1=document.getElementById("groupH_team1");
var g8t2=document.getElementById("groupH_team2");
var g8t3=document.getElementById("groupH_team3");
var g8t4=document.getElementById("groupH_team4");
g8t1.innerHTML=g8[0];
g8t2.innerHTML=g8[1];
g8t3.innerHTML=g8[2];
g8t4.innerHTML=g8[3];
    
}