// // html5shiv MIT @rem remysharp.com/html5-enabling-script
// // iepp v1.6.2 MIT @jon_neal iecss.com/print-protector
// /*@cc_on(function(m,c){var z="abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video";function n(d){for(var a=-1;++a<o;)d.createElement(i[a])}function p(d,a){for(var e=-1,b=d.length,j,q=[];++e<b;){j=d[e];if((a=j.media||a)!="screen")q.push(p(j.imports,a),j.cssText)}return q.join("")}var g=c.createElement("div");g.innerHTML="<z>i</z>";if(g.childNodes.length!==1){var i=z.split("|"),o=i.length,s=RegExp("(^|\\s)("+z+")",
// "gi"),t=RegExp("<(/*)("+z+")","gi"),u=RegExp("(^|[^\\n]*?\\s)("+z+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),r=c.createDocumentFragment(),k=c.documentElement;g=k.firstChild;var h=c.createElement("body"),l=c.createElement("style"),f;n(c);n(r);g.insertBefore(l,
// g.firstChild);l.media="print";m.attachEvent("onbeforeprint",function(){var d=-1,a=p(c.styleSheets,"all"),e=[],b;for(f=f||c.body;(b=u.exec(a))!=null;)e.push((b[1]+b[2]+b[3]).replace(s,"$1.iepp_$2")+b[4]);for(l.styleSheet.cssText=e.join("\n");++d<o;){a=c.getElementsByTagName(i[d]);e=a.length;for(b=-1;++b<e;)if(a[b].className.indexOf("iepp_")<0)a[b].className+=" iepp_"+i[d]}r.appendChild(f);k.appendChild(h);h.className=f.className;h.innerHTML=f.innerHTML.replace(t,"<$1font")});m.attachEvent("onafterprint",
// function(){h.innerHTML="";k.removeChild(h);k.appendChild(f);l.styleSheet.cssText=""})}})(this,document);@*/


// function initParseLocation(){
//   if(window.location.href.indexOf('/?') != -1){
//     var location = window.location.href.substr(0,window.location.href.indexOf('/?'));
//     var hash = window.location.href.substr(window.location.href.indexOf('?')+1);
//     window.location.href = location + '#' + hash;
//   }
// }
// initParseLocation();

// // jQuery.noConflict();
// // page init
// jQuery(function(){
//   initPositionMenu();
//   initNavigation();
//   fixedBoxes();
//   initParalaxPage();
//   initScripts();
//   initHoverFade();
//   initDropDown();
//   initTooltips();
//   initSearchForm();
//   initAnchor();
//   initChangeHash();
//   initFadeLogo();
// });

// function initScripts(){
//   initInputs();
//   jcf.customForms.replaceAll();
//   initOpenClose();
//   initSameHeight();
//   cycleGallery();
//   initGallery();
//   initArticleLinks();
//   initScrollGallery();
//   initSlideShow();
//   initPostTooltip();
//   initPopups();
//   initTabs();
//   initSlideDescription();
// }

// //slide description on comunity gallery init
// function initSlideDescription(){
//   var animSpeed = 400;
//   jQuery('.carousel3 .slide:has(.text)').each(function(){
//     var item = jQuery(this);
//     var slideBox = item.find('.text');
//     item.hover(function(){
//       slideBox.stop(true,true).slideDown(animSpeed);
//     },function(){
//       slideBox.stop(true,true).slideUp(animSpeed);
//     })
//   })
// }


// function initPostTooltip(){
//   var hoverClass = 'hover';
//   var speed = 400;
//   var links = jQuery('.meta-section a.link-article');
  
//   links.each(function(){
//     var link = jQuery(this);
//     if(link.attr('title') && !link.attr('data-title')){
//       var tooltip = link.parent().find('.hover-tooltip');
//       var contentTooltip = tooltip.find('.tooltip-text');
//       link.attr('data-title',link.attr('title')).removeAttr('title');
//       link.bind('click',function(){
//         if(!link.hasClass(hoverClass)){
//           link.addClass(hoverClass);
//           contentTooltip.empty().text(link.attr('data-title'));
//           tooltip.stop().show().css({
//             opacity: 0,
//             top: link.position().top - tooltip.outerHeight() - 10,
//             left: link.position().left + link.outerWidth()/2 - tooltip.outerWidth()/2
//           }).animate({opacity:1},{queue:false,duration:speed,complete:function(){tooltip.css({opacity:''})}});
//         }
//         return false;
//       });
//       contentTooltip.click(function(){
//         var e=this; 
//         if(window.getSelection){ 
//           var s=window.getSelection(); 
//           if(s.setBaseAndExtent){ 
//           s.setBaseAndExtent(e,0,e,e.innerText.length-1); 
//         }else{ 
//           var r=document.createRange(); 
//           r.selectNodeContents(e); 
//           s.removeAllRanges(); 
//           s.addRange(r);
//         } 
//         }else if(document.getSelection){ 
//           var s=document.getSelection(); 
//           var r=document.createRange(); 
//           r.selectNodeContents(e); 
//           s.removeAllRanges(); 
//           s.addRange(r); 
//         }else if(document.selection){ 
//           var r=document.body.createTextRange(); 
//           r.moveToElementText(e); 
//           r.select();}
//       })
//       var btnClose = tooltip.find('a.btn-close');
//       btnClose.each(function(){
//         jQuery(this).click(function(){
//           hideTooltip();
//           return false;
//         })
//       });
//       jQuery(window).bind('tooltipsHide',function(){
//         tooltip.stop().animate({opacity:0},{queue:false,duration:speed/2,complete:function(){}});
//         setTimeout(function(){
//           tooltip.hide();
//         },speed/2)
//         links.removeClass(hoverClass);
//       })
//       function hideTooltip(){
//         tooltip.animate({opacity:0},{queue:false,duration:speed,complete:function(){tooltip.hide();}});
//         links.removeClass(hoverClass);
//       }
//     }
//   });
// }

// function initFadeLogo(){
//   var speed = jQuery.browser.msie && jQuery.browser.version < 9 ? 0 : 500;
//   var chief = jQuery('.bg-chief');
//   var fallenHero = jQuery('.f-ribbon');
//   if(chief.length && fallenHero.length){
//     fallenHero.show().css({opacity:0});
//     var links = jQuery('a.tab').filter('[data-change-logo]');
//     links.each(function(){
//       var link = jQuery(this);
//       link.click(function(){
//         if(link.attr('data-change-logo') === 'true'){
//           flag = true;
//           chief.stop().animate({opacity: 0},{queue:false,duration:speed});
//           fallenHero.stop().animate({opacity: 1},{queue:false,duration:speed});
//         }
//         else if(link.attr('data-change-logo') === 'false'){
//           flag = false;
//           fallenHero.stop().animate({opacity: 0},{queue:false,duration:speed});
//           chief.stop().animate({opacity: 1},{queue:false,duration:speed});
//         }
//       });
//     });
//   }
// }


// function initParalax(){
//   var win = jQuery(window);
//   var page = jQuery('#wrapper');
//   var holder = jQuery('#w1');
//   var animSpeed = 1500;
  
//   if(holder.length && page.length){
//     var sections = holder.find('>.page');
//     var allLayers = [];
//     holder.css({
//       height:holder.height(), 
//       position:'relative'
//     });
//     var k = 0;
//     sections.each(function(n){
//       var section = jQuery(this);
//       var layers = jQuery('[data-effect*="layer"]', section);
//       if(layers.length){
//         // animating layers of first section
//         if(n == 0){
//           layers.each(function(){
//             var layer = jQuery(this);
//             layer.data('data-effect', jQuery.parseJSON(layer.attr('data-effect')));
            
//             if(layer.data('data-effect').units){
//               layer.css({backgroundPosition: layer.data('data-effect').offsetX + ' ' + (layer.position().top + section.height()) + 'px'})
//                    .animate({backgroundPosition: layer.data('data-effect').offsetX + ' ' + (layer.position().top + layer.data('data-effect').offsetY -115) + 'px'},
//                       {duration: animSpeed*layer.data('data-effect').speed, queue: false, complete: function(){
//                   }});
//             } else{
//               layer.css({backgroundPosition: (layer.position().left + layer.data('data-effect').offsetX + win.width()/2) + 'px ' + (layer.position().top + section.height()) + 'px'})
//                    .animate({backgroundPosition: (layer.position().left + layer.data('data-effect').offsetX + win.width()/2) + 'px ' + (layer.position().top + layer.data('data-effect').offsetY -115) + 'px'},
//                       {duration: animSpeed*layer.data('data-effect').speed, queue: false});
//             }
//           });
//         } else{
//           layers.each(function(){
//             var layer = jQuery(this);
//             layer.data('data-effect', jQuery.parseJSON(layer.attr('data-effect')));
            
//             if(layer.data('data-effect').units){
//               layer.css({backgroundPosition: layer.data('data-effect').offsetX + ' ' + (layer.position().top + layer.data('data-effect').offsetY) + 'px'});
//             } else{
//               layer.css({backgroundPosition: (layer.position().left + layer.data('data-effect').offsetX + win.width()/2) + 'px ' + (layer.position().top + layer.data('data-effect').offsetY) + 'px'});
//             }
//           });
//         }
        
//         allLayers.push(layers);
//         section.data('layers', k);
//         k++;
//       } else{
//         section.data('layers', -1);
//       }
//       section.data('top',jQuery(this).offset().top);
//     });
    
//     page.bind('scroll', function(){
//       var winH = page.height();
//       var _scrollTop = page.scrollTop();
//       sections.each(function(){
//         var section = jQuery(this);
//         var topOffset = section.offset().top;
//         var sectionH = section.height();
//         var t;
        
//         if(winH > topOffset && topOffset + sectionH > 0 && _scrollTop > 115){
//           if(section.data('layers') >= 0){
//             allLayers[section.data('layers')].each(function(){
//               var layer = jQuery(this);
//               var yPos = parseInt((_scrollTop - section.position().top)/layer.data('data-effect').speed);
//               if(layer.data('data-effect').offsetY != 0){
//                 if(layer.data('data-effect').start > yPos && yPos > 0){
//                   layer.css({backgroundPosition:  (layer.position().left + layer.data('data-effect').offsetX + win.width()/2) + 'px '+ (layer.data('data-effect').offsetY + yPos - layer.data('data-effect').start) + 'px'});
//                 }else if(layer.data('data-effect').offsetY <= yPos){
//                   if(layer.data('data-effect').units){
//                     layer.css({backgroundPosition: (layer.data('data-effect').offsetX)+ ' ' + (yPos - _scrollTop + section.position().top) + 'px'});
//                   } else{
//                     layer.css({backgroundPosition: (layer.position().left + layer.data('data-effect').offsetX + win.width()/2) + 'px ' + (yPos - _scrollTop + section.position().top) + 'px'});
//                   }
//                 } else{
//                   if(layer.data('data-effect').units){
//                     layer.css({backgroundPosition: layer.data('data-effect').offsetX + ' ' + (layer.data('data-effect').offsetY - _scrollTop + section.position().top) + 'px'});
//                   } else{
//                     layer.css({backgroundPosition: (layer.position().left + layer.data('data-effect').offsetX + win.width()/2) + 'px ' + (layer.data('data-effect').offsetY - _scrollTop + section.position().top) + 'px'});
//                   }
//                 }
//               } else if(yPos <= 0){
//                 if(layer.data('data-effect').units){
//                   layer.css({backgroundPosition: layer.data('data-effect').offsetX + ' ' + yPos + 'px'});
//                 } else{
//                   layer.css({backgroundPosition: win.width()/2+'px '+ yPos + 'px'});
//                 }
//               }
//             });
//           }
//         }
//       });
//     });
    
//     win.bind('resize', function(){
//       page.trigger('scroll');
//     });
//   }
// }

// function initPositionLoader(param){
//   var loader = jQuery('.ico-loader');
//   if(loader.length){
//     loader.css({
//       left: param.pageX + 10,
//       top: param.pageY + 10
//     })
//     jQuery('body').bind('mousemove',function(e){
//       loader.css({
//         left: e.pageX + 10,
//         top: e.pageY + 10
//       })
//     })
//   }
// }


// function unbindLoader(){
//   jQuery('body').bind('mousemove');
// }

// function initAnchor(){
//   var speed = 1000;
//   var nav = jQuery('#nav');
//   var links = jQuery('a.anchor');
//   links.each(function(){
//     var link = jQuery(this);
//     var btnNav = nav.find('a[href*="'+link.attr('href')+'"]');
//     if(btnNav.length){
//       link.click(function(){
//         btnNav.trigger('click');
//         return false;
//       });
//     }
//   });
// }

// function initArticleLinks(){
//   var links = jQuery('a.open-article');
//   links.each(function(){
//     var link = jQuery(this);
//     if(!link.data('init')){
//       link.data('init',true);
//       link.click(function(e){
//         initPositionLoader(e);
//         sourceLightbox(link.attr('href'), link.attr('data-section'));
//         return false;
//       })
//     }
//   });
// }

// function sourceLightbox(url, href){
//   var activeClass = 'active';
//   var timer, timeSlide;
//   var speed = 500;
//   var timeout = 500;
//   var btn = jQuery('[href*="'+ href +'"]');
//   var ajaxHolder = jQuery('#'+ href +' .ajax-holder');
//   if(btn.length && ajaxHolder.length){
//     btn = btn.eq(0);
//     var content = ajaxHolder.find('.ajax-content');
//     if(!ajaxHolder.find('[data-url="'+ url +'"]').length){
//       btn.trigger('click');
//       if(btn.parent().hasClass(activeClass)){timeout = 10;}
//       else{timeout = 500;}
//       if(timer) clearTimeout(timer);
//       timer = setTimeout(function(){
//         ajaxLoadArticle(url,content,ajaxHolder);
//       },timeout)
//     }
//     else{
//       btn.trigger('click');
//       if(btn.parent().hasClass(activeClass)){timeout = 10;}
//       else{timeout = 500;}
//       if(timeSlide) clearTimeout(timeSlide);
//       timeSlide = setTimeout(function(){
//         ajaxHolder.show();
//         if(content.hasClass(activeClass)){
//           content.children().fadeOut(speed);
//           if(timer) clearTimeout(timer);
//           timer = setTimeout(function(){
//             ajaxHolder.find('[data-url="'+ url +'"]').stop().hide().fadeIn(speed);
//           },speed)
//         }
//         else{
//           content.addClass(activeClass).stop().css('marginLeft',-content.outerWidth(true)).animate({marginLeft:0},{queue:false,duration:speed,complete:function(){
//             ajaxHolder.addClass(activeClass).find('[data-url="'+ url +'"]').fadeIn(speed);
//           }})
//         }
//       },timeout)
//     }
//     jQuery(window).bind('closePopup',function(){
//       if(content.hasClass(activeClass)){
//         jQuery(window).trigger('tooltipsHide');
//         content.children().fadeOut(speed);
//         if(timer) clearTimeout(timer);
//         timer = setTimeout(function(){
//           ajaxHolder.removeClass(activeClass);
//           content.removeClass(activeClass).animate({marginLeft: -content.outerWidth(true)},{queue:false,duration:speed,complete:function(){
//             ajaxHolder.hide();
//           }});
//         },speed)
//       }
//     })
//   }
// }

// function ajaxLoadArticle(_url,holder,ajaxHolder){
//   var activeClass = 'active';
//   var timer, timeSlide;
//   var speed = 500;
//   var timeout = 500;
//   var loadingClass = 'loading';
//   var body = jQuery('body');
//   body.addClass(loadingClass);
//   jQuery.ajax({
//     url: _url,
//     //data: 'ajax=1',
//     dataType: 'html',
//     success: function(data){
//       setTimeout(function(){
//         body.removeClass(loadingClass);
//         unbindLoader();
//         var html = jQuery(data).attr('data-url',_url).appendTo(holder);
//         ajaxHolder.show();
//         initScripts();
//         html.hide();
//         if(holder.hasClass(activeClass)){
//           holder.children().fadeOut(speed);
//           if(timer) clearTimeout(timer);
//           timer = setTimeout(function(){
//             html.stop().hide().fadeIn(speed);
//           },speed)
//         }
//         else{
//           holder.addClass(activeClass).stop().css('marginLeft', -holder.parent().outerWidth(true)).animate({marginLeft:0},{queue:false,duration:speed,complete:function(){
//             ajaxHolder.addClass(activeClass);
//             html.fadeIn(speed);
//           }})
//         }
//         var btnClose = html.find('a.close-link');
//         btnClose.each(function(){
//           jQuery(this).click(function(){
//             html.fadeOut(speed,function(){
//               ajaxHolder.removeClass(activeClass);
//               holder.removeClass(activeClass).animate({marginLeft: -holder.outerWidth(true)},{queue:false,duration:speed,complete:function(){
//                 ajaxHolder.hide();
//               }});
//             });
//             return false;
//           });
//         });
//         try{
//           twttr.widgets.load();
//           FB.XFBML.parse();
//         }catch(ex){}
//       },1000)
        
//     },
//     error:function(){
//       alert('Ajax error!');
//     }
//   })
// }



// //init search form
// function initSearchForm(){
//   var loadingClass = 'loading';
//   var body = jQuery('body');
//   var forms = jQuery('form.search-form');
//   forms.each(function(){
//     var form = jQuery(this);
//     var btnClean = form.find('a.clean');
//     var holder = jQuery('.carousel2-frame > .holder');
//     if(holder.length){
//       form.submit(function(e){
//         body.addClass(loadingClass);
//         initPositionLoader(e);
//         jQuery.ajax({
//           url: form.attr('action'),
//           type: form.attr('method'),
//           data: form.serialize(),
//           dataType: 'html',
//           success: function(data){
//             body.removeClass(loadingClass);
//             unbindLoader();
//             holder.empty();
//             jQuery(data).appendTo(holder);
//             var carousel = jQuery('.carousel2');
//             if(carousel.length) carousel.data('init','');
//             initScripts();
//           },
//           error: function(){
//             alert('Ajax error!');
//           }
//         })
//         return false;
//       });
//     }
//     btnClean.each(function(){
//       jQuery(this).click(function(){
//         form.find('input:text').each(function(){
//           var input = jQuery(this);
//           if(input.attr('data-value')){
//             input.val(input.attr('data-value'));
//           }
//           else{
//             input.val('');
//           }
//         });
//         form.submit();
//         return false;
//       })
//     });
//   });
// }

// //init position menu
// function initPositionMenu(){
//   var menu = jQuery('#nav');
//   var holder = jQuery('#w1');
//   if(menu.length && holder.length){
//     var win = jQuery(window);
//     var minWidth = 1000;
//     function calcPosition(){
//       if(win.width() + win.scrollLeft() < minWidth){
//         menu.css('right',0);
//       }
//       else{
//         menu.css('right',16);
//       }
//     }
//     calcPosition();
//     win.resize(function(){
//       calcPosition();
//     }).scroll(function(){
//       calcPosition();
//     });
//   }
  
// }

// //init tooltips
// function initTooltips(){
//   var speed = jQuery.browser.msie && jQuery.browser.version < 9 ? 0 : 300;
//   var items = jQuery('.timeline .year:has(.tooltip)');
//   items.each(function(){
//     var item = jQuery(this);
//     var tooltip = item.find('.tooltip');
//     item.hover(function(){
//       tooltip.stop().show().css('opacity',0).animate({opacity:1},{queue:false,duration:speed});
//     },function(){
//       tooltip.stop().animate({opacity:0},{queue:false,duration:speed,complete:function(){tooltip.hide();}});
//     });
//   });
  
