import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default {
    getBrandItems (cbSuccess, cbFailed) {
        var header = { 'headers': { 'Authorization': 'Bearer ABCDEF', 'x-supplier-id': 'ad51d5ac-17bb-4240-8648-c483b224b2aa' } }
        var url = 'http://private-bc245d-brewoptixv2.apiary-mock.com/brands'
        axios
            .get(url, header)
            .then(r => r.data)
            .catch(error => {
                cbFailed(error)
            })
            .then(brands => {
                cbSuccess(brands)
            })
    },
}
