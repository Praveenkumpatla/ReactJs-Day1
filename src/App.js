import Card from "./card";

function App() {
  let data = [["free",0,"Single User",5],
  ["Plus",9,"5 User's",50],
  ["Pro",49,"Unlimited User's",150],["Offer",30,"15 User's",80]];
  return (
    <>
    <div className="container w-75 mt-5">
      <div className="row">
        {
          data.map((item)=>{
            return <Card value={item}></Card>
        })
      }
      </div>
    </div>
    </>
  );
}

export default App;
