class Downloader {
    static async Download(key, value)
    {
        var decrypted = "";
        await EncryptorSHA256.decrypt(value, key.trim(), "unity").then(value => {
            decrypted = value;
        });
        var msg = document.getElementById("download_msg");
        if (decrypted == "")
        {
            alert("Key Invalid!");
            msg.innerHTML = "Key Invalid or Wrong!";
            msg.hidden = false;
            return;
        }
        else
        {
            msg.hidden = true;
        }
        
        window.open(decrypted, '_blank');
    }
}