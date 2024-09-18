import VideoJuego from './VideoJuego.js';

export default class Catalogo{
        constructor(){
            this.Videojuego = [];
            
            this.Videojuego.push(new VideoJuego("Spider-Man", "accion", "https://image.api.playstation.com/vulcan/ap/rnd/202306/1301/bdd8aa8d8156012457d9c07054c93e601e5eef1e88083da8.png",3));
            this.Videojuego.push(new VideoJuego("Gears 5", "accion", "https://cdn.cloudflare.steamstatic.com/steam/apps/1097840/header.jpg",2));
            this.Videojuego.push(new VideoJuego("Fortnite", "accion", "https://cdn.sortiraparis.com/images/80/66131/908390-fortnite-enfer-vert-map-skins-passe-de-combat-le-point-sur-les-nouveautes-de-la-saison-3.jpg", 3));
            this.Videojuego.push(new VideoJuego("Monster Hunter", "accion", "https://cdn.akamai.steamstatic.com/steam/apps/582010/capsule_616x353.jpg?t=1695662238",5));
            this.Videojuego.push(new VideoJuego("Resident Evil 7", "terror", "https://image.api.playstation.com/cdn/UP0102/CUSA04772_00/cxd9vkFOAHVwwYG7lQKENGkrfyoAChNh.png",4));
            this.Videojuego.push(new VideoJuego("Silent Hill 2", "terror", "https://i.ytimg.com/vi/5B-YGFARv7M/maxresdefault.jpg",1));
            this.Videojuego.push(new VideoJuego("Outlast", "terror", "https://cdn.cloudflare.steamstatic.com/steam/apps/238320/capsule_616x353.jpg?t=1666817106",5));
            this.Videojuego.push(new VideoJuego("Amnesia: The Dark Descent", "terror", "https://cdn1.epicgames.com/917551a8060244469eb4e6ab8a99cf24/offer/EGS_AmnesiaTheDarkDescent_FrictionalGames_S1-2560x1440-a7775c6562fcd27a938265415db5a211.jpg", 5));
            this.Videojuego.push(new VideoJuego("Ark", "supervivencia", "https://image.api.playstation.com/vulcan/img/rnd/202010/0818/HVUPJTyjOslwxbwCC8edPC45.png",5));
            this.Videojuego.push(new VideoJuego("Minecraft", "supervivencia", "https://www.minecraft.net/content/dam/games/minecraft/key-art/SUPM_Game-Image_One-Vanilla_672x400.jpg",2));  
            this.Videojuego.push(new VideoJuego("Subnautica","supervivencia","https://cdn1.epicgames.com/offer/jaguar/SN_EpicLandscape_2560x1440-68271847bd0a1a7adac3992f9d2a996a",3));  
       
        }

        getVideoJuego(){
            return this.Videojuego;
        }

}