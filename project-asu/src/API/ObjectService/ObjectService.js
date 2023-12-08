import axios from 'axios'

export default class ObjectService {
    static apiLink = 'http://xyla.istu.webappz.ru/ilyar/asu/api/';

    static async getAllObjects() {
        const response = await axios.get(this.apiLink + 'getAllObjects.php')

        let arr = []
        response.data.forEach((el) => {
            el.list = JSON.parse(el.list)
            arr.push(el)

        })

        return arr
    }

    static async getObject(id) {
        const response = await axios.get(this.apiLink + 'getObject.php?id=' + id)
        return response.data
    }

    static async addObject(object) {
        const response = await axios.post(this.apiLink + 'addObject.php', object)
        return response.data
    }

    static async editObject(object) {
        const response = await axios.post(this.apiLink + 'editObject.php', object)
        return response.data
    }

    static async removeObject(id) {
        const response = await axios.post(this.apiLink + 'removeObject.php', {id: id})
        return response.data
    }


}