let nfts = [];
function mintNFT(id, Title, Author) {
  let nftMetadata = {
    id: id,
    Title: Title,
    Author: Author,

  };
  nfts.push(nftMetadata);
}
function listNFTs() {
  for (let i = 0; i < nfts.length; i++) {
    console.log("Title: " + nfts[i].Title);
    console.log("Author: " + nfts[i].Author);

  }
}
function getTotalSupply() {
  console.log("Total Supply: " + nfts.length);
}
mintNFT(1, "Hamlet", "William Shakespeare");
mintNFT(2, "War and Peace", "Leo Tolstoy");
mintNFT(3, "Pride and Prejudice", "Jane Austen");

listNFTs();
getTotalSupply();