//   var tooltipLinks = jQuery('a.open-toolitp');
//   tooltipLinks.each(function(){
//     var link = jQuery(this);
//     var tooltip = jQuery(link.attr('href'));
//     if(tooltip.length){
//       link.hover(function(){
//         tooltip.stop().show().css({
//           opacity: 0,
//           top: link.offset().top + link.outerHeight(),
//           left: link.offset().left + link.width() / 2 - tooltip.outerWidth() / 2,
//           zIndex:999 
//         }).animate({opacity:1},{queue:false,duration:speed});
//       },function(){
//         tooltip.stop().animate({opacity:0},{queue:false,duration:speed,complete:function(){tooltip.hide();}});
//       });
//     }
//   });
// }

// // tabs init
// function initTabs() {
//   jQuery('ul.tabset').jqueryTabs({
//     addToParent:false,
//     holdHeight:false,
//     activeClass:'active',
//     tabLinks:'a.tab',
//     fadeSpeed: jQuery.browser.msie && jQuery.browser.version < 9 ? 0 : 500
//   })
// }

// //init fade dropdown
// function initDropDown(){
//   var speed = jQuery.browser.msie && jQuery.browser.version < 9 ? 0 : 300;
//   var navs = jQuery('.archive-widget > ul');
//   navs.each(function(){
//     var nav = jQuery(this);
//     var items = nav.find('li:has(ul)');
//     items.each(function(){
//       var item = jQuery(this);
//       var drop = item.find('>ul');
//       item.hover(function(){
//         drop.stop().show().css('opacity',0).animate({opacity:1},{queue:false,duration:speed});
//       },function(){
//         drop.stop().animate({opacity:0},{queue:false,duration:speed,complete:function(){drop.hide();}});
//       });
//     });
//   });
// }


// //init hover fade
// function initHoverFade(){
//   var activeClass = 'active';
//   var hoverClass = 'hover-item';
//   var speed = jQuery.browser.msie && jQuery.browser.version < 9 ? 0 : 300;
//   var holders = jQuery('#nav li, .post .holder, #source-page .aside > .prev, #source-page .aside > .next, .mw-section .more, .tabset a, .article .more, .timeline .year-link, #about-page .more, .faq li a, .tabs-area .prev, .tabs-area .next, .archive-widget ul li, .post .more');
//   holders.each(function(){
//     var holder = jQuery(this);
//     var overlay = holder.find('.overlay-box');
//     if(overlay.length){
//       overlay.css('opacity',0);
//       holder.hover(function(){
//         if(holder.hasClass(activeClass)) return;
//         holder.addClass(hoverClass);
//         overlay.show().stop().animate({opacity:1},{queueu:false,duration:speed});
//       },function(){
//         holder.removeClass(hoverClass);
//         overlay.stop().animate({opacity:0},{queueu:false,duration:speed,complete:function(){overlay.hide();}});
//       });
//     }
//   });
// }

// function initNavigation(){
//   var activeClass = 'active';
//   var activeSection = 'active-section';
//   var hoverClass = 'hover-item';
//   var loadingClass = 'loading';
//   var loadClass = 'loaded';
//   var speed = 2000;
//   var k = 1.4;
//   var clickFlag = false;
//   var wrapper = jQuery('#wrapper');
//   var chrome = jQuery.browser.webkit;
//   var fadeSpeed = jQuery.browser.msie && jQuery.browser.version < 9 ? 0 : 300;
//   var nav = jQuery('#nav');
//   var body = jQuery('body');
//   var html = jQuery('html');
//   body.css('overflowX','visible');
//   html.css('overflowX','visible');
//   var win = jQuery(window);
//   var page = jQuery('#wrapper');
//   var sections = jQuery('.page-holder');
//   if(nav.length){
//     var maxHeight = 0;
//     var delay = 115;
//     var flag = false;
//     var activeItem;
//     var items = nav.find('li');
//     var n;
//     function initOpenCloseItem(num){
//       items.removeClass(hoverClass).filter(':lt('+num+')').each(function(){
//         var li = jQuery(this);
//         li.find('.img-holder').each(function(){ jQuery(this).stop().animate({height:0},{queue:false,duration:500}) });
//         li.stop().animate({top: li.data('offsetTop')},{queue:false,duration:500})
//       });
//       items.removeClass(hoverClass).filter(':gt('+num+')').each(function(){
//         var li = jQuery(this);
//         li.find('.img-holder').each(function(){ jQuery(this).stop().animate({height:0},{queue:false,duration:500}) });
//         li.stop().animate({top: li.data('offsetTop') + li.find('.img-holder').data('height')},{queue:false,duration:500})
//       });
//       items.eq(num).stop().animate({top: items.eq(num).data('offsetTop')},{queue:false,duration:500,complete:function(){jQuery(this).addClass(hoverClass)}})
//       items.eq(num).find('.img-holder').each(function(){ jQuery(this).stop().animate({height:jQuery(this).data('height')},{queue:false,duration:500}) });
//     }
    
//     function closeAllItems(){
//       items.removeClass(hoverClass).stop().each(function(){ jQuery(this).animate({top: jQuery(this).data('offsetTop')},{queue:false,duration:500}) })
//       items.find('.img-holder').each(function(){ jQuery(this).stop().animate({height:0},{queue:false,duration:500}) });
//     }
    
//     if(chrome){
//       var activeItemInd = items.index(items.filter('.' + activeClass));
//       if(activeItemInd > 0) sections.removeClass(activeSection).eq(activeItemInd - 1).addClass(activeSection);
//       function lookForActive(){
//         var ind = items.index(items.filter('.' + activeClass));
//         if(ind != activeItemInd){
//           activeItemInd = ind;
//           sections.removeClass(activeSection);
//           if(ind > 0) sections.eq(activeItemInd - 1).addClass(activeSection);
//         }
//       }
//       setInterval(lookForActive,1000);
//     }
    
//     items.each(function(ind){
//       var item = jQuery(this);
//       maxHeight += item.outerHeight(true);
//       item.data('offsetTop',item.offset().top - item.parent().offset().top).data('height',item.outerHeight(true));
//       var link = item.find('>a');
//       var imgHolder = item.find('.img-holder');
//       var ico = link.find('img');
//       ico.css('display','block');
//       imgHolder.data('height',ico.height()).height(0);
      
//       var section = jQuery('#'+link.attr('href'));
//       if(section.length){
//         var href = link.attr('href');
//         var offset = section.offset().top + wrapper.scrollTop();
        
//         wrapper.bind('scroll',function(){
//           if(!flag){
//             if(page.scrollTop() >= offset + (offset * k - offset) && page.scrollTop() < offset + (offset * k - offset) + section.height()){
//               if(activeItem && activeItem.index() != ind){
//                 items.removeClass(activeClass);
//                 item.addClass(activeClass);
//                 activeItem = item;
//                 initOpenCloseItem(activeItem.index());
//                 Hash.manualState = true;
//                 Hash.key.set('menu',href);
//               }
//             }           
//             if(page.scrollTop() >= offset + (offset * k - offset) && page.scrollTop() < offset + (offset * k - offset) + section.height()){
//               if(activeItem && activeItem.index() != ind){
//                 var block = jQuery('.page-holder:has(#'+ item.find('>a').attr('href') +')');
//                 sections.removeClass(activeSection);
//                 if(block.length) block.addClass(activeSection);
//               }
//             }
//           }
//         })
          
//         link.bind('click',function(){
//           if(!wrapper.is(':animated')){
//             flag = true;
//             items.removeClass(activeClass);
//             item.addClass(activeClass);
//             activeItem = item;
//             if(clickFlag){
//               clickFlag = false;
//             }
//             else{
//               initOpenCloseItem(activeItem.index());
//             }
//             Hash.key.set('menu',link.attr('href'));
//             wrapper.scrollTop(offset + delay + (offset * k - offset));
//             flag = false;
//           }
//           return false;
//         });
        
//         if(!Hash.key.get('menu') && !Hash.key.get('postid') && item.hasClass(activeClass)){
//           clickFlag = true;
//           link.trigger('click');
//         } 
//       }
//     });
    
//     var navHolder = nav.find('>div');
//     if(navHolder.length){
//       navHolder.css('height', maxHeight);
//       var top = (win.height() - navHolder.height())/2;
//       if(top < 0) top = 0;
//       navHolder.css('marginTop',top);
//       win.resize(function(){
//         var top = (win.height() - navHolder.height())/2;
//         if(top < 0) top = 0;
//         navHolder.css('marginTop',top);
//       })
//     }
    
//     //init open-close on hover item navigation
//     items.each(function(ind){
//       var item = jQuery(this);
//       item.css({
//         position:'absolute',
//         top: item.data('offsetTop'), 
//         left: 0
//       })
      
//       if(item.hasClass(activeClass)){
//         activeItem = item; 
//         initOpenCloseItem(ind);
//       } 
      
//       item.click(function(){
//         initOpenCloseItem(ind);
//         return false;
//       })
//     });
//   }
// }

// function initChangeHash(){
//   function goToSection(){
//     function changeMenu(){
//       var menu = Hash.key.get('menu');
//       if(menu){
//         link = jQuery('a[href*="'+ menu +'"]');
//         if(link.length) link.eq(0).trigger('click');
//       }
//     }
//     if(!Hash.manualState){
//       var menu = Hash.key.get('menu');
//       var post = Hash.key.get('postid');
//       var heroes = Hash.key.get('heroid');
//       var section = Hash.key.get('section');
//       if(post && menu){
//         sourceLightbox(post, menu);
//         Hash.key.remove('postid');
//       }
//       else if(heroes && menu){
//         heroLightbox(heroes, menu, section);
//         Hash.key.remove('heroid');
//       }
//       else if(menu){
//         changeMenu();
//       }
//     }
//     else{
//       Hash.manualState = false;
//     } 
//   }
  
//   Hash.onChange(function(){
//     goToSection();
//   })
//   goToSection();
// }

// function heroLightbox(_url, btn, section){
//   var speed = 1000;
//   var timeout = 500;
//   var activeClass = 'active';
//   var hiddenClass = 'hidden';
//   var loadingClass = 'loading';
//   var body = jQuery('body');
//   var btnMenu = jQuery('a[href="'+ btn +'"]');
//   if(btnMenu.length){
//     _url += '?ajax=1'; 
//     if(section) _url += '&section=' + section;
//     if(btnMenu.parent().hasClass(activeClass)) timeout = 10;
//     else timeout = 500;
//     body.addClass(loadingClass);
//     btnMenu.eq(0).trigger('click');
//     setTimeout(function(){
//       jQuery.ajax({
//         url: _url,
//         //data: dataParam,
//         type: 'post',
//         dataType: 'html',
//         success: function(data){
//           body.removeClass(loadingClass);
//           var content = jQuery(data);
//           var tabHolder = jQuery('#'+content.attr('data-tab'));
//           var linkTab = jQuery('a.tab').filter('[href="#'+ content.attr('data-tab') +'"]');
//           if(tabHolder.length && linkTab.length){
//             linkTab.trigger('click');
//             var ajaxHolder = tabHolder.find('.ajax-holder');
//             var ajaxContent = tabHolder.find('.ajax-content');
//             if(ajaxHolder.length && ajaxContent.length){
//               ajaxHolder.show();
//               ajaxContent.show();
//               popup = jQuery('<div>').addClass('article-popup').attr('data-popup',_url).html(data).appendTo(ajaxContent);
//               initScripts();
//               ajaxContent.stop().animate({left: 0},{queue:false,duration:speed,complete:function(){
//                 popup.parent().addClass(activeClass);
//                 popup.fadeIn(speed);
//               }})
//               if(ajaxHolder.parent().hasClass('hide-pagination')) jQuery(window).trigger('hideSwitcher');
//               var btnClose = popup.find('a.close-link');
//               btnClose.each(function(){
//                 jQuery(this).click(function(){
//                   popup.fadeOut(speed,function(){
//                     popup.parent().removeClass(activeClass);
//                     ajaxContent.stop().animate({left: -ajaxContent.outerWidth()},{queue:false,duration:speed,complete:function(){
//                       popup.show().addClass(hiddenClass);
//                       ajaxContent.hide().removeClass(activeClass);
//                     }})
//                   })
//                   if(ajaxHolder.parent().hasClass('hide-pagination')) jQuery(window).trigger('showSwitcher');
//                   return false;
//                 });
//               });
//               try{
//                 twttr.widgets.load();
//                 FB.XFBML.parse();
//               }catch(ex){}
//             }
//           }
//         },
//         error:function(){
//           alert('Ajax error!');
//         }
//       })
//     },timeout)
//   }
// }


// //init scroll gallery
// function initScrollGallery(){
//   jQuery('.carousel').scrollGallery({
//     sliderHolder: '.carousel-frame',
//     btnPrev:'a.prev',
//     btnNext:'a.next',
//     slider:'.slider',
//     slides: '>article',
//     curNum:'span.cur',
//     allNum:'span.total',
//     pagerHolder:'.pager',
//     circleSlide:false,
//     duration:650
//   });
  
//   jQuery('.carousel2').scrollGallery({
//     sliderHolder: '.holder',
//     btnPrev:'a.prev',
//     btnNext:'a.next',
//     curNum:'span.cur',
//     allNum:'span.total',
//     pagerHolder:'.pager',
//     circleSlide:false,
//     duration:650
//   });
  
//   jQuery('.carousel3').scrollGallery({
//     sliderHolder: '.mask',
//     slider:'.slideset',
//     slides: '.slide',
//     btnPrev:'a.prev',
//     btnNext:'a.next',
//     curNum:'span.cur',
//     allNum:'span.total',
//     pagerHolder:'.pager',
//     circleSlide:false,
//     duration:650
//   });
// }

// // slideshow init
// function initSlideShow() {
//   jQuery('div.image-gallery').fadeGallery({
//     slideElements:'.frame li',
//     pagerLinks:'.thumbs li',
//     duration: jQuery.browser.msie && jQuery.browser.version < 9 ? 0 : 650
//   });
// }

// function initPopups(){
//   var activeClass = 'active';
//   var speed = jQuery.browser.msie && jQuery.browser.version < 9 ? 0 : 500;
//   var hiddenClass = 'hidden';
//   var loadingClass = 'loading';
//   var body = jQuery('body');
//   var links = jQuery('a.ajax-popup');
//   links.each(function(ind){
//     var link = jQuery(this);
//     var parent = link.parents('.popup-inside').eq(0);
//     if(parent.length){
//       var holder = parent.find('.popup-area');
//       if(!link.attr('data-popup')) {
//         link.attr('data-popup','popup'+ind);
//         link.click(function(e){
//           var popup = holder.find('div[data-popup="'+link.attr('data-popup')+'"]');
//           if(popup.length){
//             holder.addClass(activeClass);
//             popup.removeClass(hiddenClass).hide()
//             holder.show().stop().animate({left: 0},{queue:false,duration:speed,complete:function(){
//               popup.fadeIn(speed);
//             }})
//             if(parent.hasClass('hide-pagination')) jQuery(window).trigger('hideSwitcher');
//           }
//           else{
//             body.addClass(loadingClass);
//             initPositionLoader(e);
//             jQuery.ajax({
//               url: link.attr('href'),
//               data: 'ajax=1',
//               dataType:'html',
//               success: function(data){
//                 body.removeClass(loadingClass);
//                 unbindLoader();
//                 holder.show();
//                 popup = jQuery('<div>').addClass('article-popup').attr('data-popup',link.attr('data-popup')).html(data).appendTo(holder);
//                 initScripts();
//                 popup.hide();
//                 holder.show().stop().animate({left: 0},{queue:false,duration:speed,complete:function(){
//                   popup.fadeIn(speed);
//                 }})
//                 if(parent.hasClass('hide-pagination')) jQuery(window).trigger('hideSwitcher');
//                 var btnClose = popup.find('a.close-link');
//                 btnClose.each(function(){
//                   jQuery(this).click(function(){
//                     popup.fadeOut(speed,function(){
//                       holder.stop().animate({left: -holder.outerWidth()},{queue:false,duration:speed,complete:function(){
//                         popup.show().addClass(hiddenClass);
//                         holder.hide().removeClass(activeClass);
//                       }})
//                     })
//                     if(parent.hasClass('hide-pagination')) jQuery(window).trigger('showSwitcher');
//                     return false;
//                   });
//                 });
//                 try{
//                   twttr.widgets.load();
//                   FB.XFBML.parse();
//                 }catch(ex){}
//               },
//               error: function(){
//                 alert('Ajax error!');
//               }
//             })
//           }
//           jQuery(window).bind('hidePopup',function(){
//             popup.fadeOut(speed,function(){
//               popup.show().addClass(hiddenClass);;
//               holder.css('left',-502).removeClass(activeClass).hide();
//             })
//           })
//           return false;
//         });
//       }
//     }
//   });
// }


// // scrolling gallery plugin
// jQuery.fn.scrollGallery = function(_options){
//   var _options = jQuery.extend({
//     sliderHolder: '>div',
//     slider:'>ul',
//     slides: '>li',
//     pagerLinks:'div.pager a',
//     btnPrev:'a.link-prev',
//     btnNext:'a.link-next',
//     activeClass:'active',
//     disabledClass:'disabled',
//     pagerHolder:'.pagination-box',
//     generatePagination:'div.pg-holder',
//     curNum:'em.scur-num',
//     allNum:'em.sall-num',
//     circleSlide:true,
//     pauseClass:'gallery-paused',
//     pauseButton:'none',
//     pauseOnHover:true,
//     autoRotation:false,
//     stopAfterClick:false,
//     switchTime:5000,
//     duration:650,
//     easing:'swing',
//     event:'click',
//     splitCount:false,
//     afterInit:false,
//     vertical:false,
//     step:false
//   },_options);

//   return this.each(function(){
//     // gallery options
//     var _this = jQuery(this);
//     if(_this.data('init')) return;
//     _this.data('init',true);
//     var _sliderHolder = jQuery(_options.sliderHolder, _this);
//     var _slider = jQuery(_options.slider, _sliderHolder);
//     var _slides = jQuery(_options.slides, _slider);
//     var _btnPrev = jQuery(_options.btnPrev, _this);
//     var _btnNext = jQuery(_options.btnNext, _this);
//     var _pagerLinks = jQuery(_options.pagerLinks, _this);
//     var _pagerHolder = jQuery(_options.pagerHolder, _this);
//     var _generatePagination = jQuery(_options.generatePagination, _this);
//     var _curNum = jQuery(_options.curNum, _this);
//     var _allNum = jQuery(_options.allNum, _this);
//     var _pauseButton = jQuery(_options.pauseButton, _this);
//     var _pauseOnHover = _options.pauseOnHover;
//     var _pauseClass = _options.pauseClass;
//     var _autoRotation = _options.autoRotation;
//     var _activeClass = _options.activeClass;
//     var _disabledClass = _options.disabledClass;
//     var _easing = _options.easing;
//     var _duration = _options.duration;
//     var _switchTime = _options.switchTime;
//     var _controlEvent = _options.event;
//     var _step = _options.step;
//     var _vertical = _options.vertical;
//     var _circleSlide = _options.circleSlide;
//     var _stopAfterClick = _options.stopAfterClick;
//     var _afterInit = _options.afterInit;
//     var _splitCount = _options.splitCount;

//     // gallery init
//     if(!_slides.length) return;

//     if(_splitCount) {
//       var curStep = 0;
//       var newSlide = jQuery('<slide>').addClass('split-slide');
//       _slides.each(function(){
//         newSlide.append(this);
//         curStep++;
//         if(curStep > _splitCount-1) {
//           curStep = 0;
//           _slider.append(newSlide);
//           newSlide = jQuery('<slide>').addClass('split-slide');
//         }
//       });
//       if(curStep) _slider.append(newSlide);
//       _slides = _slider.children();
//     }

//     var _currentStep = 0;
//     var _sumWidth = 0;
//     var _sumHeight = 0;
//     var _hover = false;
//     var _stepWidth;
//     var _stepHeight;
//     var _stepCount;
//     var _offset;
//     var _timer;

