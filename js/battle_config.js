// 战斗模块配置文件

// 战斗属性定义
const BattleConfig = {
    // 战斗属性字段
    attributes: {
        hp: '血量',
        attack: '攻击力',
        defense: '防御力',
        criticalRate: '暴击率',
        dodgeRate: '闪避率',
        criticalDamage: '暴击伤害' // 默认1.5
    },
    
    // 我方配置（从player_config.csv加载）
    player: {
        id: 1,
        name: '少羽',
        attackRange: 3, // 攻击距离
        initialHp: 1000,
        initialAttack: 100,
        initialDefense: 50,
        hpGrowth: 100, // 每级成长
        attackGrowth: 10, // 每级成长
        defenseGrowth: 5, // 每级成长
        initialCriticalRate: 0.1, // 10%
        initialDodgeRate: 0.05, // 5%
        normalSkillId: 1, // 普攻技能ID
        face: 'player1.png' // 头像
    },
    // 小伙伴配置
    partner: {
        id: 2,
        name: '荆紫',
        attackRange: 4, // 远程攻击
        initialHp: 800,
        initialAttack: 120,
        initialDefense: 30,
        hpGrowth: 80, // 每级成长
        attackGrowth: 15, // 每级成长
        defenseGrowth: 3, // 每级成长
        initialCriticalRate: 0.15, // 15%
        initialDodgeRate: 0.08, // 8%
        normalSkillId: 3, // 精准射击技能
        face: 'player2.png' // 头像
    },
    
    // 敌方配置（从enemies_config.csv加载）
    enemies: [
        {
            id: 101,
            name: '秦军士兵',
            level: 1,
            attackRange: 1,
            initialHp: 300,
            initialAttack: 50,
            initialDefense: 20,
            hpGrowth: 30,
            attackGrowth: 5,
            defenseGrowth: 2,
            initialCriticalRate: 0.05,
            initialDodgeRate: 0.03,
            normalSkillId: 2
        },
        {
            id: 102,
            name: '秦军弓箭手',
            level: 1,
            attackRange: 4,
            initialHp: 200,
            initialAttack: 80,
            initialDefense: 10,
            hpGrowth: 20,
            attackGrowth: 8,
            defenseGrowth: 1,
            initialCriticalRate: 0.08,
            initialDodgeRate: 0.05,
            normalSkillId: 3
        },
        {
            id: 103,
            name: '秦军将领',
            level: 2,
            attackRange: 2,
            initialHp: 800,
            initialAttack: 120,
            initialDefense: 60,
            hpGrowth: 80,
            attackGrowth: 12,
            defenseGrowth: 6,
            initialCriticalRate: 0.15,
            initialDodgeRate: 0.08,
            normalSkillId: 4
        }
    ],
    
    // 技能配置（从skills_config.csv加载）
    skills: [
        // 近战技能
        {
            id: 1,
            name: '基础攻击',
            targetType: 1, // 1最近的目标
            damagePercent: 1.0, // 100%基础伤害
            cd: 1 // 冷却时间（回合）
        },
        {
            id: 2,
            name: '横扫千军',
            targetType: 2, // 2前方所有目标
            targetParam: 2, // 距离参数
            damagePercent: 0.8, // 80%基础伤害
            cd: 3
        },
        
        // 远程技能
        {
            id: 3,
            name: '精准射击',
            targetType: 1,
            damagePercent: 1.2, // 120%基础伤害
            cd: 2
        },
        {
            id: 4,
            name: '箭雨',
            targetType: 2,
            targetParam: 3, // 距离参数
            damagePercent: 0.6, // 60%基础伤害
            cd: 4
        }
    ],
    
    // 加载CSV配置的函数（在实际环境中使用）
    loadFromCSV: function() {
        // 这里可以实现从CSV文件加载配置的逻辑
        // 由于浏览器环境限制，实际使用时需要手动更新上面的配置
        console.log('加载CSV配置');
    }
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BattleConfig;
}