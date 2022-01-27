document.getElementById('referralbutton').onclick = function() {
    var values = ["ad", "friend", "Google", "social", "other"];

    var select = document.createElement("select");
    select.name = "source";
    select.id = "source"

    for (const val of values)
    {
        var option = document.createElement("option");
        option.value = val;
        option.text = val.charAt(0).toUpperCase() + val.slice(1);
        select.appendChild(option);
    }
    var label = document.createElement("label");
    label.innerHTML = "How did you hear about us: "
    label.htmlFor = "source";

    document.getElementById("referencetwo").appendChild(label).appendChild(select);
}

