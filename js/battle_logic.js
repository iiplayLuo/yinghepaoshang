// 战斗逻辑文件

// 战斗公式实现
const BattleLogic = {
    // 战斗属性
    attributes: {
        hp: '血量',
        attack: '攻击力',
        defense: '防御力',
        criticalRate: '暴击率',
        dodgeRate: '闪避率',
        criticalDamage: '暴击伤害' // 默认1.5
    },
    
    // 计算伤害
    calculateDamage: function(attacker, defender, skill) {
        // 1. 首先判断是否闪避
        if (this.checkDodge(defender)) {
            return {
                damage: 0,
                isDodge: true,
                isCritical: false
            };
        }
        
        // 2. 计算基础伤害 = (攻击力-防御力)最小值为1 * 技能倍率
        const baseDamage = Math.max(1, attacker.attack - defender.defense) * skill.damagePercent;
        
        // 3. 判断是否暴击
        const isCritical = this.checkCritical(attacker);
        const criticalDamage = isCritical ? baseDamage * 1.5 : baseDamage;
        
        return {
            damage: Math.round(criticalDamage),
            isDodge: false,
            isCritical: isCritical
        };
    },
    
    // 检查是否闪避
    checkDodge: function(defender) {
        return Math.random() < defender.dodgeRate;
    },
    
    // 检查是否暴击
    checkCritical: function(attacker) {
        return Math.random() < attacker.criticalRate;
    },
    
    // 执行战斗
    executeBattle: function(attacker, defender, skill) {
        const result = this.calculateDamage(attacker, defender, skill);
        
        if (!result.isDodge) {
            defender.hp = Math.max(0, defender.hp - result.damage);
        }
        
        return {
            ...result,
            attacker: attacker,
            defender: defender,
            skill: skill
        };
    },
    
    // 计算角色属性（根据等级）
    calculateAttributes: function(baseAttributes, level) {
        return {
            hp: baseAttributes.initialHp + (baseAttributes.hpGrowth * (level - 1)),
            attack: baseAttributes.initialAttack + (baseAttributes.attackGrowth * (level - 1)),
            defense: baseAttributes.initialDefense + (baseAttributes.defenseGrowth * (level - 1)),
            criticalRate: baseAttributes.initialCriticalRate,
            dodgeRate: baseAttributes.initialDodgeRate
        };
    },
    
    // 根据敌人配置计算实际战斗属性
    calculateEnemyAttributes: function(enemyConfig) {
        return this.calculateAttributes(enemyConfig, enemyConfig.level);
    }
};

// 导出战斗逻辑
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BattleLogic;
}