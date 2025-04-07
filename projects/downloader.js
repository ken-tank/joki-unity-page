class Downloader {
    static async Download(key, value)
    {
        var decrypted = "";
        await EncryptorSHA256.decrypt(value, key, "unity").then(value => {
            decrypted = value;
        });
        if (decrypted == "")
        {
            alert("Key Invalid!")
            return;
        }
        
        window.open(decrypted, '_blank');
    }
}