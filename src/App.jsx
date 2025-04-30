import Profile from "./components/Profile";

export default function App() {
  return (
    <>
    <Profile 
      nome="John Wick" 
      idade="38" 
      profissao="Desenvolvedor Full-stack" 
      foto="https://avatars.githubusercontent.com/u/67715053?v=4" 
    />

    <Profile 
      nome="Samuel Sanchez"
      idade="23"
      profissao="Designer"
      foto="https://avatars.githubusercontent.com/u/75997295?v=4"
      />

    <Profile 
      nome="Beatryz Curgel"
      idade="18"
      profissao="Desenvolvedora Front-end"
      foto="https://avatars.githubusercontent.com/u/178110174?v=4"
    />
    </>
  )
}