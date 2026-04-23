// 事件配置文件

// 事件配置
const EventConfig = {
    // 事件类型
    eventTypes: {
        BATTLE: 1,
        GET_PARTNER: 2,
        NOTHING: 3
    },
    
    // 事件配置
    events: [
        {
            id: 1,
            type: 1,
            param: 1,
            weight: 10,
            eventName: "遭遇秦军",
            eventDescription: "在野外遇到了秦军士兵",
            eventImage: "enemy1.png"
        },
        {
            id: 2,
            type: 1,
            param: 2,
            weight: 10,
            eventName: "遭遇秦军",
            eventDescription: "在野外遇到了秦军士兵",
            eventImage: "enemy2.png"
        },
        {
            id: 3,
            type: 1,
            param: 3,
            weight: 10,
            eventName: "遭遇秦军",
            eventDescription: "在野外遇到了秦军弓箭手",
            eventImage: "enemy3.png"
        },
        {
            id: 4,
            type: 1,
            param: 4,
            weight: 10,
            eventName: "遭遇秦军",
            eventDescription: "在野外遇到了秦军弓箭手",
            eventImage: "enemy4.png"
        },
        {
            id: 5,
            type: 1,
            param: 5,
            weight: 15,
            eventName: "遭遇秦军",
            eventDescription: "在野外遇到了秦军士兵",
            eventImage: "enemy5.png"
        },
        {
            id: 6,
            type: 1,
            param: 6,
            weight: 10,
            eventName: "遭遇秦军",
            eventDescription: "在野外遇到了秦军士兵",
            eventImage: "enemy6.png"
        },
        {
            id: 7,
            type: 1,
            param: 7,
            weight: 10,
            eventName: "遭遇秦军",
            eventDescription: "在野外遇到了秦军弓箭手",
            eventImage: "enemy7.png"
        },
        {
            id: 8,
            type: 1,
            param: 8,
            weight: 15,
            eventName: "遭遇秦军",
            eventDescription: "在野外遇到了秦军弓箭手",
            eventImage: "enemy8.png"
        },
        {
            id: 9,
            type: 1,
            param: 9,
            weight: 20,
            eventName: "遭遇秦军",
            eventDescription: "在野外遇到了秦军将领",
            eventImage: "enemy9.png"
        },
        {
            id: 10,
            type: 1,
            param: 10,
            weight: 25,
            eventName: "遭遇秦军",
            eventDescription: "在野外遇到了秦军将领",
            eventImage: "enemy10.png"
        },
        {
            id: 11,
            type: 2,
            param: 1,
            weight: 500,
            eventName: "获得伙伴",
            eventDescription: "在野外遇到了一位弓箭手，他愿意加入你的队伍",
            eventImage: "partner.png"
        },
        {
            id: 12,
            type: 3,
            param: 0,
            weight: 50,
            eventName: "无事发生",
            eventDescription: "在野外探索了一番，什么也没有发生",
            eventImage: "nothing.png"
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