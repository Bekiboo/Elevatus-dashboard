import { MyButton, MyBidule } from "./donors/MyButton";

function MyTruc() {
  return <div className="text-red-500">Truc</div>
}

export default function Home() {
  return (
    <>
      <div className="text-red-500">Welcome Home</div>
      <MyButton />
      <MyTruc />
      <MyBidule />
    </>
)
}