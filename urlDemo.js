import url, { fileURLToPath } from "url";

const urlString = "http://www.google.com/search?q=hello+world";

const urlObj = new URL(urlString);

console.log(urlObj);

console.log(url.format(urlObj));

// import.meta.url - gives file url

console.log(import.meta.url);

//fileURLToPath()

console.log(url.fileURLToPath(import.meta.url));

console.log(urlObj.search);

const params = new URLSearchParams(urlObj.search);

console.log(urlObj);

urlObj.searchParams.append("limit", "5");

const urlString2 = url.format(urlObj);

console.log(urlObj);
urlObj.searchParams.delete("q");
console.log(urlObj);
