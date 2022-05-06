import connectDb  from './connectDb.js';


export const getFishes = (req,res) =>{
    const db = connectDb();
    db.collection("fish")
  .get()
  .then((snapshot) => {
    const fishArray = snapshot.docs.map((doc) => {
      let fish = doc.data(); //fish = body of data coming in from doc object
      fish.id = doc.id; //appends id returned from data to new fish object
      return fish; //returns item to new array after map?
    });
    res.send(fishArray);
  })
  .catch((err) => {
    res.status(500).send(err);
  });
}