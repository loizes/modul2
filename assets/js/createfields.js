$().ready(function(){
    $(".selection").change(function(){
        if($(this).val()==0){
            $(".cdsniga").hide(150);
        }
        else if($(this).val()==1){
            $(".cdsniga").hide(150);
        }
        else{
            $(".cdsniga").show(150);
        }
    })
})