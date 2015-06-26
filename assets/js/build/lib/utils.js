var strip_tags = function(a) {
    return a.replace(/(<([^>]+)>)/gi, "");
};