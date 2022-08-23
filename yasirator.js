class ysrator {
    constructor() {}
    search(content) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://ysrator.github.io/ServerLine/ServerLine.txt");
        xhr.send();
        var searchResult;
        for(var i = 0; i < jsonArray.length ; i++){
        var current = jsonArray[i];
            if(current.Username == content){
                searchResult = current;
            }
        }
        return searchResult;
    }
}
