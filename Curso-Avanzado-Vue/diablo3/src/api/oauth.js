// Traemos el método post de 'axios
import { post } from 'axios'

// Cogemos los datos de nuestra cuenta de Blizzard
// 🔥 Recuerda que debes usar tus datos a la hora de hacer las llamadas a las APIs
// 🔥 Como idce la documentación, tienes un máximo de llamadas por segundo y por hora a la API.
// 🔥 Estos datos deberian ser privados
const clientId = '8073e0d323e64f61913891200670e05d'
const clientSecret = '8sNhevT99mrxa8gOf8vGIbyzme9jToTv'

// API URL para hacer oauth
const region = 'eu'
const API_URL = `https://${region}.battle.net/oauth/token`

// Creamos la función getToken
function getToken() {
  // Creamos un objeto de tipo 'FormData', que es un conjunto de pares clave/valor
  const body = new FormData()

  // Con 'append', le agregamos la clave 'grant_type' y el valor 'client_credentials'
  body.append('grant_type', 'client_credentials')

  // En este objeto llamado 'config' vamos a insertar algunos parámetros de cconfiguración
  // que necesitamos para hacer la llamada
  const config = {
    headers: { 'Content-Type': 'multipart/form-data' },
    // Nuestros datos de cliente para OAuth: id y secret
    auth: { username: clientId, password: clientSecret }
  }

  // Hacemos una petición POST
  // Le pasamos la URL como primer parámetro
  // Como segundo, el body, que es un FormData
  // Y la configuración como tercer argumento
  return post(API_URL, body, config)
}

export { getToken }