//     _slides.each(function(){
//       _sumWidth+=jQuery(this).outerWidth(true);
//       _sumHeight+=jQuery(this).outerHeight(true);
//     });

//     // calculate gallery offset
//     function recalcOffsets() {
//       if(_vertical) {
//         if(_step) {
//           _stepHeight = _slides.eq(_currentStep).outerHeight(true);
//           _stepCount = Math.ceil((_sumHeight-_sliderHolder.height())/_stepHeight)+1;
//           _offset = -_stepHeight*_currentStep;
//         } else {
//           _stepHeight = _sliderHolder.height();
//           _stepCount = Math.ceil(_sumHeight/_stepHeight);
//           _offset = -_stepHeight*_currentStep;
//           if(_offset < _stepHeight-_sumHeight) _offset = _stepHeight-_sumHeight;
//         }
//       } else {
//         if(_step) {
//           _stepWidth = _slides.eq(_currentStep).outerWidth(true)*_step;
//           _stepCount = Math.ceil((_sumWidth-_sliderHolder.width())/_stepWidth)+1;
//           _offset = -_stepWidth*_currentStep;
//           if(_offset < _sliderHolder.width()-_sumWidth) _offset = _sliderHolder.width()-_sumWidth;
//         } else {
//           _stepWidth = _sliderHolder.width();
//           _stepCount = Math.ceil(_sumWidth/_stepWidth);
//           _offset = -_stepWidth*_currentStep;
//           if(_offset < _stepWidth-_sumWidth) _offset = _stepWidth-_sumWidth;
//         }
//       }
//     }

//     // gallery control
//     if(_btnPrev.length) {
//       _btnPrev.bind(_controlEvent,function(){
//         if(_stopAfterClick) stopAutoSlide();
//         prevSlide();
//         return false;
//       });
//     }
//     if(_btnNext.length) {
//       _btnNext.bind(_controlEvent,function(){
//         if(_stopAfterClick) stopAutoSlide();
//         nextSlide();
//         return false;
//       });
//     }
//     if(_generatePagination.length) {
//       _generatePagination.empty();
//       recalcOffsets();
//       var _list = jQuery('<ul />');
//       for(var i=0; i<_stepCount; i++) jQuery('<li><a href="#">'+(i+1)+'</a></li>').appendTo(_list);
//       _list.appendTo(_generatePagination);
//       _pagerLinks = _list.children();
//     }
//     if(_pagerLinks.length) {
//       _pagerLinks.each(function(_ind){
//         jQuery(this).bind(_controlEvent,function(){
//           if(_currentStep != _ind) {
//             if(_stopAfterClick) stopAutoSlide();
//             _currentStep = _ind;
//             switchSlide();
//           }
//           return false;
//         });
//       });
//     }

//     // gallery animation
//     function prevSlide() {
//       recalcOffsets();
//       if(_currentStep > 0) _currentStep--;
//       //else if(_circleSlide) _currentStep = _slides.length-1;
//       else if(_circleSlide) _currentStep = _stepCount-1;
//       switchSlide();
//     }
//     function nextSlide() {
//       recalcOffsets();
//       if(_currentStep < _stepCount-1) _currentStep++;
//       //if(_currentStep < _slides.length-1) _currentStep++;
//       else if(_circleSlide) _currentStep = 0;
//       switchSlide();
//     }
//     function refreshStatus() {
//       if(_pagerLinks.length) _pagerLinks.removeClass(_activeClass).eq(_currentStep).addClass(_activeClass);
//       if(!_circleSlide) {
//         _btnPrev.removeClass(_disabledClass);
//         _btnNext.removeClass(_disabledClass);
//         if(_currentStep == 0) _btnPrev.addClass(_disabledClass);
//         if(_currentStep == _stepCount-1) _btnNext.addClass(_disabledClass);
//       }
//       if(_curNum.length) _curNum.text(_currentStep+1);
//       if(_allNum.length) _allNum.text(_stepCount);
//     }
//     function switchSlide() {
//       recalcOffsets();
//       if(_vertical) _slider.stop().animate({marginTop:_offset},{duration:_duration,queue:false,easing:_easing});
//       else _slider.stop().animate({marginLeft:_offset},{duration:_duration,queue:false,easing:_easing});
//       refreshStatus();
//       autoSlide();
//     }
    
//     jQuery(window).bind('showSwitcher',function(){
//       _pagerHolder.show();
//     })
//     jQuery(window).bind('hideSwitcher',function(){
//        _pagerHolder.hide();
//     })

//     // autoslide function
//     function stopAutoSlide() {
//       if(_timer) clearTimeout(_timer);
//       _autoRotation = false;
//     }
//     function autoSlide() {
//       if(!_autoRotation || _hover) return;
//       if(_timer) clearTimeout(_timer);
//       _timer = setTimeout(nextSlide,_switchTime+_duration);
//     }
//     if(_pauseOnHover) {
//       _this.hover(function(){
//         _hover = true;
//         if(_timer) clearTimeout(_timer);
//       },function(){
//         _hover = false;
//         autoSlide();
//       });
//     }
//     recalcOffsets();
//     refreshStatus();
//     autoSlide();

//     // pause buttton
//     if(_pauseButton.length) {
//       _pauseButton.click(function(){
//         if(_this.hasClass(_pauseClass)) {
//           _this.removeClass(_pauseClass);
//           _autoRotation = true;
//           autoSlide();
//         } else {
//           _this.addClass(_pauseClass);
//           stopAutoSlide();
//         }
//         return false;
//       });
//     }
    
//     if(_afterInit && typeof _afterInit === 'function') _afterInit(_this, _slides);
//   });
// }

// // gallery init
// function initGallery() {
//   // settings
//   var _waitAnimation = true;
//   var _autoSlide = false;
//   var _easing = 'swing';
//   var _activeClass = 'active';
//   var _switchTime = 5000;
//   var _speed = 1000;

//   jQuery('.gallery').each(function(){
//     // gallery options
//     var _holder = jQuery(this);
//     if(_holder.data('init')) return;
//     _holder.data('init',true);
//     var _pagerLinks = _holder.parent().find('.switcher li');
//     var _slidesHolder = _holder.find('div.frame');
//     var _slider = _slidesHolder.find('>ul');
//     var _slides = _slider.children();
//     var _slidesCount = _slides.length;
//     var _win = jQuery(window);
//     var _slideWidth = _slides.eq(0).outerWidth(true);
//     var _visibleCount = Math.round(_slidesHolder.width() / _slideWidth);
//     var _currentIndex = 0;
//     var _oldIndex = _currentIndex;
//     var _animating = false;
//     var _direction;
//     var _timer;
//     var _btnPrev = jQuery('#stats-page a.prev');
//     var _btnNext =  jQuery('#stats-page a.next');
    
//     var layers = _holder.parents('.page').find('div.slideshow .bg[data-horizontal]');
//     var layersParent = layers.parent();
//     if(layers.length){
//       layers.each(function(){
//         var layer = jQuery(this);
//         layer.data('data-horizontal', jQuery.parseJSON(layer.attr('data-horizontal')));
//       });
//     }
    
//     function sizeRowHandler(){
//       layers.each(function(n){
//         if(layers.eq(n).data('data-horizontal').type == "row"){
//           var defaultW = layers.eq(n).width();
//           layers.eq(n).data('defaultWidth', defaultW);
//           layers.eq(n).css({width: defaultW*10, marginLeft: -defaultW - layers.eq(n).data('data-horizontal').offsetX});
//         }
//       });
//     }
    
//     sizeRowHandler();
    
//     // slider height
//     _slider.css({height:_slides.eq(0).outerHeight(true)});
//     _slides.show().css({position:'absolute',top:0,left:_slideWidth});
//     _slides.eq(_currentIndex).css({left:0});
    

//     // gallery control
//     _pagerLinks.each(function(_ind){
//       jQuery(this).click(function(){
//         if(_animating) return false;
//         if(_ind != _currentIndex) {
//           _oldIndex = _currentIndex;
//           _currentIndex = _ind;
//           _direction = (_oldIndex < _currentIndex);
//           switchSlide();
//         }
//         return false;
//       });
//     });
//     _btnPrev.each(function(){
//       var _btn = jQuery(this);
//       _btn.click(function(){
//         prevSlide();
//         return false;
//       });
//     });
//     _btnNext.each(function(){
//       var _btn = jQuery(this);
//       _btn.click(function(){
//         nextSlide();
//         return false;
//       });
//     });
//     function prevSlide() {
//       if(_animating) return;
//       _oldIndex = _currentIndex;
//       if(_currentIndex > 0) _currentIndex--;
//       else _currentIndex = _slidesCount-1;
//       _direction = false;
//       switchSlide();
//     }
//     function nextSlide() {
//       if(_animating) return;
//       _oldIndex = _currentIndex;
//       if(_currentIndex < _slidesCount-1) _currentIndex++;
//       else _currentIndex = 0;
//       _direction = true;
//       switchSlide();
//     }

//     // gallery animation
//     function refreshStatus() {
//       _pagerLinks.removeClass(_activeClass).eq(_currentIndex).addClass(_activeClass);
//     }
//     function switchSlide() {
//       if(_waitAnimation) _animating = true;
//       _slides.eq(_currentIndex).css({left:(_direction ? _slideWidth : -_slideWidth)}).animate({left:0},{duration:_speed, queue:false,easing:_easing,complete:function(){
//         _animating = false;
//       }});
//       _slides.eq(_oldIndex).animate({left:(_direction ? -_slideWidth : _slideWidth)},{duration:_speed, queue:false,easing:_easing});
//       refreshStatus();
//       autoSlide();
      
//       layers.each(function(n){
//         var _offset;
//         if(layers.eq(n).data('data-horizontal').direction == 1){
//           if(layers.eq(n).data('data-horizontal').stepPrev == undefined)
//             _offset = _direction ? -layers.eq(n).data('data-horizontal').step : layers.eq(n).data('data-horizontal').step;
//           else
//             _offset = _direction ? -layers.eq(n).data('data-horizontal').step : layers.eq(n).data('data-horizontal').stepPrev;
//         } else{
//           if(layers.eq(n).data('data-horizontal').stepPrev == undefined)
//             _offset = -layers.eq(n).data('data-horizontal').step;
//           else
//             _offset = _direction ? -layers.eq(n).data('data-horizontal').step : -layers.eq(n).data('data-horizontal').stepPrev;
//         }
//         if(layers.eq(n).data('data-horizontal').type == "row"){
//           layers.eq(n).animate({marginLeft:'+=' + _offset},
//                    {duration:_speed,
//                    queue:false,
//                    complete: function(){
//                 var mL = Math.abs(parseInt(layers.eq(n).css('marginLeft')));
//                 var rowW = layers.eq(n).width();
//                 if(rowW - (mL + _win.width() + layers.eq(n).data('data-horizontal').step) < 0){
//                    layers.eq(n).css({marginLeft: -layers.eq(n).data('defaultWidth') - layers.eq(n).data('data-horizontal').offsetX});
//                 }
//           }});
//         } else{
//           layers.eq(n).animate({marginLeft:'+=' + _offset},
//                    {duration:_speed,
//                    queue:false,
//                    complete: function(){
//                 var mL = Math.abs(parseInt(layers.eq(n).css('marginLeft')));
//                 var layerW = layers.eq(n).width();
                
//                 if(_win.width() + layerW - layers.eq(n).data('data-horizontal').step < mL){
//                   layers.eq(n).css({marginLeft: -layers.eq(n).data('data-horizontal').step});
//                 }
//           }});
//         }
//       });
//     }
//     function autoSlide() {
//       if(!_autoSlide) return;
//       if(_timer) clearTimeout(_timer);
//       _timer = setTimeout(nextSlide,_switchTime);
//     }
//     refreshStatus();
//     autoSlide();
//   });
// }


// // slideshow plugin
// jQuery.fn.fadeGallery = function(_options){
//   var _options = jQuery.extend({
//     slideElements:'div.slideset > div',
//     pagerLinks:'div.pager a',
//     btnNext:'a.next',
//     btnPrev:'a.prev',
//     btnPlayPause:'a.play-pause',
//     btnPlay:'a.play',
//     btnPause:'a.pause',
//     pausedClass:'paused',
//     disabledClass: 'disabled',
//     playClass:'playing',
//     activeClass:'active',
//     loadingClass:'ajax-loading',
//     loadedClass:'slide-loaded',
//     dynamicImageLoad:false,
//     dynamicImageLoadAttr:'alt',
//     currentNum:false,
//     allNum:false,
//     startSlide:null,
//     noCircle:false,
//     pauseOnHover:false,
//     autoRotation:false,
//     autoHeight:false,
//     onBeforeFade:false,
//     onAfterFade:false,
//     onChange:false,
//     disableWhileAnimating:false,
//     switchTime:3000,
//     duration:650,
//     event:'click'
//   },_options);

//   return this.each(function(){
//     // gallery options
//     if(this.slideshowInit) return; else this.slideshowInit;
//     var _this = jQuery(this);
//     if(_this.data('init')) return;
//     _this.data('init',true);
//     var _slides = jQuery(_options.slideElements, _this);
//     var _pagerLinks = jQuery(_options.pagerLinks, _this);
//     var _btnPrev = jQuery(_options.btnPrev, _this);
//     var _btnNext = jQuery(_options.btnNext, _this);
//     var _btnPlayPause = jQuery(_options.btnPlayPause, _this);
//     var _btnPause = jQuery(_options.btnPause, _this);
//     var _btnPlay = jQuery(_options.btnPlay, _this);
//     var _pauseOnHover = _options.pauseOnHover;
//     var _dynamicImageLoad = _options.dynamicImageLoad;
//     var _dynamicImageLoadAttr = _options.dynamicImageLoadAttr;
//     var _autoRotation = _options.autoRotation;
//     var _activeClass = _options.activeClass;
//     var _loadingClass = _options.loadingClass;
//     var _loadedClass = _options.loadedClass;
//     var _disabledClass = _options.disabledClass;
//     var _pausedClass = _options.pausedClass;
//     var _playClass = _options.playClass;
//     var _autoHeight = _options.autoHeight;
//     var _duration = _options.duration;
//     var _switchTime = _options.switchTime;
//     var _controlEvent = _options.event;
//     var _currentNum = (_options.currentNum ? jQuery(_options.currentNum, _this) : false);
//     var _allNum = (_options.allNum ? jQuery(_options.allNum, _this) : false);
//     var _startSlide = _options.startSlide;
//     var _noCycle = _options.noCircle;
//     var _onChange = _options.onChange;
//     var _onBeforeFade = _options.onBeforeFade;
//     var _onAfterFade = _options.onAfterFade;
//     var _disableWhileAnimating = _options.disableWhileAnimating;
    
//     // gallery init
//     var _anim = false;
//     var _hover = false;
//     var _prevIndex = 0;
//     var _currentIndex = 0;
//     var _slideCount = _slides.length;
//     var _timer;
//     if(_slideCount < 2) return;

//     _prevIndex = _slides.index(_slides.filter('.'+_activeClass));
//     if(_prevIndex < 0) _prevIndex = _currentIndex = 0;
//     else _currentIndex = _prevIndex;
//     if(_startSlide != null) {
//       if(_startSlide == 'random') _prevIndex = _currentIndex = Math.floor(Math.random()*_slideCount);
//       else _prevIndex = _currentIndex = parseInt(_startSlide);
//     }
//     //_slides.hide().eq(_currentIndex).show();
//     _slides.css('opacity',0).eq(_currentIndex).css('opacity','');
//     if(_autoRotation) _this.removeClass(_pausedClass).addClass(_playClass);
//     else _this.removeClass(_playClass).addClass(_pausedClass);

//     // gallery control
//     if(_btnPrev.length) {
//       _btnPrev.bind(_controlEvent,function(){
//         prevSlide();
//         return false;
//       });
//     }
//     if(_btnNext.length) {
//       _btnNext.bind(_controlEvent,function(){
//         nextSlide();
//         return false;
//       });
//     }
//     if(_pagerLinks.length) {
//       _pagerLinks.each(function(_ind){
//         jQuery(this).bind(_controlEvent,function(){
//           if(_currentIndex != _ind) {
//             if(_disableWhileAnimating && _anim) return;
//             _prevIndex = _currentIndex;
//             _currentIndex = _ind;
//             switchSlide();
//           }
//           return false;
//         });
//       });
//     }

//     // play pause section
//     if(_btnPlayPause.length) {
//       _btnPlayPause.bind(_controlEvent,function(){
//         if(_this.hasClass(_pausedClass)) {
//           _this.removeClass(_pausedClass).addClass(_playClass);
//           _autoRotation = true;
//           autoSlide();
//         } else {
//           _autoRotation = false;
//           if(_timer) clearTimeout(_timer);
//           _this.removeClass(_playClass).addClass(_pausedClass);
//         }
//         return false;
//       });
//     }
//     if(_btnPlay.length) {
//       _btnPlay.bind(_controlEvent,function(){
//         _this.removeClass(_pausedClass).addClass(_playClass);
//         _autoRotation = true;
//         autoSlide();
//         return false;
//       });
//     }
//     if(_btnPause.length) {
//       _btnPause.bind(_controlEvent,function(){
//         _autoRotation = false;
//         if(_timer) clearTimeout(_timer);
//         _this.removeClass(_playClass).addClass(_pausedClass);
//         return false;
//       });
//     }

//     // dynamic image loading (swap from ATTRIBUTE)
//     function loadSlide(slide) {
//       if(!slide.hasClass(_loadingClass) && !slide.hasClass(_loadedClass)) {
//         var images = slide.find(_dynamicImageLoad) // pass selector here
//         var imagesCount = images.length;
//         if(imagesCount) {
//           slide.addClass(_loadingClass);
//           images.each(function(){
//             var img = this;
//             img.onload = function(){
//               img.loaded = true;
//               img.onload = null;
//               setTimeout(reCalc,_duration);
//             }
//             img.setAttribute('src', img.getAttribute(_dynamicImageLoadAttr));
//             img.setAttribute(_dynamicImageLoadAttr,'');
//           }).css({opacity:0});

//           function reCalc() {
//             var cnt = 0;
//             images.each(function(){
//               if(this.loaded) cnt++;
//             });
//             if(cnt == imagesCount) {
//               slide.removeClass(_loadingClass);
//               images.animate({opacity:1},{duration:_duration,complete:function(){
//                 if(jQuery.browser.msie && jQuery.browser.version < 9) jQuery(this).css({opacity:'auto'})
//               }});
//               slide.addClass(_loadedClass)
//             }
//           }
//         }
//       }
//     }

