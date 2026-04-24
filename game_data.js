// 游戏数据管理文件

class GameDataManager {
    constructor() {
        this.baseSaveKey = 'spring_and_autumn_game_data';
        this.currentUser = null;
    }
    
    // 设置当前用户
    setCurrentUser(username) {
        this.currentUser = username;
    }
    
    // 获取当前用户的保存键
    getSaveKey() {
        return `${this.baseSaveKey}_${this.currentUser || 'default'}`;
    }
    
    // 初始化游戏数据
    initializeData(username = null) {
        if (username) {
            this.setCurrentUser(username);
        }
        
        const data = this.loadData();
        if (!data) {
            // 默认游戏数据
            const defaultData = {
                player: {
                    id: 1,
                    name: '主角',
                    level: 1,
                    gold: 10000,
                    food: 10000,
                    currentCity: '咸阳',
                    x: 0,
                    y: 0
                },
                companions: []
            };
            this.saveData(defaultData);
            return defaultData;
        }
        return data;
    }
    
    // 保存游戏数据
    saveData(data) {
        try {
            localStorage.setItem(this.getSaveKey(), JSON.stringify(data));
            return true;
        } catch (error) {
            console.error('保存游戏数据失败:', error);
            return false;
        }
    }
    
    // 加载游戏数据
    loadData() {
        try {
            const data = localStorage.getItem(this.getSaveKey());
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('加载游戏数据失败:', error);
            return null;
        }
    }
    
    // 更新玩家数据
    updatePlayerData(playerData) {
        const data = this.loadData();
        if (data) {
            data.player = { ...data.player, ...playerData };
            this.saveData(data);
            return true;
        }
        return false;
    }
    
    // 更新小伙伴数据
    updateCompanionData(companionId, companionData) {
        const data = this.loadData();
        if (data) {
            const index = data.companions.findIndex(c => c.id === companionId);
            if (index !== -1) {
                data.companions[index] = { ...data.companions[index], ...companionData };
                this.saveData(data);
                return true;
            }
        }
        return false;
    }
    
    // 获取玩家数据
    getPlayerData() {
        const data = this.loadData();
        return data ? data.player : null;
    }
    
    // 获取小伙伴列表
    getCompanions() {
        const data = this.loadData();
        return data ? data.companions : [];
    }
    
    // 添加小伙伴
    addCompanion(companionData) {
        const data = this.loadData();
        if (data) {
            if (!Array.isArray(data.companions)) {
                data.companions = [];
            }
            // 检查是否已经有相同id的小伙伴
            const existingIndex = data.companions.findIndex(c => c.id === companionData.id);
            if (existingIndex === -1) {
                data.companions.push(companionData);
                this.saveData(data);
                return true;
            }
        }
        return false;
    }
    
    // 重置游戏数据
    resetData() {
        try {
            localStorage.removeItem(this.getSaveKey());
            // 同时重置已触发的唯一事件
            localStorage.removeItem('triggeredUniqueEvents');
            return true;
        } catch (error) {
            console.error('重置游戏数据失败:', error);
            return false;
        }
    }
    }
    
    // 清除所有用户数据
    clearAllData() {
        try {
            // 清除所有用户的游戏数据
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key.startsWith(this.baseSaveKey)) {
                    localStorage.removeItem(key);
                }
            }
            // 同时清除已触发的唯一事件
            localStorage.removeItem('triggeredUniqueEvents');
            return true;
        } catch (error) {
            console.error('清除所有数据失败:', error);
            return false;
        }
    }
}

// 导出游戏数据管理器
const gameDataManager = new GameDataManager();
if (typeof module !== 'undefined' && module.exports) {
    module.exports = gameDataManager;
}