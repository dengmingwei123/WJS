(function(){
    // 获取产品头部li标签的宽度,加起来赋值给ul
    setProductWidth();
    function setProductWidth(){
        var width=0;
        $(".product-tabs li").each(function(i,e){
            width+=$(this).outerWidth();
        })
        $(".product-tabs").width(width);
    }
})();