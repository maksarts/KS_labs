function result() {
    let a1 = Number(document.getElementsByTagName("input")[1].checked);
  
    let a2 = (document.getElementsByTagName("input")[4].checked +
             document.getElementsByTagName("input")[5].checked +
             document.getElementsByTagName("input")[7].checked) / 3;

    a2 *= (!document.getElementsByTagName("input")[3].checked * 
            !document.getElementsByTagName("input")[6].checked);
  
    let a3 = (document.getElementsByTagName("input")[8].checked +
              document.getElementsByTagName("input")[9].checked +
              document.getElementsByTagName("input")[12].checked) / 3;

    a3 *= (!document.getElementsByTagName("input")[10].checked *
            !document.getElementsByTagName("input")[11].checked);
  
    let a4 = (document.getElementsByTagName("input")[13].checked +
              document.getElementsByTagName("input")[14].checked +
              document.getElementsByTagName("input")[15].checked) / 3;

    a4 *= (!document.getElementsByTagName("input")[16].checked *
            !document.getElementsByTagName("input")[17].checked * 
            !document.getElementsByTagName("input")[18].checked);
  
    let a5 = Number(document.getElementsByTagName("input")[19].checked);

    a5 *= (!document.getElementsByTagName("input")[20].checked *
            !document.getElementsByTagName("input")[21].checked * 
            !document.getElementsByTagName("input")[22].checked);
  
    let a6 = (document.getElementsByTagName("input")[25].checked +
              document.getElementsByTagName("input")[26].checked +
              document.getElementsByTagName("input")[27].checked) / 3;

    a6 *= (!document.getElementsByTagName("input")[23].checked *
            !document.getElementsByTagName("input")[24].checked);
  
    return Math.round((a1+a2+a3+a4+a5+a6)/6*100);
  }