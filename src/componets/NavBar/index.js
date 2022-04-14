import "./index.css"

export const NavBar = () => {
  return `
    <div class="side__bar">
        <div class="navbar">
            <div navbar__logo>
                <p>Explorar</p>
            </div>
            <div class="navbar__menu">
                <a href="#">Musicas</a>
                <a href="#">Categorias</a>
                <a href="#">Albuns</a>
                <a href="#">Artistas</a>
                <a href="#">Videos</a>
                <a href="#">Noticias</a>
            </div>
        </div>
        <div class="nav__info">
            <h3>Informacoes</h3>
            <div class="nav__info__details">
                <a href="#">Sobre</a>
                <a href="#">Promover Musica</a>
                <a href="#">Contacto</a>
                <a href="#">Blog</a>
            </div>
        </div>
    </div>    
        
    `;
};

export const BarraTarefa=()=>{
    return `
    <div class="barra__tarefa">
        <div class="logo">
            <h1>Song mz</h1>
            <input type="search" name="" id="" placeholder="Search">
        </div>

      
    </div>
    `
}

export const BarraDireita=()=>{
    return `
    <div class="barra__direita">
        <div class="top__musica">
            <h1>TOP 5 ARTISTAS</h1>
            <div class="top__five">
                <p>Prodigio</p>
                <p>Khalil</p>
                <p>Lil'vino</p>
                <p>Da_breaner</p>
                <p>Flight Beats</p>
            </div>
        </div>
    </div>
    `
}
