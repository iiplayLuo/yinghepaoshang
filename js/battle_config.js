// ============================================
// 战斗配置文件 - 从CSV转换
// 包含：玩家、敌人、技能、关卡
// ============================================

// 玩家/伙伴配置
const PlayerConfig = {
    1: {id: 1, name: "少羽", attackRange: 3, initialHp: 1000, initialAttack: 100, initialDefense: 50, hpGrowth: 100, attackGrowth: 10, defenseGrowth: 5, initialCriticalRate: 0.1, initialDodgeRate: 0.05, moveSpeed: 3, normalSkillId: 1, face: "player1.png"},
    2: {id: 2, name: "荆紫", attackRange: 4, initialHp: 800, initialAttack: 120, initialDefense: 30, hpGrowth: 80, attackGrowth: 15, defenseGrowth: 3, initialCriticalRate: 0.15, initialDodgeRate: 0.08, moveSpeed: 3.5, normalSkillId: 3, face: "player2.png"}
};

// 敌人配置
const EnemyConfig = {
    101: {id: 101, name: "秦军士兵", level: 1, attackRange: 1, initialHp: 300, initialAttack: 50, initialDefense: 20, hpGrowth: 30, attackGrowth: 5, defenseGrowth: 2, initialCriticalRate: 0.05, initialDodgeRate: 0.03, moveSpeed: 2, normalSkillId: 2},
    102: {id: 102, name: "秦军弓箭手", level: 1, attackRange: 4, initialHp: 200, initialAttack: 80, initialDefense: 10, hpGrowth: 20, attackGrowth: 8, defenseGrowth: 1, initialCriticalRate: 0.08, initialDodgeRate: 0.05, moveSpeed: 2.5, normalSkillId: 3},
    103: {id: 103, name: "秦军将领", level: 2, attackRange: 2, initialHp: 800, initialAttack: 120, initialDefense: 60, hpGrowth: 80, attackGrowth: 12, defenseGrowth: 6, initialCriticalRate: 0.15, initialDodgeRate: 0.08, moveSpeed: 3.5, normalSkillId: 4}
};

// 技能配置
const SkillConfig = {
    1: {id: 1, name: "基础攻击", targetType: 1, targetParam: null, damagePercent: 1.0, cd: 1},
    2: {id: 2, name: "横扫千军", targetType: 2, targetParam: 2, damagePercent: 0.8, cd: 3},
    3: {id: 3, name: "精准射击", targetType: 1, targetParam: null, damagePercent: 1.2, cd: 2},
    4: {id: 4, name: "箭雨", targetType: 2, targetParam: 3, damagePercent: 0.6, cd: 4}
};

// 关卡配置（兼容两种访问方式）
const LevelConfig = {
    levels: [
        {id: 1, levelName: "初出茅庐", enemyIds: [101], enemyLevels: [1], rewards: [{itemId: 1, quantity: 1000}]},
        {id: 2, levelName: "小试牛刀", enemyIds: [101], enemyLevels: [2], rewards: [{itemId: 1, quantity: 2000}]},
        {id: 3, levelName: "远程威胁", enemyIds: [102], enemyLevels: [1], rewards: [{itemId: 2, quantity: 500}]},
        {id: 4, levelName: "协同作战", enemyIds: [101, 102], enemyLevels: [1, 1], rewards: [{itemId: 1, quantity: 1500}, {itemId: 2, quantity: 300}]},
        {id: 5, levelName: "生死挑战", enemyIds: [101, 102, 103], enemyLevels: [10, 10, 10], rewards: [{itemId: 1, quantity: 5000}, {itemId: 2, quantity: 2000}, {itemId: 3, quantity: 2}]},
        {id: 6, levelName: "人海战术", enemyIds: [101, 101, 102], enemyLevels: [2, 2, 2], rewards: [{itemId: 1, quantity: 3000}, {itemId: 2, quantity: 1000}]},
        {id: 7, levelName: "箭雨齐发", enemyIds: [102, 102, 102], enemyLevels: [3, 3, 3], rewards: [{itemId: 1, quantity: 4000}, {itemId: 2, quantity: 1500}]},
        {id: 8, levelName: "混编部队", enemyIds: [101, 102, 103, 101], enemyLevels: [5, 5, 5, 5], rewards: [{itemId: 1, quantity: 6000}, {itemId: 2, quantity: 2500}, {itemId: 3, quantity: 3}]},
        {id: 9, levelName: "将领对决", enemyIds: [103, 103], enemyLevels: [8, 8], rewards: [{itemId: 1, quantity: 8000}, {itemId: 2, quantity: 3000}, {itemId: 3, quantity: 5}]},
        {id: 10, levelName: "终极试炼", enemyIds: [101, 102, 103, 101, 102], enemyLevels: [15, 15, 15, 15, 15], rewards: [{itemId: 1, quantity: 10000}, {itemId: 2, quantity: 5000}, {itemId: 3, quantity: 10}]}
    ],
    
    items: [
        {id: 1, name: "金币", description: "游戏货币", type: 1},
        {id: 2, name: "粮食", description: "军队补给", type: 2},
        {id: 3, name: "回血药", description: "恢复生命值", type: 3},
        {id: 4, name: "攻击力药水", description: "临时提升攻击力", type: 4}
    ],
    
    getLevelById: function(id) {
        return this.levels.find(level => level.id === id);
    },
    
    getItemById: function(id) {
        return this.items.find(item => item.id === id);
    }
};

// 兼容旧代码
const companionConfig = PlayerConfig;
const BattleConfig = {
    players: PlayerConfig,
    enemies: EnemyConfig,
    skills: SkillConfig,
    levels: LevelConfig
};
