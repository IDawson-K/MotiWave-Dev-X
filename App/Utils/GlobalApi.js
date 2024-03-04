import { request, gql } from 'graphql-request'
const HYGRAPH_API = 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clt44ogta2hhz07we8npcwo1g/master'

const getSliders=async()=>{
    const requete = gql`
        query getSliders {
            sliders {
            id
            name
            image {
                url
            }
            }
        }
    `
    const result = await request(HYGRAPH_API, requete);
    return result
}

export default{
    getSliders
}