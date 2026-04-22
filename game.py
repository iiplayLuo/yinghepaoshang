import json
import random

class Game:
    def __init__(self):
        self.player = {
            'name': '探险小队',
            'location': '咸阳',
            'coordinates': {'x': 100, 'y': 100},
            'resources': {
                '粮食': 100,
                '金钱': 500,
                '装备': [],
                '队员': 3
            },
            'discovered_cities': ['咸阳']
        }
        # 加载城市数据
        with open('cities.json', 'r', encoding='utf-8') as f:
            self.cities = json.load(f)
        # 建筑物功能
        self.buildings = {
            '兵器库': self.visit_armory,
            '驿站': self.visit_post_station,
            '市集': self.visit_market,
            '酒馆': self.visit_tavern,
            '民居': self.visit_residence
        }
    def get_city_by_name(self, name):
        for city in self.cities:
            if city['name'] == name:
                return city
        return None
    def get_city_by_coordinates(self, x, y):
        for city in self.cities:
            if city['x'] == x and city['y'] == y:
                return city
        return None
    def calculate_distance(self, x1, y1, x2, y2):
        return ((x1 - x2) ** 2 + (y1 - y2) ** 2) ** 0.5
    def visit_armory(self):
        print('欢迎来到兵器库！')
        print('可购买的装备：')
        print('1. 青铜剑 - 100 金钱')
        print('2. 皮甲 - 80 金钱')
        print('3. 弓箭 - 120 金钱')
        choice = input('请选择要购买的装备（输入编号）：')
        if choice == '1':
            if self.player['resources']['金钱'] >= 100:
                self.player['resources']['金钱'] -= 100
                self.player['resources']['装备'].append('青铜剑')
                print('购买成功！')
            else:
                print('金钱不足！')
        elif choice == '2':
            if self.player['resources']['金钱'] >= 80:
                self.player['resources']['金钱'] -= 80
                self.player['resources']['装备'].append('皮甲')
                print('购买成功！')
            else:
                print('金钱不足！')
        elif choice == '3':
            if self.player['resources']['金钱'] >= 120:
                self.player['resources']['金钱'] -= 120
                self.player['resources']['装备'].append('弓箭')
                print('购买成功！')
            else:
                print('金钱不足！')
        else:
            print('无效选择！')
    def visit_post_station(self):
        print('欢迎来到驿站！')
        print('请选择探索方向和距离：')
        print('1. 东')
        print('2. 南')
        print('3. 西')
        print('4. 北')
        direction = input('请选择方向（输入编号）：')
        distance = int(input('请输入探索距离（1-50公里）：'))
        # 计算消耗的粮食
        food_cost = distance // 10 + 1
        if self.player['resources']['粮食'] < food_cost:
            print('粮食不足，无法探索！')
            return
        # 计算新坐标
        x, y = self.player['coordinates']['x'], self.player['coordinates']['y']
        if direction == '1':  # 东
            x += distance
        elif direction == '2':  # 南
            y += distance
        elif direction == '3':  # 西
            x -= distance
        elif direction == '4':  # 北
            y -= distance
        else:
            print('无效方向！')
            return
        # 确保坐标在合理范围内
        x = max(0, min(200, x))
        y = max(0, min(200, y))
        # 消耗粮食
        self.player['resources']['粮食'] -= food_cost
        # 检查是否发现新城市
        discovered_city = None
        for city in self.cities:
            city_x, city_y = city['x'], city['y']
            if self.calculate_distance(x, y, city_x, city_y) < 10:
                discovered_city = city
                break
        if discovered_city:
            if discovered_city['name'] not in self.player['discovered_cities']:
                self.player['discovered_cities'].append(discovered_city['name'])
                print(f'发现新城市：{discovered_city["name"]}！')
                print(f'所属国家：{discovered_city["country"]}')
                print(f'城市规模：{discovered_city["size"]}')
                print(f'特产：{discovered_city["speciality"]}')
                print(f'友好度：{discovered_city["friendliness"]}')
            else:
                print(f'回到了熟悉的城市：{discovered_city["name"]}')
            # 更新玩家位置
            self.player['location'] = discovered_city['name']
            self.player['coordinates'] = {'x': discovered_city['x'], 'y': discovered_city['y']}
        else:
            # 随机事件
            events = [
                '你发现了一处宝藏，获得了50金钱！',
                '你遭遇了野兽袭击，损失了一些粮食。',
                '你遇到了一位商人，购买了一些粮食。',
                '天气恶劣，你不得不提前返回。',
                '你发现了一处资源点，收集了一些物资。'
            ]
            event = random.choice(events)
            print(f'探索结果：{event}')
            if '获得了50金钱' in event:
                self.player['resources']['金钱'] += 50
            elif '损失了一些粮食' in event:
                self.player['resources']['粮食'] = max(0, self.player['resources']['粮食'] - 10)
            elif '购买了一些粮食' in event:
                self.player['resources']['粮食'] += 20
                self.player['resources']['金钱'] = max(0, self.player['resources']['金钱'] - 30)
            # 更新玩家位置
            self.player['coordinates'] = {'x': x, 'y': y}
            self.player['location'] = '野外'
        print(f'探索结束，剩余粮食：{self.player["resources"]["粮食"]}')
    def visit_market(self):
        print('欢迎来到市集！')
        print('可购买的物品：')
        print('1. 粮食 - 10 金钱/份')
        print('2. 药材 - 20 金钱/份')
        print('3. 木材 - 15 金钱/份')
        choice = input('请选择要购买的物品（输入编号）：')
        quantity = int(input('请输入购买数量：'))
        if choice == '1':
            cost = 10 * quantity
            if self.player['resources']['金钱'] >= cost:
                self.player['resources']['金钱'] -= cost
                self.player['resources']['粮食'] += quantity
                print(f'购买成功！获得{quantity}份粮食')
            else:
                print('金钱不足！')
        elif choice == '2':
            cost = 20 * quantity
            if self.player['resources']['金钱'] >= cost:
                self.player['resources']['金钱'] -= cost
                print(f'购买成功！获得{quantity}份药材')
            else:
                print('金钱不足！')
        elif choice == '3':
            cost = 15 * quantity
            if self.player['resources']['金钱'] >= cost:
                self.player['resources']['金钱'] -= cost
                print(f'购买成功！获得{quantity}份木材')
            else:
                print('金钱不足！')
        else:
            print('无效选择！')
    def visit_tavern(self):
        print('欢迎来到酒馆！')
        print('1. 招募队员（50金钱/人）')
        print('2. 获取情报')
        choice = input('请选择要进行的操作（输入编号）：')
        if choice == '1':
            if self.player['resources']['金钱'] >= 50:
                self.player['resources']['金钱'] -= 50
                self.player['resources']['队员'] += 1
                print('招募成功！')
            else:
                print('金钱不足！')
        elif choice == '2':
            print('酒馆老板告诉你：')
            tips = [
                '东方有一座富饶的城市，据说那里的特产很值钱。',
                '南方的山林中有野兽出没，探险时要小心。',
                '西方有一条商道，经常有商队经过。',
                '北方的城市正在招募士兵，可能会有战争。'
            ]
            tip = random.choice(tips)
            print(tip)
        else:
            print('无效选择！')
    def visit_residence(self):
        print('欢迎回到民居！')
        print('在这里休息可以恢复体力。')
        print('是否要休息？（y/n）')
        choice = input()
        if choice.lower() == 'y':
            print('你休息了一段时间，感觉精神焕发！')
    def show_status(self):
        print('\n=== 游戏状态 ===')
        print(f'当前位置：{self.player["location"]}')
        print(f'坐标：({self.player["coordinates"]["x"]}, {self.player["coordinates"]["y"]})')
        print('资源：')
        print(f'  粮食：{self.player["resources"]["粮食"]}')
        print(f'  金钱：{self.player["resources"]["金钱"]}')
        print(f'  装备：{self.player["resources"]["装备"]}')
        print(f'  队员：{self.player["resources"]["队员"]}')
        print(f'已发现城市：{len(self.player["discovered_cities"])}个')
        print('================\n')
    def run(self):
        print('=== 春秋战国探险游戏 ===')
        print('你是一个出身于秦国小镇的探险小队，准备开始你的探险之旅！')
        print('\n初始状态：')
        self.show_status()
        while True:
            print('请选择要前往的建筑物：')
            for i, building in enumerate(self.buildings.keys(), 1):
                print(f'{i}. {building}')
            print('0. 退出游戏')
            choice = input('请输入编号：')
            if choice == '0':
                print('游戏结束，再见！')
                break
            elif choice in ['1', '2', '3', '4', '5']:
                building_name = list(self.buildings.keys())[int(choice) - 1]
                self.buildings[building_name]()
                self.show_status()
            else:
                print('无效选择！')

if __name__ == '__main__':
    game = Game()
    game.run()