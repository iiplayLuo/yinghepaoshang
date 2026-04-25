// ============================================
// 商品配置文件 - 纯数据配置（战国时期商品）
// ============================================

const GoodsConfig = {
    goodsTypes: {
        1: '武器装备',
        2: '农产品',
        3: '原材料',
        4: '奢侈品',
        5: '消耗品',
        6: '特产'
    },

    goods: [
        {id: 1, type: 1, name: '青铜剑', icon: 'sword.png', description: '锋利的青铜制武器，战国时期军队常用兵器', buyPrice: 500, sellPrice: 250},
        {id: 2, type: 1, name: '戈', icon: 'dagger-axe.png', description: '长柄兵器，车战主要武器', buyPrice: 400, sellPrice: 200},
        {id: 3, type: 1, name: '皮甲', icon: 'armor.png', description: '兽皮制成的护甲，提供基础防御', buyPrice: 600, sellPrice: 300},
        {id: 4, type: 6, name: '铁制农具', icon: 'tool.png', description: '先进的农耕工具，提高生产效率', buyPrice: 300, sellPrice: 150},
        {id: 5, type: 2, name: '盐', icon: 'salt.png', description: '生活必需品，各国重要贸易品', buyPrice: 100, sellPrice: 50},
        {id: 6, type: 4, name: '丝绸', icon: 'silk.png', description: '珍贵的丝织品，贵族专属', buyPrice: 1000, sellPrice: 500},
        {id: 7, type: 5, name: '茶叶', icon: 'tea.png', description: '南方特产，中原稀有', buyPrice: 800, sellPrice: 400},
        {id: 8, type: 5, name: '药材', icon: 'herb.png', description: '珍贵草药，治疗伤病', buyPrice: 350, sellPrice: 175},
        {id: 9, type: 6, name: '马匹', icon: 'horse.png', description: '战马，战争重要物资', buyPrice: 2000, sellPrice: 1000},
        {id: 10, type: 2, name: '粮食', icon: 'rice.png', description: '粟米，军队补给必需品', buyPrice: 50, sellPrice: 25},
        {id: 11, type: 4, name: '青铜鼎', icon: 'ding.png', description: '礼器，象征身份地位', buyPrice: 5000, sellPrice: 2500},
        {id: 12, type: 6, name: '漆器', icon: 'lacquer.png', description: '精美漆器，楚国特产', buyPrice: 800, sellPrice: 400},
        {id: 13, type: 4, name: '玉石', icon: 'jade.png', description: '美玉，君子象征', buyPrice: 3000, sellPrice: 1500},
        {id: 14, type: 4, name: '珍珠', icon: 'pearl.png', description: '沿海特产，极为珍贵', buyPrice: 2500, sellPrice: 1250},
        {id: 15, type: 2, name: '牛羊', icon: 'cow.png', description: '牲畜，重要生产资料', buyPrice: 600, sellPrice: 300},
        {id: 16, type: 3, name: '木材', icon: 'wood.png', description: '建筑和造船材料', buyPrice: 200, sellPrice: 100},
        {id: 17, type: 3, name: '铁矿', icon: 'iron.png', description: '冶铁原料，战略物资', buyPrice: 400, sellPrice: 200},
        {id: 18, type: 3, name: '牛皮', icon: 'leather.png', description: '制甲原料', buyPrice: 250, sellPrice: 125},
        {id: 19, type: 3, name: '染料', icon: 'dye.png', description: '织物染色原料', buyPrice: 450, sellPrice: 225},
        {id: 20, type: 6, name: '竹简', icon: 'bamboo.png', description: '书写载体，记录典籍', buyPrice: 150, sellPrice: 75}
    ],
    getGoodsById: function(id) {
        return this.goods.find(g => g.id === id);
    },
    getTypeName: function(typeId) {
        return this.goodsTypes[typeId] || '其他';
    }
};
