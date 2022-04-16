import "./index.css"

export const NavBar = () => {
    return `
    <div class="side__bar">
        
        <div class="navbar">
            <div navbar__logo>
                <p>Explorar</p>
            </div>
            <div class="navbar__menu">
                <a class="link" href="#">
                    <i id="icon"class="fa-solid fa-music"> </i>
                    <span>Musicas</span
                </a>
                <a class="link" href="#">
                    <i id="icon" class="fa-solid fa-list"></i>
                    <span>Categorias</span>
                </a>
                <a class="link" href="#">
                    <i id="icon" class="fa-solid fa-record-vinyl"></i>
                    <span>Albuns</span>
                </a>
                <a class="link" href="#">
                    <i id="icon" class="fa-brands fa-artstation"></i>
                    <span>Artistas</span></i>
                </a>
                <a class="link"  href="#">   
                    <i id="icon" class="fa-solid fa-video"></i>
                    <span>Videos</span>
                </a>
                <a class="link"  href="#">
                    <i id="icon" class="fa-solid fa-rss"></i>
                    <span>Noticias</span>
                </a>
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

export const BarraTarefa = () => {
    return `
    <div class="barra__tarefa">
        
        <label for="check" class="btn-Menu">&equiv;</label>
        <div class="logo">
            <h1> <i id="logo__nav" class="fa-solid fa-music"></i><span>Song mz</span></h1>
            <label for="" id="icon_label"><i  id="icon_search" class="fa-solid fa-magnifying-glass"></i></label>
            <input type="search" name="" id="search" placeholder="Search">
        </div>

      
    </div>
    `
}

export const BarraDireita = () => {
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


//event on js
// evento do mouseover no link dos menus
//declaracao de variavel