let nfts = [];
function mintNFT( Title, Author) {
  let nftMetadata = {
    Title: Title,
    Author: Author,
  };
  nfts.push(nftMetadata);
}
function listNFTs() {
  for (let i = 0; i < nfts.length; i++) {
    console.log("Name: " + nfts[i].Title);
    console.log("Artist: " + nfts[i].Author);
  }
}
function getTotalSupply() {
  console.log("Total Supply: " + nfts.length);
}
mintNFT(1, "Hamlet", "William Shakespeare", );
mintNFT(2, "War and Peace", "Leo Tolstoy", );
mintNFT(3, "Pride and Prejudice", "Jane Austen", );

listNFTs();
getTotalSupply();
