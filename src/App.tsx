const MeuBotao = (props: any) => {
    return(
        <button>{props.titulo}</button>
    );
}

const App = () => {
    return (
      <div>
        <h1>Bem vindo ao mundo React</h1>
        <MeuBotao titulo="primeiro"/>
        <MeuBotao titulo="segundo"/>
        <MeuBotao titulo="terceiro"/>
      </div>
    );
  }
  
  export default App;