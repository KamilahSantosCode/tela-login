const URL_BASE = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/:ID_IMAGE.svg"
export function getImagePokemon(url) {
    const urlArray = url.split('/')
    return URL_BASE.replace(':ID_IMAGE', urlArray[6])
}