//     // gallery animation
//     function prevSlide() {
//       if(_disableWhileAnimating && _anim) return;
//       _prevIndex = _currentIndex;
//       if(_currentIndex > 0) _currentIndex--;
//       else {
//         if(_noCycle) return;
//         else _currentIndex = _slideCount-1;
//       }
//       switchSlide();
//     }
//     function nextSlide() {
//       if(_disableWhileAnimating && _anim) return;
//       _prevIndex = _currentIndex;
//       if(_currentIndex < _slideCount-1) _currentIndex++;
//       else {
//         if(_noCycle) return;
//         else _currentIndex = 0;
//       }
//       switchSlide();
//     }
//     function refreshStatus() {
//       if(_dynamicImageLoad) loadSlide(_slides.eq(_currentIndex));
//       if(_pagerLinks.length) _pagerLinks.removeClass(_activeClass).eq(_currentIndex).addClass(_activeClass);
//       if(_currentNum) _currentNum.text(_currentIndex+1);
//       if(_allNum) _allNum.text(_slideCount);
//       _slides.eq(_prevIndex).removeClass(_activeClass);
//       _slides.eq(_currentIndex).addClass(_activeClass);
//       if(_noCycle) {
//         if(_btnPrev.length) {
//           if(_currentIndex == 0) _btnPrev.addClass(_disabledClass);
//           else _btnPrev.removeClass(_disabledClass);
//         }
//         if(_btnNext.length) {
//           if(_currentIndex == _slideCount-1) _btnNext.addClass(_disabledClass);
//           else _btnNext.removeClass(_disabledClass);
//         }
//       }
//       if(typeof _onChange === 'function') {
//         _onChange(_this, _slides, _prevIndex, _currentIndex);
//       }
//     }
//     function switchSlide() {
//       _anim = true;
//       if(typeof _onBeforeFade === 'function') _onBeforeFade(_this, _slides, _prevIndex, _currentIndex);
//       _slides.eq(_prevIndex).stop().animate({
//         opacity:0
//       },{queue:false,duration:_duration,complete:function(){
//         _anim = false;
//       }});
//       _slides.eq(_currentIndex).stop().animate({opacity:1},{queue:false,duration:_duration,complete:function(){
//         jQuery(this).css('opacity','');
//         if(typeof _onAfterFade === 'function') _onAfterFade(_this, _slides, _prevIndex, _currentIndex);
//       }});
//       if(_autoHeight) _slides.eq(_currentIndex).parent().stop().animate({height:_slides.eq(_currentIndex).outerHeight(true)},{duration:_duration,queue:false});
//       refreshStatus();
//       autoSlide();
//     }

//     // autoslide function
//     function autoSlide() {
//       if(!_autoRotation || _hover) return;
//       if(_timer) clearTimeout(_timer);
//       _timer = setTimeout(nextSlide,_switchTime+_duration);
//     }
//     if(_pauseOnHover) {
//       _this.hover(function(){
//         _hover = true;
//         if(_timer) clearTimeout(_timer);
//       },function(){
//         _hover = false;
//         autoSlide();
//       });
//     }
//     refreshStatus();
//     autoSlide();
//   });
// }

// function cycleGallery(){
//   var galleries = jQuery('#source-page');
//    galleries.each(function(){
//     var gallery = jQuery(this);
//     if(gallery.data('init')) return;
//     gallery.data('init',true);
//     var frame = gallery.find('.w2');
//     var slider = frame.find('.sourse-gallery');
//     var slides = slider.find('.col-holder');
//     var btnPrev = gallery.find('a.prev');
//     var btnNext = gallery.find('a.next');
//     var switcherLinks = jQuery('.archive-widget > ul a');
//     var disabledClass = 'disabled'
//     var step = 1;
//     var ie7 = jQuery.browser.msie && jQuery.browser.version < 8 ? 16 : 0;
//     var ie9 = jQuery.browser.msie && jQuery.browser.version == 9 ? -2 : 0;
//     var stepWidth = slides.eq(0).outerWidth(true);
//     var switchTime = false;
//     var activeClass = 'active-item';
//     var addWidth = 152;
//     var sliderWidth = 0;
//     var origCurr = Math.ceil((slides.length - 1)/2);
//     var speed = 1000;
//     var delay = jQuery.browser.mozilla ? 2 : 1;
//     var fadeTime = jQuery.browser.msie && jQuery.browser.version < 9 ? 0 : 300;
//     var timer, flagAnimation = false;
//     var aside = gallery.find('.aside');
//     var activeYear = 0;
//     var totalSlides = 0;
//     var currInd = 0;
//     var offset = 0;
//     var direction = false;
//     var loadingClass = 'loading';
//     var body = jQuery('body');
    
//     function defaultParam(){
//       slides.each(function(){
//         sliderWidth += jQuery(this).outerWidth(true);
//       });
//       totalSlides = slides.length;
//       activeYear = parseInt(slides.eq(currInd).parent().attr('data-year'));
//       slides.eq(currInd).find('.overlay').each(function(){ jQuery(this).hide(); });
//       offset = aside.offset().left + aside.outerWidth();
//       slides.removeClass(activeClass).eq(currInd).addClass(activeClass);
//       slider.css('marginLeft', offset);
//     }
//     defaultParam();
//     function handler(){
//       offset = aside.offset().left + aside.outerWidth();
//       slider.css('marginLeft', offset + currInd*stepWidth);
//     }
//     //jQuery(window).bind('resize', handler);
    
//     function recalcParams(){
//       slides = slider.find('.col-holder');
//       totalSlides = slides.length;
//       slides.each(function(ind){
//         if(jQuery(this).hasClass(activeClass)) {
//           currInd = ind;
//           return;
//         }
//       })
//       btnPrev.removeClass(disabledClass);
//       btnNext.removeClass(disabledClass);
//       if(currInd == slides.length -1) btnNext.addClass(disabledClass);
//       if(currInd == 0) btnPrev.addClass(disabledClass);
//     }
    
//     function nextSlide(){
//       if(flagAnimation) return;
//       if(currInd < slides.length -1){
//         currInd++;
//         switchSlide();
//       }
//     }
//     function prevSlide(){
//       if(flagAnimation) return;
//       if(currInd > 0){
//         currInd--;
//         switchSlide();
//       }
//     }
//     function recalcOffset(num){
//       var margin = 0;
//       slides.each(function(ind){
//         if(ind < num) margin += jQuery(this).width();
//       });
//       return margin;
//     }
//     function switchSlide(){
//       jQuery(window).trigger('hidePopup');
//       jQuery(window).trigger('closePopup');
//       flagAnimation = true;
//       slides.find('.overlay').each(function(){
//         jQuery(this).fadeIn(fadeTime);
//       });
//       setTimeout(function(){
//         var offsetSlide = recalcOffset(currInd);
//         slider.stop().animate({marginLeft: -offsetSlide + offset},{queue:false,duration:speed,complete:function(){
//           slides.eq(currInd).find('.overlay').each(function(){
//             jQuery(this).stop().fadeOut(fadeTime);
//           });
//           flagAnimation = false;
//         }})
//       },fadeTime);
//       slides.removeClass(activeClass).eq(currInd).addClass(activeClass);
//       btnPrev.removeClass(disabledClass);
//       btnNext.removeClass(disabledClass);
//       if(currInd == slides.length -1) btnNext.addClass(disabledClass);
//       if(currInd == 0) btnPrev.addClass(disabledClass);
//     }
    
//     function loadSection(obj){
//       jQuery(window).trigger('hidePopup');
//       jQuery(window).trigger('closePopup');
//       jQuery.ajax({
//         url: obj.attr('href'),
//         data: 'ajax=1',
//         type: 'post',
//         dataType: 'html',
//         success: function(data){
//           slides.find('.overlay').each(function(){
//             jQuery(this).fadeIn(fadeTime);
//           });
//           setTimeout(function(){
//             var content = jQuery(data);
//             var section;
//             var endOffset = 0, newOffset = 0;
//             var boxes = gallery.find('.field');
//             if (activeYear > parseInt(obj.attr('data-year'))) {
//               activeYear = parseInt(obj.attr('data-year'));
//               boxes.each(function(){
//                 if(parseInt(jQuery(this).attr('data-year')) > parseInt(obj.attr('data-year'))) section = jQuery(this);
//               });
//               if(section){
//                 content.insertAfter(section);
//                 content.css('opacity',0);
//                 var monthBox = content.find('[data-month="'+ obj.attr('data-month') +'"]');
//                 if(!monthBox.length){
//                   monthBox = content.last().find('.col').last();
//                 }
//                 else{
//                   monthBox = monthBox.eq(0);
//                 }
//                 slides.removeClass(activeClass);
//                 monthBox.parent().addClass(activeClass);
//                 recalcParams();
//                 if(section.offset().left + section.width() >= aside.offset().left + aside.outerWidth()){
//                   endOffset = parseInt(-(section.offset().left + section.width() - parseInt(slider.css('marginLeft')))) + stepWidth + aside.offset().left + aside.outerWidth();
//                 }
//                 else{
//                   endOffset = parseInt(slider.css('marginLeft')) + aside.offset().left + aside.outerWidth() - section.offset().left;
//                 }
//                 if(monthBox.length){
//                   monthBox = monthBox.parent();
//                   newOffset = parseInt(slider.css('marginLeft')) - monthBox.offset().left + aside.offset().left + aside.outerWidth();
//                 }
//                 else{
//                   newOffset = endOffset;
//                 }
//                 initScripts();
//                 slider.stop().animate({marginLeft: endOffset},{queue:false,duration:speed,complete:function(){
//                   content.animate({opacity:1},{queue:false,duration:speed,complete:function(){
//                     body.removeClass(loadingClass);
//                     unbindLoader();
//                     slider.animate({marginLeft: newOffset},{queue:false,duration:speed,complete:function(){
//                       slides.eq(currInd).find('.overlay').each(function(){
//                         jQuery(this).stop().fadeOut(fadeTime);
//                       });
//                       flagAnimation = false;
//                     }})
//                   }})
//                 }})
//               }
//             }
//             else{
//               boxes.each(function(){
//                 if(parseInt(jQuery(this).attr('data-year')) < parseInt(obj.attr('data-year'))) {
//                   section = jQuery(this);
//                   return;
//                 }
//               });
//               if(section){
//                 var margin = slider.css('marginLeft');
//                 content.insertBefore(section);
//                 slider.stop().css('marginLeft', parseInt(margin) - content.width());
//                 content.css('opacity',0);
//                 var monthBox = content.find('[data-month="'+ obj.attr('data-month') +'"]');
//                 if(monthBox.length){
//                   slides.removeClass(activeClass);
//                   monthBox.parent().addClass(activeClass);
//                   recalcParams();
//                   endOffset = parseInt(slider.css('marginLeft')) - section.offset().left + aside.offset().left + aside.outerWidth();
//                 }
//                 initScripts();
//                 slider.stop().animate({marginLeft: endOffset},{queue:false,duration:speed,complete:function(){
//                   content.animate({opacity:1},{queue:false,duration:speed,complete:function(){
//                     body.removeClass(loadingClass);
//                     unbindLoader();
//                     newOffset = parseInt(slider.css('marginLeft')) - monthBox.parent().offset().left + aside.offset().left + aside.outerWidth();
//                     slider.animate({marginLeft: newOffset},{queue:false,duration:speed,complete:function(){
//                       slides.eq(currInd).find('.overlay').each(function(){
//                         jQuery(this).stop().fadeOut(fadeTime);
//                       });
//                       flagAnimation = false;
//                     }})
//                   }})
//                 }})
//               }
//             }
//           },fadeTime);
//         },
//         error:function(){
//           alert('Ajax error!');
//         }
//       })
//     }
    
//     btnPrev.click(function(){
//       if(!btnPrev.hasClass(disabledClass)) prevSlide();
//       return false;
//     });
//     btnNext.click(function(){
//       if(!btnNext.hasClass(disabledClass)) nextSlide();
//       return false;
//     });
//     switcherLinks.each(function(ind){
//       var link = jQuery(this);
//       link.click(function(e){
//         if(!link.hasClass('opener')) link.parents('ul').eq(0).hide();
//         flagAnimation = true;
//         var yearSection = gallery.find('.field[data-year="'+ link.attr('data-year') +'"]');
//         if(yearSection.length){
//           var monthSection = yearSection.find('[data-month="'+ link.attr('data-month') +'"]');
//           if(monthSection.length){
//             slides.removeClass(activeClass);
//             monthSection.eq(0).parent().addClass(activeClass);
//             recalcParams();
//             switchSlide();
//           }
//         }
//         else{
//           body.addClass(loadingClass);
//           initPositionLoader(e);
//           loadSection(link);
//         }
//         return false;
//       });
//     });
//   });
// }

// // open-close init
// function initOpenClose(){
//   var animSpeed = 400, //ms
//     activeClass = 'active'
//   jQuery('a.open-close').each(function(){
//     var link = jQuery(this),
//       hold = link.parents('li'),
//       target = link.attr('href').substring(1),
//       slides = jQuery('div[data-slide="'+target+'"]'),
//       maxHeight = 0;
//     slides.each(function(){
//       var slide = jQuery(this);
//       if (slide.height() > maxHeight) maxHeight = slide.height()
//     });
//     slides.css({height:maxHeight});
//     link.bind('click',function(e){
//       if (!slides.is(':animated')) {
//         if (hold.hasClass(activeClass)) {
//           hold.removeClass(activeClass);
//           slides.slideUp(animSpeed);
//         } else {
//           hold.addClass(activeClass);
//           slides.slideDown(animSpeed);
//         }
//       }
//       e.preventDefault();
//     })
//     if(hold.hasClass(activeClass)) slides.show();
//     else slides.hide();
//   });
// };

// // set same column height
// function initSameHeight(){
//   jQuery('.tab-content .holder').sameHeight({
//     elements: 'article.article',
//     flexible: false,
//     useMinHeight: true
//   });
// }

// /*
//  * jQuery SameHeight plugin
//  */
// ;(function($){
//   $.fn.sameHeight = function(opt) {
//     var options = $.extend({
//       skipClass: 'same-height-ignore',
//       leftEdgeClass: 'same-height-left',
//       rightEdgeClass: 'same-height-right',
//       elements: '>*',
//       flexible: false,
//       multiLine: false,
//       useMinHeight: true
//     },opt);
//     return this.each(function(){
//       var holder = $(this);
//       var elements = holder.find(options.elements).not('.' + options.skipClass);
//       if(!elements.length) return;
      
//       // resize handler
//       function doResize() {
//         elements.css(options.useMinHeight && supportMinHeight ? 'minHeight' : 'height', '');
//         if(options.multiLine) {
//           // resize elements row by row
//           resizeElementsByRows(elements, options);
//         } else {
//           // resize elements by holder
//           resizeElements(elements, holder, options);
//         }
//       }
//       doResize();
      
//       // handle flexible layout / font resize
//       if(options.flexible) {
//         $(window).bind('resize orientationchange fontresize', function(e){
//           doResize();
//           setTimeout(doResize, 100);
//         });
//       }
//       // handle complete page load including images and fonts
//       $(window).bind('load', function(){
//         doResize();
//         setTimeout(doResize, 100);
//       });
//     });
//   }
  
//   // detect css min-height support
//   var supportMinHeight = typeof document.documentElement.style.maxHeight !== 'undefined';
  
//   // get elements by rows
//   function resizeElementsByRows(boxes, options) {
//     var currentRow = $(), maxHeight, firstOffset = boxes.eq(0).offset().top;
//     boxes.each(function(ind){
//       var curItem = $(this);
//       if(curItem.offset().top === firstOffset) {
//         currentRow = currentRow.add(this);
//       } else {
//         maxHeight = getMaxHeight(currentRow);
//         resizeElements(currentRow, maxHeight, options);
//         currentRow = curItem;
//         firstOffset = curItem.offset().top;
//       }
//     });
//     if(currentRow.length) {
//       maxHeight = getMaxHeight(currentRow);
//       resizeElements(currentRow, maxHeight, options);
//     }
//   }
  
//   // calculate max element height
//   function getMaxHeight(boxes) {
//     var maxHeight = 0;
//     boxes.each(function(){
//       maxHeight = Math.max(maxHeight, $(this).outerHeight());
//     });
//     return maxHeight;
//   }
  
//   // resize helper function
//   function resizeElements(boxes, parent, options) {
//     var parentHeight = typeof parent === 'number' ? parent : parent.height();
//     boxes.removeClass(options.leftEdgeClass).removeClass(options.rightEdgeClass).each(function(i){
//       var element = $(this);
//       var depthDiffHeight = 0;
      
//       if(typeof parent !== 'number') {
//         element.parents().each(function(){
//           var tmpParent = $(this);
//           if(this === parent[0]) {
//             return false;
//           } else {
//             depthDiffHeight += tmpParent.outerHeight() - tmpParent.height();
//           }
//         });
//       }
//       var calcHeight = parentHeight - depthDiffHeight - (element.outerHeight() - element.height());
//       if(calcHeight > 0) {
//         element.css(options.useMinHeight && supportMinHeight ? 'minHeight' : 'height', calcHeight);
//       }
//     });
//     boxes.filter(':first').addClass(options.leftEdgeClass);
//     boxes.filter(':last').addClass(options.rightEdgeClass);
//   }
// }(jQuery));

// /*
//  * jQuery FontResize Event
//  */
// jQuery.onFontResize = (function($) {
//   $(function() {
//     var randomID = 'font-resize-frame-' + Math.floor(Math.random() * 1000);
//     var resizeFrame = $('<iframe>').attr('id', randomID).addClass('font-resize-helper');
    
//     // required styles
//     resizeFrame.css({
//       width: '100em',
//       height: '10px',
//       position: 'absolute',
//       borderWidth: 0,
//       top: '-9999px',
//       left: '-9999px'
//     }).appendTo('body');
    
//     // use native IE resize event if possible
//     if ($.browser.msie && $.browser.version < 9) {
//       resizeFrame.bind('resize', function () {
//         $.onFontResize.trigger(resizeFrame[0].offsetWidth / 100);
//       });
//     }
//     // use script inside the iframe to detect resize for other browsers
//     else {
//       var doc = resizeFrame[0].contentWindow.document;
//       doc.open();
//       doc.write('<scri' + 'pt>window.onload = function(){var em = parent.jQuery("#' + randomID + '")[0];window.onresize = function(){if(parent.jQuery.onFontResize){parent.jQuery.onFontResize.trigger(em.offsetWidth / 100);}}};</scri' + 'pt>');
//       doc.close();
//     }
//     jQuery.onFontResize.initialSize = resizeFrame[0].offsetWidth / 100;
//   });
//   return {
//     // public method, so it can be called from within the iframe
//     trigger: function (em) {
//       $(window).trigger("fontresize", [em]);
//     }
//   };
// }(jQuery));


// // jquery tabs plugin
// jQuery.fn.jqueryTabs = function(_options){
//   // default options
//   var _options = jQuery.extend({
//     addToParent:false,
//     holdHeight:false,
//     activeClass:'active',
//     tabLinks:'a.tab',
//     fadeSpeed:300,
//     event:'click'
//   },_options);

//   return this.each(function(){
//     var _holder = jQuery(this);
//     var _fadeSpeed = _options.fadeSpeed;
//     var _activeClass = _options.activeClass;
//     var _addToParent = _options.addToParent;
//     var _holdHeight = _options.holdHeight;
//     var _tabLinks = jQuery(_options.tabLinks, _holder);
//     var _tabset = (_addToParent ? _tabLinks.parent() : _tabLinks);
//     var _event = _options.event;
//     var _animating = false;

//     // tabs init
//     _tabLinks.each(function(){
//       var _tmpLink = jQuery(this);
//       var _tmpTab = jQuery(_tmpLink.attr('href'));
//       var _classItem = (_addToParent ? _tmpLink.parent() : _tmpLink);
//       if(_tmpTab.length) {
//         if(_classItem.hasClass(_activeClass)) _tmpTab.show();
//         else _tmpTab.hide();
//       }
//     });

//     // tab switcher
//     function switchTab(_switcher) {
//       if(!_animating) {
//         var _link = jQuery(_switcher);
//         var _newItem = (_addToParent ? _link.parent() : _link);
//         var _newTab = jQuery(_link.attr('href'));
//         if(_newItem.hasClass(_activeClass)) return;

//         var _oldItem = jQuery(_addToParent ? _tabset : _tabLinks).filter('.'+_activeClass);
//         var _oldTab = jQuery(jQuery(_addToParent ? _oldItem.children('a') : _oldItem).attr('href'));
//         if(_newTab.length) {
//           _animating = true;
//           if(_oldItem.length) {
//             _newItem.addClass(_activeClass);
//             _oldItem.removeClass(_activeClass);

//             var _parent = _oldTab.parent();
//             if(_holdHeight) _parent.css({height:_parent.height()});

