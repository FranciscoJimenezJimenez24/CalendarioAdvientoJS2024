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
function prepareGifts(gifts) {
  let giftsUnique = [];
  let comparacion = gifts.filter(element => {return !giftsUnique.includes(element)?giftsUnique.push(element):false})
  giftsUnique = giftsUnique.sort((a,b)=>a-b);
  return giftsUnique;
}
function prepareGifts(gifts) {
  return Array.from(new Set(gifts.sort((a,b)=>a-b)));
}