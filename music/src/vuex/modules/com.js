import api from '../../api/index'
import * as types from '../types'

const state = {
    showSidebar: false,
    fullScreen: false
}

const mutations = {    // 负责取得数据源并且修改数据源，不负责调用
    [types.COM_SHOW_SIDE_BAR] (state, status) {   // status 数据源最终的状态
        state.showSidebar = status
    },
    [types.SET_FULL_SCREEN] (state, status) {   
        state.fullScreen = status
    }
}

const actions = {
    setShowSidebar( {commit}, status ) {
        commit(types.COM_SHOW_SIDE_BAR, status)    // 提交mutation里定义的方法
    },
    selectPlaySong ( {commit}, status ) {
        // let playlist = state.playlist.slice()
        commit(types.SET_FULL_SCREEN, status) 
    }
}

const getters = {    // 可以直接把仓库里的数据取出来用
    showSidebar: state => state.showSidebar,
    fullScreen: state => state.fullScreen
}

export default {
    state,
    mutations,
    actions,
    getters
}