//             _oldTab.fadeOut(_fadeSpeed,function(){
              
//             });
//             _newTab.fadeIn(_fadeSpeed,function(){
//                 _animating = false;
//               });
//               if(_holdHeight) _parent.css({height:'auto'});
//           } else {
//             _newItem.addClass(_activeClass);
//             _newTab.fadeIn(_fadeSpeed,function(){
//               _animating = false;
//             });
//           }
//         }
//       }
//     }

//     // control
//     _tabLinks.each(function(){
//       jQuery(this).bind(_event,function(){
//         switchTab(this);
//         return false;
//       });
//     });
//   });
// }

// /*
//  * JavaScript Custom Forms 1.4.0
//  */
// jcf = {
//   // global options
//   modules: {},
//   plugins: {},
//   baseOptions: {
//     labelActiveClass:'jcf-label-active',
//     labelDisabledClass:'jcf-label-disabled',
//     hiddenClass:'jcf-hidden',
//     focusClass:'jcf-focus',
//     wrapperTag: 'div'
//   },
//   // replacer function
//   customForms: {
//     setOptions: function(obj) {
//       for(var p in obj) {
//         if(obj.hasOwnProperty(p) && typeof obj[p] === 'object') {
//           jcf.lib.extend(jcf.modules[p].prototype.defaultOptions, obj[p]);
//         }
//       }
//     },
//     replaceAll: function() {
//       for(var k in jcf.modules) {
//         var els = jcf.lib.queryBySelector(jcf.modules[k].prototype.selector);
//         for(var i = 0; i<els.length; i++) {
//           if(els[i].jcf) {
//             // refresh form element state
//             if(jQuery(els[i]).is(':visible')){
//               els[i].jcf.refreshState();
//             }
//           } else {
//             // replace form element
//             if(!jcf.lib.hasClass(els[i], 'default') && jcf.modules[k].prototype.checkElement(els[i])) {
//               new jcf.modules[k]({
//                 replaces:els[i]
//               });
//             }
//           }
//         }
//       }
//     },
//     refreshAll: function() {
//       for(var k in jcf.modules) {
//         var els = jcf.lib.queryBySelector(jcf.modules[k].prototype.selector);
//         for(var i = 0; i<els.length; i++) {
//           if(els[i].jcf) {
//             // refresh form element state
//             els[i].jcf.refreshState();
//           }
//         }
//       }
//     },
//     refreshElement: function(obj) {
//       if(obj && obj.jcf) {
//         obj.jcf.refreshState();
//       }
//     },
//     destroyAll: function() {
//       for(var k in jcf.modules) {
//         var els = jcf.lib.queryBySelector(jcf.modules[k].prototype.selector);
//         for(var i = 0; i<els.length; i++) {
//           if(els[i].jcf) {
//             els[i].jcf.destroy();
//           }
//         }
//       }
//     }
//   },  
//   // detect device type
//   isTouchDevice: (function() {
//     try {
//       return ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch;
//     } catch (e) {
//       return false;
//     }
//   }()),
//   // define base module
//   setBaseModule: function(obj) {
//     jcf.customControl = function(opt){
//       this.options = jcf.lib.extend({}, jcf.baseOptions, this.defaultOptions, opt);
//       this.init();
//     }
//     for(var p in obj) {
//       jcf.customControl.prototype[p] = obj[p];
//     }
//   },
//   // add module to jcf.modules
//   addModule: function(obj) {
//     if(obj.name){
//       // create new module proto class
//       jcf.modules[obj.name] = function(){
//         jcf.modules[obj.name].superclass.constructor.apply(this, arguments);
//       }
//       jcf.lib.inherit(jcf.modules[obj.name], jcf.customControl);
//       for(var p in obj) {
//         jcf.modules[obj.name].prototype[p] = obj[p]
//       }
//       // on create module
//       jcf.modules[obj.name].prototype.onCreateModule();
//       // make callback for exciting modules
//       for(var mod in jcf.modules) {
//         if(jcf.modules[mod] != jcf.modules[obj.name]) {
//           jcf.modules[mod].prototype.onModuleAdded(jcf.modules[obj.name]);
//         }
//       }
//     }
//   },
//   // add plugin to jcf.plugins
//   addPlugin: function(obj) {
//     if(obj && obj.name) {
//       jcf.plugins[obj.name] = function() {
//         this.init.apply(this, arguments);
//       }
//       for(var p in obj) {
//         jcf.plugins[obj.name].prototype[p] = obj[p];
//       }
//     }
//   },
//   // miscellaneous init
//   init: function(){
//     this.eventPress = this.isTouchDevice ? 'touchstart' : 'mousedown';
//     this.eventMove = this.isTouchDevice ? 'touchmove' : 'mousemove';
//     this.eventRelease = this.isTouchDevice ? 'touchend' : 'mouseup';
//     return this;
//   }
// }.init();

// /*
//  * Custom Form Control prototype
//  */
// jcf.setBaseModule({
//   init: function(){
//     if(this.options.replaces) {
//       this.realElement = this.options.replaces;
//       this.realElement.jcf = this;
//       this.replaceObject();
//     }
//   },
//   defaultOptions: {
//     // default module options (will be merged with base options)
//   },
//   checkElement: function(el){
//     return true; // additional check for correct form element
//   },
//   replaceObject: function(){
//     this.createWrapper();
//     this.attachEvents();
//     this.fixStyles();
//     this.setupWrapper();
//   },
//   createWrapper: function(){
//     this.fakeElement = jcf.lib.createElement(this.options.wrapperTag);
//     this.labelFor = jcf.lib.getLabelFor(this.realElement);
//     jcf.lib.disableTextSelection(this.fakeElement);
//     jcf.lib.addClass(this.realElement, jcf.baseOptions.hiddenClass);
//   },
//   attachEvents: function(){
//     jcf.lib.event.add(this.realElement, 'focus', this.onFocusHandler, this);
//     jcf.lib.event.add(this.realElement, 'blur', this.onBlurHandler, this);
//     jcf.lib.event.add(this.fakeElement, 'click', this.onFakeClick, this);
//     jcf.lib.event.add(this.fakeElement, jcf.eventPress, this.onFakePressed, this);
//     jcf.lib.event.add(this.fakeElement, jcf.eventRelease, this.onFakeReleased, this);

//     if(this.labelFor) {
//       this.labelFor.jcf = this;
//       jcf.lib.event.add(this.labelFor, 'click', this.onFakeClick, this);
//       jcf.lib.event.add(this.labelFor, jcf.eventPress, this.onFakePressed, this);
//       jcf.lib.event.add(this.labelFor, jcf.eventRelease, this.onFakeReleased, this);
//     }
//   },
//   fixStyles: function() {
//     // hide mobile webkit tap effect
//     var tapStyle = 'rgba(255,255,255,0)';
//     this.realElement.style.webkitTapHighlightColor = tapStyle; 
//     this.fakeElement.style.webkitTapHighlightColor = tapStyle; 
//     if(this.labelFor) {
//       this.labelFor.style.webkitTapHighlightColor = tapStyle; 
//     }
//   },
//   setupWrapper: function(){
//     // implement in subclass
//   },
//   refreshState: function(){
//     // implement in subclass
//   },
//   destroy: function() {
//     if(this.fakeElement && this.fakeElement.parentNode) {
//       this.fakeElement.parentNode.removeChild(this.fakeElement);
//     }
//     jcf.lib.removeClass(this.realElement, jcf.baseOptions.hiddenClass);
//     this.realElement.jcf = null;
//   },
//   onFocus: function(){
//     // emulated focus event
//     jcf.lib.addClass(this.fakeElement,this.options.focusClass);
//   },
//   onBlur: function(cb){
//     // emulated blur event
//     jcf.lib.removeClass(this.fakeElement,this.options.focusClass);
//   },
//   onFocusHandler: function() {
//     // handle focus loses
//     if(this.focused) return;
//     this.focused = true;
    
//     // handle touch devices also
//     if(jcf.isTouchDevice) {
//       if(jcf.focusedInstance && jcf.focusedInstance.realElement != this.realElement) {
//         jcf.focusedInstance.onBlur();
//         jcf.focusedInstance.realElement.blur();
//       }
//       jcf.focusedInstance = this;
//     }
//     this.onFocus.apply(this, arguments);
//   },
//   onBlurHandler: function() {
//     // handle focus loses
//     if(!this.pressedFlag) {
//       this.focused = false;
//       this.onBlur.apply(this, arguments);
//     }
//   },
//   onFakeClick: function(){
//     if(jcf.isTouchDevice) {
//       this.onFocus();
//     } else {
//       this.realElement.focus();
//     }
//   },
//   onFakePressed: function(e){
//     this.pressedFlag = true;
//   },
//   onFakeReleased: function(){
//     this.pressedFlag = false;
//   },
//   onCreateModule: function(){
//     // implement in subclass
//   },
//   onModuleAdded: function(module) {
//     // implement in subclass
//   },
//   onControlReady: function() {
//     // implement in subclass
//   }
// });

// /*
//  * JCF Utility Library
//  */
// jcf.lib = {
//   bind: function(func, scope){
//     return function() {
//       return func.apply(scope, arguments);
//     }
//   },
//   browser: (function() {
//     var ua = navigator.userAgent.toLowerCase(), res = {},
//     match = /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(ua) ||
//         /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(ua) || [];
//     res[match[1]] = true;
//     res.version = match[2] || "0";
//     res.safariMac = ua.indexOf('mac') != -1 && ua.indexOf('safari') != -1;
//     return res;
//   })(),
//   getOffset: function (obj) {
//     if (obj.getBoundingClientRect) {
//       var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft;
//       var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
//       var clientLeft = document.documentElement.clientLeft || document.body.clientLeft || 0;
//       var clientTop = document.documentElement.clientTop || document.body.clientTop || 0;
//       return {
//         top:Math.round(obj.getBoundingClientRect().top + scrollTop - clientTop),
//         left:Math.round(obj.getBoundingClientRect().left + scrollLeft - clientLeft)
//       }
//     } else {
//       var posLeft = 0, posTop = 0;
//       while (obj.offsetParent) {posLeft += obj.offsetLeft; posTop += obj.offsetTop; obj = obj.offsetParent;}
//       return {top:posTop,left:posLeft};
//     }
//   },
//   getScrollTop: function() {
//     return window.pageYOffset || document.documentElement.scrollTop;
//   },
//   getScrollLeft: function() {
//     return window.pageXOffset || document.documentElement.scrollLeft;
//   },
//   getWindowWidth: function(){
//     return document.compatMode=='CSS1Compat' ? document.documentElement.clientWidth : document.body.clientWidth;
//   },
//   getWindowHeight: function(){
//     return document.compatMode=='CSS1Compat' ? document.documentElement.clientHeight : document.body.clientHeight;
//   },
//   getStyle: function(el, prop) {
//     if (document.defaultView && document.defaultView.getComputedStyle) {
//       return document.defaultView.getComputedStyle(el, null)[prop];
//     } else if (el.currentStyle) {
//       return el.currentStyle[prop];
//     } else {
//       return el.style[prop];
//     }
//   },
//   getParent: function(obj, selector) {
//     while(obj.parentNode && obj.parentNode != document.body) {
//       if(obj.parentNode.tagName.toLowerCase() == selector.toLowerCase()) {
//         return obj.parentNode;
//       }
//       obj = obj.parentNode;
//     }
//     return false;
//   },
//   isParent: function(child, parent) {
//     while(child.parentNode) {
//       if(child.parentNode === parent) {
//         return true;
//       }
//       child = child.parentNode;
//     }
//     return false;
//   },
//   getLabelFor: function(object) {
//     if(jcf.lib.getParent(object,'label')) {
//       return object.parentNode;
//     } else if(object.id) {
//       return jcf.lib.queryBySelector('label[for="' + object.id + '"]')[0];
//     }
//   },
//   disableTextSelection: function(el){
//     el.setAttribute('unselectable', 'on');
//     el.style.MozUserSelect = 'none';
//     el.style.WebkitUserSelect = 'none';
//     el.style.UserSelect = 'none';
//     el.onselectstart = function() {return false};
//   },
//   enableTextSelection: function(el) {
//     el.removeAttribute('unselectable');
//     el.style.MozUserSelect = '';
//     el.style.WebkitUserSelect = '';
//     el.style.UserSelect = '';
//     el.onselectstart = null;
//   },
//   queryBySelector: function(selector, scope){
//     return this.getElementsBySelector(selector, scope);
//   },
//   prevSibling: function(node) {
//     while(node = node.previousSibling) if(node.nodeType == 1) break;
//     return node;
//   },
//   nextSibling: function(node) {
//     while(node = node.nextSibling) if(node.nodeType == 1) break;
//     return node;
//   },
//   fireEvent: function(element,event) {
//     if (document.createEventObject){
//       var evt = document.createEventObject();
//       return element.fireEvent('on'+event,evt)
//     }
//     else{
//       var evt = document.createEvent('HTMLEvents');
//       evt.initEvent(event, true, true );
//       return !element.dispatchEvent(evt);
//     }
//   },
//   isParent: function(p, c) {
//     while(c.parentNode) {
//       if(p == c) {
//         return true;
//       }
//       c = c.parentNode;
//     }
//     return false;
//   },
//   inherit: function(Child, Parent) {
//     var F = function() { }
//     F.prototype = Parent.prototype
//     Child.prototype = new F()
//     Child.prototype.constructor = Child
//     Child.superclass = Parent.prototype
//   },
//   extend: function(obj) {
//     for(var i = 1; i < arguments.length; i++) {
//       for(var p in arguments[i]) {
//         if(arguments[i].hasOwnProperty(p)) {
//           obj[p] = arguments[i][p];
//         }
//       }
//     }
//     return obj;
//   },
//   hasClass: function (obj,cname) {
//     return (obj.className ? obj.className.match(new RegExp('(\\s|^)'+cname+'(\\s|$)')) : false);
//   },
//   addClass: function (obj,cname) {
//     if (!this.hasClass(obj,cname)) obj.className += " "+cname;
//   },
//   removeClass: function (obj,cname) {
//     if (this.hasClass(obj,cname)) obj.className=obj.className.replace(new RegExp('(\\s|^)'+cname+'(\\s|$)'),' ');
//   },
//   toggleClass: function(obj, cname, condition) {
//     if(condition) this.addClass(obj, cname); else this.removeClass(obj, cname);
//   },
//   createElement: function(tagName, options) {
//     var el = document.createElement(tagName);
//     for(var p in options) {
//       if(options.hasOwnProperty(p)) {
//         switch (p) {
//           case 'class': el.className = options[p]; break;
//           case 'html': el.innerHTML = options[p]; break;
//           case 'style': this.setStyles(el, options[p]); break;
//           default: el.setAttribute(p, options[p]);
//         }
//       }
//     }
//     return el;
//   },
//   setStyles: function(el, styles) {
//     for(var p in styles) {
//       if(styles.hasOwnProperty(p)) {
//         switch (p) {
//           case 'float': el.style.cssFloat = styles[p]; break;
//           case 'opacity': el.style.filter = 'progid:DXImageTransform.Microsoft.Alpha(opacity='+styles[p]*100+')'; el.style.opacity = styles[p]; break;
//           default: el.style[p] = (typeof styles[p] === 'undefined' ? 0 : styles[p]) + (typeof styles[p] === 'number' ? 'px' : '');
//         }
//       }
//     }
//     return el;
//   },
//   getInnerWidth: function(el) {
//     return el.offsetWidth - (parseInt(this.getStyle(el,'paddingLeft')) || 0) - (parseInt(this.getStyle(el,'paddingRight')) || 0);
//   },
//   getInnerHeight: function(el) {
//     return el.offsetHeight - (parseInt(this.getStyle(el,'paddingTop')) || 0) - (parseInt(this.getStyle(el,'paddingBottom')) || 0);
//   },
//   getAllClasses: function(cname, prefix, skip) {
//     if(!skip) skip = '';
//     if(!prefix) prefix = '';
//     return cname ? cname.replace(new RegExp('(\\s|^)'+skip+'(\\s|$)'),' ').replace(/[\s]*([\S]+)+[\s]*/gi,prefix+"$1 ") : '';
//   },
//   getElementsBySelector: function(selector, scope) {
//     if(typeof document.querySelectorAll === 'function') {
//       return (scope || document).querySelectorAll(selector);
//     }
//     var selectors = selector.split(',');
//     var resultList = [];
//     for(var s = 0; s < selectors.length; s++) {
//       var currentContext = [scope || document];
//       var tokens = selectors[s].replace(/^\s+/,'').replace(/\s+$/,'').split(' ');
//       for (var i = 0; i < tokens.length; i++) {
//         token = tokens[i].replace(/^\s+/,'').replace(/\s+$/,'');
//         if (token.indexOf('#') > -1) {
//           var bits = token.split('#'), tagName = bits[0], id = bits[1];
//           var element = document.getElementById(id);
//           if (tagName && element.nodeName.toLowerCase() != tagName) {
//             return [];
//           }
//           currentContext = [element];
//           continue;
//         }
//         if (token.indexOf('.') > -1) {
//           var bits = token.split('.'), tagName = bits[0] || '*', className = bits[1], found = [], foundCount = 0;
//           for (var h = 0; h < currentContext.length; h++) {
//             var elements;
//             if (tagName == '*') {
//               elements = currentContext[h].getElementsByTagName('*');
//             } else {
//               elements = currentContext[h].getElementsByTagName(tagName);
//             }
//             for (var j = 0; j < elements.length; j++) {
//               found[foundCount++] = elements[j];
//             }
//           }
//           currentContext = [];
//           var currentContextIndex = 0;
//           for (var k = 0; k < found.length; k++) {
//             if (found[k].className && found[k].className.match(new RegExp('(\\s|^)'+className+'(\\s|$)'))) {
//               currentContext[currentContextIndex++] = found[k];
//             }
//           }
//           continue;
//         }
//         if (token.match(/^(\w*)\[(\w+)([=~\|\^\$\*]?)=?"?([^\]"]*)"?\]$/)) {
//           var tagName = RegExp.$1 || '*', attrName = RegExp.$2, attrOperator = RegExp.$3, attrValue = RegExp.$4;
//           if(attrName.toLowerCase() == 'for' && this.browser.msie && this.browser.version < 8) {
//             attrName = 'htmlFor';
//           }
//           var found = [], foundCount = 0;
//           for (var h = 0; h < currentContext.length; h++) {
//             var elements;
//             if (tagName == '*') {
//               elements = currentContext[h].getElementsByTagName('*');
//             } else {
//               elements = currentContext[h].getElementsByTagName(tagName);
//             }
//             for (var j = 0; j < elements.length; j++) {
//               found[foundCount++] = elements[j];
//             }
//           }
//           currentContext = [];
//           var currentContextIndex = 0, checkFunction;
//           switch (attrOperator) {
//             case '=': checkFunction = function(e) { return (e.getAttribute(attrName) == attrValue) }; break;
//             case '~': checkFunction = function(e) { return (e.getAttribute(attrName).match(new RegExp('(\\s|^)'+attrValue+'(\\s|$)'))) }; break;
//             case '|': checkFunction = function(e) { return (e.getAttribute(attrName).match(new RegExp('^'+attrValue+'-?'))) }; break;
//             case '^': checkFunction = function(e) { return (e.getAttribute(attrName).indexOf(attrValue) == 0) }; break;
//             case '$': checkFunction = function(e) { return (e.getAttribute(attrName).lastIndexOf(attrValue) == e.getAttribute(attrName).length - attrValue.length) }; break;
//             case '*': checkFunction = function(e) { return (e.getAttribute(attrName).indexOf(attrValue) > -1) }; break;
//             default : checkFunction = function(e) { return e.getAttribute(attrName) };
//           }
//           currentContext = [];
//           var currentContextIndex = 0;
//           for (var k = 0; k < found.length; k++) {
//             if (checkFunction(found[k])) {
//               currentContext[currentContextIndex++] = found[k];
//             }
//           }
//           continue;
//         }
//         tagName = token;
//         var found = [], foundCount = 0;
//         for (var h = 0; h < currentContext.length; h++) {
//           var elements = currentContext[h].getElementsByTagName(tagName);
//           for (var j = 0; j < elements.length; j++) {
//             found[foundCount++] = elements[j];
//           }
//         }
//         currentContext = found;
//       }
//       resultList = [].concat(resultList,currentContext);
//     }
//     return resultList;
//   },
//   scrollSize: (function(){
//     var content, hold, sizeBefore, sizeAfter;
//     function buildSizer(){
//       if(hold) removeSizer();
//       content = document.createElement('div');
//       hold = document.createElement('div');
//       hold.style.cssText = 'position:absolute;overflow:hidden;width:100px;height:100px';
//       hold.appendChild(content);
//       document.body.appendChild(hold);
//     }
//     function removeSizer(){
//       document.body.removeChild(hold);
//       hold = null;
//     }
//     function calcSize(vertical) {
//       buildSizer();
//       content.style.cssText = 'height:'+(vertical ? '100%' : '200px');
//       sizeBefore = (vertical ? content.offsetHeight : content.offsetWidth);
//       hold.style.overflow = 'scroll'; content.innerHTML = 1;
//       sizeAfter = (vertical ? content.offsetHeight : content.offsetWidth);
//       if(vertical && hold.clientHeight) sizeAfter = hold.clientHeight;
//       removeSizer();
//       return sizeBefore - sizeAfter;
//     }
//     return {
//       getWidth:function(){
//         return calcSize(false);
//       },
//       getHeight:function(){
//         return calcSize(true)
//       }
//     }
//   }()),
//   domReady: function (handler){
//     var called = false
//     function ready() {
//       if (called) return;
//       called = true;
//       handler();
//     }
//     if (document.addEventListener) {
//       document.addEventListener("DOMContentLoaded", ready, false);
//     } else if (document.attachEvent) {
//       if (document.documentElement.doScroll && window == window.top) {
//         function tryScroll(){
//           if (called) return
//           if (!document.body) return
//           try {
//             document.documentElement.doScroll("left")
//             ready()
//           } catch(e) {
//             setTimeout(tryScroll, 0)
//           }
//         }
//         tryScroll()
//       }
//       document.attachEvent("onreadystatechange", function(){
//         if (document.readyState === "complete") {
//           ready()
//         }
//       })
//     }
//     if (window.addEventListener) window.addEventListener('load', ready, false)
//     else if (window.attachEvent) window.attachEvent('onload', ready)
//   },
//   event: (function(){
//     var guid = 0;
//     function fixEvent(e) {
//       e = e || window.event;
//       if (e.isFixed) {
//         return e;
//       }
//       e.isFixed = true; 
//       e.preventDefault = e.preventDefault || function(){this.returnValue = false}
//       e.stopPropagation = e.stopPropagaton || function(){this.cancelBubble = true}
//       if (!e.target) {
//         e.target = e.srcElement
//       }
//       if (!e.relatedTarget && e.fromElement) {
//         e.relatedTarget = e.fromElement == e.target ? e.toElement : e.fromElement;
//       }
//       if (e.pageX == null && e.clientX != null) {
//         var html = document.documentElement, body = document.body;
//         e.pageX = e.clientX + (html && html.scrollLeft || body && body.scrollLeft || 0) - (html.clientLeft || 0);
//         e.pageY = e.clientY + (html && html.scrollTop || body && body.scrollTop || 0) - (html.clientTop || 0);
//       }
//       if (!e.which && e.button) {
//         e.which = e.button & 1 ? 1 : (e.button & 2 ? 3 : (e.button & 4 ? 2 : 0));
//       }
//       if(e.type === "DOMMouseScroll" || e.type === 'mousewheel') {
//         e.mWheelDelta = 0;
//         if (e.wheelDelta) {
//           e.mWheelDelta = e.wheelDelta/120;
//         } else if (e.detail) {
//           e.mWheelDelta = -e.detail/3;
//         }
//       }
//       return e;
//     }
//     function commonHandle(event, customScope) {
//       event = fixEvent(event);
//       var handlers = this.events[event.type];
//       for (var g in handlers) {
//         var handler = handlers[g];
//         var ret = handler.call(customScope || this, event);
//         if (ret === false) {
//           event.preventDefault()
//           event.stopPropagation()
//         }
//       }
//     }
//     var publicAPI = {
//       add: function(elem, type, handler, forcedScope) {
//         if (elem.setInterval && (elem != window && !elem.frameElement)) {
//           elem = window;
//         }
//         if (!handler.guid) {
//           handler.guid = ++guid;
//         }
//         if (!elem.events) {
//           elem.events = {};
//           elem.handle = function(event) {
//             return commonHandle.call(elem, event);
//           }
//         }
//         if (!elem.events[type]) {
//           elem.events[type] = {};
//           if (elem.addEventListener) elem.addEventListener(type, elem.handle, false);
//           else if (elem.attachEvent) elem.attachEvent("on" + type, elem.handle);
//           if(type === 'mousewheel') {
//             publicAPI.add(elem, 'DOMMouseScroll', handler, forcedScope);
//           }
//         }
//         var fakeHandler = jcf.lib.bind(handler, forcedScope);
//         fakeHandler.guid = handler.guid;
//         elem.events[type][handler.guid] = forcedScope ? fakeHandler : handler;
//       },
//       remove: function(elem, type, handler) {
//         var handlers = elem.events && elem.events[type];
//         if (!handlers) return;
//         delete handlers[handler.guid];
//         for(var any in handlers) return;
//         if (elem.removeEventListener) elem.removeEventListener(type, elem.handle, false);
//         else if (elem.detachEvent) elem.detachEvent("on" + type, elem.handle);
//         delete elem.events[type];
//         for (var any in elem.events) return;
//         try {
//           delete elem.handle;
//           delete elem.events;
//         } catch(e) {
//           if(elem.removeAttribute) {
//             elem.removeAttribute("handle");
//             elem.removeAttribute("events");
//           }
//         }
//         if(type === 'mousewheel') {
//           publicAPI.remove(elem, 'DOMMouseScroll', handler);
//         }
//       }
//     }
//     return publicAPI;
//   }())
// }

