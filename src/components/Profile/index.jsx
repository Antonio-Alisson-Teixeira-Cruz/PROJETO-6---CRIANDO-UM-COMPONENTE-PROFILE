import "./style.css";

export default function Profile({nome, idade, profissao, foto}) {
    return(
        <>
        <h1 className="name">Nome: {nome}</h1>
        <h2 className="age">Idade: {idade} anos</h2>
        <h2 className="profission">Profissão: {profissao}</h2>
        <h2 className="photo">Foto: </h2> <img src={foto} />
        <hr />
        </>
    )
}
