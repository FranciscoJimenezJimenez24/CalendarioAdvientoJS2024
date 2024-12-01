function prepareGifts(gifts) {
  let giftsUnique = [];
  gifts.forEach(element=>{
    if (!giftsUnique.includes(element)){
      giftsUnique.push(element);
    }
  })
  giftsUnique = giftsUnique.sort((a,b)=>a-b);
  return giftsUnique;
}