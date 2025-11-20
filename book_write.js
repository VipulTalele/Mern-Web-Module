const fs = require("fs");

fs.readFile("books.json", "utf-8", (err, data) => {
    if (err) {
        console.log("Error reading json:", err);
        return;
    }

    let books = JSON.parse(data);

    let output = "Bookid | bookname | author | Sellingprice | finalprice\n";

    books.forEach(b => {
        let finalPrice = b.sellingprice - (b.sellingprice * 0.10);
        output += `${b.bookid}|${b.bookname}|${b.author}|${b.sellingprice}|${finalPrice}\n`;
    });

    fs.writeFile("book.txt", output, (err) => {
        if (err) console.log("Error writing file:", err);
        else console.log("File saved as book.txt");
    });
});
