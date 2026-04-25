// ============================================
// 地图数据配置 - 纯数据
// ============================================

const MapData = {
    cities: [
        {
            name: "咸阳", 
            x: 0, y: 0, 
            country: "秦", 
            size: "大型", 
            speciality: "铁器", 
            friendliness: 50, 
            isBirth: false,
            goods: [
                { goodsId: 1, stock: 10, limit: 5 },
                { goodsId: 2, stock: 15, limit: 8 },
                { goodsId: 3, stock: 20, limit: 10 },
                { goodsId: 17, stock: 50, limit: 30 },
                { goodsId: 18, stock: 30, limit: 20 }
            ]
        },
        {
            name: "始源村", 
            x: -30, y: 30, 
            country: "秦", 
            size: "小型", 
            speciality: "农产品", 
            friendliness: 80, 
            isBirth: true,
            goods: [
                { goodsId: 5, stock: 100, limit: 50 },
                { goodsId: 10, stock: 200, limit: 100 },
                { goodsId: 8, stock: 20, limit: 10 },
                { goodsId: 4, stock: 15, limit: 8 }
            ]
        }
    ],
    eventPoints: [
        {id: 1, x: -30, y: 0, eventId: 11},
        {id: 2, x: -30, y: 60, eventId: 5}
    ]
};