// // custom scrollbars module
// jcf.addModule({
//   name:'customscroll',
//   selector:'div.scrollable-area',
//   defaultOptions: {
//     alwaysPreventWheel: false,
//     enableMouseWheel: true,
//     captureFocus: false,
//     handleNested: true,
//     alwaysKeepScrollbars: false,
//     scrollbarOptions: {},
//     focusClass:'scrollable-focus',
//     wrapperTag: 'div',
//     noHorizontalBarClass:'noscroll-horizontal',
//     noVerticalBarClass:'noscroll-vertical',
//     innerWrapperClass:'scrollable-inner-wrapper',
//     outerWrapperClass:'scrollable-area-wrapper',
//     horizontalClass: 'hscrollable',
//     verticalClass: 'vscrollable',
//     bothClass: 'anyscrollable'
//   },
//   replaceObject: function(){
//     this.initStructure();
//     this.refreshState();
//     this.addEvents();
//   },
//   initStructure: function(){
//     // set scroll type
//     this.realElement.jcf = this;
//     if(jcf.lib.hasClass(this.realElement, this.options.bothClass) || 
//     jcf.lib.hasClass(this.realElement, this.options.horizontalClass) && jcf.lib.hasClass(this.realElement, this.options.verticalClass)) {
//       this.scrollType = 'both';
//     } else if(jcf.lib.hasClass(this.realElement, this.options.horizontalClass)) {
//       this.scrollType = 'horizontal';
//     } else {
//       this.scrollType = 'vertical';
//     }
    
//     // init dimensions and build structure
//     this.realElement.style.position = 'relative';
//     this.realElement.style.overflow = 'hidden';
    
//     // build content wrapper and scrollbar(s)
//     this.buildWrapper();
//     this.buildScrollbars();
//   },
//   buildWrapper: function() {
//     this.outerWrapper = document.createElement(this.options.wrapperTag);
//     this.outerWrapper.className = this.options.outerWrapperClass;
//     this.realElement.parentNode.insertBefore(this.outerWrapper, this.realElement);
//     this.outerWrapper.appendChild(this.realElement);
//   },
//   buildScrollbars: function() {
//     if(this.scrollType === 'horizontal' || this.scrollType === 'both') {
//       this.hScrollBar = new jcf.plugins.scrollbar(jcf.lib.extend(this.options.scrollbarOptions,{
//         vertical: false,
//         spawnClass: this,
//         holder: this.outerWrapper,
//         range: this.realElement.scrollWidth - this.realElement.offsetWidth,
//         size: this.realElement.offsetWidth,
//         onScroll: jcf.lib.bind(function(v) {
//           this.realElement.scrollLeft = v;
//         },this)
//       }));
//     }
//     if(this.scrollType === 'vertical' || this.scrollType === 'both') {
//       this.vScrollBar = new jcf.plugins.scrollbar(jcf.lib.extend(this.options.scrollbarOptions,{
//         vertical: true,
//         spawnClass: this,
//         holder: this.outerWrapper,
//         range: this.realElement.scrollHeight - this.realElement.offsetHeight,
//         size: this.realElement.offsetHeight,
//         onScroll: jcf.lib.bind(function(v) {
//           this.realElement.scrollTop = v;
//         },this)
//       }));
//     }
//     this.outerWrapper.style.width = this.realElement.offsetWidth + 'px';
//     this.outerWrapper.style.height = this.realElement.offsetHeight + 'px';
//     this.resizeScrollContent();
//   },
//   resizeScrollContent: function() {
//     var diffWidth = this.realElement.offsetWidth - jcf.lib.getInnerWidth(this.realElement);
//     var diffHeight = this.realElement.offsetHeight - jcf.lib.getInnerHeight(this.realElement);
//     this.realElement.style.width = Math.max(0, this.outerWrapper.offsetWidth - diffWidth - (this.vScrollBar ? this.vScrollBar.getScrollBarSize() : 0)) + 'px';
//     this.realElement.style.height = Math.max(0, this.outerWrapper.offsetHeight - diffHeight - (this.hScrollBar ? this.hScrollBar.getScrollBarSize() : 0)) + 'px';
//   },
//   addEvents: function() {
//     // enable mouse wheel handling
//     if(!jcf.isTouchDevice && this.options.enableMouseWheel) {
//       jcf.lib.event.add(this.outerWrapper, 'mousewheel', this.onMouseWheel, this);
//     }
//     // add touch scroll on block body
//     if(jcf.isTouchDevice) {
//       jcf.lib.event.add(this.realElement, jcf.eventPress, this.onScrollablePress, this);
//     }
    
//     // handle nested scrollbars
//     if(this.options.handleNested) {
//       var el = this.realElement, name = this.name;
//       while(el.parentNode) {
//         if(el.parentNode.jcf && el.parentNode.jcf.name == name) {
//           el.parentNode.jcf.refreshState();
//         }
//         el = el.parentNode;
//       }
//     }
//   },
//   onMouseWheel: function(e) {
//     if(this.scrollType === 'vertical' || this.scrollType === 'both') {
//       return this.vScrollBar.doScrollWheelStep(e.mWheelDelta) === false ? false : !this.options.alwaysPreventWheel;
//     } else {
//       return this.hScrollBar.doScrollWheelStep(e.mWheelDelta) === false ? false : !this.options.alwaysPreventWheel;
//     }
//   },
//   onScrollablePress: function(e) {
//     this.scrollableOffset = jcf.lib.getOffset(this.realElement);
//     if(this.hScrollBar) {
//       this.scrollableTouchX = (jcf.isTouchDevice ? e.changedTouches[0] : e).pageX;
//       this.origValueX = this.hScrollBar.getScrollValue();
//     }
//     if(this.vScrollBar) {
//       this.scrollableTouchY = (jcf.isTouchDevice ? e.changedTouches[0] : e).pageY;
//       this.origValueY = this.vScrollBar.getScrollValue();
//     }
//     jcf.lib.event.add(this.realElement, jcf.eventMove, this.onScrollableMove, this);
//     jcf.lib.event.add(this.realElement, jcf.eventRelease, this.onScrollableRelease, this);
//   },
//   onScrollableMove: function(e) {
//     if(this.vScrollBar) {
//       var difY = (jcf.isTouchDevice ? e.changedTouches[0] : e).pageY - this.scrollableTouchY;
//       this.vScrollBar.scrollTo(this.origValueY-difY);
//     }
//     if(this.hScrollBar) {
//       var difX = (jcf.isTouchDevice ? e.changedTouches[0] : e).pageX - this.scrollableTouchX;
//       this.hScrollBar.scrollTo(this.origValueX-difX);
//     }
//     e.preventDefault();
//   },
//   onScrollableRelease: function() {
//     jcf.lib.event.remove(this.realElement, jcf.eventMove, this.onScrollableMove);
//     jcf.lib.event.remove(this.realElement, jcf.eventRelease, this.onScrollableRelease);
//   },
//   refreshState: function() {
//     if(this.options.alwaysKeepScrollbars) {
//       if(this.hScrollBar) this.hScrollBar.scrollBar.style.display = 'block';
//       if(this.vScrollBar) this.vScrollBar.scrollBar.style.display = 'block';
//     } else {
//       if(this.hScrollBar) {
//         if(this.getScrollRange(false)) {
//           this.hScrollBar.scrollBar.style.display = 'block';
//           this.resizeScrollContent();
//           this.hScrollBar.setRange(this.getScrollRange(false));
//         } else {
//           this.hScrollBar.scrollBar.style.display = 'none';
//           this.realElement.style.width = this.outerWrapper.style.width;
//         }
//         jcf.lib.toggleClass(this.outerWrapper, this.options.noHorizontalBarClass, this.hScrollBar.options.range === 0);
//       }
//       if(this.vScrollBar) {
//         if(this.getScrollRange(true) > 0) {
//           this.vScrollBar.scrollBar.style.display = 'block';
//           this.resizeScrollContent();
//           this.vScrollBar.setRange(this.getScrollRange(true));
//         } else {
//           this.vScrollBar.scrollBar.style.display = 'none';
//           this.realElement.style.width = this.outerWrapper.style.width;
//         }
//         jcf.lib.toggleClass(this.outerWrapper, this.options.noVerticalBarClass, this.vScrollBar.options.range === 0);
//       }
//     }
//     if(this.vScrollBar) {
//       this.vScrollBar.setRange(this.realElement.scrollHeight - this.realElement.offsetHeight);
//       this.vScrollBar.setSize(this.realElement.offsetHeight);
//       this.vScrollBar.scrollTo(this.realElement.scrollTop);
//     }
//     if(this.hScrollBar) {
//       this.hScrollBar.setRange(this.realElement.scrollWidth - this.realElement.offsetWidth);
//       this.hScrollBar.setSize(this.realElement.offsetWidth);
//       this.hScrollBar.scrollTo(this.realElement.scrollLeft);
//     }
//   },
//   getScrollRange: function(isVertical) {
//     if(isVertical) {
//       return this.realElement.scrollHeight - this.realElement.offsetHeight;
//     } else {
//       return this.realElement.scrollWidth - this.realElement.offsetWidth;
//     }
//   },
//   getCurrentRange: function(scrollInstance) {
//     return this.getScrollRange(scrollInstance.isVertical);
//   },
//   onCreateModule: function(){
//     if(jcf.modules.select) {
//       this.extendSelect();
//     }
//     if(jcf.modules.selectmultiple) {
//       this.extendSelectMultiple();
//     }
//     if(jcf.modules.textarea) {
//       this.extendTextarea();
//     }
//   },
//   onModuleAdded: function(module){
//     if(module.prototype.name == 'select') {
//       this.extendSelect();
//     }
//     if(module.prototype.name == 'selectmultiple') {
//       this.extendSelectMultiple();
//     }
//     if(module.prototype.name == 'textarea') {
//       this.extendTextarea();
//     }
//   },
//   extendSelect: function() {
//     // add scrollable if needed on control ready
//     jcf.modules.select.prototype.onControlReady = function(obj){
//       if(obj.selectList.scrollHeight > obj.selectList.offsetHeight) {
//         obj.jcfScrollable = new jcf.modules.customscroll({
//           alwaysPreventWheel: true,
//           replaces:obj.selectList
//         });
//       }
//     }
//     // update scroll function
//     var orig = jcf.modules.select.prototype.scrollToItem;
//     jcf.modules.select.prototype.scrollToItem = function(){
//       orig.apply(this);
//       if(this.jcfScrollable) {
//         this.jcfScrollable.refreshState();
//       }
//     }
//   },
//   extendTextarea: function() {
//     // add scrollable if needed on control ready
//     jcf.modules.textarea.prototype.onControlReady = function(obj){
//       obj.jcfScrollable = new jcf.modules.customscroll({
//         alwaysKeepScrollbars: true,
//         alwaysPreventWheel: true,
//         replaces: obj.realElement
//       });
//     }
//     // update scroll function
//     var orig = jcf.modules.textarea.prototype.refreshState;
//     jcf.modules.textarea.prototype.refreshState = function(){
//       orig.apply(this);
//       if(this.jcfScrollable) {
//         this.jcfScrollable.refreshState();
//       }
//     }
//   },
//   extendSelectMultiple: function(){
//     // add scrollable if needed on control ready
//     jcf.modules.selectmultiple.prototype.onControlReady = function(obj){
//       //if(obj.optionsHolder.scrollHeight > obj.optionsHolder.offsetHeight) {
//         obj.jcfScrollable = new jcf.modules.customscroll({
//           alwaysPreventWheel: true,
//           replaces:obj.optionsHolder
//         });
//       //}
//     }
//     // update scroll function
//     var orig = jcf.modules.selectmultiple.prototype.scrollToItem;
//     jcf.modules.selectmultiple.prototype.scrollToItem = function(){
//       orig.apply(this);
//       if(this.jcfScrollable) {
//         this.jcfScrollable.refreshState();
//       }
//     }
    
//     // update scroll size?
//     var orig2 = jcf.modules.selectmultiple.prototype.rebuildOptions;
//     jcf.modules.selectmultiple.prototype.rebuildOptions = function(){
//       orig2.apply(this);
//       if(this.jcfScrollable) {
//         this.jcfScrollable.refreshState();
//       }
//     }
    
//   }
// });

// // scrollbar plugin
// jcf.addPlugin({
//   name: 'scrollbar',
//   defaultOptions: {
//     size: 0,
//     range: 0,
//     moveStep: 6,
//     moveDistance: 50,
//     moveInterval: 10,
//     trackHoldDelay: 900,
//     holder: null,
//     vertical: true,
//     scrollTag: 'div',
//     onScroll: function(){},
//     onScrollEnd: function(){},
//     onScrollStart: function(){},
//     VscrollBarClass:'vscrollbar',
//     VscrollStructure: '<div class="vscroll-up"></div><div class="vscroll-line"><div class="vscroll-slider"><div class="scroll-bar-top"></div><div class="scroll-bar-bottom"></div></div></div></div><div class="vscroll-down"></div>',
//     VscrollTrack: 'div.vscroll-line',
//     VscrollBtnDecClass:'div.vscroll-up',
//     VscrollBtnIncClass:'div.vscroll-down',
//     VscrollSliderClass:'div.vscroll-slider',
//     HscrollBarClass:'hscrollbar',
//     HscrollStructure: '<div class="hscroll-left"></div><div class="hscroll-line"><div class="hscroll-slider"><div class="scroll-bar-left"></div><div class="scroll-bar-right"></div></div></div></div><div class="hscroll-right"></div>',
//     HscrollTrack: 'div.hscroll-line',
//     HscrollBtnDecClass:'div.hscroll-left',
//     HscrollBtnIncClass:'div.hscroll-right',
//     HscrollSliderClass:'div.hscroll-slider'
//   },
//   init: function(userOptions) {
//     this.setOptions(userOptions);
//     this.createScrollBar();
//     this.attachEvents();
//     this.setSize();
//   },
//   setOptions: function(extOptions) {
//     // merge options
//     this.options = jcf.lib.extend({}, this.defaultOptions, extOptions);
//     this.isVertical = this.options.vertical;
//     this.prefix = this.isVertical ? 'V' : 'H';
//     this.eventPageOffsetProperty = this.isVertical ? 'pageY' : 'pageX';
//     this.positionProperty = this.isVertical ? 'top' : 'left';
//     this.sizeProperty = this.isVertical ? 'height' : 'width';
//     this.dimenionsProperty = this.isVertical ? 'offsetHeight' : 'offsetWidth';
//     this.invertedDimenionsProperty = !this.isVertical ? 'offsetHeight' : 'offsetWidth';
    
