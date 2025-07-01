function Unlock() 
{
    var key = document.getElementById("download_key").value;
    var link = "DbasM8NQcRFAQaEd+2X+DuyvAfciEoZHl/RRMHdb8rqw7PE8Rpsq6laQIm2rnJFRUC/wJKHBJAGQ/NDoiN+S/iubMDen1s1sMlbn2CNEvib8IBxmbx90et6HL4RXBjuZ";
    Downloader.Download(key, link);
}