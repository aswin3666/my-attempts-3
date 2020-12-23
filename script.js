function buttonclick(val) {
    document.getElementById("scree").value+=val
}
function delete_al(params) {
    document.getElementById("scree").value=" "
}
function equalclick(params) {
    var text=document.getElementById("scree").value
    var result=eval(text)
    document.getElementById("scree").value=result
}