//     // set corresponding classes
//     for(var p in this.options) {
//       if(p.indexOf(this.prefix) == 0) {
//         this.options[p.substr(1)] = this.options[p];
//       }
//     }
//   },
//   createScrollBar: function() {
//     // create dimensions
//     this.scrollBar = document.createElement(this.options.scrollTag);
//     this.scrollBar.className = this.options.scrollBarClass;
//     this.scrollBar.innerHTML = this.options.scrollStructure;
    
//     // get elements
//     this.track = jcf.lib.queryBySelector(this.options.scrollTrack,this.scrollBar)[0];
//     this.btnDec = jcf.lib.queryBySelector(this.options.scrollBtnDecClass,this.scrollBar)[0];
//     this.btnInc = jcf.lib.queryBySelector(this.options.scrollBtnIncClass,this.scrollBar)[0];
//     this.slider = jcf.lib.queryBySelector(this.options.scrollSliderClass,this.scrollBar)[0];
//     this.slider.style.position = 'absolute';
//     this.track.style.position = 'relative';
//   },
//   attachEvents: function() {
//     // append scrollbar to holder if provided
//     if(this.options.holder) {
//       this.options.holder.appendChild(this.scrollBar);
//     }
    
//     // attach listeners for slider and buttons
//     jcf.lib.event.add(this.slider, jcf.eventPress, this.onSliderPressed, this);
//     jcf.lib.event.add(this.btnDec, jcf.eventPress, this.onBtnDecPressed, this);
//     jcf.lib.event.add(this.btnInc, jcf.eventPress, this.onBtnIncPressed, this);
//     jcf.lib.event.add(this.track, jcf.eventPress, this.onTrackPressed, this);
//   },
//   setSize: function(value) {
//     if(typeof value === 'number') {
//       this.options.size = value;
//     }
//     this.scrollOffset = this.scrollValue = this.sliderOffset = 0;
//     this.scrollBar.style[this.sizeProperty] = this.options.size + 'px';
//     this.resizeControls();
//     this.refreshSlider();
//   },
//   setRange: function(r) {
//     this.options.range = Math.max(r,0);
//     this.resizeControls();
//   },
//   doScrollWheelStep: function(direction) {
//     // 1 - scroll up, -1 scroll down
//     this.startScroll();
//     //if((direction < 0 && !this.isEndPosition()) || (direction > 0 && !this.isStartPosition())) {
//       this.scrollTo(this.getScrollValue()-this.options.moveDistance * direction);
//       this.moveScroll();
//       this.endScroll();
//       return false;
//     //}
//   },
//   resizeControls: function() {
//     // calculate dimensions
//     this.barSize = this.scrollBar[this.dimenionsProperty];
//     this.btnDecSize = this.btnDec[this.dimenionsProperty];
//     this.btnIncSize = this.btnInc[this.dimenionsProperty];
//     this.trackSize = this.barSize - this.btnDecSize - this.btnIncSize;
    
//     // resize and reposition elements
//     this.track.style[this.sizeProperty] = this.trackSize + 'px';
//     this.trackSize = this.track[this.dimenionsProperty];
//     this.sliderSize = this.getSliderSize();
//     this.slider.style[this.sizeProperty] = this.sliderSize + 'px';
//     this.sliderSize = this.slider[this.dimenionsProperty];
//   },
//   refreshSlider: function(complete) {
//     // refresh dimensions
//     if(complete) {
//       this.resizeControls();
//     }
//     // redraw slider and classes
//     this.sliderOffset = isNaN(this.sliderOffset) ? 0 : this.sliderOffset;
//     this.slider.style[this.positionProperty] = this.sliderOffset + 'px';
//   },
//   startScroll: function() {
//     // refresh range if possible
//     if(this.options.spawnClass && typeof this.options.spawnClass.getCurrentRange === 'function') {
//       this.setRange(this.options.spawnClass.getCurrentRange(this));
//     }
//     this.resizeControls();
//     this.scrollBarOffset = jcf.lib.getOffset(this.track)[this.positionProperty];
//     this.options.onScrollStart();
//   },
//   moveScroll: function() {
//     this.options.onScroll(this.scrollValue);
//   },
//   endScroll: function() {
//     this.options.onScrollEnd();
//   },
//   startButtonMoveScroll: function(direction) {
//     this.startScroll();
//     clearInterval(this.buttonScrollTimer);
//     this.buttonScrollTimer = setInterval(jcf.lib.bind(function(){
//       this.scrollValue += this.options.moveStep * direction
//       if(this.scrollValue > this.options.range) {
//         this.scrollValue = this.options.range;
//         this.endButtonMoveScroll();
//       } else if(this.scrollValue < 0) {
//         this.scrollValue = 0;
//         this.endButtonMoveScroll();
//       }
//       this.scrollTo(this.scrollValue);
      
//     },this),this.options.moveInterval);
//   },
//   endButtonMoveScroll: function() {
//     clearInterval(this.buttonScrollTimer);
//     this.endScroll();
//   },
//   isStartPosition: function() {
//     return this.scrollValue === 0;
//   },
//   isEndPosition: function() {
//     return this.scrollValue === this.options.range;
//   },
//   getSliderSize: function() {
//     return Math.round(this.getSliderSizePercent() * this.trackSize / 100);
//   },
//   getSliderSizePercent: function() {
//     return this.options.range === 0 ? 0 : this.barSize * 100 / (this.barSize + this.options.range);
//   },
//   getSliderOffsetByScrollValue: function() {
//     return (this.scrollValue * 100 / this.options.range) * (this.trackSize - this.sliderSize) / 100;
//   },
//   getSliderOffsetPercent: function() {
//     return this.sliderOffset * 100 / (this.trackSize - this.sliderSize);
//   },
//   getScrollValueBySliderOffset: function() {
//     return this.getSliderOffsetPercent() * this.options.range / 100;
//   },
//   getScrollBarSize: function() {
//     return this.scrollBar[this.invertedDimenionsProperty];
//   },
//   getScrollValue: function() {
//     return this.scrollValue || 0;
//   },
//   scrollOnePage: function(direction) {
//     this.scrollTo(this.scrollValue + direction*this.barSize);
//   },
//   scrollTo: function(x) {
//     this.scrollValue = x < 0 ? 0 : x > this.options.range ? this.options.range : x;
//     this.sliderOffset = this.getSliderOffsetByScrollValue();
//     this.refreshSlider();
//     this.moveScroll();
//   },
//   onSliderPressed: function(e){
//     jcf.lib.event.add(document.body, jcf.eventRelease, this.onSliderRelease, this);
//     jcf.lib.event.add(document.body, jcf.eventMove, this.onSliderMove, this);
//     jcf.lib.disableTextSelection(this.slider);
    
//     // calculate offsets once
//     this.sliderInnerOffset = (jcf.isTouchDevice ? e.changedTouches[0] : e)[this.eventPageOffsetProperty] - jcf.lib.getOffset(this.slider)[this.positionProperty];
//     this.startScroll();
//     return false;
//   },
//   onSliderRelease: function(){
//     jcf.lib.event.remove(document.body, jcf.eventRelease, this.onSliderRelease);
//     jcf.lib.event.remove(document.body, jcf.eventMove, this.onSliderMove);
//   },
//   onSliderMove: function(e) {
//     this.sliderOffset = (jcf.isTouchDevice ? e.changedTouches[0] : e)[this.eventPageOffsetProperty] - this.scrollBarOffset - this.sliderInnerOffset;
//     if(this.sliderOffset < 0) {
//       this.sliderOffset = 0;
//     } else if(this.sliderOffset + this.sliderSize > this.trackSize) {
//       this.sliderOffset = this.trackSize - this.sliderSize;
//     }
//     if(this.previousOffset != this.sliderOffset) {
//       this.previousOffset = this.sliderOffset;
//       this.scrollTo(this.getScrollValueBySliderOffset());
//     }
//   },
//   onBtnIncPressed: function() {
//     jcf.lib.event.add(document.body, jcf.eventRelease, this.onBtnIncRelease, this);
//     jcf.lib.disableTextSelection(this.btnInc);
//     this.startButtonMoveScroll(1);
//     return false;
//   },
//   onBtnIncRelease: function() {
//     jcf.lib.event.remove(document.body, jcf.eventRelease, this.onBtnIncRelease);
//     this.endButtonMoveScroll();
//   },
//   onBtnDecPressed: function() {
//     jcf.lib.event.add(document.body, jcf.eventRelease, this.onBtnDecRelease, this);
//     jcf.lib.disableTextSelection(this.btnDec);
//     this.startButtonMoveScroll(-1);
//     return false;
//   },
//   onBtnDecRelease: function() {
//     jcf.lib.event.remove(document.body, jcf.eventRelease, this.onBtnDecRelease);
//     this.endButtonMoveScroll();
//   },
//   onTrackPressed: function(e) {
//     var position = e[this.eventPageOffsetProperty] - jcf.lib.getOffset(this.track)[this.positionProperty];
//     var direction = position < this.sliderOffset ? -1 : position > this.sliderOffset + this.sliderSize ? 1 : 0;
//     if(direction) {
//       this.scrollOnePage(direction);
//     }
//   }
// });

// // clear inputs on focus
// function initInputs() {
//   PlaceholderInput.replaceByOptions({
//     // filter options
//     clearInputs: true,
//     clearTextareas: true,
//     clearPasswords: true,
//     skipClass:'default',
    
//     // input options
//     wrapWithElement:false,
//     showUntilTyping:false,
//     getParentByClass:false,
//     placeholderAttr: 'value'
//   });
// }

// // placeholder class
// ;(function(){
//   var placeholderCollection = [];
//   PlaceholderInput = function() {
//     this.options = {
//       element:null,
//       showUntilTyping:false,
//       wrapWithElement:false,
//       getParentByClass:false,
//       placeholderAttr:'value',
//       inputFocusClass:'focus',
//       inputActiveClass:'text-active',
//       parentFocusClass:'parent-focus',
//       parentActiveClass:'parent-active',
//       labelFocusClass:'label-focus',
//       labelActiveClass:'label-active',
//       fakeElementClass:'input-placeholder-text'
//     }
//     placeholderCollection.push(this);
//     this.init.apply(this,arguments);
//   }
//   PlaceholderInput.refreshAllInputs = function(except) {
//     for(var i = 0; i < placeholderCollection.length; i++) {
//       if(except !== placeholderCollection[i]) {
//         placeholderCollection[i].refreshState();
//       }
//     }
//   }
//   PlaceholderInput.replaceByOptions = function(opt) {
//     var inputs = [].concat(
//       convertToArray(document.getElementsByTagName('input')),
//       convertToArray(document.getElementsByTagName('textarea'))
//     );
//     for(var i = 0; i < inputs.length; i++) {
//       if(inputs[i].className.indexOf(opt.skipClass) < 0) {
//         var inputType = getInputType(inputs[i]);
//         if((opt.clearInputs && (inputType === 'text' || inputType === 'email')) ||
//           (opt.clearTextareas && inputType === 'textarea') || 
//           (opt.clearPasswords && inputType === 'password')
//         ) {
//           new PlaceholderInput({
//             element:inputs[i],
//             wrapWithElement:opt.wrapWithElement,
//             showUntilTyping:opt.showUntilTyping,
//             getParentByClass:opt.getParentByClass,
//             placeholderAttr: inputs[i].getAttribute('placeholder') ? 'placeholder' : opt.placeholderAttr
//           });
//         }
//       }
//     }
//   }
//   PlaceholderInput.prototype = {
//     init: function(opt) {
//       this.setOptions(opt);
//       if(this.element && this.element.PlaceholderInst) {
//         this.element.PlaceholderInst.refreshClasses();
//       } else {
//         this.element.PlaceholderInst = this;
//         if(this.elementType !== 'radio' || this.elementType !== 'checkbox' || this.elementType !== 'file') {
//           this.initElements();
//           this.attachEvents();
//           this.refreshClasses();
//         }
//       }
//     },
//     setOptions: function(opt) {
//       for(var p in opt) {
//         if(opt.hasOwnProperty(p)) {
//           this.options[p] = opt[p];
//         }
//       }
//       if(this.options.element) {
//         this.element = this.options.element;
//         this.elementType = getInputType(this.element);
//         this.wrapWithElement = (this.elementType === 'password' || this.options.showUntilTyping ? true : this.options.wrapWithElement);
//         this.setPlaceholderValue(this.options.placeholderAttr);
//       }
//     },
//     setPlaceholderValue: function(attr) {
//       this.origValue = (attr === 'value' ? this.element.defaultValue : (this.element.getAttribute(attr) || ''));
//       if(this.options.placeholderAttr !== 'value') {
//         this.element.removeAttribute(this.options.placeholderAttr);
//       }
//     },
//     initElements: function() {
//       // create fake element if needed
//       if(this.wrapWithElement) {
//         this.fakeElement = document.createElement('span');
//         this.fakeElement.className = this.options.fakeElementClass;
//         this.fakeElement.innerHTML += this.origValue;
//         this.fakeElement.style.color = getStyle(this.element, 'color');
//         this.fakeElement.style.position = 'absolute';
//         this.element.parentNode.insertBefore(this.fakeElement, this.element);
        
//         if(this.element.value === this.origValue || !this.element.value) {
//           this.element.value = '';
//           this.togglePlaceholderText(true);
//         } else {
//           this.togglePlaceholderText(false);
//         }
//       } else if(!this.element.value && this.origValue.length) {
//         this.element.value = this.origValue;
//       }
//       // get input label
//       if(this.element.id) {
//         this.labels = document.getElementsByTagName('label');
//         for(var i = 0; i < this.labels.length; i++) {
//           if(this.labels[i].htmlFor === this.element.id) {
//             this.labelFor = this.labels[i];
//             break;
//           }
//         }
//       }
//       // get parent node (or parentNode by className)
//       this.elementParent = this.element.parentNode;
//       if(typeof this.options.getParentByClass === 'string') {
//         var el = this.element;
//         while(el.parentNode) {
//           if(hasClass(el.parentNode, this.options.getParentByClass)) {
//             this.elementParent = el.parentNode;
//             break;
//           } else {
//             el = el.parentNode;
//           }
//         }
//       }
//     },
//     attachEvents: function() {
//       this.element.onfocus = bindScope(this.focusHandler, this);
//       this.element.onblur = bindScope(this.blurHandler, this);
//       if(this.options.showUntilTyping) {
//         this.element.onkeydown = bindScope(this.typingHandler, this);
//         this.element.onpaste = bindScope(this.typingHandler, this);
//       }
//       if(this.wrapWithElement) this.fakeElement.onclick = bindScope(this.focusSetter, this);
//     },
//     togglePlaceholderText: function(state) {
//       if(this.wrapWithElement) {
//         this.fakeElement.style.display = state ? '' : 'none';
//       } else {
//         this.element.value = state ? this.origValue : '';
//       }
//     },
//     focusSetter: function() {
//       this.element.focus();
//     },
//     focusHandler: function() {
//       clearInterval(this.checkerInterval);
//       this.checkerInterval = setInterval(bindScope(this.intervalHandler,this), 1);
//       this.focused = true;
//       if(!this.element.value.length || this.element.value === this.origValue) {
//         if(!this.options.showUntilTyping) {
//           this.togglePlaceholderText(false);
//         }
//       }
//       this.refreshClasses();
//     },
//     blurHandler: function() {
//       clearInterval(this.checkerInterval);
//       this.focused = false;
//       if(!this.element.value.length || this.element.value === this.origValue) {
//         this.togglePlaceholderText(true);
//       }
//       this.refreshClasses();
//       PlaceholderInput.refreshAllInputs(this);
//     },
//     typingHandler: function() {
//       setTimeout(bindScope(function(){
//         if(this.element.value.length) {
//           this.togglePlaceholderText(false);
//           this.refreshClasses();
//         }
//       },this), 10);
//     },
//     intervalHandler: function() {
//       if(typeof this.tmpValue === 'undefined') {
//         this.tmpValue = this.element.value;
//       }
//       if(this.tmpValue != this.element.value) {
//         PlaceholderInput.refreshAllInputs(this);
//       }
//     },
//     refreshState: function() {
//       if(this.wrapWithElement) {
//         if(this.element.value.length && this.element.value !== this.origValue) {
//           this.togglePlaceholderText(false);
//         } else if(!this.element.value.length) {
//           this.togglePlaceholderText(true);
//         }
//       }
//       this.refreshClasses();
//     },
//     refreshClasses: function() {
//       this.textActive = this.focused || (this.element.value.length && this.element.value !== this.origValue);
//       this.setStateClass(this.element, this.options.inputFocusClass,this.focused);
//       this.setStateClass(this.elementParent, this.options.parentFocusClass,this.focused);
//       this.setStateClass(this.labelFor, this.options.labelFocusClass,this.focused);
//       this.setStateClass(this.element, this.options.inputActiveClass, this.textActive);
//       this.setStateClass(this.elementParent, this.options.parentActiveClass, this.textActive);
//       this.setStateClass(this.labelFor, this.options.labelActiveClass, this.textActive);
//     },
//     setStateClass: function(el,cls,state) {
//       if(!el) return; else if(state) addClass(el,cls); else removeClass(el,cls);
//     }
//   }
  
//   // utility functions
//   function convertToArray(collection) {
//     var arr = [];
//     for (var i = 0, ref = arr.length = collection.length; i < ref; i++) {
//       arr[i] = collection[i];
//     }
//     return arr;
//   }
//   function getInputType(input) {
//     return (input.type ? input.type : input.tagName).toLowerCase();
//   }
//   function hasClass(el,cls) {
//     return el.className ? el.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)')) : false;
//   }
//   function addClass(el,cls) {
//     if (!hasClass(el,cls)) el.className += " "+cls;
//   }
//   function removeClass(el,cls) {
//     if (hasClass(el,cls)) {el.className=el.className.replace(new RegExp('(\\s|^)'+cls+'(\\s|$)'),' ');}
//   }
//   function bindScope(f, scope) {
//     return function() {return f.apply(scope, arguments)}
//   }
//   function getStyle(el, prop) {
//     if (document.defaultView && document.defaultView.getComputedStyle) {
//       return document.defaultView.getComputedStyle(el, null)[prop];
//     } else if (el.currentStyle) {
//       return el.currentStyle[prop];
//     } else {
//       return el.style[prop];
//     }
//   }
// }());

