$(document).ready(function() {
    $('#fullpage').fullpage({
      //options here
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
      autoScrolling:true,
      scrollHorizontally: true,
      scrollBar:true,
      navigation: true,
      navigationPosition: 'right',
      navigationTooltips: ['home','about','skill','portfolio','contact'], 
      easing: 'easeInOutCubic',
      anchors: ['1st', 'second', '3rd', '4th', '5th'],
      menu: '.total_list'
    });
  
}); 
