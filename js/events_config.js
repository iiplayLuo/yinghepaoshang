// ============================================
// 事件配置文件 - 从CSV转换
// ============================================
const EventConfig = {
    eventTypes: {
        BATTLE: 1,
        GET_PARTNER: 2,
        NOTHING: 3
    },

    events: [
        {id: 1, type: 1, param: 1, weight: 10, unique: false, eventName: "遭遇秦军", eventDescription: "在野外遇到了秦军士兵", eventImage: "enemy1.png"},
        {id: 2, type: 1, param: 2, weight: 10, unique: false, eventName: "遭遇秦军", eventDescription: "在野外遇到了秦军士兵", eventImage: "enemy2.png"},
        {id: 3, type: 1, param: 3, weight: 10, unique: false, eventName: "遭遇秦军", eventDescription: "在野外遇到了秦军弓箭手", eventImage: "enemy3.png"},
        {id: 4, type: 1, param: 4, weight: 10, unique: false, eventName: "遭遇秦军", eventDescription: "在野外遇到了秦军弓箭手", eventImage: "enemy4.png"},
        {id: 5, type: 1, param: 5, weight: 15, unique: false, eventName: "遭遇秦军", eventDescription: "在野外遇到了秦军士兵", eventImage: "enemy5.png"},
        {id: 6, type: 1, param: 6, weight: 10, unique: false, eventName: "遭遇秦军", eventDescription: "在野外遇到了秦军士兵", eventImage: "enemy6.png"},
        {id: 7, type: 1, param: 7, weight: 10, unique: false, eventName: "遭遇秦军", eventDescription: "在野外遇到了秦军弓箭手", eventImage: "enemy7.png"},
        {id: 8, type: 1, param: 8, weight: 15, unique: false, eventName: "遭遇秦军", eventDescription: "在野外遇到了秦军弓箭手", eventImage: "enemy8.png"},
        {id: 9, type: 1, param: 9, weight: 20, unique: false, eventName: "遭遇秦军", eventDescription: "在野外遇到了秦军将领", eventImage: "enemy9.png"},
        {id: 10, type: 1, param: 10, weight: 25, unique: false, eventName: "遭遇秦军", eventDescription: "在野外遇到了秦军将领", eventImage: "enemy10.png"},
        {id: 11, type: 2, param: 1, weight: 500, unique: true, eventName: "获得伙伴", eventDescription: "在野外遇到了一位弓箭手，他愿意加入你的队伍", eventImage: "partner.png"},
        {id: 12, type: 3, param: 0, weight: 50, unique: false, eventName: "无事发生", eventDescription: "在野外探索了一番，什么也没有发生", eventImage: "nothing.png"}
    ],

    selectEventByWeight: function() {
        const triggeredUniqueEvents = JSON.parse(localStorage.getItem('triggeredUniqueEvents') || '[]');
        const availableEvents = this.events.filter(event => !event.unique || !triggeredUniqueEvents.includes(event.id));
        const totalWeight = availableEvents.reduce((sum, event) => sum + event.weight, 0);
        
        if (totalWeight === 0) return null;
        
        let random = Math.random() * totalWeight;
        for (const event of availableEvents) {
            random -= event.weight;
            if (random <= 0) {
                if (event.unique) {
                    triggeredUniqueEvents.push(event.id);
                    localStorage.setItem('triggeredUniqueEvents', JSON.stringify(triggeredUniqueEvents));
                }
                return event;
            }
        }
        return availableEvents[0];
    },

    triggerEvent: function() {
        if (Math.random() < 0.5) {
            return this.selectEventByWeight();
        }
        return null;
    },

    resetTriggeredEvents: function() {
        localStorage.removeItem('triggeredUniqueEvents');
    }
};
