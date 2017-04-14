function adScroll(){          
        var v_width =$('.roll').width()*0.9;       //最外层宽度*0.9 = roll_img的宽度     
        var len = $('.rol .ro').length;      //ro的个数
        var img_item =$('.rol .ro'); 
        var appli_width =180;   //内容的宽度，不包括margin
        var item_width =appli_width+5; //min-width
        var page = 1;  
        var i = Math.ceil(v_width / item_width)-1; //每版放i个图片 
        var margin =Math.ceil((v_width/i-appli_width)*0.5);
        $applist =$(".rol");
        $prevbtn =$(".prev");
        $nextbtn =$(".next");

        img_item.css({
            "margin":"15px  "+margin+"px"
            });
        item_width =appli_width+margin*2;
        var d_width = Math.ceil(item_width * len);  //真实的总宽度
        $applist.width(d_width);
        $('.roll_img').width(item_width*i);

         if(len < i){
             $prevbtn.hide();
             $nextbtn.hide();
         }else{
             $prevbtn.show();
             $nextbtn.show();    
        } 
        $applist.animate({  
            'left':0
        },0);
        $nextbtn.click(function(){ 
            var v_width=$('.roll_img').width();
             var page_count  ;   //只要不是整数，就往大的方向取最小的整数  
             if(i==2){
                 page_count = Math.ceil(len / i)             
             }
             else{
                 page_count = Math.ceil(len /(v_width / item_width)) 
             }
             if( !$applist.is(":animated") ){    //判断"内容展示区域"是否正在处于动画  
                  if( page == page_count ){  //已经到最后一个版面了,如果再向后，必须跳转到第一个版面。  
                    $applist.animate({ left : '0px'}, "slow"); //通过改变left值，跳转到第一个版面  
                    page = 1;  
                  }else{  
                    $applist.animate({ left : '-='+v_width }, "slow");  //通过改变left值，达到每次换一个版面  
                    page++;  
                 }  
             }  
       });  
        $prevbtn.click(function(){
             var v_width=$('.roll_img').width();  
             var page_count=0  ;   //只要不是整数，就往大的方向取最小的整数  
             if(i==2){
                 page_count = Math.ceil(len / i)             
             }
             else{
                 page_count = Math.ceil(len /(v_width / item_width)) 
             }
             if(!$applist.is(":animated") ){    //判断"内容展示区域"是否正在处于动画  
                 if(page == 1 ){  //已经到第一个版面了,如果再向前，必须跳转到最后一个版面。  
                    $applist.animate({ left : '-='+v_width*(page_count-1) }, "slow");  
                    page = page_count;  
                }else if(page>0){
                    $applist.animate({ left : '+='+v_width }, "slow");  
                    page--;  
                }  
             }  
         }); 
    }
