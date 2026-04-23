// 事件配置文件

// 事件配置
const EventConfig = {
    // 事件类型
    eventTypes: {
        BATTLE: 1
    },
    
    // 事件配置
    events: [
        {
            id: 1,
            type: 1,
            param: 1,
            weight: 10
        },
        {
            id: 2,
            type: 1,
            param: 2,
            weight: 10
        },
        {
            id: 3,
            type: 1,
            param: 3,
            weight: 10
        },
        {
            id: 4,
            type: 1,
            param: 4,
            weight: 10
        },
        {
            id: 5,
            type: 1,
            param: 5,
            weight: 15
        },
        {
            id: 6,
            type: 1,
            param: 6,
            weight: 10
        },
        {
            id: 7,
            type: 1,
            param: 7,
            weight: 10
        },
        {
            id: 8,
            type: 1,
            param: 8,
            weight: 15
        },
        {
            id: 9,
            type: 1,
            param: 9,
            weight: 20
        },
        {
            id: 10,
            type: 1,
            param: 10,
            weight: 25
        }
    ],
    
    // 根据权重随机选择一个事件
    selectEventByWeight: function() {
        const totalWeight = this.events.reduce((sum, event) => sum + event.weight, 0);
        let random = Math.random() * totalWeight;
        
        for (const event of this.events) {
            random -= event.weight;
            if (random <= 0) {
                return event;
            }
        }
        
        return this.events[0]; // 默认返回第一个事件
    },
    
    // 触发事件
    triggerEvent: function() {
        // 50%的概率触发事件
        if (Math.random() < 0.5) {
            const event = this.selectEventByWeight();
            return event;
        }
        return null;
    }
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EventConfig;
}