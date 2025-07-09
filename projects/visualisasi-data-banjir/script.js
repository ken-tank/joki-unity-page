function Unlock() 
{
    var key = document.getElementById("download_key");
    var link = "n17BfhS7S+3ofgNKrWbRNXb32+QAbNqPnzz9jFLRHc1MA9yBLX9Hr6BCoZabor6NnN47TAn7S5x7ihg0c9dTuRma3jVce0Qcd3kH/fndzqdCSzVM888bkJhYjjvzkmsp";
    Downloader.Download(key.value, link);
    key.value = "";
}

