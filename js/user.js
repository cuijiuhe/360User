/**
 * Created by lenovo on 2017/3/12.
 */
$(function () {
    $(".s_r ul li span").hide();
    $("#add").hide()
    $("#int").hide()
    var z = 0
    $(".s_r p").on("click", function () {
        z++
        if (z % 2 != 0) {
            $(".s_r ul li span").show(200);
            $("#add").show(200);
            //var str = "";
            $("#add").on("click", function () {
                var value = $("#int").val();
                if (value == "") {
                    alert("输入不能为空")
                } else {
                    $("<li>" + value + "<span>×</span></li>").insertBefore($(this))
                    $("#int").val("")
                }
            })
            $(".s_r ul").on("click", "span", "li", function () {
                $(this).parent().remove()
            })
            $("#int").show(200)
        } else {
            $(".s_r ul li span").hide(200);
            $("#add").hide(200)
            $("#int").hide(200)
            z = 0;
        }
    })
})