// // Hash history utility module
// Hash = {
//   init: function() {
//     this._handlers = [];
//     this.manualState = false;
//     this.initChangeHandler();
//     return this;
//   },
//   hashChangeSupported: (function(){
//     return 'onhashchange' in window && (document.documentMode === undefined || document.documentMode > 7);
//   })(),
//   initChangeHandler: function() {
//     var needFrame = /(MSIE 6|MSIE 7)/.test(navigator.userAgent);
//     var delay = 200, instance = this, oldHash, newHash, frameHash;
//     frameHash = oldHash = newHash = location.hash;
    
//     // create iframe if needed
//     if(needFrame) {
//       this.fixFrame = document.createElement('iframe');
//       this.fixFrame.style.display = 'none';
//       document.documentElement.insertBefore(this.fixFrame,document.documentElement.childNodes[0]);
//       this.fixFrame.contentWindow.document.open();
//       this.fixFrame.contentWindow.document.close();
//       this.fixFrame.contentWindow.location.hash = oldHash;
//     }
    
//     // change listener
//     if(this.hashChangeSupported) {
//       function changeHandler() {
//         newHash = location.hash;
//         instance.makeCallbacks(newHash, oldHash);
//         oldHash = newHash;
//       }
//       if(window.addEventListener) window.addEventListener('hashchange',changeHandler, false);
//       else if(window.attachEvent) window.attachEvent('onhashchange',changeHandler);
//     } else {
//       setInterval(function(){
//         newHash = location.hash;
//         frameHash = needFrame ? instance.fixFrame.contentWindow.location.hash : null;
//         // handle iframe history
//         if(needFrame && newHash.length && newHash !== frameHash && frameHash.length) {
//           location.hash = frameHash;
//         }
//         // common handler
//         if(oldHash != newHash) {
//           // handle callbacks
//           instance.makeCallbacks(newHash, oldHash);
//           oldHash = newHash;
//         }
//       },delay);
//     }
//   },
//   makeCallbacks: function() {
//     for(var i = 0; i < this._handlers.length; i++) {
//       this._handlers[i].apply(this, arguments);
//     }
//   },
//   get: function() {
//     return location.hash.substr(1);
//   },
//   set: function(text) {
//     if(this.get() != text) {
//       location.hash = text;
//       if(this.fixFrame) {
//         this.fixFrame.contentWindow.document.open();
//         this.fixFrame.contentWindow.document.close();
//         this.fixFrame.contentWindow.document.location.hash = text;
//       }
//     }
//   },
//   clear: function() {
//     this.set('');
//   },
//   onChange: function(handler) {
//     this._handlers.push(handler);
//   }
// }.init();

// // Hash array module
// Hash.key = {
//   parseItems: function() {
//     var items = {}, hashString = Hash.get();
//     if(hashString.length > 1) {
//       var hashData = hashString.split('&');
//       if(hashData.length) {
//         for(var i = 0; i < hashData.length; i++) {
//           var curData = [];
//           //var curData = hashData[i].split('=');
//           curData[0] = hashData[i].substr(0,hashData[i].indexOf('='));
//           curData[1] = hashData[i].substr(hashData[i].indexOf('=')+1);
//           if(typeof curData[1] === 'string') {
//             items[curData[0]] = curData[1];
//           }
//         }
//       }
//     }
//     return items;
//   },
//   rebuildHash: function(obj) {
//     var s = '';
//     for(var p in obj) {
//       if(obj.hasOwnProperty(p)) {
//         s += p + '=' + obj[p] + '&';
//       }
//     }
//     s = s.substring(0,s.length-1);
//     Hash.set(s);
//   },
//   get: function(key) {
//     var obj = this.parseItems();
//     return obj[key];
//   },
//   set: function(key, value) {
//     var curItems = this.parseItems();
//     curItems[key] = value;
//     this.rebuildHash(curItems)
//   },
//   remove: function() {
//     var curItems = this.parseItems();
//     for(var i = 0; i < arguments.length; i++) {
//       delete curItems[arguments[i]];
//     }
//     this.rebuildHash(curItems);
//   }
// }

// /**
//  * @author Alexander Farkas
//  * v. 1.22
//  */
// ;(function($) {
//   if(!document.defaultView || !document.defaultView.getComputedStyle){ // IE6-IE8
//     var oldCurCSS = $.curCSS;
//     $.curCSS = function(elem, name, force){
//       if(name === 'background-position'){
//         name = 'backgroundPosition';
//       }
//       if(name !== 'backgroundPosition' || !elem.currentStyle || elem.currentStyle[ name ]){
//         return oldCurCSS.apply(this, arguments);
//       }
//       var style = elem.style;
//       if ( !force && style && style[ name ] ){
//         return style[ name ];
//       }
//       return oldCurCSS(elem, 'backgroundPositionX', force) +' '+ oldCurCSS(elem, 'backgroundPositionY', force);
//     };
//   }
  
//   var oldAnim = $.fn.animate;
//   $.fn.animate = function(prop){
//     if('background-position' in prop){
//       prop.backgroundPosition = prop['background-position'];
//       delete prop['background-position'];
//     }
//     if('backgroundPosition' in prop){
//       prop.backgroundPosition = '('+ prop.backgroundPosition;
//     }
//     return oldAnim.apply(this, arguments);
//   };
  
//   function toArray(strg){
//     strg = strg.replace(/left|top/g,'0px');
//     strg = strg.replace(/right|bottom/g,'100%');
//     strg = strg.replace(/([0-9\.]+)(\s|\)|$)/g,"$1px$2");
//     var res = strg.match(/(-?[0-9\.]+)(px|\%|em|pt)\s(-?[0-9\.]+)(px|\%|em|pt)/);
//     return [parseFloat(res[1],10),res[2],parseFloat(res[3],10),res[4]];
//   }
  
//   $.fx.step. backgroundPosition = function(fx) {
//     if (!fx.bgPosReady) {
//       var start = $.curCSS(fx.elem,'backgroundPosition');
//       if(!start){//FF2 no inline-style fallback
//         start = '0px 0px';
//       }
      
//       start = toArray(start);
//       fx.start = [start[0],start[2]];
//       var end = toArray(fx.end);
//       fx.end = [end[0],end[2]];
      
//       fx.unit = [end[1],end[3]];
//       fx.bgPosReady = true;
//     }
//     //return;
//     var nowPosX = [];
//     nowPosX[0] = ((fx.end[0] - fx.start[0]) * fx.pos) + fx.start[0] + fx.unit[0];
//     nowPosX[1] = ((fx.end[1] - fx.start[1]) * fx.pos) + fx.start[1] + fx.unit[1];           
//     fx.elem.style.backgroundPosition = nowPosX[0]+' '+nowPosX[1];

//   };
// })(jQuery);

// /**
//  * @author Alexander Farkas
//  * v. 1.22
//  */
// ;(function($) {
//   if(!document.defaultView || !document.defaultView.getComputedStyle){ // IE6-IE8
//     var oldCurCSS = $.curCSS;
//     $.curCSS = function(elem, name, force){
//       if(name === 'background-position'){
//         name = 'backgroundPosition';
//       }
//       if(name !== 'backgroundPosition' || !elem.currentStyle || elem.currentStyle[ name ]){
//         return oldCurCSS.apply(this, arguments);
//       }
//       var style = elem.style;
//       if ( !force && style && style[ name ] ){
//         return style[ name ];
//       }
//       return oldCurCSS(elem, 'backgroundPositionX', force) +' '+ oldCurCSS(elem, 'backgroundPositionY', force);
//     };
//   }
  
//   var oldAnim = $.fn.animate;
//   $.fn.animate = function(prop){
//     if('background-position' in prop){
//       prop.backgroundPosition = prop['background-position'];
//       delete prop['background-position'];
//     }
//     if('backgroundPosition' in prop){
//       prop.backgroundPosition = '('+ prop.backgroundPosition;
//     }
//     return oldAnim.apply(this, arguments);
//   };
  
//   function toArray(strg){
//     strg = strg.replace(/left|top/g,'0px');
//     strg = strg.replace(/right|bottom/g,'100%');
//     strg = strg.replace(/([0-9\.]+)(\s|\)|$)/g,"$1px$2");
//     var res = strg.match(/(-?[0-9\.]+)(px|\%|em|pt)\s(-?[0-9\.]+)(px|\%|em|pt)/);
//     return [parseFloat(res[1],10),res[2],parseFloat(res[3],10),res[4]];
//   }
  
//   $.fx.step. backgroundPosition = function(fx) {
//     if (!fx.bgPosReady) {
//       var start = $.curCSS(fx.elem,'backgroundPosition');
//       if(!start){//FF2 no inline-style fallback
//         start = '0px 0px';
//       }
      
//       start = toArray(start);
//       fx.start = [start[0],start[2]];
//       var end = toArray(fx.end);
//       fx.end = [end[0],end[2]];
      
//       fx.unit = [end[1],end[3]];
//       fx.bgPosReady = true;
//     }
//     //return;
//     var nowPosX = [];
//     nowPosX[0] = ((fx.end[0] - fx.start[0]) * fx.pos) + fx.start[0] + fx.unit[0];
//     nowPosX[1] = ((fx.end[1] - fx.start[1]) * fx.pos) + fx.start[1] + fx.unit[1];           
//     fx.elem.style.backgroundPosition = nowPosX[0]+' '+nowPosX[1];

//   };
// })(jQuery);

// /*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
//  * Licensed under the MIT License (LICENSE.txt).
//  *
//  * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
//  * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
//  * Thanks to: Seamus Leahy for adding deltaX and deltaY
//  *
//  * Version: 3.0.6
//  * 
//  * Requires: 1.2.2+
//  */
// ;(function(a){function d(b){var c=b||window.event,d=[].slice.call(arguments,1),e=0,f=!0,g=0,h=0;return b=a.event.fix(c),b.type="mousewheel",c.wheelDelta&&(e=c.wheelDelta/120),c.detail&&(e=-c.detail/3),h=e,c.axis!==undefined&&c.axis===c.HORIZONTAL_AXIS&&(h=0,g=-1*e),c.wheelDeltaY!==undefined&&(h=c.wheelDeltaY/120),c.wheelDeltaX!==undefined&&(g=-1*c.wheelDeltaX/120),d.unshift(b,e,g,h),(a.event.dispatch||a.event.handle).apply(this,d)}var b=["DOMMouseScroll","mousewheel"];if(a.event.fixHooks)for(var c=b.length;c;)a.event.fixHooks[b[--c]]=a.event.mouseHooks;a.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=b.length;a;)this.addEventListener(b[--a],d,!1);else this.onmousewheel=d},teardown:function(){if(this.removeEventListener)for(var a=b.length;a;)this.removeEventListener(b[--a],d,!1);else this.onmousewheel=null}},a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery)

// /*
//  * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
//  *
//  * Uses the built in easing capabilities added In jQuery 1.1
//  * to offer multiple easing options
//  *
//  * TERMS OF USE - jQuery Easing
//  * 
//  * Open source under the BSD License. 
//  * 
//  * Copyright � 2008 George McGinley Smith
//  * All rights reserved.
//  * 
//  * Redistribution and use in source and binary forms, with or without modification, 
//  * are permitted provided that the following conditions are met:
//  * 
//  * Redistributions of source code must retain the above copyright notice, this list of 
//  * conditions and the following disclaimer.
//  * Redistributions in binary form must reproduce the above copyright notice, this list 
//  * of conditions and the following disclaimer in the documentation and/or other materials 
//  * provided with the distribution.
//  * 
//  * Neither the name of the author nor the names of contributors may be used to endorse 
//  * or promote products derived from this software without specific prior written permission.
//  * 
//  * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
//  * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
//  * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
//  *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
//  *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
//  *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
//  * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
//  * OF THE POSSIBILITY OF SUCH DAMAGE. 
//  *
// */

// // t: current time, b: begInnIng value, c: change In value, d: duration
// jQuery.easing['jswing'] = jQuery.easing['swing'];

// jQuery.extend( jQuery.easing,
// {
//   def: 'easeOutQuad',
//   swing: function (x, t, b, c, d) {
//     //alert(jQuery.easing.default);
//     return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
//   },
//   easeInQuad: function (x, t, b, c, d) {
//     return c*(t/=d)*t + b;
//   },
//   easeOutQuad: function (x, t, b, c, d) {
//     return -c *(t/=d)*(t-2) + b;
//   },
//   easeInOutQuad: function (x, t, b, c, d) {
//     if ((t/=d/2) < 1) return c/2*t*t + b;
//     return -c/2 * ((--t)*(t-2) - 1) + b;
//   },
//   easeInCubic: function (x, t, b, c, d) {
//     return c*(t/=d)*t*t + b;
//   },
//   easeOutCubic: function (x, t, b, c, d) {
//     return c*((t=t/d-1)*t*t + 1) + b;
//   },
//   easeInOutCubic: function (x, t, b, c, d) {
//     if ((t/=d/2) < 1) return c/2*t*t*t + b;
//     return c/2*((t-=2)*t*t + 2) + b;
//   },
//   easeInQuart: function (x, t, b, c, d) {
//     return c*(t/=d)*t*t*t + b;
//   },
//   easeOutQuart: function (x, t, b, c, d) {
//     return -c * ((t=t/d-1)*t*t*t - 1) + b;
//   },
//   easeInOutQuart: function (x, t, b, c, d) {
//     if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
//     return -c/2 * ((t-=2)*t*t*t - 2) + b;
//   },
//   easeInQuint: function (x, t, b, c, d) {
//     return c*(t/=d)*t*t*t*t + b;
//   },
//   easeOutQuint: function (x, t, b, c, d) {
//     return c*((t=t/d-1)*t*t*t*t + 1) + b;
//   },
//   easeInOutQuint: function (x, t, b, c, d) {
//     if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
//     return c/2*((t-=2)*t*t*t*t + 2) + b;
//   },
//   easeInSine: function (x, t, b, c, d) {
//     return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
//   },
//   easeOutSine: function (x, t, b, c, d) {
//     return c * Math.sin(t/d * (Math.PI/2)) + b;
//   },
//   easeInOutSine: function (x, t, b, c, d) {
//     return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
//   },
//   easeInExpo: function (x, t, b, c, d) {
//     return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
//   },
//   easeOutExpo: function (x, t, b, c, d) {
//     return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
//   },
//   easeInOutExpo: function (x, t, b, c, d) {
//     if (t==0) return b;
//     if (t==d) return b+c;
//     if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
//     return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
//   },
//   easeInCirc: function (x, t, b, c, d) {
//     return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
//   },
//   easeOutCirc: function (x, t, b, c, d) {
//     return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
//   },
//   easeInOutCirc: function (x, t, b, c, d) {
//     if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
//     return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
//   },
//   easeInElastic: function (x, t, b, c, d) {
//     var s=1.70158;var p=0;var a=c;
//     if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
//     if (a < Math.abs(c)) { a=c; var s=p/4; }
//     else var s = p/(2*Math.PI) * Math.asin (c/a);
//     return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
//   },
//   easeOutElastic: function (x, t, b, c, d) {
//     var s=1.70158;var p=0;var a=c;
//     if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
//     if (a < Math.abs(c)) { a=c; var s=p/4; }
//     else var s = p/(2*Math.PI) * Math.asin (c/a);
//     return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
//   },
//   easeInOutElastic: function (x, t, b, c, d) {
//     var s=1.70158;var p=0;var a=c;
//     if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
//     if (a < Math.abs(c)) { a=c; var s=p/4; }
//     else var s = p/(2*Math.PI) * Math.asin (c/a);
//     if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
//     return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
//   },
//   easeInBack: function (x, t, b, c, d, s) {
//     if (s == undefined) s = 1.70158;
//     return c*(t/=d)*t*((s+1)*t - s) + b;
//   },
//   easeOutBack: function (x, t, b, c, d, s) {
//     if (s == undefined) s = 1.70158;
//     return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
//   },
//   easeInOutBack: function (x, t, b, c, d, s) {
//     if (s == undefined) s = 1.70158; 
//     if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
//     return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
//   },
//   easeInBounce: function (x, t, b, c, d) {
//     return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
//   },
//   easeOutBounce: function (x, t, b, c, d) {
//     if ((t/=d) < (1/2.75)) {
//       return c*(7.5625*t*t) + b;
//     } else if (t < (2/2.75)) {
//       return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
//     } else if (t < (2.5/2.75)) {
//       return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
//     } else {
//       return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
//     }
//   },
//   easeInOutBounce: function (x, t, b, c, d) {
//     if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
//     return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
//   }
// });

// /*
//  *
//  * TERMS OF USE - EASING EQUATIONS
//  * 
//  * Open source under the BSD License. 
//  * 
//  * Copyright � 2001 Robert Penner
//  * All rights reserved.
//  * 
//  * Redistribution and use in source and binary forms, with or without modification, 
//  * are permitted provided that the following conditions are met:
//  * 
//  * Redistributions of source code must retain the above copyright notice, this list of 
//  * conditions and the following disclaimer.
//  * Redistributions in binary form must reproduce the above copyright notice, this list 
//  * of conditions and the following disclaimer in the documentation and/or other materials 
//  * provided with the distribution.
//  * 
//  * Neither the name of the author nor the names of contributors may be used to endorse 
//  * or promote products derived from this software without specific prior written permission.
//  * 
//  * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
//  * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
//  * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
//  *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
//  *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
//  *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
//  * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
//  * OF THE POSSIBILITY OF SUCH DAMAGE. 
//  *
//  */
// browserDetect = {
//   matchGroups: [
//     [
//       {uaString:'win', className:'win'},
//       {uaString:'mac', className:'mac'},
//       {uaString:['linux','x11'], className:'linux'}
//     ],
//     [
//       {uaString:'msie', className:'trident'},
//       {uaString:'applewebkit', className:'webkit'},
//       {uaString:'gecko', className:'gecko'},
//       {uaString:'opera', className:'presto'}
//     ],
//     [
//       {uaString:'msie 9.0', className:'ie9'},
//       {uaString:'msie 8.0', className:'ie8'},
//       {uaString:'msie 7.0', className:'ie7'},
//       {uaString:'msie 6.0', className:'ie6'},
//       {uaString:'firefox/2', className:'ff2'},
//       {uaString:'firefox/3', className:'ff3'},
//       {uaString:'firefox/4', className:'ff4'},
//       {uaString:['opera','version/11'], className:'opera11'},
//       {uaString:['opera','version/10'], className:'opera10'},
//       {uaString:'opera/9', className:'opera9'},
//       {uaString:['safari','version/3'], className:'safari3'},
//       {uaString:['safari','version/4'], className:'safari4'},
//       {uaString:['safari','version/5'], className:'safari5'},
//       {uaString:'chrome', className:'chrome'},
//       {uaString:'safari', className:'safari2'},
//       {uaString:'unknown', className:'unknown'}
//     ]
//   ],
//   init: function() {
//     this.detect();
//     return this;
//   },
//   addClass: function(className) {
//     this.pageHolder = document.documentElement;
//     document.documentElement.className += ' '+className;
//   },
//   detect: function() {
//     for(var i = 0, curGroup; i < this.matchGroups.length; i++) {
//       curGroup = this.matchGroups[i];
//       for(var j = 0, curItem; j < curGroup.length; j++) {
//         curItem = curGroup[j];
//         if(typeof curItem.uaString === 'string') {
//           if(this.uaMatch(curItem.uaString)) {
//             this.addClass(curItem.className);
//             break;
//           }
//         } else {
//           for(var k = 0, allMatch = true; k < curItem.uaString.length; k++) {
//             if(!this.uaMatch(curItem.uaString[k])) {
//               allMatch = false;
//               break;
//             }
//           }
//           if(allMatch) {
//             this.addClass(curItem.className);
//             break;
//           }
//         }
//       }
//     }
//   },
//   uaMatch: function(s) {
//     if(!this.ua) {
//       this.ua = navigator.userAgent.toLowerCase();
//     }
//     return this.ua.indexOf(s) != -1;
//   }
// }.init();