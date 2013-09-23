  var max=0;
  var scrollRoll=0;
  var scrollTopLast=0;
    var scrollTotal=0;	
   var timeSpent;
   var spentAtSection=0;
var sectionTimeArr={};

$(document).ready(function() {
                  var startTime= new Date();
                  var navSectionTime=0;
                  var centerSectionTime=0;
                  var topSectionTime=0;
                  var footerSectionTime=0;

                   $('#view').click(function() 
		              {
		              	var viewTime= new Date();
		              	var timePage=(viewTime-startTime)/1000;
				       
		                
                         $('.navTime>span').html(sectionTimeArr[0]);
                         $('.topTime>span').html(sectionTimeArr[1]);
                         $('.centerTime>span').html(sectionTimeArr[2]);
                         $('.footerTime>span').html(sectionTimeArr[3]);
		                $('.clickTime>span').html(timeSpent);
		                $('.pageTime>span').html(timePage);
		                $('#lightbox').css({display:'block'
		                	});
				       
			          });
                  


             var timeSpentSection= function(sectionName){
             	var sectEnter;
             	var sectExit;
             	$(sectionName).mouseenter(function() {
             		 sectEnter= new Date().getTime();
             		 console.log( "sect enter"+sectEnter);
                     
                });
                $(sectionName).mouseleave(function() {
                   sectExit= new Date().getTime();
                    console.log( "sect Exit"+sectExit);
                    spentAtSection=Number(sectExit-sectEnter)/1000;
                    console.log( "scroll top" + $(sectionName).scrollTop());
                     if(sectionName==="#nav")
                     {
                      navSectionTime=navSectionTime+spentAtSection;
                      sectionTimeArr[0]=navSectionTime;
                        console.log(" Total Time spent nav " + sectionTimeArr[0]);

                    }
                    if(sectionName==="#article-center")
                     {
                     centerSectionTime=centerSectionTime+spentAtSection;
                   
                     sectionTimeArr[1]=centerSectionTime;
                        console.log(" Total Time article-center " +centerSectionTime);

                    }
                    if(sectionName==="#article-top")
                     {
                      topSectionTime=topSectionTime+spentAtSection;
                      sectionTimeArr[2]=topSectionTime;
                        console.log(" Total Time article top " + topSectionTime);

                    }
                    if(sectionName==="#footer")
                     {
                      footerSectionTime=footerSectionTime+spentAtSection;
                      sectionTimeArr[3]=footerSectionTime;
                        console.log(" Total Time footer " + footerSectionTime);

                    }

               console.log("Time spent" +spentAtSection);

                });
               
                   
             };

                     timeSpentSection("#nav");  
                     timeSpentSection("#article-top");
                     timeSpentSection("#article-center");
                     timeSpentSection("#footer");
                  
                  
				$(window).scroll(function(){
					var scrollTop = $(window).scrollTop();
					var docHeight = $(document).height();
					var winHeight = $(window).height();
					var scrollPercent = (scrollTop) / (docHeight - winHeight);
					//spr== Scroll percent rounded
					var spr = Math.round(scrollPercent*100);
                         
                          
                	var totalDistance =function ()

					{ 

					                      	 
						scrollRoll = Math.abs(scrollTopLast - scrollTop)
                    	scrollTotal=scrollTotal+scrollRoll;
                    	scrollTopLast = scrollTop; 
              
                 	return $('.scrollTotal>span').html(scrollTotal);
                	};

              		var totalPercentageView =function ()
					{
						if(spr>max)
						{
							max=spr;
						}                   
                    return $('.scrollPercentLabel>span').html(max);
                   	};
                      
				        totalPercentageView(); 
		                totalDistance();
                 

                   $('#signup').click(function() 
                    {
				       var clickTime=new Date();
				       timeSpent=(clickTime-startTime)/1000;
				       
	                });

			         

				});


               
				      
	               


             
               
			});