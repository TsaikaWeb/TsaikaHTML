 function getCookie(byname)	// ذ²ذ¾ذ·ذ²ر€ذ°ر‰ذ°ذµر‚ ذ؟ذ¾ ذ¸ذ¼ذµذ½ذ¸ ذ·ذ½ذ°ر‡ذµذ½ذ¸ذµ, ذ·ذ´ذµرپرŒ ذ½ذµ ذ¸رپذ؟ذ¾ذ»رŒذ·رƒذµر‚رپرڈ
   {byname=byname+"=";
    nlen = byname.length;
    fromN = document.cookie.indexOf(byname)+0;
    if((fromN) != -1)
        {fromN +=nlen
         toN=document.cookie.indexOf(";",fromN)+0;
         if(toN == -1) {toN=document.cookie.length;}
         return unescape(document.cookie.substring(fromN,toN));
        }
    return null;
   

 function parseCookie()   // ذ ذ°ذ·ذ´ذµذ»ذµذ½ذ¸ذµ cookie
   { var cookieList = document.cookie.split("; ");
   // ذœذ°رپرپذ¸ذ² ذ´ذ»رڈ ذ؛ذ°ذ¶ذ´ذ¾ذ³ذ¾ cookie ذ² cookieList
   var cookieArray = new Array();
   for (var i = 0; i < cookieList.length; i++) {
       // ذ ذ°ذ·ذ´ذµذ»ذµذ½ذ¸ذµ ذ؟ذ°ر€ ذ¸ذ¼رڈ-ذ·ذ½ذ°ر‡ذµذ½ذ¸ذµ.
       var name = cookieList[i].split("=");

       cookieArray[unescape(name[0])] = unescape(name[1]);
    }
   return cookieArray;
  }
 function setCookie(visits) {
    /* ذ،ر‡ذµر‚ر‡ذ¸ذ؛ ر‡ذ¸رپذ»ذ° ذ؟ذ¾رپذµر‰ذµذ½ذ¸ذ¹ رپ رƒذ؛ذ°ذ·ذ°ذ½ذ¸ذµذ¼ ذ´ذ°ر‚ر‹ ذ؟ذ¾رپذ»ذµذ´ذ½ذµذ³ذ¾ ذ؟ذ¾رپذµر‰ذµذ½ذ¸رڈ
       ذ¸ ذ¾ذ؟ر€ذµذ´ذµذ»ذµذ½ذ¸ذµذ¼ رپر€ذ¾ذ؛ذ° ر…ر€ذ°ذ½ذµذ½ذ¸رڈ ذ² 1 ذ³ذ¾ذ´. */
    var expireDate = new Date();
    var today = new Date();
    // ذ£رپر‚ذ°ذ½ذ¾ذ²ذ؛ذ° ذ´ذ°ر‚ر‹ ذ¸رپر‚ذµر‡ذµذ½ذ¸رڈ رپر€ذ¾ذ؛ذ° ر…ر€ذ°ذ½ذµذ½ذ¸رڈ.
    expireDate.setDate(365 + expireDate.getDate());
    // ذ،ذ¾ر…ر€ذ°ذ½ذµذ½ذ¸ذµ ر‡ذ¸رپذ»ذ° ذ؟ذ¾رپذµر‰ذµذ½ذ¸ذ¹.
    document.cookie = "visits=" + visits +
                      "; expires=" + expireDate.toGMTString() + ";";
    // ذ،ذ¾ر…ر€ذ°ذ½ذµذ½ذ¸ذµ ذ½ذ°رپر‚ذ¾رڈر‰ذµذ¹ ذ´ذ°ر‚ر‹ ذ؛ذ°ذ؛ ذ²ر€ذµذ¼ذµذ½ذ¸ ذ؟ذ¾رپذ»ذµذ´ذ½ذµذ³ذ¾ ذ؟ذ¾رپذµر‰ذµذ½ذ¸رڈ.
    document.cookie = "LastVisit=" + escape(today.toGMTString()) +
                       "; expires=" + expireDate.toGMTString() + ";";
    }

    if ("" == document.cookie)
    { // ذکذ½ذ¸ر†ذ¸ذ°ذ»ذ¸ذ·ذ°ر†ذ¸رڈ cookie.
     setCookie(1);
     document.write("<H3>ذںذ¾ذ·ذ´ر€ذ°ذ²ذ»رڈرژ ذ’ذ°رپ رپ ذ؟ذµر€ذ²ر‹ذ¼ ذ؟ذ¾رپذµر‰ذµذ½ذ¸ذµذ¼ ذ¼ذ¾ذµذ³ذ¾ رپذ°ذ¹ر‚ذ°.</H3>");
    }
    else {
       var cookies = parseCookie();
       // ذ’ر‹ذ²ذ¾ذ´ ذ؟ر€ذ¸ذ²ذµر‚رپر‚ذ²ذ¸رڈ, ر‡ذ¸رپذ»ذ° ذ؟ذ¾رپذµر‰ذµذ½ذ¸ذ¹ ذ¸ رƒذ²ذµذ»ذ¸ر‡ذµذ½ذ¸ذµ ر‡ذ¸رپذ»ذ° ذ؟ذ¾رپذµر‰ذµذ½ذ¸ذ¹ ذ½ذ° 1.
       document.write("<H4>ذœر‹ رپذ½ذ¾ذ²ذ° ر€ذ°ذ´ر‹ ذ²ذ¸ذ´ذµر‚رŒ ذ’ذ°رپ ذ½ذ° ذ¼ذ¾ذµذ¼ رپذ°ذ¹ر‚ذµ! ذ§ذ¸رپذ»ذ¾ ذ»ذ¸ر‡ذ½ذ¾ ذ²ذ°رˆذ¸ر… ذ؟ذ¾رپذµر‰ذµذ½ذ¸ذ¹ - " +
          cookies.visits++ + " !</H4>");
       // ذ’ر‹ذ²ذ¾ذ´ ذ´ذ°ر‚ر‹ ذ؟ذ¾رپذ»ذµذ´ذ½ذµذ³ذ¾ ذ؟ذ¾رپذµر‰ذµذ½ذ¸رڈ.
       document.write("<H4>ذںذ¾رپذ»ذµذ´ذ½ذ¸ذ¹ ر€ذ°ذ· ذ’ر‹ ذ±ر‹ذ»ذ¸ رƒ ذ¼ذµذ½رڈ ذ½ذ° رپذ°ذ¹ر‚ذµ: " + cookies.LastVisit + ".</H4>");
       // ذ‍ذ±ذ½ذ¾ذ²ذ»ذµذ½ذ¸ذµ cookie.
       setCookie(isNaN(cookies.visits)?1:cookies.visits);
    }
