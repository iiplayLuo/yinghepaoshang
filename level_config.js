// 战斗关卡配置文件

// 战斗关卡配置
const LevelConfig = {
    // 关卡配置（从levels_config.csv加载）
    levels: [
        {
            id: 1,
            enemyIds: [101],
            enemyLevels: [1],
            rewards: [
                { itemId: 1, quantity: 1000 } // 金币1000
            ]
        },
        {
            id: 2,
            enemyIds: [101],
            enemyLevels: [2],
            rewards: [
                { itemId: 1, quantity: 2000 } // 金币2000
            ]
        },
        {
            id: 3,
            enemyIds: [102],
            enemyLevels: [1],
            rewards: [
                { itemId: 2, quantity: 500 } // 粮食500
            ]
        },
        {
            id: 4,
            enemyIds: [101, 102],
            enemyLevels: [1, 1],
            rewards: [
                { itemId: 1, quantity: 1500 }, // 金币1500
                { itemId: 2, quantity: 300 }  // 粮食300
            ]
        },
        {
            id: 5,
            enemyIds: [101, 102, 103],
            enemyLevels: [10, 10, 10],
            rewards: [
                { itemId: 1, quantity: 5000 }, // 金币5000
                { itemId: 2, quantity: 2000 }, // 粮食2000
                { itemId: 3, quantity: 2 }     // 回血药2个
            ]
        },
        {
            id: 6,
            enemyIds: [101, 101, 102],
            enemyLevels: [2, 2, 2],
            rewards: [
                { itemId: 1, quantity: 3000 }, // 金币3000
                { itemId: 2, quantity: 1000 }  // 粮食1000
            ]
        },
        {
            id: 7,
            enemyIds: [102, 102, 102],
            enemyLevels: [3, 3, 3],
            rewards: [
                { itemId: 1, quantity: 4000 }, // 金币4000
                { itemId: 2, quantity: 1500 }  // 粮食1500
            ]
        },
        {
            id: 8,
            enemyIds: [101, 102, 103, 101],
            enemyLevels: [5, 5, 5, 5],
            rewards: [
                { itemId: 1, quantity: 6000 }, // 金币6000
                { itemId: 2, quantity: 2500 }, // 粮食2500
                { itemId: 3, quantity: 3 }     // 回血药3个
            ]
        },
        {
            id: 9,
            enemyIds: [103, 103],
            enemyLevels: [8, 8],
            rewards: [
                { itemId: 1, quantity: 8000 }, // 金币8000
                { itemId: 2, quantity: 3000 }, // 粮食3000
                { itemId: 3, quantity: 5 }     // 回血药5个
            ]
        },
        {
            id: 10,
            enemyIds: [101, 102, 103, 101, 102],
            enemyLevels: [15, 15, 15, 15, 15],
            rewards: [
                { itemId: 1, quantity: 10000 }, // 金币10000
                { itemId: 2, quantity: 5000 },  // 粮食5000
                { itemId: 3, quantity: 10 }     // 回血药10个
            ]
        }
    ],
    
    // 从CSV格式解析关卡配置
    parseLevelFromCSV: function(csvLine) {
        const parts = csvLine.split(',');
        const id = parseInt(parts[0]);
        const enemyIds = parts[1].split('|').map(id => parseInt(id));
        const enemyLevels = parts[2].split('|').map(level => parseInt(level));
        
        // 解析奖励
        const rewards = [];
        for (let i = 3; i < parts.length; i++) {
            const reward = parts[i].split(':');
            if (reward.length === 2) {
                rewards.push({
                    itemId: parseInt(reward[0]),
                    quantity: parseInt(reward[1])
                });
            }
        }
        
        return {
            id: id,
            enemyIds: enemyIds,
            enemyLevels: enemyLevels,
            rewards: rewards
        };
    },
    
    // 道具配置
    items: [
        {
            id: 1,
            name: '金币',
            description: '游戏中的货币，可以用来购买物品',
            type: 1 // 1金币
        },
        {
            id: 2,
            name: '粮食',
            description: '用于探索和战斗的消耗品',
            type: 2 // 2粮食
        },
        {
            id: 3,
            name: '回血药',
            description: '恢复100点生命值',
            type: 3 // 3道具
        },
        {
            id: 4,
            name: '攻击力药水',
            description: '临时提升20%攻击力',
            type: 4 // 4道具
        }
    ],
    
    // 根据ID获取关卡配置
    getLevelById: function(id) {
        return this.levels.find(level => level.id === id);
    },
    
    // 根据ID获取道具配置
    getItemById: function(id) {
        return this.items.find(item => item.id === id);
    }
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LevelConfig;
}