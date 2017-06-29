document.getElementById('go').onclick = function() {
    var inputText = $('#text-input').val();
    var dawgifiedText = inputText + ", savage";
    document.getElementById('output').innerHTML = dawgifiedText;
};