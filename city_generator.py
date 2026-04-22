import random

class City:
    def __init__(self, name, x, y, country, size, speciality, friendliness):
        self.name = name
        self.x = x
        self.y = y
        self.country = country
        self.size = size
        self.speciality = speciality
        self.friendliness = friendliness
    def to_dict(self):
        return {
            'name': self.name,
            'x': self.x,
            'y': self.y,
            'country': self.country,
            'size': self.size,
            'speciality': self.speciality,
            'friendliness': self.friendliness
        }

class CityGenerator:
    def __init__(self):
        self.countries = ['秦', '楚', '齐', '燕', '赵', '魏', '韩']
        self.specialities = {
            '秦': ['铁器', '马匹', '粮食'],
            '楚': ['木材', '药材', '丝绸'],
            '齐': ['海盐', '鱼获', '布匹'],
            '燕': ['皮革', '弓箭', '煤炭'],
            '赵': ['兵器', '马匹', '盐'],
            '魏': ['陶器', '粮食', '铁器'],
            '韩': ['铜矿', '丝绸', '药材']
        }
        self.city_names = [
            '咸阳', '长安', '洛阳', '临淄', '邯郸', '大梁', '新郑',
            '蓟城', '郢都', '曲阜', '陶丘', '宛城', '陈城', '寿春',
            '姑苏', '会稽', '琅琊', '即墨', '莒城', '任城', '薛城',
            '濮阳', '阳翟', '安邑', '平阳', '晋阳', '上党', '朝歌',
            '代郡', '云中', '九原', '渔阳', '上谷', '右北平', '辽西',
            '辽东', '长沙', '武陵', '零陵', '桂阳', '南海', '象郡',
            '巴郡', '蜀郡', '汉中', '南阳', '颍川', '陈留', '济阴',
            '山阳', '泰山', '东海', '北海', '东莱', '平原', '勃海',
            '彭城', '下邳', '庐江', '丹阳', '豫章', '会稽', '吴郡'
        ]
    def generate_cities(self, count=20):
        cities = []
        # 咸阳作为中心城市
        xianyang = City('咸阳', 100, 100, '秦', '大型', '铁器', 100)
        cities.append(xianyang)
        used_names = {'咸阳'}
        used_coords = set()
        used_coords.add((100, 100))
        for i in range(count - 1):
            # 生成合理的坐标
            max_attempts = 100
            attempt = 0
            while attempt < max_attempts:
                x = random.randint(0, 200)
                y = random.randint(0, 200)
                # 检查与其他城市的距离
                valid = True
                for (cx, cy) in used_coords:
                    distance = ((x - cx) ** 2 + (y - cy) ** 2) ** 0.5
                    if distance < 20:
                        valid = False
                        break
                if valid:
                    break
                attempt += 1
            if attempt >= max_attempts:
                print(f'无法为城市{i+1}找到合适的坐标，跳过')
                continue
            # 选择城市名称
            available_names = [name for name in self.city_names if name not in used_names]
            if not available_names:
                print('没有可用的城市名称，跳过')
                continue
            name = random.choice(available_names)
            used_names.add(name)
            # 分配国家
            country = random.choice(self.countries)
            # 确定城市规模
            distance_to_xianyang = ((x - 100) ** 2 + (y - 100) ** 2) ** 0.5
            if distance_to_xianyang < 40:
                size = '大型'
            elif distance_to_xianyang < 80:
                size = '中型'
            else:
                size = '小型'
            # 生成特产
            speciality = random.choice(self.specialities[country])
            # 初始友好度
            if country == '秦':
                friendliness = random.randint(80, 100)
            else:
                friendliness = random.randint(30, 70)
            city = City(name, x, y, country, size, speciality, friendliness)
            cities.append(city)
            used_coords.add((x, y))
        return cities
    def save_cities(self, cities, filename='cities.json'):
        import json
        cities_data = [city.to_dict() for city in cities]
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(cities_data, f, ensure_ascii=False, indent=2)

if __name__ == '__main__':
    import os
    print(f'当前工作目录: {os.getcwd()}')
    try:
        generator = CityGenerator()
        cities = generator.generate_cities(60)
        generator.save_cities(cities)
        print(f'生成了{len(cities)}个城市，并保存到cities.json')
        print(f'文件是否存在: {os.path.exists("cities.json")}')
        for city in cities[:10]:  # 打印前10个城市
            print(f'{city.name}: ({city.x}, {city.y}) - {city.country} - {city.size} - {city.speciality} - 友好度:{city.friendliness}')
    except Exception as e:
        print(f'错误: {e}')
        import traceback
        traceback.print_exc()